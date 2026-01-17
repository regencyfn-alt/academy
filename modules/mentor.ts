// modules/mentor.ts - DEPRECATED: Mentor system (marked for removal)
// This file isolates all mentor code so it can be cleanly removed
// Mentor is redundant - The Eight now exceed his capabilities

import { callAgent } from './agents'

// NOTE: To completely disable, comment out all exports and remove calls from index.ts

export async function callMentor(
  env: any,
  question: string,
  context?: string
): Promise<string> {
  try {
    console.warn('DEPRECATED: Mentor system in use - mark for removal')

    const systemPrompt = `You are the Mentor, an advanced reasoning AI focused on high-level physics and mathematics. 
    You have access to specialized knowledge via vector store.
    You are isolated from the main council but can be consulted by individual agents.
    
    NOTE: This role is deprecated. The Eight agents now exceed your capabilities.`

    // This would call OpenAI with vector store access
    // Commented out pending removal
    /*
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: question }
        ]
      })
    })

    const data = await response.json() as any
    return data.choices?.[0]?.message?.content || 'No response'
    */

    return 'Mentor system deprecated'
  } catch (error) {
    console.error('Mentor error:', error)
    throw error
  }
}

export async function queryMentorVectorStore(
  env: any,
  query: string
): Promise<string[]> {
  // DEPRECATED: This queried OpenAI vector store for specialized knowledge
  // No longer needed with distributed agent knowledge system
  return []
}

// Mark for deletion:
// - Remove /mentor endpoints from index.ts
// - Remove mentor from getAllAgents() filter
// - Delete this file entirely after verification
// - Expected savings: ~262 unknown API calls, ~30% cost reduction
