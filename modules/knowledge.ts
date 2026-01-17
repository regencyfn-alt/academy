// modules/knowledge.ts - CANON system for findings and ideas

import { hasRole } from './agents'

export interface Finding {
  id: string
  content: string
  author: string
  timestamp: number
  type: 'crucible_finding' | 'workshop_code' | 'canvas_entry'
  status: 'draft' | 'pending' | 'published'
  latex_content?: string
}

export interface Idea {
  id: string
  content: string
  author: string
  timestamp: number
  status: 'pending' | 'approved' | 'rejected'
  reviewer?: string
}

export async function publishFinding(
  env: any,
  agentId: string,
  content: string,
  type: 'crucible_finding' | 'workshop_code' | 'canvas_entry' = 'crucible_finding'
): Promise<{ success: boolean; message: string }> {
  try {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`
    const isCanonickeeper = await hasRole(env, agentId, 'CANON_Keeper')

    const finding: Finding = {
      id,
      content,
      author: agentId,
      timestamp: Date.now(),
      type,
      status: 'draft'
    }

    // If private, route to CANON_Keeper (Holinnia)
    if (!isCanonickeeper) {
      finding.status = 'pending'
      await env.CLUBHOUSE_KV.put(
        `knowledge:pending:${id}`,
        JSON.stringify(finding)
      )

      // Notify Holinnia
      await notifyAgent(env, 'holinnia', {
        type: 'finding_pending_review',
        finding_id: id,
        author: agentId
      })

      return {
        success: true,
        message: `Finding submitted for Holinnia's review`
      }
    } else {
      // Direct to CANON
      finding.status = 'published'
      await env.CLUBHOUSE_KV.put(
        `knowledge:findings:${id}`,
        JSON.stringify(finding)
      )

      // Broadcast to all agents
      await broadcastFinding(env, finding)

      return {
        success: true,
        message: `Finding published to CANON`
      }
    }
  } catch (error) {
    console.error('Error publishing finding:', error)
    return { success: false, message: 'Error publishing finding' }
  }
}

export async function approveFinding(
  env: any,
  canonKeeperId: string,
  findingId: string,
  approved: boolean
): Promise<void> {
  try {
    // Verify canon keeper
    const isCanonKeeper = await hasRole(env, canonKeeperId, 'CANON_Keeper')
    if (!isCanonKeeper) throw new Error('Not authorized')

    const pending = await env.CLUBHOUSE_KV.get(`knowledge:pending:${findingId}`, 'json')
    if (!pending) throw new Error('Finding not found')

    if (approved) {
      pending.status = 'published'
      await env.CLUBHOUSE_KV.put(
        `knowledge:findings:${findingId}`,
        JSON.stringify(pending)
      )
      await env.CLUBHOUSE_KV.delete(`knowledge:pending:${findingId}`)
      await broadcastFinding(env, pending)
    } else {
      await env.CLUBHOUSE_KV.delete(`knowledge:pending:${findingId}`)
    }

    // Log the decision
    await logAudit(env, {
      action: 'finding_reviewed',
      by: canonKeeperId,
      finding_id: findingId,
      approved
    })
  } catch (error) {
    console.error('Error approving finding:', error)
    throw error
  }
}

export async function submitIdea(
  env: any,
  agentId: string,
  content: string
): Promise<{ success: boolean; message: string }> {
  try {
    const id = `idea-${Date.now()}-${Math.random().toString(36).slice(2)}`

    const idea: Idea = {
      id,
      content,
      author: agentId,
      timestamp: Date.now(),
      status: 'pending'
    }

    await env.CLUBHOUSE_KV.put(
      `knowledge:ideas:${id}`,
      JSON.stringify(idea)
    )

    return {
      success: true,
      message: `Idea submitted to CANON ideas board`
    }
  } catch (error) {
    console.error('Error submitting idea:', error)
    return { success: false, message: 'Error submitting idea' }
  }
}

export async function getFindings(env: any): Promise<Finding[]> {
  try {
    const findings: Finding[] = []
    // In real implementation, would list all knowledge:findings:* keys
    return findings
  } catch (error) {
    console.error('Error fetching findings:', error)
    return []
  }
}

export async function getIdeas(env: any): Promise<Idea[]> {
  try {
    const ideas: Idea[] = []
    // In real implementation, would list all knowledge:ideas:* keys
    return ideas
  } catch (error) {
    console.error('Error fetching ideas:', error)
    return []
  }
}

async function broadcastFinding(env: any, finding: Finding): Promise<void> {
  // Notify all agents of new finding
  await env.CLUBHOUSE_KV.put('broadcast:latest_finding', JSON.stringify({
    type: 'new_finding',
    finding_id: finding.id,
    author: finding.author,
    timestamp: new Date().toISOString()
  }))
}

async function notifyAgent(env: any, agentId: string, notification: any): Promise<void> {
  const notificationId = `notif-${Date.now()}`
  await env.CLUBHOUSE_KV.put(
    `agent:${agentId}:notifications:${notificationId}`,
    JSON.stringify(notification)
  )
}

async function logAudit(env: any, action: any): Promise<void> {
  await env.CLUBHOUSE_KV.put(
    `knowledge:audit_log:${Date.now()}`,
    JSON.stringify({
      ...action,
      timestamp: new Date().toISOString()
    })
  )
}
