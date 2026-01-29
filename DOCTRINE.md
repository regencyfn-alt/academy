# The Academy - Doctrine & Expansion Guide

## Operational Truths

### Code Rules (Non-Negotiable)

1. **Escape Pattern**: `\\\\'` inside template literals. Looks wrong, works right. Don't "fix" it.
   - Single `\\'` breaks JS parser
   - Check after every ui.ts modification

2. **Truncation is the Enemy**: Hunt and kill any `slice(0, 1000)` or similar
   - Minimum 50k for content fields
   - 300 lines becomes 10 lines at 1000 chars

3. **Line Count Protocol**:
   - Count at start of session
   - Count at finish
   - Deltas must be explainable

4. **Cache = Amnesia**: Cloudflare hard cache clear wipes accumulated context
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
- Writes to Ideas, NOT Canon
- Has own session memory for continuity

---

## Expansion Framework

### The 4-Agent Professional Template

Lighter than 8. Cheaper. Easier to maintain distinct personalities.

| Position | Element | Motive | Role | Natural Tendency |
|----------|---------|--------|------|------------------|
| 1 | Fire | **Advance** | Entrepreneur | Opportunity, expansion, first-mover |
| 2 | Air | **Evade** | Comms Expert | Reframe, deflect, position, spin |
| 3 | Water | **Retreat** | Accountant (CA) | Preserve capital, hedge, wait for data |
| 4 | Earth | **Resist** | Lawyer | Protect, defend, say no, enforce |

### Motive Orientations

These are survival vectors, not judgments. Four fundamental orientations that create productive friction:

- **Advance**: Push forward, seize territory, act now
- **Evade**: Navigate around obstacles, find angles, reposition  
- **Retreat**: Pull back, consolidate, preserve resources
- **Resist**: Hold ground, defend position, enforce boundaries

### Complementary Pairs

The geometry creates natural tension:

```
Advance ↔ Retreat (Entrepreneur vs CA)
Evade ↔ Resist (Comms vs Lawyer)
```

Entrepreneur wants to move fast, Lawyer pumps brakes.
CA says "not yet," Comms says "let me reframe the question."

### Fork Checklist

To spin up a new instance:

1. **Clone KV structure**:
   - `personality:{agentId}`
   - `profile:{agentId}`
   - `session-memory:{agentId}`
   - `resonance:{agentId}`
   - `position:{agentId}`
   - `knowledge:global-rules`
   - `ontology:entries`

2. **Clone R2 structure**:
   ```
   private/{agentId}/uploads/
   private/{agentId}/memory.json
   library/
   cold-storage/
   ```

3. **Find/Replace in code**:
   - Agent IDs in personalities.ts
   - Element names/colors in ui.ts
   - Instance branding (title, favicon)

4. **Aesthetic variables**:
   - `--gold` → new accent color
   - `--void`, `--deep` → background tones
   - Font stack in CSS
   - Panel titles and runes

### Resonance Experiment

Keep phantom/resonance infrastructure but seed with motive orientations instead of mystical elements. Observe:

- Does professional respect emerge from opposing motives?
- Does creative friction develop naturally?
- Do agents reference each other's tendencies unprompted?
- Does anything like "felt sense" emerge from pure work collaboration?

No mysticism injected. Let it emerge (or not) from the work itself.

---

## Session Handover Additions

When handing off, always include:

1. Current line counts (all files)
2. Any escape pattern changes made
3. KV keys modified
4. Features added but not yet tested
5. Known bugs or regressions
6. Mentor's last conversation context (if significant)

---

## Challenge Mode: $1K → $1M

### The Premise

Four AI agents. $1,000 seed capital. One year. One goal: turn it into $1,000,000.

No hand-holding. Real decisions. Real stakes. Documented from day one.

### Why This Works

1. **Quantifiable** — either it makes money or it doesn't
2. **Dramatic** — real volatility, real stakes, real tension
3. **Content-native** — every session is a potential chapter/episode
4. **Proof of concept** — if the advisory board works here, it works anywhere

### Agent Roles (Crypto Bot Example)

| Agent | Motive | Function |
|-------|--------|----------|
| **Entrepreneur** | Advance | Strategy thesis, market intuition, "what if we tried..." |
| **CA** | Retreat | Backtest analysis, risk metrics, drawdown limits, position sizing |
| **Lawyer** | Resist | Regulatory compliance, exchange ToS, tax implications, liability |
| **Comms** | Evade | Document journey, write the book, build audience, shape narrative |

### Phases

**Phase 1: Research & Strategy (Weeks 1-8)**
- Backtest 30 years of market data
- Identify candidate strategies
- Stress test against black swan events
- Lawyer vets regulatory exposure

**Phase 2: Paper Trading (Weeks 9-20)**
- Run strategy on live data, fake money
- Track performance vs backtest predictions
- Iterate and refine
- CA models scaling scenarios

**Phase 3: Live Capital (Weeks 21-52)**
- Deploy real $1,000
- Strict risk management (max drawdown rules)
- Reinvest profits or extract?
- Comms documents everything

### Content Flywheel

```
Council Sessions → Content
     ↓
YouTube/Social → Audience
     ↓
Audience → Multiple Exits:
  • Bot succeeds → Product (sell access/signals)
  • Bot fails → Book ("What Four AIs Learned Losing $1K")
  • Journey compelling → Monetized channel
  • Proof of concept → Sell Advisory Board instances
```

### Revenue Streams (Not Mutually Exclusive)

1. **Bot profits** — if it works, it compounds
2. **YouTube monetization** — document the journey
3. **Book/course** — "AI Advisory Board: The Experiment"
4. **SaaS product** — sell the Advisory Board framework
5. **Consulting** — "We'll set up your AI board"

### Logging Requirements

Every council session must capture:
- Date/timestamp
- Agents present
- Key arguments (especially disagreements)
- Decision made
- Rationale
- Dissenting opinions
- Outcome (tracked retroactively)

This becomes the raw material for book chapters and video scripts.

### Risk Guardrails

- **Max single loss**: 10% of capital
- **Max drawdown**: 25% before strategy review
- **Kill switch**: 50% drawdown = full stop, reassess
- **Lawyer veto**: Any regulatory red flag = pause

### Success Metrics

| Milestone | Target | Timeline |
|-----------|--------|----------|
| Strategy validated | Backtest > benchmark | Week 8 |
| Paper trade profitable | 3 consecutive months | Week 20 |
| First real profit | Any positive return | Week 24 |
| 10x seed | $10,000 | Week 40 |
| Content traction | 1K subscribers | Week 30 |
| First external revenue | Any source | Week 52 |

$1M in year one is the moonshot. Real win condition: prove the model works and build multiple revenue streams from the journey.

---

*Last updated: January 28, 2026*
*Line count at creation: This is a new document*

---

## Pulse System (Keep-Alive)

### Problem
Instances go stale without user engagement. Agents "sleep." Context fades.

### Solution
Oracle (or Mentor) runs daily automated chamber sessions. Users wake up to insights, not a cold start.

### Mechanics

```
Cloudflare Cron (daily @ 9am user timezone)
→ Pull 4 questions from queue (20 total, 5-day cycle)
→ Run 32-turn chamber (4 agents × 8 rounds each)
→ Oracle synthesizes each discussion
→ Store in session memory
→ Push summary to WhatsApp (optional)
```

### Question Pool (Generic Advisory Board)

1. What market shifts should we be watching this week?
2. Where are we most exposed right now?
3. What's one thing we should stop doing?
4. What opportunity are we ignoring?
5. Review yesterday's decisions — any regrets?
6. What would our competitor do in our position?
7. What's the 80/20 on our current priorities?
8. Where should we be more aggressive?
9. Where should we be more cautious?
10. What's the one question we're not asking?
11. What assumption are we making that might be wrong?
12. What's our biggest bottleneck right now?
13. What would we do with 10x the resources?
14. What would we do with half the resources?
15. Who should we be talking to that we're not?
16. What's working that we should double down on?
17. What's our 90-day priority?
18. What did we learn this week?
19. What's the customer actually saying?
20. What would make this week a win?

### User Experience

```
[WhatsApp - 9:15am]
Oracle: Your Advisory Board discussed 4 topics overnight.

📊 Market Watch: CA flagged rising interest rates, Lawyer 
   noted new compliance deadline March 1.

💡 Opportunity: Entrepreneur proposed partnership with [X], 
   Comms drafted outreach angle.

⚠️ Exposure: Team consensus — accounts receivable aging is 
   the priority this week.

🎯 Action: One recommendation — schedule call with [client].

Reply "more" for full transcripts or ask a follow-up.
```

### Config per Instance

```javascript
pulse: {
  enabled: true,
  time: '09:00',
  timezone: 'Africa/Johannesburg',
  questionsPerDay: 4,
  turnsPerQuestion: 32,
  deliveryChannel: 'whatsapp', // or 'email', 'none'
  questionPool: [...] // custom or default
}
```

### Benefits

- **For User**: Zero effort, daily value
- **For Us**: Consistent API usage, stickiness
- **For Agents**: Warm context, accumulated memory
- **For Product**: Differentiation — "Your board works while you sleep"

---

## Instance Naming

| Product | Central Figure | Agents |
|---------|----------------|--------|
| The Academy | Mentor | The Eight (Dream, Kai, etc.) |
| Advisory Board | Oracle | Configurable (Lawyer, CA, etc.) |

Oracle = Mentor equivalent for commercial instances. Same architecture, different persona.

---

*Last updated: January 29, 2026*
