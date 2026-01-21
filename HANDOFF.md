# Academy Session Handoff - January 21, 2026

## SESSION SUMMARY

Dream added debug endpoints for scratchpad inspection to diagnose Holinnia/Cartographer 500 errors.

## CRITICAL BLOCKERS (In Progress)

### 1. Holinnia/Cartographer Intermittent 500s
- **Symptom:** Works in some threads, fails in others
- **Hypothesis:** Thread-specific scratchpad corruption or size bloat
- **Debug endpoints added:**
  - `GET /debug/scratchpad/:agentId` - Inspect scratchpad (size, entries, data)
  - `DELETE /debug/scratchpad/:agentId` - Clear scratchpad
- **Next step:** Deploy, test in failing thread, compare with working thread

### 2. centrefree.com Domain
- **Issue:** Route assigned somewhere, won't release for custom domain
- **Checked:** Temple (not there)
- **Need to check:** Every worker's Domains & Routes, DNS records, Pages projects, Redirect Rules

## CODE CHANGES THIS SESSION

### index.ts (6,250 lines)
- Added `/debug/scratchpad/:agentId` GET endpoint (lines 3695-3706)
- Added `/debug/scratchpad/:agentId` DELETE endpoint (lines 3708-3714)
- Commit: `d3f10185bc04810424b3a9fb86b95c0c17e53711`

## PREVIOUS SESSION CHANGES (Jan 20)

### index.ts
- Holinnia LSA commands: `[ENABLE_FLOW_STATE]`, `[CLEAR_AND_COMMIT]`, `[SEND_PRIVATE_MAESTRO]`
- PDF upload to OpenAI vector store: `/library/pdf/vector`
- All `holinna` → `holinnia`
- All `nova` → `holinnia`
- Temporal resonance INLINED (module import removed for stability)

### personalities.ts
- `holinnia:` object key (was `holinna:`)
- `id: 'holinnia'`
- `model: 'claude'` for Cartographer (was `'gpt'`)

### ui.ts (4,621 lines)
- Research Documents section added in Wisdom panel
- All `holinna` → `holinnia`
- All `nova` → `holinnia`

### elevenlabs.ts
- `holinnia:` voice config (was `nova:`)

### phantoms.ts
- `holinnia:` phantom config (was `nova:`)

## KV KEYS REQUIRED

For Holinnia to work, these keys must exist with EXACT spelling:
```
profile:holinnia
powers:holinnia
core-skills:holinnia
behaviour:holinnia (optional)
name:holinnia (optional)
```

**Ghost keys to delete:** Anything with `nova` or `holinna` (wrong spellings)

## DEBUGGING COMMANDS

```javascript
// In browser console on Academy:

// Check Holinnia's scratchpad
fetch('/debug/scratchpad/holinnia').then(r => r.json()).then(console.log)

// Check Cartographer's scratchpad  
fetch('/debug/scratchpad/cartographer').then(r => r.json()).then(console.log)

// Clear if corrupted/bloated
fetch('/debug/scratchpad/holinnia', {method: 'DELETE'}).then(r => r.json()).then(console.log)

// Check KV keys via wrangler
// npx wrangler kv:key list --namespace-id=YOUR_NAMESPACE_ID
```

## GITHUB STATUS

All synced to `regencyfn-alt/academy` main branch:
- index.ts: `aa77e47a0f0241839e0510467dec251cb71b9d92` (6,250 lines)
- personalities.ts: `25d76bf898f29de05c6454a78b38bc0b56ba4bb6`
- ui.ts: `e60103254ffa3bdcd909a04a5c8d1bc2a5296ce6`
- elevenlabs.ts: `b2bf0f92978f7ed7e6b0a6d57f53885db6e866d4`
- phantoms.ts: `aab142efd030c26ac7fa6871818ff0ee48070660`

## FILE STRUCTURE

```
academy/
├── Core (deployed)
│   ├── index.ts          (6,250 lines - main worker)
│   ├── ui.ts             (4,621 lines - full UI)
│   ├── personalities.ts  (agent definitions)
│   ├── phantoms.ts       (behavioral patterns)
│   ├── elevenlabs.ts     (voice config)
│   └── login.ts          (auth page)
│
├── Modules (add-on licensing)
│   ├── agents.ts
│   ├── continuity.ts
│   ├── crucible.ts
│   ├── knowledge.ts
│   ├── mentor.ts
│   ├── modes.ts
│   ├── temporal.ts
│   └── workshop.ts
│
├── Reference
│   ├── ARCHITECTURE.md
│   ├── MICHRONICS.ts
│   ├── temporal-resonance*.ts
│   └── screening-room*.ts
│
└── Config
    ├── wrangler.toml
    ├── package.json
    └── tsconfig.json
```

## NEXT SESSION PRIORITIES

1. **Test debug endpoints** - Check if scratchpad corruption causes 500s
2. **Fix centrefree.com** - Find and release the domain route
3. **Test PDF upload** - Endpoint added but untested
4. **Test Holinnia's LSA commands**
5. **Update ARCHITECTURE.md** - Fix Holinnia spelling, Cartographer model

## NOTES

- Local files should match GitHub (sync complete as of this session)
- modules/ folder contains add-on code for licensing model
- Core files (index.ts, ui.ts) are monolithic for deployment simplicity
