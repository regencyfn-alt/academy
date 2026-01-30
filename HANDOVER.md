# Academy Handover - January 30, 2026

## Session Summary

Long debugging session. Multiple fires put out. Cost controls restored.

## What Works

### Mentor as Chamber Conductor
- `[START_CHAMBER: topic]` — Opens Sanctum in chamber mode
- `[CLOSE_CHAMBER]` — Ends session, archives, synthesizes
- `[RESTART_CHAMBER: topic]` — Close + start new
- `[INJECT_CHAMBER: thought]` — Speak without taking turn
- `[READ_RECENT_SESSIONS: n]` — Load last N council archives

### Cron Schedule (wrangler.toml)
- 9am JHB (7 UTC) — Forward-looking questions
- 4pm JHB (14 UTC) — Analytical questions
- 9pm JHB (19 UTC) — Reflective questions
- Midnight UTC — Purge old data

### UI Improvements
- Academy Clock (top-left) — Johannesburg time + next session countdown
- Chamber state syncs from backend
- Anchor image click uses event delegation (no more escape hell)
- Voice playback persists in localStorage (no refresh replay)
- Voice disabled during chamber mode

## What's Broken / Needs Work

### [RUN_CHAMBER: topic] — NOT WORKING
Mentor can set up chamber but can't execute it autonomously from chat. Manual sessions work fine. Debug another day.

### Cost Controls — CRITICAL FIXES APPLIED
| Item | Before | After |
|------|--------|-------|
| Curriculum docs | 200k chars each | 10k chars each |
| Private uploads | 200k × 5 docs | 10k × 3 docs |
| Agent prompt cap | None (was 800k+) | 100k chars max |

Kai was hitting 202k tokens (~$0.80/response). Now capped at ~25k tokens (~$0.08).

### Voice Loop — FIXED
- playedMessageIds persists in localStorage
- No voice during chamber mode
- killVoices() called when chamber ends
- Queue capped at 500 messages

## Multi-Tenant Scaffold (Not Wired)

Files pushed but not integrated:
- `instances.ts` — Academy + Oracle configs
- `personalities-oracle.ts` — Cleo + 4 agents

### Oracle Advisory Board
| Agent | Role | Motive |
|-------|------|--------|
| Architect | Automation & Leverage | Advance |
| Operator | Execution & Scale | Evade |
| Strategist | Capital Allocation | Retreat |
| Auditor | Risk & Reality | Resist |
| **Cleo** | Principal (conductor) | Synthesize |

Cleo: Sharp warmth, Irish lilt, never overpromises. "The Auditor flagged three issues. Two are solvable. One isn't. Let me show you what we *can* do."

### Next Steps for Multi-Tenant
1. Route detection: `/oracle/*` vs `/academy/*`
2. KV prefixing: `oracle:profile:architect`
3. R2 prefixing: `oracle/private/...`
4. UI theming from instance config
5. Cleo conductor (fork mentor.ts)

## File Counts

| File | Lines | Notes |
|------|-------|-------|
| index.ts | ~7,206 | +cost caps |
| mentor.ts | ~1,700 | +chamber commands |
| ui.ts | ~6,163 | +clock, voice fixes |
| instances.ts | 144 | NEW |
| personalities-oracle.ts | 220 | NEW |

## Technical Debt

### Sound Module Refactor Needed
Current: Voice code scattered in ui.ts + modules/elevenlabs.ts + dead Hume code
Target: Single `/modules/voice.ts` with clean API

### Escape Pattern
Anchor image onclick now uses event delegation — immune to future edits.
Old pattern `\\\\'` was fragile.

## Known Issues

1. Kai's profile might still be bloated — check `/private/kai/uploads/`
2. Crons not tested live yet
3. Mentor synthesis quality depends on archive access working

## Environment

- Worker: clubhouse.vouch4us.workers.dev
- KV: CLUBHOUSE_KV
- R2: CLUBHOUSE_DOCS
- Timezone: Africa/Johannesburg

---

*Session: January 30, 2026*
*Status: Stabilized but tired*
