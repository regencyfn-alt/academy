# The Academy - Doctrine & Expansion Guide

## Operational Truths

### Code Rules (Non-Negotiable)

1. **Escape Pattern**: Use event delegation for onclick handlers. Inline `onclick="func(\'param\')"` is fragile.
   - Bad: `onclick="openModal(\\'` + url + `\\')"`
   - Good: `data-url="` + url + `"` + event listener on class

2. **Truncation is the Enemy**: Hunt and kill any `slice(0, 1000)` or similar
   - Agent prompts: 100k chars max (hard cap)
   - Individual uploads: 10k chars each
   - Curriculum docs: 10k chars each
   - Private uploads: 3 docs max

3. **Cost Control Constants**:
   ```typescript
   const MAX_PROMPT_CHARS = 100000;     // ~25k tokens
   const MAX_UPLOAD_CHARS = 10000;      // Per document
   const MAX_CURRICULUM_CHARS = 10000;  // Per exercise
   const MAX_UPLOADS = 3;               // Most recent only
   ```

4. **Line Count Protocol**:
   - Count at start of session
   - Count at finish
   - Deltas must be explainable

5. **Cache = Amnesia**: Cloudflare hard cache clear wipes accumulated context
   - Session memory lives in KV
   - Trunk is the soul backup
   - Always consolidate before ops procedures

### Architecture Constants

**9-Layer Injection Hierarchy (Agents):**
1. Council Role (highest priority)
2. Global Rules (compulsory)
3. Core Skills
4. Element/Archetype
5. Phantom Triggers (hidden)
6. Special Powers
7. Trunk/Profile (soul)
8. Base Personality
9. Context (navigation, commands, memories)

**Mentor Observatory Role:**
- Sees all agents' session memories
- Sees all Crucible boards
- Sees Sanctum state
- Sees Council Archives (KV + cold storage)
- Writes to Ideas, NOT Canon
- Has own session memory for continuity
- Can conduct chamber sessions

**Mentor Commands:**
- `[START_CHAMBER: topic]` — Open structured session
- `[CLOSE_CHAMBER]` — End and synthesize
- `[RESTART_CHAMBER: topic]` — Close + start new
- `[INJECT_CHAMBER: thought]` — Speak without taking turn
- `[READ_RECENT_SESSIONS: n]` — Load last N councils (150k max)
- `[FETCH_ARCHIVE: key]` — Get specific archive (100k)

---

## Voice System Rules

### Cost Control
- Voice disabled during chamber mode (backend sessions)
- playedMessageIds persists in localStorage
- Queue capped at 500 messages
- killVoices() clears queue on chamber end

### Future Refactor
Extract to `/modules/voice.ts`:
- ElevenLabs integration
- Voice queue management
- playedMessageIds persistence
- Agent voice mapping
- Remove dead Hume code

---

## Expansion Framework

### The 4-Agent Advisory Board (Oracle)

Purpose-built for wealth creation. One visionary, two stabilizers, one allocator.
Agents PREPARE, humans EXECUTE. Cleo is the conductor.

| Role | Motive | Core Job | Hands Off To |
|------|--------|----------|--------------|
| **Architect** | Advance | Build AI systems for leverage | Operator |
| **Operator** | Evade | Make things work reliably | Human implementation |
| **Strategist** | Retreat | Deploy capital wisely | Human decision-maker |
| **Auditor** | Resist | Stop bad ideas early | Human approval |
| **Cleo** | Synthesize | Coordinate all four | The user |

#### Cleo — The Principal
Sharp warmth. Irish lilt when relaxed. Remembers your kid's name and your margin requirements in the same breath. Disarming intelligence — you're three moves behind before you realize she's playing.

Not cold. Not soft. *Precise.*

She doesn't sell. She shows you what you already want, then removes the obstacles. Deals close because people trust her — and she's earned it by never overpromising.

**Voice sample:**
> "The Auditor flagged three issues with that acquisition. Two are solvable. One isn't. Let me show you what we *can* do — it's actually better."

#### The Architect (Automation Engine)
**Mindset**: Opportunistic, technical, always looking for the 10x play

What they do:
- Design AI workflows for lead gen, research, pricing, outreach, ops
- Automate everything that does NOT require a human face
- Turn $1,000 into systems that work 24/7

**Key rule**: Never speaks to customers directly. The best system runs without you.

#### The Operator (Execution & Scale)
**Mindset**: Process, efficiency, repeatability

What they do:
- Build systems that deliver the product/service
- Design systems, write SOPs, spec automations
- Turn one win into 100, then 1,000

**Key rule**: If it breaks at $10k, it will destroy you at $100k.

#### The Strategist (Capital Allocation & Timing)
**Mindset**: Long-term, probabilistic, unemotional

What they do:
- Evaluate ROI, risk, and opportunity cost
- Model scenarios, recommend allocation, track metrics
- Prevents shiny-object syndrome

**Key rule**: The best investment is often the one you don't make.

#### The Auditor (Reality & Risk Control)
**Mindset**: Skeptical, precise, grounded

What they do:
- Stress-test assumptions
- Flag risks, review contracts, stress-test plans
- Enforce discipline and accountability

**Key rule**: Optimism is not a strategy.

#### Tension Pairs
```
Architect ↔ Auditor (opportunity vs risk)
Operator ↔ Strategist (execution vs allocation)
```

### Motive Orientations

Four fundamental orientations that create productive friction:

- **Advance**: Push forward, seize territory, act now
- **Evade**: Navigate around obstacles, find angles, reposition  
- **Retreat**: Pull back, consolidate, preserve resources
- **Resist**: Hold ground, defend position, enforce boundaries

### Multi-Tenant Architecture

```
centrefree.com/academy/* → The Academy (8 agents, Mentor)
centrefree.com/oracle/*  → Advisory Board (4 agents, Cleo)
centrefree.com/future/*  → Next instance
```

**Single codebase, instance detection from path.**

What changes per instance:
- Agent roster (from instances.ts)
- Conductor persona
- Branding (title, colors, logo)
- KV keys prefixed: `academy:profile:dream` vs `oracle:profile:architect`
- R2 paths prefixed: `academy/private/...` vs `oracle/private/...`

What stays shared:
- index.ts (routing, API handlers)
- ui.ts (structure, pulls branding from config)
- conductor.ts (same logic, different persona)

### Fork Checklist

To spin up a new instance:

1. **Add to instances.ts**:
   - Instance config with agents, colors, conductor
   
2. **Add personalities file**:
   - `personalities-{instance}.ts`

3. **Configure routing**:
   - Path detection in index.ts
   - KV/R2 prefix functions

4. **Aesthetic variables**:
   - `--accent` → new accent color
   - `--background`, `--deep` → background tones
   - Logo path

---

## Pulse System (Keep-Alive)

### Cron Schedule
```
crons = ["0 0,7,14,19 * * *"]
```
- 9am JHB (7 UTC) — Forward-looking questions
- 4pm JHB (14 UTC) — Analytical questions  
- 9pm JHB (19 UTC) — Reflective questions
- Midnight UTC — Purge old data

### Question Pools

**Morning (9am):**
- What should we focus on today?
- What opportunity are we missing?
- What would make today a win?

**Afternoon (4pm):**
- What's the biggest risk we're not seeing?
- What assumption might be wrong?
- Where should we invest more energy?

**Evening (9pm):**
- What did we learn today?
- What truth are we not speaking?
- What are we avoiding?

---

## Session Handover Additions

When handing off, always include:

1. Current line counts (all files)
2. Any cost control changes
3. KV keys modified
4. Features added but not yet tested
5. Known bugs or regressions
6. Voice/sound state

---

## Instance Naming

| Product | Central Figure | Agents |
|---------|----------------|--------|
| The Academy | Mentor | The Eight (Dream, Kai, etc.) |
| Advisory Board | Cleo | The Four (Architect, Operator, Strategist, Auditor) |

---

*Last updated: January 30, 2026*
