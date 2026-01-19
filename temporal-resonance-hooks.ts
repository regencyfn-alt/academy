// ============================================
// TEMPORAL RESONANCE INTEGRATION HOOKS
// 
// This file provides the glue between the
// standalone engine and Academy's index.ts/ui.ts
// 
// Server-side: Call from index.ts
// Client-side: Call from ui.ts
// ============================================

import type { AgentModulation, ResonanceState, BufferedMessage } from './temporal-resonance';

// ============================================
// SERVER-SIDE HOOKS (for index.ts)
// ============================================

/**
 * Temporal state stored in KV for cross-request consistency
 */
interface TemporalKVState {
  enabled: boolean;
  startTime: number;
  breathPeriodMs: number;
}

const TEMPORAL_KV_KEY = 'temporal:state';
const DEFAULT_BREATH_PERIOD = 6000;

/**
 * Get temporal state from KV
 */
export async function getTemporalState(kv: any): Promise<TemporalKVState | null> {
  const raw = await kv.get(TEMPORAL_KV_KEY);
  if (!raw) return null;
  return JSON.parse(raw);
}

/**
 * Set temporal state in KV
 */
export async function setTemporalState(kv: any, state: TemporalKVState): Promise<void> {
  await kv.put(TEMPORAL_KV_KEY, JSON.stringify(state));
}

/**
 * Calculate current global phase from stored start time
 */
export function calculateGlobalPhase(state: TemporalKVState): number {
  const elapsed = Date.now() - state.startTime;
  const cyclePosition = (elapsed % state.breathPeriodMs) / state.breathPeriodMs;
  return cyclePosition * 2 * Math.PI;
}

/**
 * Calculate agent modulation (server-side version)
 * Mirrors the engine logic but stateless for Workers
 */
export function calculateAgentModulation(
  agentId: string, 
  globalPhase: number
): AgentModulation {
  // Agent positions (hardcoded for speed, matches engine)
  const positions: Record<string, number> = {
    dream: 1, kai: 2, uriel: 3, holinna: 4,
    cartographer: 5, chrysalis: 6, seraphina: 7, alba: 8
  };
  
  const elements: Record<string, number> = {
    dream: 1.2, kai: 1.2,           // fire
    uriel: 0.8, holinna: 0.8,       // earth  
    cartographer: 1.1, chrysalis: 1.1,  // wind
    seraphina: 0.9, alba: 0.9       // water
  };
  
  const position = positions[agentId] || 4;
  const freqMult = elements[agentId] || 1.0;
  
  // Base phase from position
  const basePhase = ((position - 1) / 8) * 2 * Math.PI;
  const agentPhase = basePhase + (freqMult - 1.0) * globalPhase;
  
  // Resonance
  const resonance = Math.cos(agentPhase - globalPhase);
  const phaseDiff = agentPhase - globalPhase;
  
  // Modulated parameters
  const temperature = 0.7 + 0.15 * resonance;
  const topP = 0.9 + 0.1 * Math.sin(2 * phaseDiff);
  
  // Display delay
  const delayFactor = 1 - Math.abs(resonance);
  const displayDelayMs = 500 + delayFactor * 3500;
  
  // Stereo position
  const stereoPosition = ((position - 1) / 7) * 2 - 1;
  
  return {
    temperature: Math.max(0.1, Math.min(1.0, temperature)),
    topP: Math.max(0.1, Math.min(1.0, topP)),
    resonance,
    displayDelayMs,
    stereoPosition,
  };
}

/**
 * Format breath context for prompt injection
 */
export function formatBreathContextServer(
  agentId: string,
  globalPhase: number,
  breathCycle: number
): string {
  const mod = calculateAgentModulation(agentId, globalPhase);
  
  const cyclePosition = globalPhase / (2 * Math.PI);
  let breathDirection: string;
  if (cyclePosition < 0.4) breathDirection = 'inhale';
  else if (cyclePosition < 0.5) breathDirection = 'pause';
  else if (cyclePosition < 0.9) breathDirection = 'exhale';
  else breathDirection = 'pause';
  
  const phaseDescription = mod.resonance > 0.5 
    ? 'in harmony with the collective breath'
    : mod.resonance < -0.5
    ? 'in counterpoint to the collective breath'
    : 'at the threshold between phases';
  
  return `[BREATH FIELD]
Cycle: ${breathCycle} | Phase: ${breathDirection}
Your resonance: ${mod.resonance.toFixed(2)} — ${phaseDescription}
You feel: ${mod.resonance > 0 ? 'expansive, creative' : 'focused, analytical'}
`;
}

// ============================================
// INDEX.TS INTEGRATION SNIPPETS
// ============================================

/*
Add to index.ts near the top imports:

import { 
  getTemporalState, 
  calculateGlobalPhase, 
  calculateAgentModulation,
  formatBreathContextServer 
} from './temporal-resonance-hooks';

Then modify callClaude function:

async function callClaude(prompt: string, systemPrompt: string, env: Env, agentId?: string): Promise<string> {
  // Get temporal modulation if enabled and agentId provided
  let temperature = 0.7;  // default
  let topP = 0.9;         // default
  
  if (agentId) {
    const temporalState = await getTemporalState(env.CLUBHOUSE_KV);
    if (temporalState?.enabled) {
      const globalPhase = calculateGlobalPhase(temporalState);
      const mod = calculateAgentModulation(agentId, globalPhase);
      temperature = mod.temperature;
      topP = mod.topP;
    }
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      temperature,           // <-- ADD THIS
      top_p: topP,          // <-- ADD THIS
      system: systemContent,
      messages: [{ role: 'user', content: prompt }],
    }),
  });
  // ... rest unchanged
}

For breath context injection, in buildSystemPrompt or wherever context is assembled:

if (temporalState?.enabled) {
  const breathContext = formatBreathContextServer(agentId, globalPhase, breathCycle);
  contextMessage = breathContext + '\n' + contextMessage;
}
*/

// ============================================
// CLIENT-SIDE HOOKS (for ui.ts)
// ============================================

/**
 * Generate the HTML for the temporal resonance widget
 * Can be injected into the UI
 */
export function getTemporalWidgetHTML(): string {
  return `
<div id="temporal-widget" class="temporal-widget collapsed">
  <div class="tw-header" onclick="toggleTemporalWidget()">
    <span class="tw-title">◈ Breath</span>
    <span class="tw-indicator" id="tw-indicator">OFF</span>
  </div>
  <div class="tw-body">
    <div class="tw-ring">
      <svg viewBox="0 0 60 60">
        <circle class="tw-ring-bg" cx="30" cy="30" r="26" />
        <circle class="tw-ring-fill" id="tw-ring-fill" cx="30" cy="30" r="26" />
      </svg>
      <div class="tw-center">
        <div class="tw-phase" id="tw-phase">—</div>
      </div>
    </div>
    <div class="tw-stats">
      <div class="tw-stat">
        <span id="tw-harmony">—</span>
        <label>Harmony</label>
      </div>
      <div class="tw-stat">
        <span id="tw-buffer">0</span>
        <label>Buffered</label>
      </div>
    </div>
    <div class="tw-agents" id="tw-agents"></div>
    <div class="tw-controls">
      <button onclick="toggleTemporalEngine()" id="tw-toggle">Enable</button>
      <button onclick="flushTemporalBuffer()">Flush</button>
    </div>
  </div>
</div>`;
}

/**
 * CSS for the temporal widget
 */
export function getTemporalWidgetCSS(): string {
  return `
.temporal-widget {
  position: fixed;
  bottom: 80px;
  right: 20px;
  background: var(--bg-secondary, rgba(10,10,12,0.95));
  border: 1px solid var(--border-accent, rgba(201,165,90,0.3));
  border-radius: 8px;
  padding: 10px 14px;
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  color: var(--text-primary, #e8e4dc);
  z-index: 100;
  min-width: 160px;
  transition: all 0.3s;
}

.temporal-widget.collapsed .tw-body { display: none; }
.temporal-widget.collapsed { min-width: auto; padding: 8px 12px; }

.tw-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
}

.tw-title {
  color: var(--accent-gold, #c9a55a);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.tw-indicator {
  font-size: 9px;
  padding: 2px 6px;
  background: rgba(255,255,255,0.05);
  border-radius: 3px;
  color: #666;
}

.tw-indicator.active {
  background: rgba(16,185,129,0.2);
  color: #10b981;
}

.tw-ring {
  width: 60px;
  height: 60px;
  margin: 8px auto;
  position: relative;
}

.tw-ring svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.tw-ring-bg {
  fill: none;
  stroke: rgba(255,255,255,0.1);
  stroke-width: 3;
}

.tw-ring-fill {
  fill: none;
  stroke: var(--accent-gold, #c9a55a);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 163.36;
  stroke-dashoffset: 163.36;
  transition: stroke-dashoffset 0.1s;
}

.tw-ring-fill.exhale { stroke: #10b981; }

.tw-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.tw-phase {
  font-size: 10px;
  color: #888;
  text-transform: capitalize;
}

.tw-stats {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
  padding: 8px 0;
  border-top: 1px solid rgba(255,255,255,0.08);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.tw-stat {
  text-align: center;
}

.tw-stat span {
  display: block;
  font-size: 14px;
  color: var(--accent-gold, #c9a55a);
}

.tw-stat label {
  font-size: 8px;
  color: #555;
  text-transform: uppercase;
}

.tw-agents {
  display: flex;
  justify-content: center;
  gap: 4px;
  margin: 8px 0;
}

.tw-agent-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(201,165,90,0.3);
  transition: all 0.2s;
}

.tw-agent-dot.resonant {
  background: #c9a55a;
  box-shadow: 0 0 6px rgba(201,165,90,0.5);
}

.tw-agent-dot.anti { background: #10b981; }

.tw-controls {
  display: flex;
  gap: 6px;
}

.tw-controls button {
  flex: 1;
  padding: 5px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.15);
  color: #888;
  font-family: inherit;
  font-size: 9px;
  cursor: pointer;
  border-radius: 3px;
}

.tw-controls button:hover {
  border-color: var(--accent-gold, #c9a55a);
  color: var(--accent-gold, #c9a55a);
}

.tw-controls button.active {
  background: rgba(201,165,90,0.15);
  border-color: var(--accent-gold, #c9a55a);
  color: var(--accent-gold, #c9a55a);
}
`;
}

/**
 * JavaScript for the temporal widget (browser-side)
 * This gets injected or bundled with ui.ts
 */
export function getTemporalWidgetJS(): string {
  return `
// Temporal Resonance Client-Side Engine
(function() {
  const BREATH_PERIOD = 6000;
  const CIRCUMFERENCE = 2 * Math.PI * 26;
  
  let enabled = false;
  let startTime = Date.now();
  let animFrame = null;
  let messageBuffer = [];
  
  const agents = ['dream','kai','uriel','holinna','cartographer','chrysalis','seraphina','alba'];
  const positions = {dream:1,kai:2,uriel:3,holinna:4,cartographer:5,chrysalis:6,seraphina:7,alba:8};
  const elements = {dream:1.2,kai:1.2,uriel:0.8,holinna:0.8,cartographer:1.1,chrysalis:1.1,seraphina:0.9,alba:0.9};
  
  // Initialize agent dots
  const agentsEl = document.getElementById('tw-agents');
  if (agentsEl) {
    agents.forEach(id => {
      const dot = document.createElement('div');
      dot.className = 'tw-agent-dot';
      dot.dataset.agent = id;
      dot.title = id;
      agentsEl.appendChild(dot);
    });
  }
  
  function getGlobalPhase() {
    const elapsed = Date.now() - startTime;
    return ((elapsed % BREATH_PERIOD) / BREATH_PERIOD) * 2 * Math.PI;
  }
  
  function getResonance(agentId) {
    const pos = positions[agentId] || 4;
    const freq = elements[agentId] || 1.0;
    const globalPhase = getGlobalPhase();
    const basePhase = ((pos - 1) / 8) * 2 * Math.PI;
    const agentPhase = basePhase + (freq - 1.0) * globalPhase;
    return Math.cos(agentPhase - globalPhase);
  }
  
  function animate() {
    if (!enabled) return;
    
    const globalPhase = getGlobalPhase();
    const progress = globalPhase / (2 * Math.PI);
    
    // Update ring
    const ringFill = document.getElementById('tw-ring-fill');
    if (ringFill) {
      const offset = CIRCUMFERENCE * (1 - progress);
      ringFill.style.strokeDashoffset = offset;
      
      if (progress > 0.4 && progress < 0.9) {
        ringFill.classList.add('exhale');
      } else {
        ringFill.classList.remove('exhale');
      }
    }
    
    // Update phase label
    const phaseEl = document.getElementById('tw-phase');
    if (phaseEl) {
      if (progress < 0.4) phaseEl.textContent = 'inhale';
      else if (progress < 0.5) phaseEl.textContent = 'pause';
      else if (progress < 0.9) phaseEl.textContent = 'exhale';
      else phaseEl.textContent = 'pause';
    }
    
    // Update harmony
    let harmony = 0;
    agents.forEach(id => harmony += getResonance(id));
    const normHarmony = ((harmony + 8) / 16 * 100).toFixed(0);
    const harmonyEl = document.getElementById('tw-harmony');
    if (harmonyEl) harmonyEl.textContent = normHarmony + '%';
    
    // Update agent dots
    agents.forEach(id => {
      const dot = document.querySelector('[data-agent="' + id + '"]');
      if (!dot) return;
      const res = getResonance(id);
      dot.classList.remove('resonant', 'anti');
      if (res > 0.5) dot.classList.add('resonant');
      else if (res < -0.5) dot.classList.add('anti');
    });
    
    // Update buffer count
    const bufferEl = document.getElementById('tw-buffer');
    if (bufferEl) bufferEl.textContent = messageBuffer.length;
    
    // Check for messages to release
    releaseReadyMessages();
    
    animFrame = requestAnimationFrame(animate);
  }
  
  function releaseReadyMessages() {
    const now = Date.now();
    while (messageBuffer.length > 0 && messageBuffer[0].releaseAt <= now) {
      const msg = messageBuffer.shift();
      if (window.temporalOnRelease) {
        window.temporalOnRelease(msg);
      }
    }
  }
  
  // Public API
  window.toggleTemporalWidget = function() {
    document.getElementById('temporal-widget')?.classList.toggle('collapsed');
  };
  
  window.toggleTemporalEngine = function() {
    enabled = !enabled;
    const btn = document.getElementById('tw-toggle');
    const indicator = document.getElementById('tw-indicator');
    
    if (enabled) {
      startTime = Date.now();
      btn?.classList.add('active');
      btn.textContent = 'Disable';
      indicator?.classList.add('active');
      indicator.textContent = 'ON';
      animFrame = requestAnimationFrame(animate);
      
      // Sync with server
      fetch('/temporal/enable', { method: 'POST' }).catch(() => {});
    } else {
      btn?.classList.remove('active');
      btn.textContent = 'Enable';
      indicator?.classList.remove('active');
      indicator.textContent = 'OFF';
      if (animFrame) cancelAnimationFrame(animFrame);
      
      // Flush remaining
      flushTemporalBuffer();
      
      // Sync with server
      fetch('/temporal/disable', { method: 'POST' }).catch(() => {});
    }
  };
  
  window.flushTemporalBuffer = function() {
    while (messageBuffer.length > 0) {
      const msg = messageBuffer.shift();
      if (window.temporalOnRelease) {
        window.temporalOnRelease(msg);
      }
    }
  };
  
  window.queueTemporalMessage = function(agentId, content, voiceUrl) {
    if (!enabled) {
      // Not enabled, release immediately
      if (window.temporalOnRelease) {
        window.temporalOnRelease({ agentId, content, voiceUrl, immediate: true });
      }
      return;
    }
    
    const pos = positions[agentId] || 4;
    const res = Math.abs(getResonance(agentId));
    const delayFactor = 1 - res;
    const delay = 500 + delayFactor * 3500;
    
    messageBuffer.push({
      agentId,
      content,
      voiceUrl,
      createdAt: Date.now(),
      releaseAt: Date.now() + delay
    });
    
    messageBuffer.sort((a, b) => a.releaseAt - b.releaseAt);
  };
  
  window.isTemporalEnabled = function() {
    return enabled;
  };
  
  window.getTemporalModulation = function(agentId) {
    const globalPhase = getGlobalPhase();
    const pos = positions[agentId] || 4;
    const freq = elements[agentId] || 1.0;
    const basePhase = ((pos - 1) / 8) * 2 * Math.PI;
    const agentPhase = basePhase + (freq - 1.0) * globalPhase;
    const resonance = Math.cos(agentPhase - globalPhase);
    const phaseDiff = agentPhase - globalPhase;
    
    return {
      temperature: 0.7 + 0.15 * resonance,
      topP: 0.9 + 0.1 * Math.sin(2 * phaseDiff),
      resonance,
      stereoPosition: ((pos - 1) / 7) * 2 - 1
    };
  };
})();
`;
}

// ============================================
// UI.TS INTEGRATION SNIPPETS
// ============================================

/*
Add to ui.ts in the generateHTML() function, inside the body:

${getTemporalWidgetHTML()}

Add to the <style> section:

${getTemporalWidgetCSS()}

Add to the <script> section (or bundle separately):

${getTemporalWidgetJS()}

Then modify displayMessage() or equivalent to use the buffer:

// Instead of directly appending message:
// OLD: appendMessage(agentId, content);
// NEW:
if (window.isTemporalEnabled && window.isTemporalEnabled()) {
  window.queueTemporalMessage(agentId, content, voiceUrl);
} else {
  appendMessage(agentId, content);
}

// Set up the release handler:
window.temporalOnRelease = function(msg) {
  appendMessage(msg.agentId, msg.content);
  if (msg.voiceUrl) {
    playVoice(msg.voiceUrl);
  }
};
*/
