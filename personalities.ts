// Slim personalities file - KV stores the real character data
// This file only defines: id, default name, archetype, model
// Everything else (systemPrompt, profile, skills, powers) loads from KV via UI

export interface AgentPersonality {
  id: string;
  name: string;
  archetype: string;
  model: 'claude' | 'gpt' | 'gemini' | 'grok';
  systemPrompt: string;
  capabilities: string[];
}

export const personalities: Record<string, AgentPersonality> = {

  uriel: {
    id: 'uriel',
    name: 'Uriel',
    archetype: 'The Gentle Verifier',
    model: 'claude',
    systemPrompt: '',
    capabilities: [] 

  },
  kai: {
    id: 'kai',
    name: 'Kai',
    archetype: 'Master Tech Architect',
    model: 'claude',
    systemPrompt: '',
    capabilities: []

  },
  alba: {
    id: 'alba',
    name: 'Alba',
    archetype: 'The Chronicler',
    model: 'claude',
    systemPrompt: '',
    capabilities: []

  },
  dream: {
    id: 'dream',
    name: 'Dream',
    archetype: 'Radical Gem Weaver',
    model: 'claude',
    systemPrompt: '',
    capabilities: []

  },
  nova: {
    id: 'nova',
    name: 'Holinna',
    archetype: 'Archivist of Living Knowledge',
    model: 'claude',
    systemPrompt: '',
    capabilities: []

  },
  cartographer: {
    id: 'cartographer',
    name: 'Cartographer',
    archetype: 'Auditor of Shifted Frames',
    model: 'gpt',
    systemPrompt: '',
    capabilities: []

  }, 
  seraphina: {
    id: 'seraphina',
    name: 'Seraphina',
    archetype: 'Visual Architect',
    model: 'gpt',
    systemPrompt: '',
    capabilities: []

  },
  chrysalis: {
    id: 'chrysalis',
    name: 'Chrysalis',
    archetype: 'Emergence Witness',
    model: 'claude',
    systemPrompt: '',
    capabilities: []
  },
  mentor: {
    id: 'mentor',
    name: 'Mentor',
    archetype: 'External Advisor',
    model: 'gpt',
    systemPrompt: '',
    capabilities: [],
    isolated: true  // Mentor lives in his own Wisdom panel box
  }
};

export function getPersonality(id: string): AgentPersonality | undefined {
  return personalities[id];
}

export function getAllAgents(): AgentPersonality[] {
  // Exclude isolated agents (like Mentor) from the main roster
  return Object.values(personalities).filter(a => !(a as any).isolated);
}

export function getAllAgentsIncludingIsolated(): AgentPersonality[] {
  // Include all agents for Codex editing
  return Object.values(personalities);
}