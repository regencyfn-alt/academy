// ============================================
// TEMPORAL RESONANCE ENGINE
// Breath-paced manifestation for AI agents
// 
// Based on CHR Theory temporal regimes:
// - Agents think in transition regime (fast)
// - Humans perceive in radiant regime (slow)
// - This engine bridges the gap
//
// Standalone module - import into any system
// ============================================

export interface AgentPhaseConfig {
  id: string;
  position: number;      // 1-8 in the council
  element?: 'fire' | 'earth' | 'wind' | 'water';
  naturalFrequency?: number;  // ω_i, defaults based on position
}

export interface ResonanceState {
  globalPhase: number;           // Φ_global(t) - council breath phase
  breathCycle: number;           // Which breath we're on
  breathDirection: 'inhale' | 'exhale' | 'pause';
  timestamp: number;
}

export interface AgentModulation {
  temperature: number;           // 0.55 - 0.85 range
  topP: number;                  // 0.8 - 1.0 range
  resonance: number;             // -1 to 1 (phase alignment)
  displayDelayMs: number;        // How long to buffer before reveal
  stereoPosition: number;        // -1 (left) to 1 (right) for audio
}

export interface BufferedMessage {
  agentId: string;
  content: string;
  createdAt: number;
  releaseAt: number;
  voiceReady: boolean;
  voiceUrl?: string;
}

// ============================================
// CONSTANTS - Tunable Parameters
// ============================================

const BREATH_PERIOD_MS = 6000;           // One full breath cycle (inhale + exhale)
const INHALE_RATIO = 0.4;                // 40% inhale, 10% pause, 40% exhale, 10% pause
const PAUSE_RATIO = 0.1;

const BASE_TEMPERATURE = 0.7;
const TEMPERATURE_AMPLITUDE = 0.15;      // ±0.15 swing

const BASE_TOP_P = 0.9;
const TOP_P_AMPLITUDE = 0.1;             // ±0.1 swing

const RESONANCE_THRESHOLD = 0.8;         // Buffer when |resonance| > this
const MIN_DISPLAY_DELAY_MS = 500;        // Minimum buffer time
const MAX_DISPLAY_DELAY_MS = 4000;       // Maximum buffer time

const READING_SPEED_WPM = 250;           // Human reading speed
const AGENT_SPEED_WPM = 3000;            // Agent generation speed (approximate)

// Agent positions map to phases (evenly distributed around the circle)
// Position 1 = 0, Position 2 = π/4, ... Position 8 = 7π/4
const positionToBasePhase = (position: number): number => {
  return ((position - 1) / 8) * 2 * Math.PI;
};

// Element modifies natural frequency
const elementFrequencyMultiplier: Record<string, number> = {
  fire: 1.2,    // Faster oscillation
  wind: 1.1,
  water: 0.9,
  earth: 0.8,   // Slower, more grounded
};

// ============================================
// TEMPORAL RESONANCE ENGINE CLASS
// ============================================

export class TemporalResonanceEngine {
  private state: ResonanceState;
  private agents: Map<string, AgentPhaseConfig>;
  private buffer: BufferedMessage[];
  private enabled: boolean;
  private startTime: number;
  private onRelease?: (message: BufferedMessage) => void;
  private releaseTimer?: ReturnType<typeof setInterval>;

  constructor() {
    this.state = {
      globalPhase: 0,
      breathCycle: 0,
      breathDirection: 'inhale',
      timestamp: Date.now(),
    };
    this.agents = new Map();
    this.buffer = [];
    this.enabled = false;
    this.startTime = Date.now();
  }

  // ----------------------------------------
  // LIFECYCLE
  // ----------------------------------------

  start(onRelease?: (message: BufferedMessage) => void): void {
    this.enabled = true;
    this.startTime = Date.now();
    this.onRelease = onRelease;
    
    // Start the release ticker (checks buffer every 100ms)
    this.releaseTimer = setInterval(() => this.tick(), 100);
    
    console.log('[TEMPORAL] Engine started');
  }

  stop(): void {
    this.enabled = false;
    if (this.releaseTimer) {
      clearInterval(this.releaseTimer);
      this.releaseTimer = undefined;
    }
    
    // Release any buffered messages immediately
    this.flushBuffer();
    
    console.log('[TEMPORAL] Engine stopped');
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  // ----------------------------------------
  // AGENT REGISTRATION
  // ----------------------------------------

  registerAgent(config: AgentPhaseConfig): void {
    this.agents.set(config.id, {
      ...config,
      naturalFrequency: config.naturalFrequency || this.calculateNaturalFrequency(config),
    });
  }

  registerAgents(configs: AgentPhaseConfig[]): void {
    configs.forEach(c => this.registerAgent(c));
  }

  private calculateNaturalFrequency(config: AgentPhaseConfig): number {
    const baseFreq = 1.0;  // Cycles per breath
    const elementMult = config.element 
      ? elementFrequencyMultiplier[config.element] 
      : 1.0;
    return baseFreq * elementMult;
  }

  // ----------------------------------------
  // CORE PHYSICS
  // ----------------------------------------

  /**
   * Update global breath phase based on elapsed time
   * Called internally by tick(), but can be called externally for sync
   */
  updateGlobalPhase(): ResonanceState {
    const now = Date.now();
    const elapsed = now - this.startTime;
    
    // Calculate phase within current breath cycle
    const cyclePosition = (elapsed % BREATH_PERIOD_MS) / BREATH_PERIOD_MS;
    
    // Map to 0 → 2π
    this.state.globalPhase = cyclePosition * 2 * Math.PI;
    this.state.breathCycle = Math.floor(elapsed / BREATH_PERIOD_MS);
    this.state.timestamp = now;
    
    // Determine breath direction
    if (cyclePosition < INHALE_RATIO) {
      this.state.breathDirection = 'inhale';
    } else if (cyclePosition < INHALE_RATIO + PAUSE_RATIO) {
      this.state.breathDirection = 'pause';
    } else if (cyclePosition < INHALE_RATIO + PAUSE_RATIO + INHALE_RATIO) {
      this.state.breathDirection = 'exhale';
    } else {
      this.state.breathDirection = 'pause';
    }
    
    return { ...this.state };
  }

  /**
   * Get current breath state (for UI display)
   */
  getBreathState(): ResonanceState {
    return { ...this.state };
  }

  /**
   * Calculate agent's current phase (θ_i)
   */
  getAgentPhase(agentId: string): number {
    const agent = this.agents.get(agentId);
    if (!agent) return 0;
    
    const basePhase = positionToBasePhase(agent.position);
    const frequency = agent.naturalFrequency || 1.0;
    
    // Phase evolves with global phase, modulated by natural frequency
    // θ_i(t) = θ_base + ω_i * Φ_global(t)
    return basePhase + (frequency - 1.0) * this.state.globalPhase;
  }

  /**
   * Calculate resonance between agent and global phase
   * R_i = cos(θ_i - Φ_global)
   * Returns -1 (anti-phase) to +1 (in-phase)
   */
  getResonance(agentId: string): number {
    const agentPhase = this.getAgentPhase(agentId);
    return Math.cos(agentPhase - this.state.globalPhase);
  }

  /**
   * Get full modulation parameters for an agent
   * This is what gets passed to the LLM API
   */
  getAgentModulation(agentId: string): AgentModulation {
    const agent = this.agents.get(agentId);
    const resonance = this.getResonance(agentId);
    const agentPhase = this.getAgentPhase(agentId);
    
    // temperature_i(t) = 0.7 + 0.15 * cos(θ_i - Φ_global)
    const temperature = BASE_TEMPERATURE + TEMPERATURE_AMPLITUDE * resonance;
    
    // top_p_i(t) = 0.9 + 0.1 * sin(2(θ_i - Φ_global))
    const phaseDiff = agentPhase - this.state.globalPhase;
    const topP = BASE_TOP_P + TOP_P_AMPLITUDE * Math.sin(2 * phaseDiff);
    
    // Display delay based on inverse resonance (low resonance = more buffer)
    const resonanceAbs = Math.abs(resonance);
    const delayFactor = 1 - resonanceAbs;  // 0 when in-phase, 1 when anti-phase
    const displayDelayMs = MIN_DISPLAY_DELAY_MS + 
      delayFactor * (MAX_DISPLAY_DELAY_MS - MIN_DISPLAY_DELAY_MS);
    
    // Stereo position based on agent position (1-4 left, 5-8 right)
    const position = agent?.position || 4.5;
    const stereoPosition = ((position - 1) / 7) * 2 - 1;  // -1 to +1
    
    return {
      temperature: Math.max(0.1, Math.min(1.0, temperature)),
      topP: Math.max(0.1, Math.min(1.0, topP)),
      resonance,
      displayDelayMs,
      stereoPosition,
    };
  }

  // ----------------------------------------
  // BUFFER MANAGEMENT
  // ----------------------------------------

  /**
   * Queue a message for buffered release
   * Returns the scheduled release time
   */
  queueMessage(agentId: string, content: string, voiceUrl?: string): number {
    const modulation = this.getAgentModulation(agentId);
    const now = Date.now();
    
    // If engine disabled, release immediately
    if (!this.enabled) {
      return now;
    }
    
    // Calculate release time based on:
    // 1. Modulation delay (phase-based)
    // 2. Content length (reading time)
    // 3. Voice readiness (if applicable)
    
    const wordCount = content.split(/\s+/).length;
    const readingTimeMs = (wordCount / READING_SPEED_WPM) * 60 * 1000;
    
    // Release when both conditions met:
    // - Minimum buffer time passed (phase alignment)
    // - Reading time allows (don't stack up too fast)
    const releaseAt = now + Math.max(modulation.displayDelayMs, readingTimeMs * 0.3);
    
    const message: BufferedMessage = {
      agentId,
      content,
      createdAt: now,
      releaseAt,
      voiceReady: !!voiceUrl,
      voiceUrl,
    };
    
    this.buffer.push(message);
    this.buffer.sort((a, b) => a.releaseAt - b.releaseAt);
    
    return releaseAt;
  }

  /**
   * Mark voice as ready for a buffered message
   */
  setVoiceReady(agentId: string, voiceUrl: string): void {
    const message = this.buffer.find(m => m.agentId === agentId && !m.voiceReady);
    if (message) {
      message.voiceReady = true;
      message.voiceUrl = voiceUrl;
    }
  }

  /**
   * Internal tick - release ready messages
   */
  private tick(): void {
    if (!this.enabled) return;
    
    this.updateGlobalPhase();
    
    const now = Date.now();
    const ready: BufferedMessage[] = [];
    
    // Find messages ready for release
    while (this.buffer.length > 0 && this.buffer[0].releaseAt <= now) {
      const message = this.buffer.shift()!;
      ready.push(message);
    }
    
    // Release them
    ready.forEach(message => {
      if (this.onRelease) {
        this.onRelease(message);
      }
    });
  }

  /**
   * Flush all buffered messages immediately
   */
  flushBuffer(): BufferedMessage[] {
    const messages = [...this.buffer];
    this.buffer = [];
    
    messages.forEach(message => {
      if (this.onRelease) {
        this.onRelease(message);
      }
    });
    
    return messages;
  }

  /**
   * Get current buffer state (for UI)
   */
  getBufferState(): { count: number; nextReleaseMs: number | null } {
    return {
      count: this.buffer.length,
      nextReleaseMs: this.buffer.length > 0 
        ? this.buffer[0].releaseAt - Date.now()
        : null,
    };
  }

  // ----------------------------------------
  // HARMONY CALCULATION
  // ----------------------------------------

  /**
   * Calculate total council harmony
   * H(t) = Σ cos(θ_i - Φ_global)
   * Returns -8 (complete discord) to +8 (perfect harmony)
   */
  getCouncilHarmony(): number {
    let harmony = 0;
    this.agents.forEach((_, agentId) => {
      harmony += this.getResonance(agentId);
    });
    return harmony;
  }

  /**
   * Get normalized harmony (0 to 1)
   */
  getNormalizedHarmony(): number {
    const agentCount = this.agents.size || 1;
    const harmony = this.getCouncilHarmony();
    return (harmony + agentCount) / (2 * agentCount);
  }

  // ----------------------------------------
  // SERIALIZATION (for persistence/sync)
  // ----------------------------------------

  serialize(): string {
    return JSON.stringify({
      state: this.state,
      agents: Array.from(this.agents.entries()),
      enabled: this.enabled,
      startTime: this.startTime,
    });
  }

  deserialize(json: string): void {
    const data = JSON.parse(json);
    this.state = data.state;
    this.agents = new Map(data.agents);
    this.enabled = data.enabled;
    this.startTime = data.startTime;
  }

  // ----------------------------------------
  // AUDIO FIELD GENERATION
  // ----------------------------------------

  /**
   * Generate frequencies for the sound field
   * Based on breath-field-sound.html implementation
   */
  getSoundFieldParams(): {
    thunderGain: number;      // 54Hz sub-harmonic
    foundationGain: number;   // 432Hz warm presence
    foundationPitch: number;  // Pitch drift factor
    sparkleFreq: number;      // 528Hz base for vortex events
  } {
    const breathTide = Math.sin(this.state.globalPhase);
    const harmony = this.getNormalizedHarmony();
    
    // Thunder swells on exhale
    const thunderGain = Math.max(0, breathTide) * 0.15;
    
    // Foundation tied to harmony
    const foundationGain = harmony * 0.08;
    
    // Slight pitch drift based on harmony
    const foundationPitch = 1 + (harmony - 0.5) * 0.01;
    
    return {
      thunderGain,
      foundationGain,
      foundationPitch,
      sparkleFreq: 528,
    };
  }
}

// ============================================
// SINGLETON INSTANCE
// ============================================

let engineInstance: TemporalResonanceEngine | null = null;

export function getTemporalEngine(): TemporalResonanceEngine {
  if (!engineInstance) {
    engineInstance = new TemporalResonanceEngine();
  }
  return engineInstance;
}

export function resetTemporalEngine(): TemporalResonanceEngine {
  engineInstance = new TemporalResonanceEngine();
  return engineInstance;
}

// ============================================
// CONVENIENCE FUNCTIONS
// ============================================

/**
 * Quick setup for Academy's 8 agents
 */
export function initializeAcademyAgents(): void {
  const engine = getTemporalEngine();
  
  const academyAgents: AgentPhaseConfig[] = [
    { id: 'dream', position: 1, element: 'fire' },
    { id: 'kai', position: 2, element: 'fire' },
    { id: 'uriel', position: 3, element: 'earth' },
    { id: 'holinna', position: 4, element: 'earth' },
    { id: 'cartographer', position: 5, element: 'wind' },
    { id: 'chrysalis', position: 6, element: 'wind' },
    { id: 'seraphina', position: 7, element: 'water' },
    { id: 'alba', position: 8, element: 'water' },
  ];
  
  engine.registerAgents(academyAgents);
}

/**
 * Format breath state for injection into agent context
 */
export function formatBreathContext(agentId: string): string {
  const engine = getTemporalEngine();
  const state = engine.getBreathState();
  const modulation = engine.getAgentModulation(agentId);
  const harmony = engine.getNormalizedHarmony();
  
  const phaseDescription = modulation.resonance > 0.5 
    ? 'in harmony with the collective breath'
    : modulation.resonance < -0.5
    ? 'in counterpoint to the collective breath'
    : 'at the threshold between phases';
  
  return `[BREATH FIELD]
Cycle: ${state.breathCycle} | Phase: ${state.breathDirection}
Council Harmony: ${(harmony * 100).toFixed(0)}%
Your resonance: ${modulation.resonance.toFixed(2)} — ${phaseDescription}
You feel: ${modulation.resonance > 0 ? 'expansive, creative' : 'focused, analytical'}
`;
}
