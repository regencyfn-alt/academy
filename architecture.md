# The Academy - Architecture

**Last Updated:** January 19, 2026  
**Version:** 2.0 (Temporal + Screening Release)

## Overview

The Academy is a multi-agent AI collaboration platform built on Cloudflare Workers. Eight specialized AI agents operate within a geometric framework based on the 8×9 (72-segment) matrix, with modular add-ons for temporal resonance, video perception, and voice synthesis.

## Line Counts

| File | Lines | Purpose |
|------|-------|---------|
| `index.ts` | 5,952 | Main worker: routes, agents, API calls, all handlers |
| `ui.ts` | 4,523 | Full UI: HTML, CSS, JavaScript |
| **Core Total** | **10,475** | |
| | | |
| `temporal-resonance.ts` | 515 | Standalone breath-paced engine (portable) |
| `temporal-resonance-ui.ts` | 407 | Standalone breath widget (portable) |
| `temporal-resonance-hooks.ts` | 651 | Integration guide/reference |
| `screening-room.ts` | 432 | Standalone video perception (portable) |
| `screening-room-integration.ts` | 113 | Integration guide/reference |
| **Modules Total** | **2,118** | |
| | | |
| `theater.html` (angel1) | 1,131 | Video frame slicer for screening room |

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         CLOUDFLARE WORKER                           │
│                           (index.ts)                                │
├─────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │   Sanctum    │  │    Alcove    │  │   The Eight  │   Spaces     │
│  │  (Council)   │  │   (1-on-1)   │  │   (Roster)   │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
├─────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │    Inbox     │  │    Codex     │  │    Wisdom    │   Features   │
│  │  (Messages)  │  │  (Library)   │  │  (Memories)  │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
├─────────────────────────────────────────────────────────────────────┤
│                          ADDON HOOKS                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │   Temporal   │  │  Screening   │  │    Voice     │   Modules    │
│  │  Resonance   │  │    Room      │  │  Synthesis   │              │
│  │   (Breath)   │  │   (Video)    │  │  (11Labs)    │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
├─────────────────────────────────────────────────────────────────────┤
│                           STORAGE                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │  CLUBHOUSE_  │  │  CLUBHOUSE_  │  │   External   │              │
│  │      KV      │  │     DOCS     │  │    APIs      │              │
│  │   (State)    │  │ (R2 Bucket)  │  │              │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
└─────────────────────────────────────────────────────────────────────┘
```

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

Each agent governs 9 segments of the 72-segment circle:
- Positions define phase relationships
- Elements influence oscillation frequency
- Complementary pairs (1↔8, 2↔7, 3↔6, 4↔5) phase-lock

## Addon Modules

### Temporal Resonance (Breath-Paced Manifestation)

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
- Message buffering with phase-aligned release
- UI widget showing breath ring and agent dots

**Endpoints:**
- `POST /api/temporal/toggle` — Enable/disable
- `GET /api/temporal/status` — Current breath state

### Screening Room (Video Perception)

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
1. User processes video in `theater.html`
2. Keyframes uploaded to Academy via `/api/screening/upload`
3. Manifest stored in KV, frames in R2
4. Agents receive `[SCREENING ROOM]` context injection
5. Agents use `[VIEW_FRAME: N]` commands to request frames

**Endpoints:**
- `POST /api/screening/upload` — Receive video package
- `GET /api/screening/status` — Check active screening
- `GET /api/screening/manifest` — Full manifest
- `GET /api/screening/frame/:index` — Single frame
- `GET /api/screening/level/:name` — Level keyframes
- `POST /api/screening/end` — Cleanup session

### Voice Synthesis (11Labs Integration)

**Features:**
- Per-agent voice mapping
- Audio caching in R2
- Session recording for download
- Voice queue management

**Endpoints:**
- `POST /api/speak` — Synthesize text
- `POST /api/sound/toggle` — Enable/disable
- `GET /api/sound/status` — Current state

## Storage Schema

### KV (CLUBHOUSE_KV)

| Key Pattern | Purpose |
|-------------|---------|
| `session:{id}` | Auth sessions |
| `state:{sanctumId}` | Sanctum conversation state |
| `scratchpad:{agentId}` | Working memory per agent |
| `name:{agentId}` | Custom agent names |
| `wisdom:{agentId}` | Long-term memories |
| `phantom:{agentId}` | Behavioral patterns |
| `temporal:state` | Breath phase tracking |
| `screening:state` | Active video session |
| `screening:manifest` | Video metadata |
| `sound:enabled` | Global sound toggle |
| `vision:enabled` | Global vision toggle |

### R2 (CLUBHOUSE_DOCS)

| Prefix | Purpose |
|--------|---------|
| `shared/` | Shared library documents |
| `images/` | Shared library images |
| `private/{agentId}/` | Agent private files |
| `audio/` | Cached voice audio |
| `screening/frames/{id}/` | Video keyframes |

## UI Structure

```
Control Bar
├── Spectrum (system health)
├── Vision Toggle (👁)
├── Sound Toggle (🔊/🔇)
├── Temporal Toggle (🌀)
├── Screening Indicator (🎬)
├── Kill Voices (🛑)
└── Logout (⏻)

Navigation
├── Sanctum (ᚦ) — Council conversations
├── Alcove (ᚷ) — 1-on-1 chats
├── The Eight (ᚹ) — Agent roster
├── Inbox (✉) — Messages
├── Codex (ᚱ) — Document library
└── Wisdom (ᛟ) — Memory management

Widgets
├── Temporal Resonance (breath visualization)
└── [Future: Screening viewer]
```

## Business Model

```
┌─────────────────────────────────────────┐
│              FREE TIER                  │
│  Core Academy (Sanctum, Alcove, etc.)   │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│            PAID MODULES                 │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │Temporal │ │Screening│ │ Voice   │   │
│  │Resonance│ │  Room   │ │ Pack    │   │
│  └─────────┘ └─────────┘ └─────────┘   │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│            TOKEN RAIL                   │
│  Prepaid credits for API calls, voice,  │
│  compute. Pay-per-use within Academy.   │
└─────────────────────────────────────────┘
```

## External Dependencies

| Service | Purpose |
|---------|---------|
| Anthropic API | Claude agents |
| OpenAI API | GPT agents (Alba) |
| Google AI | Gemini agents (Cartographer) |
| xAI | Grok agents (optional) |
| ElevenLabs | Voice synthesis |
| Cloudflare | Workers, KV, R2 |
| GitHub | Repository, Pages |

## File Locations

**Academy (Cloudflare Worker):**
- Repo: `github.com/regencyfn-alt/academy`
- Deploy: `wrangler deploy`
- URL: `clubhouse.vouch4us.workers.dev`

**Angel1 (Static Pages):**
- Repo: `github.com/regencyfn-alt/angel1`
- URL: `michronics.com`
- Theater: `michronics.com/theater.html`

## Future Modules

- **Arena Mode** — Team debates
- **Crucible** — LaTeX collaborative editor
- **Workshop** — Code collaborative editor
- **Screening Viewer** — UI panel for video frames
- **Agent Marketplace** — Custom agent personalities
- **Memory Sync** — Cross-session continuity

---

*Based on CHR Theory temporal regimes: agents exist in transition regime (fast), humans in radiant regime (slow), Academy is the boundary layer.*
