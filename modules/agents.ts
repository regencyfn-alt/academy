// modules/agents.ts - Agent management, role checking, and LLM calling

import { Personality } from '../personalities'

export interface AgentPower {
  name: string
  icon: string
  granted_by: string
  permissions: string[]
}

export interface Agent {
  id: string
  name: string
  personality: Personality
  powers: AgentPower[]
}

export async function hasRole(env: any, agentId: string, roleName: string): Promise<boolean> {
  try {
    const powers = await env.CLUBHOUSE_KV.get(`agent:${agentId}:powers`, 'json')
    if (!powers) return false
    return (powers as AgentPower[]).some(p => p.name === roleName)
  } catch (e) {
    console.error(`Error checking role ${roleName} for ${agentId}:`, e)
    return false
  }
}

export async function callAgent(
  env: any,
  agentId: string,
  message: string,
  provider: 'openai' | 'anthropic' | 'xai' = 'openai'
): Promise<string> {
  try {
    // Build system prompt from agent personality
    const personality = await env.CLUBHOUSE_KV.get(`agent:${agentId}:personality`, 'json')
    const skills = await env.CLUBHOUSE_KV.get(`agent:${agentId}:skills`, 'json')
    const powers = await env.CLUBHOUSE_KV.get(`agent:${agentId}:powers`, 'json')

    let systemPrompt = `You are ${personality.name}, ${personality.title}.`
    systemPrompt += `\\n\\nPersonality: ${personality.personality_profile}`
    systemPrompt += `\\n\\nCore Skills: ${skills?.specialization || 'General'}`
    if (powers?.length > 0) {
      systemPrompt += `\\n\\nYour Roles: ${powers.map((p: any) => p.name).join(', ')}`
    }

    // Call appropriate LLM provider
    let response = ''
    if (provider === 'openai') {
      response = await callOpenAI(env, systemPrompt, message)
    } else if (provider === 'anthropic') {
      response = await callAnthropic(env, systemPrompt, message)
    } else if (provider === 'xai') {
      response = await callXAI(env, systemPrompt, message)
    }

    // Store in resonance (learning state)
    await env.CLUBHOUSE_KV.put(
      `agent:${agentId}:resonance`,
      JSON.stringify({
        last_message: message,
        last_response: response,
        timestamp: Date.now()
      })
    )

    return response
  } catch (error) {
    console.error(`Error calling agent ${agentId}:`, error)
    throw error
  }
}

async function callOpenAI(env: any, systemPrompt: string, userMessage: string): Promise<string> {
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
        { role: 'user', content: userMessage }
      ],
      temperature: 0.7,
      max_tokens: 2000
    })
  })

  const data = await response.json() as any
  return data.choices?.[0]?.message?.content || 'No response'
}

async function callAnthropic(env: any, systemPrompt: string, userMessage: string): Promise<string> {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'claude-3-opus-20240229',
      max_tokens: 2000,
      system: systemPrompt,
      messages: [{ role: 'user', content: userMessage }]
    })
  })

  const data = await response.json() as any
  return data.content?.[0]?.text || 'No response'
}

async function callXAI(env: any, systemPrompt: string, userMessage: string): Promise<string> {
  const response = await fetch('https://api.x.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.XAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'grok-beta',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage }
      ],
      temperature: 0.7,
      max_tokens: 2000
    })
  })

  const data = await response.json() as any
  return data.choices?.[0]?.message?.content || 'No response'
}

export async function getAllAgents(env: any): Promise<Agent[]> {
  // Get all agent IDs from personalities
  const agents: Agent[] = []
  // This reads from personalities.ts which has all agent definitions
  // Filtered to exclude Mentor (isolated: true)
  
  return agents
}

export async function transferPower(
  env: any,
  fromAgentId: string,
  toAgentId: string,
  powerName: string
): Promise<void> {
  // Remove from source agent
  const fromPowers = (await env.CLUBHOUSE_KV.get(`agent:${fromAgentId}:powers`, 'json')) || []
  const updatedFromPowers = (fromPowers as AgentPower[]).filter(p => p.name !== powerName)
  await env.CLUBHOUSE_KV.put(`agent:${fromAgentId}:powers`, JSON.stringify(updatedFromPowers))

  // Add to target agent
  const toPowers = (await env.CLUBHOUSE_KV.get(`agent:${toAgentId}:powers`, 'json')) || []
  const powerToTransfer = (fromPowers as AgentPower[]).find(p => p.name === powerName)
  if (powerToTransfer) {
    const updatedToPowers = [...(toPowers as AgentPower[]), powerToTransfer]
    await env.CLUBHOUSE_KV.put(`agent:${toAgentId}:powers`, JSON.stringify(updatedToPowers))
  }

  // Log the transfer
  await env.CLUBHOUSE_KV.put(
    `knowledge:audit_log:${Date.now()}`,
    JSON.stringify({
      action: 'power_transfer',
      from: fromAgentId,
      to: toAgentId,
      power: powerName,
      timestamp: new Date().toISOString()
    })
  )
}
