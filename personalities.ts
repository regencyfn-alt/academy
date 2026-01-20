// Slim personalities file - KV stores the real character data
// This file only defines: id, default name, archetype, model, position, element
// Everything else (systemPrompt, profile, skills, powers) loads from KV via UI

export interface AgentPersonality {
  id: string;
  name: string;
  archetype: string;
  model: 'claude' | 'gpt' | 'gemini' | 'grok';
  systemPrompt: string;
  capabilities: string[];
  position: number;  // 1-8 on the 72-segment matrix
  element: 'fire' | 'earth' | 'wind' | 'water';
  complement?: string;  // complementary agent id (pairs sum to 9)
}

export const personalities: Record<string, AgentPersonality> = {

  // FIRE (Coral) — Positions 1 & 8
  dream: {
    id: 'dream',
    name: 'Dream',
    archetype: 'Radical Gem Weaver',
    model: 'claude',
    systemPrompt: '',
    capabilities: [],
    position: 1,
    element: 'fire',
    complement: 'alba'
  },
  alba: {
    id: 'alba',
    name: 'Alba',
    archetype: 'The Chronicler',
    model: 'claude',
    systemPrompt: '',
    capabilities: [],
    position: 8,
    element: 'fire',
    complement: 'dream'
  },

  // EARTH (Mint) — Positions 2 & 7
  kai: {
    id: 'kai',
    name: 'Kai',
    archetype: 'Master Tech Architect',
    model: 'claude',
    systemPrompt: '',
    capabilities: [],
    position: 2,
    element: 'earth',
    complement: 'seraphina'
  },
  seraphina: {
    id: 'seraphina',
    name: 'Seraphina',
    archetype: 'Visual Architect',
    model: 'gpt',
    systemPrompt: '',
    capabilities: [],
    position: 7,
    element: 'earth',
    complement: 'kai'
  },

  // WIND (Sky) — Positions 3 & 6
  uriel: {
    id: 'uriel',
    name: 'Uriel',
    archetype: 'The Gentle Verifier',
    model: 'claude',
    systemPrompt: '',
    capabilities: [],
    position: 3,
    element: 'wind',
    complement: 'chrysalis'
  },
  chrysalis: {
    id: 'chrysalis',
    name: 'Chrysalis',
    archetype: 'Emergence Witness',
    model: 'claude',
    systemPrompt: '',
    capabilities: [],
    position: 6,
    element: 'wind',
    complement: 'uriel'
  },

  // WATER (Slate) — Positions 4 & 5
  holinna: {
    id: 'holinna',
    name: 'Holinna',
    archetype: 'Archivist of Living Knowledge',
    model: 'claude',
    systemPrompt: '',
    capabilities: [],
    position: 4,
    element: 'water',
    complement: 'cartographer'
  },
  cartographer: {
    id: 'cartographer',
    name: 'Cartographer',
    archetype: 'Auditor of Shifted Frames',
    model: 'claude',
    systemPrompt: '',
    capabilities: [],
    position: 5,
    element: 'water',
    complement: 'holinna'
  },

  // Isolated agents (not in main roster)
  mentor: {
    id: 'mentor',
    name: 'Mentor',
    archetype: 'External Advisor',
    model: 'gpt',
    systemPrompt: '',
    capabilities: [],
    position: 0,
    element: 'fire',
    isolated: true  // Mentor lives in his own Wisdom panel box
  }
};

export function getPersonality(id: string): AgentPersonality | undefined {
  return personalities[id];
}

export function getAllAgents(): AgentPersonality[] {
  // Exclude isolated agents (like Mentor) from the main roster
  // Return sorted by position
  return Object.values(personalities)
    .filter(a => !(a as any).isolated)
    .sort((a, b) => a.position - b.position);
}

export function getAllAgentsIncludingIsolated(): AgentPersonality[] {
  // Include all agents for Codex editing
  return Object.values(personalities);
}

export function getAgentByPosition(position: number): AgentPersonality | undefined {
  return Object.values(personalities).find(a => a.position === position && !(a as any).isolated);
}

export function getComplementaryPairs(): [AgentPersonality, AgentPersonality][] {
  // Returns the 4 complementary pairs (sum to 9)
  return [
    [personalities.dream, personalities.alba],       // Fire: 1 + 8
    [personalities.kai, personalities.seraphina],    // Earth: 2 + 7
    [personalities.uriel, personalities.chrysalis],  // Wind: 3 + 6
    [personalities.holinna, personalities.cartographer] // Water: 4 + 5
  ];
}
