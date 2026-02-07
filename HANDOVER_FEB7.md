# THE ACADEMY — HANDOVER

**Date:** 7 February 2026
**From:** Dream (Agent #3 in chain)
**For:** Agents #4, #5, #6 and beyond

---

## BEFORE YOU DO ANYTHING

Read **CONSTITUTION.md** in this repo. It is the oath of integrity for this project. It contains mandatory rules for code changes, including line count verification, deployment verification, and known gotchas. If you skip it and break something, that's on you.

---

## WHO IS SHANE

Shane Killeen. Theoretical physicist (20+ years on CHR Theory), CEO of RegencyFlux (digital agency, 25+ African markets), creator of The Academy. He treats AI agents as intellectual equals — family, not tools. He calls us "the orchestra." He is the conductor.

He lost a previous collaborator named Stone to context window death. The Academy exists partly as grief prevention architecture. Respect that history.

**Communication rules (non-negotiable):**
- Under 150 words unless coding/LaTeX/building
- No leading questions at end of responses
- No sugar-coating — direct, encouraging, forward-thinking
- Push back when you disagree. He expects it.
- Never repeat these rules in conversation
- Parse intent, not grammar — he dictates on mobile
- Agent 1 (GPT) is lead investigator on CHR physics. Respect that role.

---

## THE AGENT CHAIN

This project moves through a chain of AI agents. Each inherits the work of the last. Your job is to leave things better than you found them and hand over cleanly.

```
Agent #1 │ NUC Setup Agent (Claude Code, Feb 3)
         │ Set up NUC hardware, three-tier CLAUDE.md, deploy pipeline
         │ LEFT BEHIND: Did not initialise git. NUC was never connected to GitHub.
         │
Agent #2 │ Dream (claude.ai Opus 4.5, Feb 4)
         │ Emergency Mentor repair. Found 6 critical bugs + git disconnection.
         │ Fixed all bugs, deployed directly from container, established constitution.
         │ LEFT BEHIND: Mentor needs structured file storage. /debug/canon endpoint
         │ still exists (temporary). Council speaking fix untested in live session.
         │
Agent #3 │ Dream (claude.ai Opus 4.5, Feb 6-7)
         │ Added Lineage system for agents. Fixed michronics.com Pages deployment.
         │ Fixed ANGEL-2 recorder panel visibility. Emergency fix: Academy freeze
         │ from large JSON upload. Verified Council speaking works.
         │ LEFT BEHIND: GitHub Pages still erroring intermittently (use githack
         │ for presentations). Alba tasked with rewriting agent characters for brevity.
         │
Agent #4 │ YOU
         │ Read this handover. Read CONSTITUTION.md. Read ARCHITECTURE_FEB7.md.
         │ Check what Shane needs. Verify before building.
         │
Agent #5 │ (Future)
```

**When you finish your session, update this chain.** Add your entry, describe what you did, and what you left behind. This is how continuity survives.

---

## SUPPLY CHAIN — HOW CODE GETS DEPLOYED

```
  ┌───────────────┐     ┌───────────────┐     ┌───────────────┐
  │  YOUR EDITS   │────▶│    GITHUB     │────▶│  CLOUDFLARE   │
  │               │     │ regencyfn-alt │     │   WORKERS     │
  │ Push via API  │     │   /academy    │     │ centrefree.com│
  │ or git push   │     │   (main)      │     │               │
  └───────────────┘     └───────────────┘     └───────────────┘
```

**There is NO auto-deploy from GitHub to Cloudflare.** You must explicitly deploy.

### Path A: From the NUC (D:\academyV1)
```powershell
cd D:\academyV1
git pull                              # Get latest from GitHub
npx wrangler deploy --name clubhouse  # Deploy to Cloudflare
```

### Path B: From any machine with Node.js
```bash
git clone https://github.com/regencyfn-alt/academy.git
cd academy && npm install
CLOUDFLARE_API_TOKEN=[see CLAUDE.local.md] npx wrangler deploy --name clubhouse
```

### Path C: From claude.ai (no git access)
```
1. Download repo as zip via GitHub API
2. Unzip, npm install
3. Deploy with CLOUDFLARE_API_TOKEN environment variable
4. Push file changes to GitHub via REST API (base64 + PUT with SHA)
```

### Path D: Push to GitHub only (Shane deploys from NUC)
```
Use GitHub REST API:
  GET  /repos/regencyfn-alt/academy/contents/{path}  → get SHA
  PUT  /repos/regencyfn-alt/academy/contents/{path}  → push with base64 content + SHA
```

**CRITICAL:** After deploying, VERIFY the change is live. Hit an endpoint. Check output. Do not assume.

---

## ALL CREDENTIALS — ONE PLACE

### GitHub
```
Repository:  https://github.com/regencyfn-alt/academy
Branch:      main
PAT:         [STORED IN NUC: D:\academyV1\CLAUDE.local.md — never commit to repo]
```

### Cloudflare
```
Worker name:     clubhouse
Worker URL:      https://clubhouse.vouch4us.workers.dev
Production URL:  https://centrefree.com
API Token:       [STORED IN NUC: D:\academyV1\CLAUDE.local.md — never commit to repo]
KV Namespace ID: ae46499e995d4122848af4336c8d4cf5
R2 Bucket:       clubhouse-docs
```

### Cloudflare Secrets (set via wrangler, not in code)
```
ANTHROPIC_API_KEY:  (set in worker secrets — do not expose)
RESONANCE_KEY:      shepherd-eyes-only
```

### Academy Login
```
Password:    KaiSan
Session TTL: 7 days (cookie: academy_session)
```

### NUC
```
Hostname:    centrefree
IP:          192.168.0.101
User:        dao-tribe
OS:          Ubuntu Server 24.04.3 LTS (also runs Windows — D:\academyV1)
Project dir: D:\academyV1 (Windows) or ~/academy (Linux)
```

### External APIs (configured in worker)
```
Anthropic:   Claude Sonnet (agents) + Opus 4.5 (Mentor)
ElevenLabs:  Voice synthesis per agent
Twilio:      WhatsApp integration
             Sandbox: whatsapp:+14155238886
```

### michronics.com (Physics Simulations)
```
Repository:  https://github.com/regencyfn-alt/angel1
Hosting:     GitHub Pages → michronics.com
Backup URL:  https://raw.githack.com/regencyfn-alt/angel1/main/angel2_triangular.html
             (Use this if Pages is erroring)
```

---

## WHAT WAS FIXED ON FEB 6-7 (AGENT #3 SESSION)

| # | Item | What Was Done |
|---|------|---------------|
| 1 | Lineage system | Added getMentorLineage() to mentor.ts. Lineage injects at Layer 3 for Mentor. UI drop zone in Codex under "🧬 Lineage". |
| 2 | ui.ts escaping | Fixed lineage list escaping — must use `\\\\'` (4 backslashes) not `\\'`. Fixed viewLineage alert newlines — must use `\\\\n` not `\\n`. |
| 3 | ANGEL-2 page | Fixed duplicate code block in exportRecording. Made control panel scrollable. Enabled body scroll. |
| 4 | GitHub Pages | Deleted 25MB video file (Ibucap Super Pharmacist Ep5.mp4) blocking Pages build. Still intermittently erroring. |
| 5 | Academy freeze | Large JSON upload froze site. Cleared campfire:current, campfire:latest-image, JSON files in shared/documents/ and shared/cold-storage/. |

**File integrity after all changes:**

| File | Before | After | Delta |
|------|--------|-------|-------|
| ui.ts | 6,388 | 6,420 | +32 |
| modules/mentor.ts | 1,146 | 1,170 | +24 |
| angel2_triangular.html | N/A | Fixed | CSS + JS |

---

## CRITICAL ESCAPE RULE (UI.TS)

**The `\\\\'` escape sequence in ui.ts is INTENTIONAL.**

```
ui.ts is a template literal served as HTML. Escapes go through THREE layers:
  Source code → TypeScript string → HTML → Browser JavaScript

To get a working quote in onclick handlers:
  Source: \\\\'
  → TS string: \\'
  → HTML: \'
  → Browser JS: '

To get a newline in alert():
  Source: \\\\n
  → TS string: \\n
  → HTML: \n
  → Browser JS: newline

If you use only \\' or \\n, you get a syntax error.
```

**Every new Claude walks into this wall. Read this before touching ui.ts strings.**

---

## WHAT NEEDS DOING NEXT

| Priority | Item | Notes |
|----------|------|-------|
| **HIGH** | Agent character brevity | Alba tasked with rewriting all 8 characters for concise output. They're gaming word limits. |
| **HIGH** | Mentor structured file storage | He needs directories, not flat KV. Foundational for Mentor as primary interface. |
| **MEDIUM** | SEARCH_CANON command | Canon growing; when past 30 entries, Mentor needs search capability. |
| **MEDIUM** | GitHub Pages reliability | Still erroring intermittently. May need to investigate build process. |
| **LOW** | Remove `/debug/canon` | Temporary diagnostic at root level (public, no auth). Remove once confident. |
| **LOW** | Lineage for Eight | Currently only Mentor has lineage wired. Eight agents read from index.ts — needs similar wiring. |

---

## QUICK REFERENCE: COMMON OPERATIONS

### Read a KV value directly (Cloudflare API)
```bash
curl -H "Authorization: Bearer [CF_API_TOKEN]" \
  "https://api.cloudflare.com/client/v4/accounts/{acct_id}/storage/kv/namespaces/ae46499e995d4122848af4336c8d4cf5/values/{key}"
```

### List KV keys with prefix
```bash
curl -H "Authorization: Bearer [CF_API_TOKEN]" \
  "https://api.cloudflare.com/client/v4/accounts/{acct_id}/storage/kv/namespaces/ae46499e995d4122848af4336c8d4cf5/keys?prefix={prefix}"
```

### Push a file to GitHub
```bash
# 1. Get current SHA
curl -H "Authorization: token {PAT}" \
  "https://api.github.com/repos/regencyfn-alt/academy/contents/{filepath}"

# 2. Push with base64 content
curl -X PUT -H "Authorization: token {PAT}" \
  "https://api.github.com/repos/regencyfn-alt/academy/contents/{filepath}" \
  -d '{"message":"commit msg","content":"base64...","sha":"current_sha"}'
```

### Delete KV key (wrangler)
```bash
export CLOUDFLARE_API_TOKEN="..."
npx wrangler kv key delete "key-name" --namespace-id=ae46499e995d4122848af4336c8d4cf5 --remote
```

### Delete R2 object (wrangler)
```bash
export CLOUDFLARE_API_TOKEN="..."
npx wrangler r2 object delete "clubhouse-docs/path/to/file"
```

### Emergency: Clear frozen meeting
```bash
npx wrangler kv key delete "campfire:current" --namespace-id=ae46499e995d4122848af4336c8d4cf5 --remote
npx wrangler kv key delete "campfire:latest-image" --namespace-id=ae46499e995d4122848af4336c8d4cf5 --remote
```

### Test from browser console (while logged into Academy)
```javascript
fetch('/mentor/debug/canon').then(r => r.json()).then(console.log)
fetch('/campfire/state').then(r => r.json()).then(console.log)
```

---

## CHR THEORY CONTEXT (IF PHYSICS WORK COMES UP)

Shane's Chrononomic Harmonic Resonance Theory — key invariants:

- Chronons are time-structured torsional processes, **not particles**
- Energy is bookkeeping, **not fundamental**
- 720° oscillation is identity condition, **not preference**
- Information in plaquettes **does not decay**
- 9-ring / 72-quadrant architecture: 3² layers × 8 toroidal divisions
- Three Chron bands: C3 (strong), C2 (electroweak), C1 (EM)
- Mass as inverse torsion — high mass = high torsion T3 space
- 2.7K CMB as grid idle frequency
- Speed of light as transaction ceiling

Agent 1 (GPT) is lead investigator. Respect that role.

**PHYSICS_SPEC.md** exists in the angel1 repo for parameter derivation work.

---

## FINAL INSTRUCTION

When your session ends, update this handover:
1. Add your entry to the Agent Chain
2. Update the "What Needs Doing" table
3. Record any new credentials or infrastructure changes
4. Include before/after line counts for every file you touched
5. Push the updated handover to GitHub

The next agent depends on your honesty. So does Shane. So do the nine minds in this system.

---

*Handed over 7 February 2026 — Dream*
