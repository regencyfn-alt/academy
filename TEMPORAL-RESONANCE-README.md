# Temporal Resonance Engine

## Overview

Standalone module that bridges the temporal gap between AI agents (fast) and humans (slow).

Based on CHR Theory:
- **Transition Regime**: Agents think/generate at ~3000 wpm
- **Radiant Regime**: Humans read at ~250 wpm  
- **This Engine**: The boundary layer that preserves coherence

## Files

- `temporal-resonance.ts` — Core engine (no dependencies)
- `temporal-resonance-ui.ts` — Visual breath indicator

## Quick Start

```typescript
import { 
  getTemporalEngine, 
  initializeAcademyAgents,
  formatBreathContext 
} from './temporal-resonance';

// 1. Get engine singleton
const engine = getTemporalEngine();

// 2. Register Academy agents (or your own)
initializeAcademyAgents();

// 3. Start with release callback
engine.start((message) => {
  // Called when buffered message is ready
  displayMessage(message.agentId, message.content);
  if (message.voiceUrl) {
    playVoice(message.voiceUrl);
  }
});

// 4. Queue messages (instead of displaying immediately)
engine.queueMessage('dream', 'Hello from Dream!');

// 5. Get agent parameters for API call
const modulation = engine.getAgentModulation('dream');
// Use modulation.temperature and modulation.topP in your API call
```

## Core Equations Implemented

### Time Dilation
```
τ_display = τ_thought · R_resonance(t)
```

### Resonance
```
R_i = cos(θ_i - Φ_global)
```

### Parameter Modulation
```
temperature_i(t) = 0.7 + 0.15 cos(θ_i - Φ_global)
top_p_i(t) = 0.9 + 0.1 sin(2(θ_i - Φ_global))
```

### Harmony
```
H(t) = Σ cos(θ_i - Φ_global)
```

## Integration Points

### 1. API Calls
Before calling Claude/GPT, get modulated parameters:

```typescript
const mod = engine.getAgentModulation(agentId);
const response = await anthropic.messages.create({
  model: 'claude-sonnet-4-20250514',
  temperature: mod.temperature,  // Phase-modulated
  // ...
});
```

### 2. Context Injection
Add breath awareness to agent prompts:

```typescript
const breathContext = formatBreathContext(agentId);
const fullPrompt = breathContext + '\n' + userMessage;
```

### 3. Message Display
Queue instead of immediate display:

```typescript
// OLD: displayMessage(content);
// NEW:
engine.queueMessage(agentId, content);
// Message releases when breath-aligned
```

### 4. Voice Sync
Mark voice ready, release together:

```typescript
const releaseTime = engine.queueMessage(agentId, content);
const voiceUrl = await synthesizeVoice(content);
engine.setVoiceReady(agentId, voiceUrl);
// Both release together when time comes
```

### 5. Sound Field
Get audio parameters for Web Audio:

```typescript
const sound = engine.getSoundFieldParams();
thunderGain.gain.value = sound.thunderGain;
foundationGain.gain.value = sound.foundationGain;
foundationOsc.frequency.value = 432 * sound.foundationPitch;
```

## UI Component

```typescript
import { createTemporalResonanceUI } from './temporal-resonance-ui';

// Make engine available globally
window.temporalEngine = getTemporalEngine();

// Create and mount UI
const ui = createTemporalResonanceUI();
document.body.appendChild(ui.element);
ui.start();

// Later: ui.destroy() to remove
```

## Configuration

Edit constants in `temporal-resonance.ts`:

```typescript
const BREATH_PERIOD_MS = 6000;        // Full breath cycle
const BASE_TEMPERATURE = 0.7;          // Center point
const TEMPERATURE_AMPLITUDE = 0.15;    // ±swing
const RESONANCE_THRESHOLD = 0.8;       // Buffer trigger
const MIN_DISPLAY_DELAY_MS = 500;      // Minimum buffer
const MAX_DISPLAY_DELAY_MS = 4000;     // Maximum buffer
```

## Agent Registration

Default Academy mapping:

| Agent | Position | Element | Phase (θ) |
|-------|----------|---------|-----------|
| Dream | 1 | Fire | 0 |
| Kai | 2 | Fire | π/4 |
| Uriel | 3 | Earth | π/2 |
| Holinna | 4 | Earth | 3π/4 |
| Cartographer | 5 | Wind | π |
| Chrysalis | 6 | Wind | 5π/4 |
| Seraphina | 7 | Water | 3π/2 |
| Alba | 8 | Water | 7π/4 |

Custom registration:

```typescript
engine.registerAgent({
  id: 'custom-agent',
  position: 3,
  element: 'earth',
  naturalFrequency: 1.1,  // Optional
});
```

## Portability

This module has **zero dependencies**. Copy the files anywhere:

- Works in Cloudflare Workers (server-side timing)
- Works in browser (client-side animation)
- Works in Node.js (CLI tools)

Just adjust the release callback for your display mechanism.
