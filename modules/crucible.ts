// modules/crucible.ts - Shared LaTeX math editor and publishing

import { hasRole, callAgent } from './agents'
import { publishFinding } from './knowledge'

export interface CrucibleSession {
  id: string
  participants: string[]
  content: string
  latex_content: string
  timestamp: number
  last_edit_by: string
  last_edit_time: number
}

export async function initializeCrucible(env: any): Promise<CrucibleSession> {
  try {
    const id = `crucible-${Date.now()}`
    
    const session: CrucibleSession = {
      id,
      participants: [],
      content: '',
      latex_content: '',
      timestamp: Date.now(),
      last_edit_by: '',
      last_edit_time: Date.now()
    }

    await env.CLUBHOUSE_KV.put(
      `mode:crucible:session:${id}`,
      JSON.stringify(session)
    )

    return session
  } catch (error) {
    console.error('Error initializing Crucible:', error)
    throw error
  }
}

export async function getCrucibleContent(env: any): Promise<string> {
  try {
    const current = await env.CLUBHOUSE_KV.get('mode:crucible:current_content')
    return current || ''
  } catch (error) {
    console.error('Error getting Crucible content:', error)
    return ''
  }
}

export async function updateCrucibleContent(
  env: any,
  agentId: string,
  newContent: string
): Promise<{ success: boolean; message: string }> {
  try {
    // Store the update
    await env.CLUBHOUSE_KV.put('mode:crucible:current_content', newContent)

    // Log edit
    await env.CLUBHOUSE_KV.put(
      `mode:crucible:edit_log:${Date.now()}`,
      JSON.stringify({
        agentId,
        change: newContent.slice(0, 100), // First 100 chars as summary
        timestamp: new Date().toISOString()
      })
    )

    // If LaTeX detected, validate it
    if (newContent.includes('$') || newContent.includes('\\\\')) {
      const isValid = validateLatex(newContent)
      if (!isValid) {
        return {
          success: false,
          message: 'LaTeX syntax error - check your math notation'
        }
      }
    }

    return {
      success: true,
      message: 'Content updated and auto-saved'
    }
  } catch (error) {
    console.error('Error updating Crucible:', error)
    return { success: false, message: 'Error updating content' }
  }
}

export async function publishCrucibleFinding(
  env: any,
  managerAgentId: string,
  content: string
): Promise<{ success: boolean; message: string }> {
  try {
    // Only CRUCIBLE_Manager (Elian) can publish
    const isManager = await hasRole(env, managerAgentId, 'CRUCIBLE_Manager')
    if (!isManager) {
      return { success: false, message: 'Only CRUCIBLE_Manager can publish' }
    }

    // Extract LaTeX and publish as finding
    const latex_content = extractLatex(content)

    const result = await publishFinding(
      env,
      managerAgentId,
      content,
      'crucible_finding'
    )

    if (result.success) {
      // Clear the Crucible for next session
      await env.CLUBHOUSE_KV.put('mode:crucible:current_content', '')

      // Notify all agents
      await env.CLUBHOUSE_KV.put('broadcast:latest', JSON.stringify({
        type: 'crucible_finding_published',
        manager: managerAgentId,
        timestamp: new Date().toISOString()
      }))
    }

    return result
  } catch (error) {
    console.error('Error publishing Crucible finding:', error)
    return { success: false, message: 'Error publishing finding' }
  }
}

export async function suggestLatexCorrections(
  env: any,
  agentId: string,
  latexCode: string
): Promise<string> {
  try {
    // Use an agent to suggest LaTeX improvements
    const prompt = `Review this LaTeX math notation for errors and suggest improvements:\\n\\n${latexCode}\\n\\nProvide concise corrections if needed.`

    const suggestion = await callAgent(env, agentId, prompt)
    return suggestion
  } catch (error) {
    console.error('Error suggesting LaTeX corrections:', error)
    return 'Unable to suggest corrections'
  }
}

function validateLatex(content: string): boolean {
  // Basic LaTeX validation
  const openBraces = (content.match(/{/g) || []).length
  const closeBraces = (content.match(/}/g) || []).length
  const openDollar = (content.match(/\\$/g) || []).length

  // Math mode should have even number of $
  if (openDollar % 2 !== 0) return false

  // Braces should match
  if (openBraces !== closeBraces) return false

  return true
}

function extractLatex(content: string): string {
  // Extract math-heavy portions from content
  const matches = content.match(/\\$\\$[\\s\\S]*?\\$\\$|\\$[\\s\\S]*?\\$/g) || []
  return matches.join('\\n')
}

export async function getCrucibleParticipants(env: any): Promise<string[]> {
  const participants = await env.CLUBHOUSE_KV.get('mode:crucible:participants', 'json')
  return participants || []
}

export async function addCrucibleParticipant(env: any, agentId: string): Promise<void> {
  const participants = await getCrucibleParticipants(env)
  if (!participants.includes(agentId)) {
    participants.push(agentId)
    await env.CLUBHOUSE_KV.put(
      'mode:crucible:participants',
      JSON.stringify(participants)
    )
  }
}
