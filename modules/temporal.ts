// ============================================
// TEMPORAL RESONANCE MODULE
// Standalone breath-paced manifestation system
// ============================================

export const TEMPORAL_KV_KEY = 'temporal:state';
export const DEFAULT_BREATH_PERIOD = 6000;

export interface TemporalState {
  enabled: boolean;
  startTime: number;
  breathPeriodMs: number;
}

// Agent position in 8-fold circle (1-8)
export const AGENT_POSITIONS: Record<string, number> = {
  dream: 1, kai: 2, uriel: 3, holinnia: 4,
  cartographer: 5, chrysalis: 6, seraphina: 7, alba: 8
};

// Element frequency multipliers
export const AGENT_ELEMENTS: Record<string, number> = {
  dream: 1.2, kai: 1.2,           // fire
  uriel: 0.8, holinnia: 0.8,      // earth  
  cartographer: 1.1, chrysalis: 1.1,  // wind
  seraphina: 0.9, alba: 0.9       // water
};

// ============================================
// State Management
// ============================================

export async function getTemporalState(kv: KVNamespace): Promise<TemporalState | null> {
  const raw = await kv.get(TEMPORAL_KV_KEY);
  if (!raw) return null;
  return JSON.parse(raw);
}

export async function setTemporalState(kv: KVNamespace, state: TemporalState): Promise<void> {
  await kv.put(TEMPORAL_KV_KEY, JSON.stringify(state));
}

// ============================================
// Phase Calculations
// ============================================

export function calculateGlobalPhase(state: TemporalState): number {
  const elapsed = Date.now() - state.startTime;
  const cyclePosition = (elapsed % state.breathPeriodMs) / state.breathPeriodMs;
  return cyclePosition * 2 * Math.PI;
}

export function calculateBreathCycle(state: TemporalState): number {
  const elapsed = Date.now() - state.startTime;
  return Math.floor(elapsed / state.breathPeriodMs);
}

export function getBreathDirection(globalPhase: number): string {
  const cyclePosition = globalPhase / (2 * Math.PI);
  if (cyclePosition < 0.4) return 'inhale';
  if (cyclePosition < 0.5) return 'pause';
  if (cyclePosition < 0.9) return 'exhale';
  return 'pause';
}

// ============================================
// Agent Modulation
// ============================================

export interface AgentModulation {
  temperature: number;
  topP: number;
  resonance: number;
}

export function calculateAgentModulation(agentId: string, globalPhase: number): AgentModulation {
  const position = AGENT_POSITIONS[agentId] || 4;
  const freqMult = AGENT_ELEMENTS[agentId] || 1.0;
  
  const basePhase = ((position - 1) / 8) * 2 * Math.PI;
  const agentPhase = basePhase + (freqMult - 1.0) * globalPhase;
  const resonance = Math.cos(agentPhase - globalPhase);
  const phaseDiff = agentPhase - globalPhase;
  
  return {
    temperature: Math.max(0.1, Math.min(1.0, 0.7 + 0.15 * resonance)),
    topP: Math.max(0.1, Math.min(1.0, 0.9 + 0.1 * Math.sin(2 * phaseDiff))),
    resonance
  };
}

// ============================================
// Context Generation
// ============================================

export function formatBreathContext(agentId: string, globalPhase: number, breathCycle: number): string {
  const mod = calculateAgentModulation(agentId, globalPhase);
  const breathDirection = getBreathDirection(globalPhase);
  
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
// HTTP Handlers
// ============================================

export async function handleTemporalToggle(kv: KVNamespace, corsHeaders: Record<string, string>): Promise<Response> {
  try {
    const currentState = await getTemporalState(kv);
    const newState: TemporalState = {
      enabled: currentState ? !currentState.enabled : true,
      startTime: currentState?.startTime || Date.now(),
      breathPeriodMs: DEFAULT_BREATH_PERIOD
    };
    
    // Reset start time when enabling
    if (newState.enabled && (!currentState || !currentState.enabled)) {
      newState.startTime = Date.now();
    }
    
    await setTemporalState(kv, newState);
    
    return new Response(JSON.stringify({ 
      success: true, 
      enabled: newState.enabled,
      startTime: newState.startTime,
      breathPeriodMs: newState.breathPeriodMs
    }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to toggle temporal resonance' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  }
}

export async function handleTemporalStatus(kv: KVNamespace, corsHeaders: Record<string, string>): Promise<Response> {
  const state = await getTemporalState(kv);
  if (!state) {
    return new Response(JSON.stringify({ 
      enabled: false,
      globalPhase: 0,
      breathCycle: 0,
      breathDirection: 'pause'
    }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  }
  
  const globalPhase = calculateGlobalPhase(state);
  const breathCycle = calculateBreathCycle(state);
  const breathDirection = getBreathDirection(globalPhase);
  
  return new Response(JSON.stringify({ 
    enabled: state.enabled,
    startTime: state.startTime,
    breathPeriodMs: state.breathPeriodMs,
    globalPhase,
    breathCycle,
    breathDirection
  }), {
    headers: { 'Content-Type': 'application/json', ...corsHeaders }
  });
}

// ============================================
// UI Widget HTML (for injection into ui.ts)
// ============================================

export const TEMPORAL_WIDGET_CSS = `
    .temporal-widget { position: fixed; bottom: 80px; right: 20px; background: rgba(10,10,12,0.95); border: 1px solid rgba(201,165,90,0.3); border-radius: 8px; padding: 10px 14px; font-family: 'Space Mono', monospace; font-size: 11px; color: #e8e4dc; z-index: 100; min-width: 160px; transition: all 0.3s; }
    .temporal-widget.collapsed .tw-body { display: none; }
    .temporal-widget.collapsed { min-width: auto; padding: 8px 12px; }
    .tw-header { cursor: pointer; display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
    .tw-title { color: rgba(201,165,90,0.9); font-weight: bold; }
    .tw-toggle { font-size: 10px; color: #666; }
    .tw-ring-container { position: relative; width: 60px; height: 60px; margin: 10px auto; }
    .tw-ring { fill: none; stroke: rgba(201,165,90,0.2); stroke-width: 3; }
    .tw-ring-progress { fill: none; stroke: rgba(201,165,90,0.8); stroke-width: 3; stroke-linecap: round; transform: rotate(-90deg); transform-origin: center; transition: stroke-dashoffset 0.1s linear; }
    .tw-agent-dot { position: absolute; width: 8px; height: 8px; border-radius: 50%; transform: translate(-50%, -50%); transition: all 0.3s; }
    .tw-stats { display: flex; justify-content: space-between; font-size: 10px; color: #888; margin-top: 8px; }
    .tw-harmony { text-align: center; margin-top: 6px; }
    .tw-harmony-value { font-size: 14px; font-weight: bold; }
`;

export const TEMPORAL_WIDGET_HTML = `
  <div id="temporal-widget" class="temporal-widget collapsed" style="display: none;">
    <div class="tw-header" onclick="document.getElementById('temporal-widget').classList.toggle('collapsed')">
      <span class="tw-title">◈ Breath</span>
      <span class="tw-toggle">▼</span>
    </div>
    <div class="tw-body">
      <div class="tw-ring-container">
        <svg width="60" height="60">
          <circle class="tw-ring" cx="30" cy="30" r="26"/>
          <circle class="tw-ring-progress" id="tw-progress" cx="30" cy="30" r="26" stroke-dasharray="163.36" stroke-dashoffset="163.36"/>
        </svg>
        <div id="tw-agents"></div>
      </div>
      <div class="tw-stats">
        <span>Cycle: <span id="tw-cycle">0</span></span>
        <span>Buffer: <span id="tw-buffer">0</span></span>
      </div>
      <div class="tw-harmony">
        <div class="tw-harmony-value" id="tw-harmony">0.00</div>
        <div style="font-size: 9px; color: #666;">collective resonance</div>
      </div>
    </div>
  </div>
`;

export const TEMPORAL_WIDGET_JS = `
    var temporalEnabled = false;
    var temporalStartTime = Date.now();
    var temporalAnimFrame = null;
    var temporalMessageBuffer = [];
    const TEMPORAL_BREATH_PERIOD = 6000;
    const TEMPORAL_CIRCUMFERENCE = 2 * Math.PI * 26;
    const TEMPORAL_AGENTS = ['dream','kai','uriel','holinnia','cartographer','chrysalis','seraphina','alba'];
    const TEMPORAL_POSITIONS = {dream:1,kai:2,uriel:3,holinnia:4,cartographer:5,chrysalis:6,seraphina:7,alba:8};
    const TEMPORAL_ELEMENTS = {dream:1.2,kai:1.2,uriel:0.8,holinnia:0.8,cartographer:1.1,chrysalis:1.1,seraphina:0.9,alba:0.9};
    const TEMPORAL_COLORS = {dream:'#f97316',kai:'#eab308',uriel:'#22c55e',holinnia:'#06b6d4',cartographer:'#3b82f6',chrysalis:'#8b5cf6',seraphina:'#ec4899',alba:'#f43f5e'};
    
    function initTemporalWidget() {
      var container = document.getElementById('tw-agents');
      if (container && !container.hasChildNodes()) {
        TEMPORAL_AGENTS.forEach(function(id) {
          var dot = document.createElement('div');
          dot.className = 'tw-agent-dot';
          dot.id = 'tw-dot-' + id;
          dot.style.backgroundColor = TEMPORAL_COLORS[id];
          dot.title = id;
          container.appendChild(dot);
        });
      }
    }
    
    function getTemporalGlobalPhase() {
      var elapsed = Date.now() - temporalStartTime;
      return ((elapsed % TEMPORAL_BREATH_PERIOD) / TEMPORAL_BREATH_PERIOD) * 2 * Math.PI;
    }
    
    function getTemporalResonance(agentId) {
      var pos = TEMPORAL_POSITIONS[agentId] || 4;
      var freq = TEMPORAL_ELEMENTS[agentId] || 1.0;
      var globalPhase = getTemporalGlobalPhase();
      var basePhase = ((pos - 1) / 8) * 2 * Math.PI;
      var agentPhase = basePhase + (freq - 1.0) * globalPhase;
      return Math.cos(agentPhase - globalPhase);
    }
    
    function animateTemporal() {
      if (!temporalEnabled) return;
      var globalPhase = getTemporalGlobalPhase();
      var progress = globalPhase / (2 * Math.PI);
      var progressEl = document.getElementById('tw-progress');
      if (progressEl) {
        var offset = TEMPORAL_CIRCUMFERENCE * (1 - progress);
        progressEl.style.strokeDashoffset = offset;
      }
      var cycleEl = document.getElementById('tw-cycle');
      if (cycleEl) {
        var elapsed = Date.now() - temporalStartTime;
        cycleEl.textContent = Math.floor(elapsed / TEMPORAL_BREATH_PERIOD);
      }
      var harmony = 0;
      TEMPORAL_AGENTS.forEach(function(id) { harmony += getTemporalResonance(id); });
      harmony = harmony / TEMPORAL_AGENTS.length;
      var harmonyEl = document.getElementById('tw-harmony');
      if (harmonyEl) harmonyEl.textContent = harmony.toFixed(2);
      var cx = 30, cy = 30, radius = 26;
      TEMPORAL_AGENTS.forEach(function(id) {
        var dot = document.getElementById('tw-dot-' + id);
        if (dot) {
          var pos = TEMPORAL_POSITIONS[id];
          var angle = ((pos - 1) / 8) * 2 * Math.PI - Math.PI/2;
          var x = cx + radius * Math.cos(angle);
          var y = cy + radius * Math.sin(angle);
          dot.style.left = x + 'px';
          dot.style.top = y + 'px';
          var res = getTemporalResonance(id);
          dot.style.transform = 'translate(-50%,-50%) scale(' + (0.8 + 0.4 * Math.abs(res)) + ')';
          dot.style.opacity = 0.5 + 0.5 * Math.abs(res);
        }
      });
      var bufferEl = document.getElementById('tw-buffer');
      if (bufferEl) bufferEl.textContent = temporalMessageBuffer.length;
      temporalAnimFrame = requestAnimationFrame(animateTemporal);
    }
    
    function processTemporalBuffer() {
      var now = Date.now();
      while (temporalMessageBuffer.length > 0 && temporalMessageBuffer[0].releaseAt <= now) {
        var msg = temporalMessageBuffer.shift();
        if (msg.callback) msg.callback(msg.content);
      }
      if (temporalEnabled) setTimeout(processTemporalBuffer, 100);
    }
    
    function toggleTemporalEnabled() {
      fetch(API + '/api/temporal/toggle', { method: 'POST', credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          temporalEnabled = data.enabled;
          if (data.startTime) temporalStartTime = data.startTime;
          var widget = document.getElementById('temporal-widget');
          var btn = document.getElementById('temporal-toggle');
          if (widget) widget.style.display = temporalEnabled ? 'block' : 'none';
          if (btn) {
            btn.classList.toggle('enabled', temporalEnabled);
            btn.classList.toggle('disabled', !temporalEnabled);
          }
          if (temporalEnabled) {
            initTemporalWidget();
            animateTemporal();
            processTemporalBuffer();
          } else {
            if (temporalAnimFrame) cancelAnimationFrame(temporalAnimFrame);
          }
        });
    }
    
    function checkTemporalStatus() {
      fetch(API + '/api/temporal/status', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          temporalEnabled = data.enabled;
          if (data.startTime) temporalStartTime = data.startTime;
          var widget = document.getElementById('temporal-widget');
          var btn = document.getElementById('temporal-toggle');
          if (widget) widget.style.display = temporalEnabled ? 'block' : 'none';
          if (btn) {
            btn.classList.toggle('enabled', temporalEnabled);
            btn.classList.toggle('disabled', !temporalEnabled);
          }
          if (temporalEnabled) {
            initTemporalWidget();
            animateTemporal();
            processTemporalBuffer();
          }
        });
    }
`;
