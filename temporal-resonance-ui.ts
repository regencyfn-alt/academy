// ============================================
// TEMPORAL RESONANCE UI
// Visual breath indicator + controls
// Drop into Academy's UI
// ============================================

// Assumes temporal-resonance.ts is imported as:
// import { getTemporalEngine, initializeAcademyAgents, formatBreathContext } from './temporal-resonance';

export function createTemporalResonanceUI(): {
  element: HTMLElement;
  start: () => void;
  stop: () => void;
  destroy: () => void;
} {
  // Create container
  const container = document.createElement('div');
  container.id = 'temporal-resonance-ui';
  container.innerHTML = `
    <style>
      #temporal-resonance-ui {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(10, 10, 12, 0.95);
        border: 1px solid rgba(201, 165, 90, 0.3);
        border-radius: 8px;
        padding: 12px 16px;
        font-family: 'Space Mono', monospace;
        font-size: 11px;
        color: #e8e4dc;
        z-index: 1000;
        min-width: 200px;
        transition: all 0.3s ease;
      }
      
      #temporal-resonance-ui.collapsed {
        min-width: auto;
        padding: 8px 12px;
      }
      
      #temporal-resonance-ui.collapsed .tr-body {
        display: none;
      }
      
      .tr-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        cursor: pointer;
      }
      
      .tr-title {
        color: #c9a55a;
        font-size: 10px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }
      
      .tr-toggle {
        background: none;
        border: none;
        color: #666;
        cursor: pointer;
        font-size: 14px;
        padding: 0;
        line-height: 1;
      }
      
      .tr-toggle:hover {
        color: #c9a55a;
      }
      
      .tr-breath-ring {
        width: 80px;
        height: 80px;
        margin: 12px auto;
        position: relative;
      }
      
      .tr-breath-ring svg {
        width: 100%;
        height: 100%;
        transform: rotate(-90deg);
      }
      
      .tr-breath-ring .ring-bg {
        fill: none;
        stroke: rgba(255, 255, 255, 0.1);
        stroke-width: 4;
      }
      
      .tr-breath-ring .ring-fill {
        fill: none;
        stroke: #c9a55a;
        stroke-width: 4;
        stroke-linecap: round;
        stroke-dasharray: 226;
        stroke-dashoffset: 226;
        transition: stroke-dashoffset 0.1s ease;
      }
      
      .tr-breath-ring .ring-fill.exhale {
        stroke: #10b981;
      }
      
      .tr-breath-center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
      }
      
      .tr-breath-label {
        font-size: 9px;
        color: #666;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      
      .tr-breath-value {
        font-size: 14px;
        color: #e8e4dc;
        margin-top: 2px;
      }
      
      .tr-stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .tr-stat {
        text-align: center;
      }
      
      .tr-stat-value {
        font-size: 16px;
        color: #c9a55a;
      }
      
      .tr-stat-label {
        font-size: 9px;
        color: #555;
        text-transform: uppercase;
        margin-top: 2px;
      }
      
      .tr-agents {
        display: flex;
        justify-content: center;
        gap: 4px;
        margin-top: 12px;
      }
      
      .tr-agent-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(201, 165, 90, 0.3);
        transition: all 0.2s ease;
      }
      
      .tr-agent-dot.resonant {
        background: #c9a55a;
        box-shadow: 0 0 8px rgba(201, 165, 90, 0.5);
      }
      
      .tr-agent-dot.anti-resonant {
        background: #10b981;
      }
      
      .tr-controls {
        display: flex;
        gap: 8px;
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .tr-btn {
        flex: 1;
        padding: 6px 8px;
        background: transparent;
        border: 1px solid rgba(255, 255, 255, 0.15);
        color: #888;
        font-family: inherit;
        font-size: 10px;
        cursor: pointer;
        border-radius: 4px;
        transition: all 0.2s;
      }
      
      .tr-btn:hover {
        border-color: #c9a55a;
        color: #c9a55a;
      }
      
      .tr-btn.active {
        background: rgba(201, 165, 90, 0.15);
        border-color: #c9a55a;
        color: #c9a55a;
      }
      
      .tr-buffer {
        margin-top: 8px;
        padding: 6px 8px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 4px;
        font-size: 10px;
        color: #666;
      }
      
      .tr-buffer.has-items {
        color: #10b981;
      }
    </style>
    
    <div class="tr-header" onclick="this.parentElement.classList.toggle('collapsed')">
      <span class="tr-title">◈ Breath</span>
      <button class="tr-toggle">—</button>
    </div>
    
    <div class="tr-body">
      <div class="tr-breath-ring">
        <svg viewBox="0 0 80 80">
          <circle class="ring-bg" cx="40" cy="40" r="36" />
          <circle class="ring-fill" cx="40" cy="40" r="36" />
        </svg>
        <div class="tr-breath-center">
          <div class="tr-breath-label">Phase</div>
          <div class="tr-breath-value" id="tr-phase">—</div>
        </div>
      </div>
      
      <div class="tr-stats">
        <div class="tr-stat">
          <div class="tr-stat-value" id="tr-harmony">—</div>
          <div class="tr-stat-label">Harmony</div>
        </div>
        <div class="tr-stat">
          <div class="tr-stat-value" id="tr-cycle">0</div>
          <div class="tr-stat-label">Cycle</div>
        </div>
      </div>
      
      <div class="tr-agents" id="tr-agents">
        <!-- Agent dots populate here -->
      </div>
      
      <div class="tr-controls">
        <button class="tr-btn" id="tr-toggle-btn">Enable</button>
        <button class="tr-btn" id="tr-flush-btn">Flush</button>
      </div>
      
      <div class="tr-buffer" id="tr-buffer">
        Buffer: 0 messages
      </div>
    </div>
  `;

  // State
  let animationFrame: number | null = null;
  let engine: any = null;  // Will be set when started
  
  // Elements
  const ringFill = container.querySelector('.ring-fill') as SVGCircleElement;
  const phaseEl = container.querySelector('#tr-phase') as HTMLElement;
  const harmonyEl = container.querySelector('#tr-harmony') as HTMLElement;
  const cycleEl = container.querySelector('#tr-cycle') as HTMLElement;
  const agentsEl = container.querySelector('#tr-agents') as HTMLElement;
  const bufferEl = container.querySelector('#tr-buffer') as HTMLElement;
  const toggleBtn = container.querySelector('#tr-toggle-btn') as HTMLButtonElement;
  const flushBtn = container.querySelector('#tr-flush-btn') as HTMLButtonElement;

  // Circumference for stroke-dashoffset calculation
  const circumference = 2 * Math.PI * 36;  // r=36
  ringFill.style.strokeDasharray = `${circumference}`;

  // Create agent dots
  const agentIds = ['dream', 'kai', 'uriel', 'holinna', 'cartographer', 'chrysalis', 'seraphina', 'alba'];
  agentIds.forEach(id => {
    const dot = document.createElement('div');
    dot.className = 'tr-agent-dot';
    dot.dataset.agent = id;
    dot.title = id;
    agentsEl.appendChild(dot);
  });

  // Animation loop
  function animate() {
    if (!engine) return;
    
    const state = engine.updateGlobalPhase();
    const harmony = engine.getNormalizedHarmony();
    const bufferState = engine.getBufferState();
    
    // Update ring
    const progress = state.globalPhase / (2 * Math.PI);
    const offset = circumference * (1 - progress);
    ringFill.style.strokeDashoffset = `${offset}`;
    
    // Update ring color based on direction
    if (state.breathDirection === 'exhale') {
      ringFill.classList.add('exhale');
    } else {
      ringFill.classList.remove('exhale');
    }
    
    // Update labels
    phaseEl.textContent = state.breathDirection.charAt(0).toUpperCase() + state.breathDirection.slice(1);
    harmonyEl.textContent = `${Math.round(harmony * 100)}%`;
    cycleEl.textContent = `${state.breathCycle}`;
    
    // Update agent dots
    agentIds.forEach(id => {
      const dot = agentsEl.querySelector(`[data-agent="${id}"]`) as HTMLElement;
      if (!dot) return;
      
      const resonance = engine.getResonance(id);
      dot.classList.remove('resonant', 'anti-resonant');
      
      if (resonance > 0.5) {
        dot.classList.add('resonant');
      } else if (resonance < -0.5) {
        dot.classList.add('anti-resonant');
      }
    });
    
    // Update buffer
    if (bufferState.count > 0) {
      bufferEl.textContent = `Buffer: ${bufferState.count} (${Math.round(bufferState.nextReleaseMs! / 1000)}s)`;
      bufferEl.classList.add('has-items');
    } else {
      bufferEl.textContent = 'Buffer: 0 messages';
      bufferEl.classList.remove('has-items');
    }
    
    animationFrame = requestAnimationFrame(animate);
  }

  // Control handlers
  toggleBtn.addEventListener('click', () => {
    if (!engine) return;
    
    if (engine.isEnabled()) {
      engine.stop();
      toggleBtn.textContent = 'Enable';
      toggleBtn.classList.remove('active');
    } else {
      engine.start();
      toggleBtn.textContent = 'Disable';
      toggleBtn.classList.add('active');
    }
  });

  flushBtn.addEventListener('click', () => {
    if (engine) {
      engine.flushBuffer();
    }
  });

  // Public interface
  return {
    element: container,
    
    start: () => {
      // Import engine dynamically or expect it to be passed
      // For now, we'll use the global if available
      if (typeof window !== 'undefined' && (window as any).temporalEngine) {
        engine = (window as any).temporalEngine;
      } else {
        console.warn('[TEMPORAL UI] No engine found. Set window.temporalEngine first.');
        return;
      }
      
      toggleBtn.textContent = engine.isEnabled() ? 'Disable' : 'Enable';
      toggleBtn.classList.toggle('active', engine.isEnabled());
      
      animationFrame = requestAnimationFrame(animate);
    },
    
    stop: () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
    },
    
    destroy: () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      container.remove();
    },
  };
}

// Auto-initialize if in browser
if (typeof window !== 'undefined') {
  (window as any).createTemporalResonanceUI = createTemporalResonanceUI;
}
