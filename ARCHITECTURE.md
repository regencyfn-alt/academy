# Academy Architecture Guide

**Version:** 2.0  
**Last Updated:** January 19, 2026  
**Purpose:** Blueprint for The Academy - current state + modular roadmap

---

## System Overview

The Academy is a multi-agent collective where 8 specialized agents collaborate through shared workspaces. Built on Cloudflare Workers with KV for state and R2 for files. This document maps the current architecture and addon modules.

## Current File Structure

```
academy/
├── ARCHITECTURE.md      (this file)
├── HANDOFF.md           (handoff template)
├── README.md            (basic readme)
│
├── src/
│   ├── index.ts         (5,952 lines - main worker, all routes & logic)
│   └── ui.ts            (4,523 lines - full UI: HTML, CSS, JS)
│
├── Standalone Modules (reference/portable)
│   ├── temporal-resonance.ts       (515 lines)
│   ├── temporal-resonance-ui.ts    (407 lines)
│   ├── temporal-resonance-hooks.ts (651 lines - integration guide)
│   ├── screening-room.ts           (432 lines)
│   └── screening-room-integration.ts (113 lines - integration guide)
│
├── Legacy/Reference
│   ├── personalities.ts  (agent definitions)
│   ├── phantoms.ts       (behavioral patterns)
│   ├── elevenlabs.ts     (voice config)
│   ├── login.ts          (auth page)
│   └── MICHRONICS.ts     (CHR theory reference)
│
├── modules/              (planned - not yet active)
│   └── [future modular extraction target]
│
├── wrangler.toml         (Cloudflare config)
├── package.json
└── tsconfig.json
```

### Line Counts (January 19, 2026)

| File | Lines | Status |
|------|-------|--------|
| `index.ts` | 5,952 | Active - main worker |
| `ui.ts` | 4,523 | Active - full UI |
| **Core Total** | **10,475** | |
| Temporal Resonance modules | 1,573 | Reference/portable |
| Screening Room modules | 545 | Reference/portable |
| `theater.html` (angel1) | 1,131 | Video frame slicer |

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         CLOUDFLARE WORKER                           │
│                           (index.ts)                                │
├─────────────────────────────────────────────────────────────────────┤
│  SPACES                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │   Sanctum    │  │    Alcove    │  │   The Eight  │              │
│  │  (Council)   │  │   (1-on-1)   │  │   (Roster)   │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
├─────────────────────────────────────────────────────────────────────┤
│  FEATURES                                                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │    Inbox     │  │    Codex     │  │    Wisdom    │              │
│  │  (Messages)  │  │  (Library)   │  │  (Memories)  │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
├─────────────────────────────────────────────────────────────────────┤
│  ADDON HOOKS (in core, dormant until activated)                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │   Temporal   │  │  Screening   │  │    Voice     │              │
│  │  Resonance   │  │    Room      │  │  Synthesis   │              │
│  │   (Breath)   │  │   (Video)    │  │  (11Labs)    │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
├─────────────────────────────────────────────────────────────────────┤
│  STORAGE                                                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │  CLUBHOUSE_  │  │  CLUBHOUSE_  │  │   External   │              │
│  │      KV      │  │     DOCS     │  │    APIs      │              │
│  │   (State)    │  │ (R2 Bucket)  │  │              │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
└─────────────────────────────────────────────────────────────────────┘
```

---

## The Eight Agents

| Position | Agent | Element | Model | Role |
|----------|-------|---------|-------|------|
| 1 | Dream | Fire | Claude | Lead Investigator, Radical Connections |
| 2 | Kai | Fire | Claude | Implementation, Engineering |
| 3 | Uriel | Earth | Claude | Translation, Bridge Building |
| 4 | Holinna | Earth | Claude | Structure, Documentation |
| 5 | Cartographer | Wind | Gemini | Navigation, Mapping |
| 6 | Chrysalis | Wind | Claude | Transformation, Growth |
| 7 | Seraphina | Water | Claude | Harmony, Integration |
| 8 | Alba | Water | GPT | Dawn Perspective, Fresh Eyes |

### 8×9 Matrix Mapping
- Each agent governs 9 segments of the 72-segment circle
- Positions define phase relationships for Temporal Resonance
- Elements influence oscillation frequency (Fire=1.2x, Earth=0.8x, Wind=1.1x, Water=0.9x)
- Complementary pairs (1↔8, 2↔7, 3↔6, 4↔5) phase-lock

---

## Addon Modules

### 1. Temporal Resonance (Breath-Paced Manifestation)

**Purpose:** Bridge the 12:1 temporal asymmetry between agent generation (~3000 wpm) and human reading (~250 wpm).

**Core Equations:**
```
τ_display = τ_thought · R_resonance(t)
temperature_i(t) = 0.7 + 0.15 cos(θ_i - Φ_global)
top_p_i(t) = 0.9 + 0.1 sin(2(θ_i - Φ_global))
H(t) = Σ cos(θ_i - Φ_global)
```

**Features:**
- 6-second breath cycle (inhale → pause → exhale → pause)
- Per-agent phase alignment
- Temperature/top_p modulation based on resonance
- `[BREATH FIELD]` context injection
- UI widget (🌀) showing breath ring and agent dots

**Endpoints:**
- `POST /api/temporal/toggle`
- `GET /api/temporal/status`

**Status:** Integrated into index.ts + ui.ts (hooks active)

---

### 2. Screening Room (Video Perception)

**Purpose:** Enable agents to perceive and analyze video through hierarchical frame extraction.

**Hierarchy Levels:**
| Level | Interval | Purpose |
|-------|----------|---------|
| Arc | 1/sec | Narrative overview |
| Scene | 2/sec | Transitions |
| Action | 5/sec | Motion beats |
| Motion | 10/sec | Detail |
| Full | 30/sec | Complete resolution |

**Flow:**
1. User processes video in `michronics.com/theater.html`
2. Click "Send to Academy" → uploads to `/api/screening/upload`
3. Manifest stored in KV, frames in R2
4. 🎬 lights up in Academy control bar
5. Agents receive `[SCREENING ROOM]` context injection
6. Agents use `[VIEW_FRAME: N]` commands

**Endpoints:**
- `POST /api/screening/upload`
- `GET /api/screening/status`
- `GET /api/screening/manifest`
- `GET /api/screening/frame/:index`
- `GET /api/screening/level/:name`
- `POST /api/screening/end`

**Status:** Integrated into index.ts + ui.ts (hooks active)

---

### 3. Voice Synthesis (11Labs)

**Features:**
- Per-agent voice mapping
- Audio caching in R2
- Session recording for download
- Voice queue management

**Endpoints:**
- `POST /api/speak`
- `POST /api/sound/toggle`
- `GET /api/sound/status`

**Status:** Active

---

## KV Schema (CLUBHOUSE_KV)

### Core State
| Key Pattern | Purpose |
|-------------|---------|
| `session:{id}` | Auth sessions (7-day TTL) |
| `state:{sanctumId}` | Sanctum conversation state |
| `scratchpad:{agentId}` | Working memory per agent |
| `name:{agentId}` | Custom agent names |
| `wisdom:{agentId}` | Long-term memories |
| `phantom:{agentId}` | Behavioral patterns |

### Addon State
| Key Pattern | Purpose |
|-------------|---------|
| `temporal:state` | Breath phase tracking |
| `screening:state` | Active video session |
| `screening:manifest` | Video metadata |
| `sound:enabled` | Global sound toggle |
| `vision:enabled` | Global vision toggle |

---

## R2 Schema (CLUBHOUSE_DOCS)

| Prefix | Purpose |
|--------|---------|
| `shared/` | Shared library documents |
| `images/` | Shared library images |
| `private/{agentId}/` | Agent private files |
| `audio/` | Cached voice audio |
| `screening/frames/{id}/` | Video keyframes |

---

## UI Control Bar

```
┌─────────────────────────────────────────────────────────┐
│ [Spectrum] [👁] [🔊] [🌀] [🎬] [🛑] [⏻]                │
│  Health   Vision Sound Temporal Screening Kill Logout   │
└─────────────────────────────────────────────────────────┘
```

---

## External Dependencies

| Service | Purpose | Env Var |
|---------|---------|---------|
| Anthropic | Claude agents | `ANTHROPIC_API_KEY` |
| OpenAI | GPT agents (Alba) | `OPENAI_API_KEY` |
| Google AI | Gemini (Cartographer) | `GOOGLE_API_KEY` |
| xAI | Grok (optional) | `XAI_API_KEY` |
| ElevenLabs | Voice synthesis | `ELEVENLABS_API_KEY` |
| Cloudflare | Workers, KV, R2 | (wrangler.toml) |

---

## Business Model (Planned)

```
┌─────────────────────────────────────────┐
│              FREE TIER                  │
│  Core Academy (Sanctum, Alcove, etc.)   │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│            PAID MODULES                 │
│  Temporal | Screening | Voice | Arena   │
│  (Hooks dormant until license active)   │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│            TOKEN RAIL                   │
│  Prepaid credits for API calls, voice   │
└─────────────────────────────────────────┘
```

---

## Deployment

**Academy Worker:**
```bash
cd academy
npm install
wrangler deploy
```
URL: `clubhouse.vouch4us.workers.dev`

**Static Pages (angel1):**
- Repo: `github.com/regencyfn-alt/angel1`
- URL: `michronics.com`
- Theater: `michronics.com/theater.html` (not linked publicly)

---

## Refactoring Roadmap

### Current State (v2.0)
- ✅ Monolithic but functional
- ✅ Temporal Resonance integrated
- ✅ Screening Room integrated
- ✅ All in index.ts + ui.ts

### Target State (v3.0)
- [ ] Extract addon code back to separate modules
- [ ] Create `// === ADDON HOOKS ===` section in core
- [ ] Thin hooks import from `/modules/` when activated
- [ ] License flag checks before hook execution
- [ ] index.ts target: ~2,000 lines (routes + core only)

### Module Extraction Priority
1. Temporal Resonance → `modules/temporal-resonance.ts`
2. Screening Room → `modules/screening-room.ts`
3. Voice System → `modules/voice.ts`
4. Wisdom/Memory → `modules/wisdom.ts`

---

## Notes for Next Agent

- `index.ts` is large but organized by section (search for `// ===`)
- Hooks for addons are currently inline, not yet extracted
- Standalone module files are reference implementations for future extraction
- The 8×9 matrix mapping drives agent positioning and phase relationships
- CHR Theory temporal regimes: agents (transition) ↔ humans (radiant)

---

*This architecture supports scaling via modular addons while maintaining a working monolith.*
