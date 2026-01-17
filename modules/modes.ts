// modules/modes.ts - Council and mode management

import { hasRole, callAgent } from './agents'

export interface ModeState {
  mode: 'Sanctum' | 'Alcove' | 'Crucible' | 'Workshop' | 'Debate' | 'Focus'
  participants: string[]
  timestamp: number
}

export async function enterMode(
  env: any,
  agentId: string,
  mode: string,
  selectedParticipants?: string[]
): Promise<boolean> {
  try {
    // Validate participant has permission
    const isAllowed = await validateParticipant(env, agentId, mode)
    if (!isAllowed) return false

    // Update mode state
    const modeState: ModeState = {
      mode: mode as any,
      participants: selectedParticipants || [],
      timestamp: Date.now()
    }

    await env.CLUBHOUSE_KV.put(`campfire:mode:current`, JSON.stringify(modeState))

    // Broadcast to all agents
    await broadcastModeChange(env, mode, agentId)

    return true
  } catch (error) {
    console.error(`Error entering mode ${mode}:`, error)
    return false
  }
}

export async function validateParticipant(
  env: any,
  agentId: string,
  mode: string
): Promise<boolean> {
  // Workshop requires WORKSHOP_Lead role
  if (mode === 'Workshop') {
    return await hasRole(env, agentId, 'WORKSHOP_Lead')
  }

  // Crucible requires permission (managed by CRUCIBLE_Manager)
  if (mode === 'Crucible') {
    return await hasRole(env, agentId, 'CRUCIBLE_Manager') || 
           await hasRole(env, agentId, 'participant')
  }

  // Sanctum and Alcove are open to all
  return true
}

export async function handleCampfireSpeak(
  env: any,
  agentId: string,
  message: string
): Promise<string> {
  try {
    // Agent speaks in council
    const response = await callAgent(env, agentId, message)

    // Log the message
    await env.CLUBHOUSE_KV.put(
      `campfire:log:${Date.now()}`,
      JSON.stringify({
        agentId,
        message,
        response,
        timestamp: new Date().toISOString()
      })
    )

    // Update campfire state
    const current = await env.CLUBHOUSE_KV.get('campfire:current', 'json') || {}
    current.last_speaker = agentId
    current.last_message_time = Date.now()
    await env.CLUBHOUSE_KV.put('campfire:current', JSON.stringify(current))

    return response
  } catch (error) {
    console.error(`Error in campfire speak:`, error)
    throw error
  }
}

export async function handleCrucibleSubmit(
  env: any,
  agentId: string,
  content: string,
  isPrivate: boolean
): Promise<void> {
  try {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`
    
    if (isPrivate) {
      // Route to CRUCIBLE_Manager for review
      await env.CLUBHOUSE_KV.put(
        `knowledge:pending:crucible:${id}`,
        JSON.stringify({
          agentId,
          content,
          timestamp: Date.now(),
          type: 'crucible_finding'
        })
      )
    } else {
      // Direct to CANON
      await env.CLUBHOUSE_KV.put(
        `knowledge:findings:${id}`,
        JSON.stringify({
          agentId,
          content,
          timestamp: Date.now(),
          type: 'crucible_finding',
          status: 'published'
        })
      )
    }
  } catch (error) {
    console.error(`Error submitting to Crucible:`, error)
    throw error
  }
}

export async function handleWorkshopCode(
  env: any,
  agentId: string,
  code: string,
  language: string
): Promise<void> {
  try {
    // Verify Kai or assigned helper
    const isWorkshopLead = await hasRole(env, agentId, 'WORKSHOP_Lead')
    if (!isWorkshopLead) throw new Error('Not authorized for Workshop')

    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`
    
    await env.CLUBHOUSE_KV.put(
      `workshop:code:${id}`,
      JSON.stringify({
        agentId,
        code,
        language,
        timestamp: Date.now(),
        status: 'draft'
      })
    )
  } catch (error) {
    console.error(`Error in workshop:`, error)
    throw error
  }
}

async function broadcastModeChange(env: any, mode: string, agentId: string): Promise<void> {
  // Notify all agents of mode change
  const broadcast = {
    type: 'mode_change',
    mode,
    initiated_by: agentId,
    timestamp: new Date().toISOString()
  }

  await env.CLUBHOUSE_KV.put('broadcast:latest', JSON.stringify(broadcast))
}

export async function selectParticipants(
  env: any,
  mode: string,
  selectedIds: string[]
): Promise<void> {
  await env.CLUBHOUSE_KV.put(
    `mode:${mode}:participants`,
    JSON.stringify(selectedIds)
  )
}

export async function getParticipants(env: any, mode: string): Promise<string[]> {
  const participants = await env.CLUBHOUSE_KV.get(`mode:${mode}:participants`, 'json')
  return participants || []
}
