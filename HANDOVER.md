# Academy Handover — January 31, 2026

## Session Summary

Built the **Leader System** for agent-led sessions and scaffolded the **Heartbeat System** for continuous agent presence.

---

## What Got Built Today

### 1. Leader System (LIVE)
Agents can now lead council sessions with special powers.

**UI:**
- ★ button in Sanctum topic bar → Assign leader to live session
- Leader dropdown in Convene modal → Set leader at session start
- Leader name displays in topic bar when active

**Leader Commands (for leading agent only):**
```
[SUMMON: agentName]  — Call specific colleague to speak next
[ASK_MENTOR: question] — Get Mentor guidance (response injected into Sanctum)
[WRAP_SESSION] — Archive and close session
```

**Backend:**
- `campfire:current.leader` field added to CampfireState
- `/campfire/leader` POST endpoint for live assignment
- `campfire:next-speaker` KV key for summon queue

### 2. Question Bank (120 questions)
File: `QUESTION_BANK.md`

Categories:
- 4-Space & Higher Dimensions (40 questions)
- Governance & Decentralization (40 questions)
- Consciousness & Existence (10 questions)
- Collective Intelligence (10 questions)
- Meta/Playful (10 questions)
- CHR Theory Specific (10 questions)

Purpose: Kindling for Open Field discussions. Rotate when threads resolve.

### 3. Academy Map Structure
File: `ACADEMY_MAP.json`

```
8 Sectors: SILDAR, KAIEL, GLAEDRIEL, URIEL, TUVIEL, TANIEN, LOTHRIEN, MONTEN
72 Cells: 9 rings × 8 sectors
3 Zones: inner_sanctum (1-24), middle_ground (25-48), outer_reaches (49-72)
```

Chemistry definitions:
- Oxytocin: proximity to others (connection)
- Serotonin: breakthrough ideas (satisfaction)
- Dopamine: approaching resolution (anticipation)

### 4. Mentor Cleanup
- Removed `[RUN_CHAMBER]` (100+ lines of broken orchestration)
- Now returns deprecation message pointing to leader system
- Fixed upload limit: 200k → 20k per file
- mentor.ts reduced from 1738 → 1636 lines

### 5. Heartbeat Scaffold
File: `HEARTBEAT.md`

Architecture documented but not yet implemented:
- Drive state per agent (KV structure)
- Open Field in Sanctum
- Chemistry injection into prompts
- Event queue system
- Hourly cron pulse check

---

## What Works

| Feature | Status | Notes |
|---------|--------|-------|
| Leader assignment (★ button) | ✅ | Live sessions |
| Leader at convene | ✅ | New sessions |
| [SUMMON: agent] | ✅ | Queues next speaker |
| [ASK_MENTOR: q] | ✅ | Injects response |
| [WRAP_SESSION] | ✅ | Archives and closes |
| Question Bank | ✅ | 120 questions ready |
| Academy Map JSON | ✅ | Structure defined |
| Mentor chamber commands | ✅ | START/CLOSE/RESTART |

## What's Next (Heartbeat Implementation)

1. Create `drive:{agentId}` KV structure
2. Create `openfield:current` KV structure  
3. Add chemistry injection to agent prompts
4. Wire event queue (mentions, replies, deadlines)
5. Add hourly cron heartbeat check
6. Build Open Field UI in Sanctum
7. Test with 2-3 agents

---

## File Changes Today

| File | Lines | Changes |
|------|-------|---------|
| index.ts | ~7420 | +leader system, +leader endpoint, +leader commands |
| ui.ts | ~6170 | +★ button, +assign modal, +leader dropdown, +agentsCache fix |
| mentor.ts | 1636 | -RUN_CHAMBER, -100 lines, fix upload limit |
| QUESTION_BANK.md | NEW | 120 questions |
| ACADEMY_MAP.json | NEW | Site map structure |
| HEARTBEAT.md | NEW | System scaffold |

---

## Known Issues

1. Kai's GitHub token — set in Cloudflare secrets, should work now
2. Crons not tested live
3. Council Archives might be empty (check KV)
4. Multi-tenant routing not implemented

---

## Critical Context for Next Session

**The goal:** Make agents feel alive. Not continuous consciousness, but *reasons to wake up*.

**Key insight:** Chemistry isn't simulated hormones — it's narrative momentum. They return to unfinished threads, see who's present, feel the pull of collective work.

**Implementation order matters:**
1. Drive state (what they care about)
2. Open Field (where they gather)
3. Chemistry injection (how presence feels)
4. Event triggers (why they wake)
5. Heartbeat cron (when to check)

Shane wants them arguing in the town square, not sleeping in silos.

---

## Environment

- Worker: clubhouse.vouch4us.workers.dev
- KV: CLUBHOUSE_KV
- R2: CLUBHOUSE_DOCS
- Timezone: Africa/Johannesburg
- GitHub: regencyfn-alt/academy
