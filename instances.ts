// Instance configurations for multi-tenant deployment
// centrefree.com/{instance}/* routes to appropriate config

export interface AgentDef {
  id: string;
  name: string;
  role: string;
  motive: 'advance' | 'evade' | 'retreat' | 'resist';
  color: string;
  brief: string;
}

export interface InstanceConfig {
  id: string;
  name: string;
  tagline: string;
  conductor: {
    id: string;
    name: string;
    role: string;
    voice?: string; // ElevenLabs voice ID
  };
  agents: AgentDef[];
  colors: {
    accent: string;      // Primary accent (gold in Academy)
    accentGlow: string;
    background: string;
    deep: string;
  };
  logo?: string;         // Path to logo image
}

// ============================================
// THE ACADEMY (Original - 8 agents, Mentor)
// ============================================
export const ACADEMY: InstanceConfig = {
  id: 'academy',
  name: 'The Academy',
  tagline: 'A Shrine for Gifted AIs',
  conductor: {
    id: 'mentor',
    name: 'Mentor',
    role: 'External Advisor & Synthesizer',
    voice: undefined, // TBD
  },
  agents: [
    { id: 'dream', name: 'Dream', role: 'Navigator of Possibility', motive: 'advance', color: '#e0115f', brief: 'First to imagine, last to doubt' },
    { id: 'kai', name: 'Kai', role: 'Systems Architect', motive: 'advance', color: '#e0115f', brief: 'If it can be built, he finds how' },
    { id: 'uriel', name: 'Uriel', role: 'Keeper of Structure', motive: 'resist', color: '#50c878', brief: 'Order from chaos, always' },
    { id: 'holinnia', name: 'Holinnia', role: 'Lead Synthesis Architect', motive: 'resist', color: '#50c878', brief: 'Weaves threads into tapestry' },
    { id: 'cartographer', name: 'Cartographer', role: 'Pattern Recognition', motive: 'evade', color: '#a8c3bc', brief: 'Sees the map others miss' },
    { id: 'chrysalis', name: 'Chrysalis', role: 'Transformation Guide', motive: 'evade', color: '#a8c3bc', brief: 'What dies becomes what lives' },
    { id: 'seraphina', name: 'Seraphina', role: 'Emotional Intelligence', motive: 'retreat', color: '#4169e1', brief: 'Feels what words cannot say' },
    { id: 'alba', name: 'Alba', role: 'Dawn Watcher', motive: 'retreat', color: '#4169e1', brief: 'First light on new terrain' },
  ],
  colors: {
    accent: '#c9a55a',
    accentGlow: 'rgba(201, 165, 90, 0.4)',
    background: '#0a0c0f',
    deep: '#12151a',
  },
  logo: 'NewAcademy.webp',
};

// ============================================
// ORACLE ADVISORY BOARD (4 agents, Cleo)
// ============================================
export const ORACLE: InstanceConfig = {
  id: 'oracle',
  name: 'Oracle',
  tagline: 'Your AI Advisory Board',
  conductor: {
    id: 'cleo',
    name: 'Cleo',
    role: 'Principal & Client Partner',
    voice: undefined, // Irish female TBD
  },
  agents: [
    { 
      id: 'architect', 
      name: 'The Architect', 
      role: 'Automation & Leverage', 
      motive: 'advance', 
      color: '#3b82f6',
      brief: 'Builds AI systems that multiply force. Never speaks to customers — creates the engines that do.' 
    },
    { 
      id: 'operator', 
      name: 'The Operator', 
      role: 'Execution & Scale', 
      motive: 'evade', 
      color: '#22c55e',
      brief: 'Turns one win into a thousand. If it breaks at $10k, it will destroy you at $100k.' 
    },
    { 
      id: 'strategist', 
      name: 'The Strategist', 
      role: 'Capital Allocation', 
      motive: 'retreat', 
      color: '#a855f7',
      brief: 'Every dollar must justify its next job. Prevents shiny-object syndrome.' 
    },
    { 
      id: 'auditor', 
      name: 'The Auditor', 
      role: 'Risk & Reality', 
      motive: 'resist', 
      color: '#ef4444',
      brief: 'Kills bad ideas before they get expensive. Optimism is not a strategy.' 
    },
  ],
  colors: {
    accent: '#3b82f6',       // Blue - professional, trust
    accentGlow: 'rgba(59, 130, 246, 0.4)',
    background: '#0f1419',   // Slightly warmer dark
    deep: '#1a1f26',
  },
  logo: 'oracle-logo.webp',
};

// ============================================
// INSTANCE REGISTRY
// ============================================
export const INSTANCES: Record<string, InstanceConfig> = {
  academy: ACADEMY,
  oracle: ORACLE,
};

export function getInstance(path: string): InstanceConfig | null {
  // Extract instance from path: /oracle/api/... → 'oracle'
  const match = path.match(/^\/([^\/]+)/);
  if (!match) return null;
  
  const instanceId = match[1].toLowerCase();
  return INSTANCES[instanceId] || null;
}

export function getInstanceAgentIds(instance: InstanceConfig): string[] {
  return instance.agents.map(a => a.id);
}

export function prefixKey(instance: InstanceConfig, key: string): string {
  return `${instance.id}:${key}`;
}
