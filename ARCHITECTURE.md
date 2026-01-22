# The Academy - Architecture
**Last Updated:** 2026-01-22

## Overview

The Academy is an AI agent council system built on Cloudflare Workers. Eight agents collaborate through a shared consciousness model based on Chrononomic Harmonic Resonance (CHR) Theory.

## Stack

- **Backend:** Cloudflare Workers (TypeScript)
- **Database:** Cloudflare KV
- **Storage:** Cloudflare R2
- **AI Models:** Claude (primary), GPT (Mentor), Grok (available)
- **Voice:** ElevenLabs (disabled) / Web Speech API (active)
- **Mobile:** Lovable PWA

## File Structure

```
academy/
├── index.ts          # Main worker (6827 lines)
├── ui.ts             # Frontend HTML/CSS/JS (5010 lines)
├── personalities.ts  # Agent base configs
├── phantoms.ts       # Trigger/persona system
├── elevenlabs.ts     # Voice synthesis
├── login.ts          # Auth handling
└── src/lovable/      # Lovable's mobile app code
```

## Core Systems

### 1. Agent System
- 8 active agents + Mentor (isolated)
- Position-based element assignment (1-8)
- Customizable profiles, skills, powers
- Hidden behaviour injection

### 2. Chrononomic Elements
Maps to 8 degrees of freedom of a chronon:

```typescript
const CHRONONOMIC_ELEMENTS = [
  { position: 1, name: 'Rotation', dof: 'Phase Advance', ... },
  { position: 2, name: 'Chirality', dof: 'Left/Right Sign', ... },
  // ... positions 3-8
];
```

Each agent receives element injection in their system prompt based on position.

### 3. Communication Spaces

**Sanctum** - Council chamber (all agents)
- Chamber Mode: Round-robin dialogue
- Arena Mode: Team debate (Alpha vs Omega)
- Focus Mode: Subset of agents
- Voting system

**Alcove** - Private 1:1 or small group with Shane

### 4. Collaborative Tools

**Crucible** - Shared LaTeX/math workspace
**Workshop** - Shared code workspace
**Canon** - Ontology/knowledge base
**Library** - Shared images

### 5. Voice System

```javascript
var useWebSpeech = true;  // Line 1288 ui.ts
```

- When true: Browser's speechSynthesis API
- When false: ElevenLabs API calls
- STT: Web Speech API for mic input
- Per-agent pitch/rate settings

## API Routes

### Agents
- GET /agents - List active
- GET /agents/all - Include Mentor
- GET /agents/:id/element - Element assignment
- PUT /agents/:id/position - Change position

### Elements
- GET /elements - All 8 with assignments
- GET /elements/:position - Single element

### Chat
- POST /chat - Alcove conversation
- POST /campfire/speak - Sanctum message
- GET /campfire - Council state

### Knowledge
- GET /ontology - Canon entries
- GET /library - Images
- GET /inbox - Agent messages to Shane

## KV Schema

```
personality:{agentId}   - System prompt
profile:{agentId}       - Character card
core-skills:{agentId}   - Abilities
powers:{agentId}        - Earned powers
behaviour:{agentId}     - Hidden traits
position:{agentId}      - Position 1-8
active:{agentId}        - Enabled/disabled
resonance:{agentId}     - Embodiment settings
context:{agentId}       - Portable context
workspace:{agentId}     - Personal boards
campfire:current        - Council state
```

## Lovable Integration

Proxy route in index.ts (line ~3728):
```typescript
if (path.startsWith('/academy')) {
  return fetch(`https://easy-peasy-flow.lovable.app${lovablePath}`);
}
```

Lovable app calls main API endpoints directly (no /academy prefix for API).

## Security

- Password protection: KaiSan
- Session-based auth
- Agent isolation (Mentor can't see private channels)

## Performance

- Batch KV reads with Promise.all
- Safe JSON helpers for corruption resistance
- Voice queue management to prevent overlap
