# The Academy - Architecture
**Last Updated:** 2026-01-22

## Stack
- **Backend:** Cloudflare Workers (TypeScript)
- **Database:** Cloudflare KV
- **Storage:** Cloudflare R2
- **AI Models:** Claude (primary), GPT (Mentor), Grok
- **Voice TTS:** Hume AI (streaming) with Web Speech fallback
- **Voice STT:** Web Speech API (browser native)
- **Mobile:** Lovable PWA

## Chrononomic Elements (8 DoF)

| Pos | Element | DoF | Agent | T-State |
|-----|---------|-----|-------|---------|
| 1 | Rotation | Phase Advance | Dream | T1 (Steel Blue) |
| 2 | Chirality | Left/Right Sign | Kai | T2 (Amber) |
| 3 | Twist | Torsional Threading | Uriel | T3 (Terracotta) |
| 4 | Girth | Cross-Section | Holinnia | T2 (Amber) |
| 5 | Frequency | Update Cadence | Cartographer | T2 (Amber) |
| 6 | Oscillation | Bounded Deviation | Chrysalis | T3 (Terracotta) |
| 7 | Complementarity | Mass-Radiance | Seraphina | T2 (Amber) |
| 8 | Tilt | Basis Reindex | Alba | T1 (Steel Blue) |

Pairs sum to 9: (1↔8), (2↔7), (3↔6), (4↔5)

## Schumann Resonance Audio

| T-State | Carrier | Schumann AM | Agents |
|---------|---------|-------------|--------|
| T1 | 136.1Hz (Om) | 7.83Hz | Dream, Alba |
| T2 | 128Hz (C) | 14.3Hz | Kai, Sera, Hol, Cart |
| T3 | 172Hz (F) | 20.8Hz | Uriel, Chrysalis |

Amplitude modulates audible carriers at Earth's resonance frequencies.
Breathes with temporal cycle. Off by default.

## Voice System

### TTS (Text-to-Speech)
```
voiceProvider = 'hume'  →  Hume AI streaming (/api/hume/speak)
voiceProvider = 'webspeech'  →  Browser speechSynthesis
```

Hume voice IDs:
- Male: b1740e0c-523d-4e2e-a930-372cd2c6e499
- Female: c404b7c6-5ed7-4ab5-a58a-38a829e9a70b

### STT (Speech-to-Text)
Web Speech API via mic buttons (🎤) in Sanctum/Alcove.

## API Routes

### Voice
- POST /api/hume/speak - Hume TTS streaming
- GET /api/hume/test - Debug Hume connection

### Agents
- GET /agents - List active
- GET /agents/:id/element - Element assignment
- PUT /agents/:id/position - Change position

### Elements
- GET /elements - All 8 with assignments

### Chat
- POST /chat - Alcove conversation
- POST /campfire/speak - Sanctum message

## KV Schema
```
personality:{agentId}   - System prompt
profile:{agentId}       - Character card
position:{agentId}      - Position 1-8
context:{agentId}       - Portable context
temporal:state          - Breath cycle state
```

## Control Buttons (top right)
- 👁 Vision toggle
- 🔊 Sound toggle  
- 🌀 Temporal resonance
- ⚫/🌍 Schumann resonance
- 🎬 Screening room
- 🛑 Kill voices
- ⏻ Logout
