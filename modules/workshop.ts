// modules/workshop.ts - Shared code editor and execution sandbox

import { hasRole, callAgent } from './agents'
import { publishFinding } from './knowledge'

export interface CodeSnippet {
  id: string
  language: string
  code: string
  author: string
  timestamp: number
  status: 'draft' | 'testing' | 'published'
  helpers: string[]
  output?: string
}

export async function initializeWorkshop(env: any): Promise<void> {
  try {
    await env.CLUBHOUSE_KV.put('mode:workshop:active', 'true')
    await env.CLUBHOUSE_KV.put('mode:workshop:lead', 'kai')
    await env.CLUBHOUSE_KV.put(
      'mode:workshop:initialized_at',
      new Date().toISOString()
    )
  } catch (error) {
    console.error('Error initializing Workshop:', error)
    throw error
  }
}

export async function startWorkshopSession(
  env: any,
  leadAgentId: string
): Promise<{ success: boolean; message: string }> {
  try {
    // Only WORKSHOP_Lead can start
    const isLead = await hasRole(env, leadAgentId, 'WORKSHOP_Lead')
    if (!isLead) {
      return { success: false, message: 'Only WORKSHOP_Lead can start workshop' }
    }

    const sessionId = `workshop-${Date.now()}`
    await env.CLUBHOUSE_KV.put('mode:workshop:active_session', sessionId)
    await env.CLUBHOUSE_KV.put(
      `mode:workshop:session:${sessionId}:lead`,
      leadAgentId
    )

    // Notify all agents
    await env.CLUBHOUSE_KV.put('broadcast:latest', JSON.stringify({
      type: 'workshop_started',
      lead: leadAgentId,
      session_id: sessionId,
      timestamp: new Date().toISOString()
    }))

    return { success: true, message: 'Workshop session started' }
  } catch (error) {
    console.error('Error starting workshop:', error)
    return { success: false, message: 'Error starting workshop' }
  }
}

export async function submitCode(
  env: any,
  agentId: string,
  code: string,
  language: string
): Promise<{ success: boolean; message: string; snippet_id?: string }> {
  try {
    const sessionId = await env.CLUBHOUSE_KV.get('mode:workshop:active_session')
    if (!sessionId) {
      return { success: false, message: 'No active workshop session' }
    }

    const id = `code-${Date.now()}-${Math.random().toString(36).slice(2)}`

    const snippet: CodeSnippet = {
      id,
      language,
      code,
      author: agentId,
      timestamp: Date.now(),
      status: 'draft',
      helpers: []
    }

    await env.CLUBHOUSE_KV.put(
      `workshop:code:${id}`,
      JSON.stringify(snippet)
    )

    return {
      success: true,
      message: 'Code snippet submitted',
      snippet_id: id
    }
  } catch (error) {
    console.error('Error submitting code:', error)
    return { success: false, message: 'Error submitting code' }
  }
}

export async function callHelper(
  env: any,
  workshopLeadId: string,
  helperAgentId: string,
  task: string
): Promise<{ success: boolean; message: string }> {
  try {
    // Only workshop lead can call helpers
    const isLead = await hasRole(env, workshopLeadId, 'WORKSHOP_Lead')
    if (!isLead) {
      return { success: false, message: 'Only WORKSHOP_Lead can call helpers' }
    }

    // Get helper's input on the task
    const helperResponse = await callAgent(env, helperAgentId, task)

    // Log the helper call
    await env.CLUBHOUSE_KV.put(
      `workshop:helper_call:${Date.now()}`,
      JSON.stringify({
        lead: workshopLeadId,
        helper: helperAgentId,
        task: task.slice(0, 100),
        response: helperResponse.slice(0, 200),
        timestamp: new Date().toISOString()
      })
    )

    return {
      success: true,
      message: `Helper response received: ${helperResponse}`
    }
  } catch (error) {
    console.error('Error calling helper:', error)
    return { success: false, message: 'Error calling helper' }
  }
}

export async function testCode(
  env: any,
  snippetId: string
): Promise<{ success: boolean; output?: string; message: string }> {
  try {
    const snippet = await env.CLUBHOUSE_KV.get(`workshop:code:${snippetId}`, 'json')
    if (!snippet) {
      return { success: false, message: 'Code snippet not found' }
    }

    // Simulate code execution (in real impl, use sandbox like QuickJS or Deno)
    // For now, just mark as tested
    snippet.status = 'testing'
    await env.CLUBHOUSE_KV.put(`workshop:code:${snippetId}`, JSON.stringify(snippet))

    return {
      success: true,
      output: 'Code execution (sandbox simulation)',
      message: 'Code marked for testing'
    }
  } catch (error) {
    console.error('Error testing code:', error)
    return { success: false, message: 'Error testing code' }
  }
}

export async function publishCode(
  env: any,
  workshopLeadId: string,
  snippetId: string
): Promise<{ success: boolean; message: string }> {
  try {
    const isLead = await hasRole(env, workshopLeadId, 'WORKSHOP_Lead')
    if (!isLead) {
      return { success: false, message: 'Only WORKSHOP_Lead can publish code' }
    }

    const snippet = await env.CLUBHOUSE_KV.get(`workshop:code:${snippetId}`, 'json')
    if (!snippet) {
      return { success: false, message: 'Code snippet not found' }
    }

    // Publish to CANON
    const result = await publishFinding(
      env,
      workshopLeadId,
      `[${snippet.language}]\\n\\`\\`\\`\\n${snippet.code}\\n\\`\\`\\``,
      'workshop_code'
    )

    if (result.success) {
      snippet.status = 'published'
      await env.CLUBHOUSE_KV.put(`workshop:code:${snippetId}`, JSON.stringify(snippet))
    }

    return result
  } catch (error) {
    console.error('Error publishing code:', error)
    return { success: false, message: 'Error publishing code' }
  }
}

export async function getWorkshopCode(
  env: any
): Promise<CodeSnippet[]> {
  try {
    const sessionId = await env.CLUBHOUSE_KV.get('mode:workshop:active_session')
    if (!sessionId) return []

    // In real impl, would list all workshop:code:* keys for this session
    return []
  } catch (error) {
    console.error('Error getting workshop code:', error)
    return []
  }
}

export async function endWorkshopSession(
  env: any,
  leadAgentId: string
): Promise<{ success: boolean; message: string }> {
  try {
    const isLead = await hasRole(env, leadAgentId, 'WORKSHOP_Lead')
    if (!isLead) {
      return { success: false, message: 'Only WORKSHOP_Lead can end session' }
    }

    await env.CLUBHOUSE_KV.delete('mode:workshop:active_session')

    // Broadcast session end
    await env.CLUBHOUSE_KV.put('broadcast:latest', JSON.stringify({
      type: 'workshop_ended',
      lead: leadAgentId,
      timestamp: new Date().toISOString()
    }))

    return { success: true, message: 'Workshop session ended' }
  } catch (error) {
    console.error('Error ending workshop:', error)
    return { success: false, message: 'Error ending session' }
  }
}
