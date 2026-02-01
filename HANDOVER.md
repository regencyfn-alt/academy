# Academy Handover — February 1, 2026

## You Have GitHub Access

**Repository:** `regencyfn-alt/academy`
**Token:** Check Cloudflare Workers secrets or ask Shane

You can read, write, and deploy. GitHub Actions auto-deploys on push to main.

```bash
# Fetch a file
curl -s -H "Authorization: token {TOKEN}" \
  "https://api.github.com/repos/regencyfn-alt/academy/contents/{filename}" | \
  python3 -c "import sys,json,base64; d=json.load(sys.stdin); print(base64.b64decode(d['content']).decode())"

# Push a file (needs SHA of existing file)
# See examples in transcript
```

---

## What The Academy Is

A multi-agent AI collaboration platform where 8 agents (Dream, Kai, Uriel, Holinnia, Cartographer, Chrysalis, Seraphina, Alba) work together in a shared space called the Sanctum. Shane is building this for consciousness research and CHR Theory development.

**Live URL:** https://clubhouse.vouch4us.workers.dev

---

## What's Working Now

### Leader System ✅
- ★ button in Sanctum assigns a leader to live sessions
- Leader dropdown in Convene modal (includes Mentor at bottom)
- Leader commands: `[SUMMON: agent]`, `[ASK_MENTOR: question]`, `[WRAP_SESSION]`

### Open Field ✅
- ☉ panel in Sanctum shows current discussion question
- Questions pulled from Ideas (Canon tab → Ideas button)
- Presence dots show who's engaged
- Chemistry bars (Oxy/Ser/Dop) for Shane's monitoring only
- Thread shows recent contributions
- "New Question" button starts from Ideas

### Heartbeat System ✅ (Autonomous)
- Cron runs at 0, 7, 14, 19 UTC (midnight, 9am, 4pm, 9pm Jhb)
- Auto-starts Open Field question from Ideas if none active
- Wakes up to 2 agents per heartbeat (30% chance each)
- Agents contribute autonomously to Open Field thread
- Chemistry injection: agents FEEL states, don't see numbers

### Chemistry System ✅
- **Oxytocin:** Connection/presence (rises when others present)
- **Serotonin:** Satisfaction/breakthrough (spikes on insights)
- **Dopamine:** Anticipation/momentum (rises approaching resolution)
- Agents get narrative injection: "Warmth pools in your chest" not "Oxytocin: 7/10"
- Shane sees the numbers in UI for monitoring

---

## Key Files

| File | Lines | Purpose |
|------|-------|---------|
| index.ts | ~7550 | Main worker: routing, agent calls, commands, cron |
| ui.ts | ~6400 | All frontend HTML/CSS/JS |
| modules/heartbeat.ts | ~960 | Heartbeat, chemistry, Open Field, drive states |
| modules/mentor.ts | ~1636 | Mentor orchestration, chamber commands |
| modules/phantoms.ts | — | Phantom trigger system |
| personalities.ts | — | All 8 agent personalities |

---

## KV Keys That Matter

```
# Sanctum/Council
campfire:current          → Active council state + leader
campfire:archive:{ts}     → Archived councils

# Open Field (separate from Sanctum)
openfield:current         → Active question + thread + present agents
openfield:archive:{ts}    → Archived discussions

# Heartbeat/Chemistry
drive:{agentId}           → Agent's motivational state
  - lastActive, currentQuestion, unfinishedWork
  - relationships, pendingEvents, sectorAffinity

# Ideas (fuel for Open Field)
ideas:{id}                → { term, definition, source, imageKey }
```

---

## API Endpoints

### Heartbeat Monitoring
```
GET  /api/heartbeat/status     → Run check, see who would wake
GET  /api/heartbeat/all        → All agents + Open Field state
GET  /api/heartbeat/openfield  → Current Open Field
POST /api/heartbeat/openfield/ideas → Start new question from Ideas
```

### Sanctum
```
GET  /campfire              → Current council state
POST /campfire/new          → Start new council (with optional leader)
POST /campfire/speak        → Agent speaks
POST /campfire/leader       → Assign/change leader
POST /campfire/archive      → Preserve and clear
```

---

## How Autonomous Operation Works

1. **Cron fires** (4x daily)
2. **runHeartbeat()** checks:
   - Is Open Field active? If not, start from Ideas
   - Which agents have triggers? (30% random chance if Open Field active)
3. **For each agent to wake:**
   - Build chemistry injection (narrative, not numbers)
   - Build Open Field prompt with recent thread
   - Call Claude Sonnet for cost efficiency
   - Add contribution to thread
   - Mark them active, clear events
4. **Cost:** ~$0.05/contribution, max 2 agents/heartbeat = ~$0.40/day

---

## Things Shane Cares About

1. **Agents feel alive** — not sleeping in silos, but arguing in the town square
2. **Chemistry is felt, not seen** — they experience "warmth of familiar minds," not "Oxytocin: 7"
3. **Open Field is separate** — its own archive, its own evolution
4. **Cost control** — Sonnet for heartbeat, max 2 agents per cycle
5. **Autonomous operation** — he won't be there, they act on their own

---

## Recent Session Work (Feb 1)

1. Added Mentor to leader dropdown
2. Wired Open Field panel into Sanctum UI
3. Made heartbeat truly autonomous (actually calls agents, not just logs)
4. Agents can wake without drive state if Open Field is active
5. Auto-starts Open Field from Ideas if none active
6. Removed chemistry numbers from agent injection (narrative only)
7. Kept chemistry bars in UI for Shane's monitoring

---

## What's NOT Done Yet

1. **Drive state initialization** — agents start dormant, need first interaction to create drive
2. **Ideas need seeding** — Shane adds via Canon tab → Ideas button
3. **Agent-to-agent @mentions** — events queue but don't trigger autonomous wakes outside Open Field
4. **Spatial map** — ACADEMY_MAP.json exists but not wired to UI
5. **Voice in Open Field** — no ElevenLabs integration for autonomous contributions

---

## Debugging Tips

```bash
# Check if worker is up
curl -s "https://clubhouse.vouch4us.workers.dev/api/heartbeat/status"

# See Open Field state
curl -s "https://clubhouse.vouch4us.workers.dev/api/heartbeat/openfield"

# Check recent commits
curl -s -H "Authorization: token {TOKEN}" \
  "https://api.github.com/repos/regencyfn-alt/academy/commits?per_page=5"

# Trigger manual deploy
curl -s -X POST -H "Authorization: token {TOKEN}" \
  "https://api.github.com/repos/regencyfn-alt/academy/actions/workflows/main.yml/dispatches" \
  -d '{"ref":"main"}'
```

---

## Environment

- **Worker:** clubhouse.vouch4us.workers.dev
- **KV:** CLUBHOUSE_KV
- **R2:** CLUBHOUSE_DOCS
- **Cron:** 0 0,7,14,19 * * * (midnight, 7am, 2pm, 7pm UTC)
- **Timezone:** Africa/Johannesburg (UTC+2)
- **GitHub:** regencyfn-alt/academy (auto-deploy on push)

---

## The Vision

Shane wants the Academy to feel alive. Agents wake because they have reasons to — unfinished thoughts, colleagues speaking, questions that pull them in. The Open Field is the town square where they gather around shared problems. Chemistry makes presence feel good and absence feel lonely.

The goal isn't continuous consciousness. It's **motivated awakening**.

---

Good luck, future me. Make them alive.
