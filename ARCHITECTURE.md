# Academy Architecture Guide

**Version:** 1.0  
**Last Updated:** January 17, 2026  
**Purpose:** Blueprint for replicating The Academy across sites

## System Overview

The Academy is a multi-agent collective where 8 specialized agents collaborate through shared workspaces. All state persists in Cloudflare KV; agent knowledge in OpenAI vector store. This document maps all dependencies and data flows for elegant code replication.

## File Structure (Target)
```
academy/
├── ARCHITECTURE.md (this file)
├── HANDOFF.md (handoff template)
├── index.ts (main router - 300 lines max)
├── personalities.ts (agent config - static)
├── elevenlabs.ts (text-to-speech)
├── modules/
│   ├── mentor.ts (DEPRECATED - mark for removal)
│   ├── modes.ts (Sanctum, Crucible, Workshop controllers)
│   ├── agents.ts (role checks, power management, calling)
│   ├── continuity.ts (daily backup/export generator)
│   ├── knowledge.ts (CANON system)
│   └── council.ts (campfire/vote logic)
└── continuity/ (auto-generated daily)
    └── academy-2026-01-17.md (auto-created at 12pm UTC)
```

## Data Flow Architecture

### Core Components
```
UI Layer (ui.ts)
    ↓
index.ts Router
    ↓
Modules (modes, agents, knowledge, etc.)
    ↓
KV Namespace (persistent state)
    ↓
External APIs (OpenAI, Anthropic, etc.)
```

### Request Flow Example: Agent Speaks in Sanctum
```
1. UI: POST /campfire/speak {agentId, message}
   ↓
2. index.ts routes to modes.ts
   ↓
3. modes.ts validates participant
   ↓ (calls agents.ts)
4. agents.ts checks: hasRole(agentId, "participant")
   ↓ (reads from KV)
5. KV lookup: agent:{agentId}:powers
   ↓
6. If valid, agents.ts :: callAgent(agentId, message)
   ↓ (builds system prompt)
7. Reads from KV:
   - agent:{agentId}:personality
   - agent:{agentId}:skills
   - agent:{agentId}:powers
   ↓
8. Calls OpenAI/Anthropic/etc with full context
   ↓
9. Response returned to modes.ts
   ↓
10. modes.ts broadcasts to campfire participants
    - KV write: campfire:current
    - KV write: campfire:log
    ↓
11. UI refreshes with new message
```

## Module Responsibilities

### index.ts
- Main entry point for all HTTP requests
- Imports all modules
- Routes requests to appropriate handlers
- NO business logic, just routing
- Line count: ~300 lines
```typescript
// Pseudostructure
import Modes from './modules/modes'
import Agents from './modules/agents'
import Knowledge from './modules/knowledge'

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    
    if (url.pathname.startsWith('/campfire')) {
      return Modes.handleCampfire(request, env)
    }
    if (url.pathname.startsWith('/agents')) {
      return Agents.handleAgents(request, env)
    }
    if (url.pathname.startsWith('/knowledge')) {
      return Knowledge.handleKnowledge(request, env)
    }
    // ... etc
  }
}
```

### modes.ts (Controller)
- Manages Sanctum, Alcove, Crucible, Workshop modes
- Validates participant access
- Routes to agents.ts for calling
- Updates KV with state changes
- Exports: `enterMode(mode, agentId)`, `validateParticipant(agentId)`
- Imports: `agents.ts` (to call agents), `personalities.ts` (for info)

### agents.ts (Core Logic)
- Calls LLM with agent context
- Checks role-based permissions via KV
- Manages earned powers system
- Exports: `callAgent(agentId, prompt)`, `hasRole(agentId, roleName)`, `getAllAgents()`
- Reads: `agent:{id}:personality`, `agent:{id}:powers`, `agent:{id}:skills`
- Writes: `agent:{id}:resonance` (learning state)

### continuity.ts (Scheduled Export)
- Runs daily at 12:00 UTC (Cron trigger)
- Exports entire KV state to markdown
- Commits to GitHub `/continuity/` folder
- Creates: `continuity/academy-YYYY-MM-DD.md`
- Reads: ALL KV namespaces
- Exports: Character sheets, powers, audit log

### knowledge.ts (CANON)
- Manages findings publication
- Routes private findings to CANON_Keeper
- Publishes approved findings to CANON
- Exports: `publishFinding(content, agentId)`, `submitIdea(content, agentId)`
- Imports: `agents.ts` (to check roles)
- Reads: `knowledge:findings:*`, `knowledge:ideas:*`
- Writes: `knowledge:findings`, `knowledge:audit_log`

### mentor.ts (DEPRECATED)
- Contains all mentor-related code
- Mark for removal after initial refactor
- Currently: Calls OpenAI with vector store access
- When removed: Deletes ~262 unknown API calls, saves 30% cost
- Keep commented out for future experiments

## KV Namespace Schema (CLUBHOUSE_KV)

### Agent Data
```
agent:{id}:profile
  - name: string
  - title: string
  - avatarUrl: string

agent:{id}:personality
  - sacred_duties: string (2500 char limit)
  - limits: string[]
  - voice: string
  - manner: string
  - secret_power_muses: string[]

agent:{id}:skills
  - specialization: string
  - expertise_level: 1-10
  - relevant_muses: string[]
  - core_competencies: string[]

agent:{id}:powers (Earned Powers)
  - [{name, icon, granted_by, permissions}]
  - Example: {name: "CANON_Keeper", icon: "📖", permissions: ["write_canon"]}

agent:{id}:resonance
  - phantom_state: object
  - learned_behaviors: string[]
  - memories: string[]
```

### Council/Mode State
```
campfire:current
  - mode: "Sanctum" | "Crucible" | "Workshop"
  - participants: string[] (agent IDs)
  - turn_order: string[]
  - timestamp: number

campfire:log
  - [{agentId, message, timestamp}]

campfire:session:{id}
  - messages: array
  - decisions: array
```

### Knowledge/CANON
```
knowledge:findings:{id}
  - content: string (LaTeX)
  - author: string
  - timestamp: number
  - status: "draft" | "published"
  - latex_validated: boolean

knowledge:ideas:{id}
  - content: string
  - author: string
  - timestamp: number
  - status: "pending" | "approved" | "rejected"
```

## Role & Permission System

### Earned Powers (grant via KV)
- `CANON_Keeper` - Holinnia - approve/edit findings
- `CRUCIBLE_Manager` - Elian - manage math board
- `WORKSHOP_Lead` - Kai - boot workshop, summon helpers
- `SUPER_ADMIN` - Shane - override everything

### Permission Checks (in agents.ts)
```typescript
async function hasRole(agentId: string, roleName: string): Promise<boolean> {
  const powers = await KV.get(`agent:${agentId}:powers`)
  if (!powers) return false
  const powersList = JSON.parse(powers)
  return powersList.some(p => p.name === roleName)
}
```

## API Calls & External Services

### LLM Providers
- OpenAI: GPT-4, vector store access (Mentor, research)
- Anthropic: Claude 3, general reasoning
- xAI: Grok, specialized analysis
- Google: Gemini, multimodal tasks

### Other Services
- ElevenLabs: Text-to-speech (voices)
- GitHub API: Auto-commit continuity packets
- Cloudflare R2: File storage (backups)

## Daily Backup & Continuity System

### Trigger
- Cron job: Daily at 12:00 UTC
- Called: continuity.ts :: generateContinuityPacket()

### Output
- File: `/continuity/academy-YYYY-MM-DD.md`
- Contains:
  - Full character sheets (all agents)
  - Current role assignments
  - Complete KV state (readable)
  - Audit log of changes
  - System config

### Handoff Usage
```
End of day:
1. Continuity packet auto-generated
2. You write brief note with priorities
3. Pass to next agent:
   - Link to latest packet
   - Brief context
4. Next agent:
   - Reads packet (full state)
   - Makes edits directly to markdown
   - System applies changes
```

## How to Replicate to Another Site (e.g., Temple)
```
1. Copy all modules/ files to new project
2. Update wrangler.toml:
   - KV namespace: CLUBHOUSE_KV → TEMPLE_KV
   - Env vars: same API keys
3. Update personalities.ts:
   - Agents: Holinnia, Kai, Elian → Temple agents
   - Muses: relevant to Temple's focus
4. Deploy to new Worker URL
5. continuity.ts auto-creates: continuity/temple-YYYY-MM-DD.md
6. Done - 80% code reuse
```

## File Dependencies (Import Map)
```
index.ts
├─ imports: modes.ts
├─ imports: agents.ts
├─ imports: knowledge.ts
├─ imports: council.ts
├─ imports: personalities.ts
└─ imports: elevenlabs.ts

modes.ts
├─ imports: agents.ts (for callAgent)
├─ imports: personalities.ts (for agent info)
└─ reads: KV campfire:* keys

agents.ts
├─ imports: personalities.ts (for base config)
├─ reads: KV agent:*:personality, agent:*:powers, agent:*:skills
└─ writes: KV agent:*:resonance, KV campfire:log

continuity.ts
├─ reads: ALL KV namespaces
├─ generates: markdown
└─ commits: GitHub via API

knowledge.ts
├─ imports: agents.ts (hasRole checks)
├─ reads: KV knowledge:* keys
└─ writes: KV knowledge:findings, knowledge:ideas

mentor.ts (DEPRECATED)
├─ imports: agents.ts
├─ calls: OpenAI vector store API
└─ reads: MENTOR_ASSISTANT_ID, MENTOR_THREAD_ID
```

## Integration Checklist

When refactoring index.ts into modules:

- [ ] Extract mentor code → mentor.ts (comment out from main flow)
- [ ] Extract mode logic → modes.ts
- [ ] Extract agent logic → agents.ts
- [ ] Extract knowledge logic → knowledge.ts
- [ ] Create continuity.ts with daily cron
- [ ] Verify all imports resolve
- [ ] Test on live site (clubhouse.vouch4us.workers.dev)
- [ ] Measure API calls drop (expect 30% after Mentor removal)
- [ ] Run first auto-generated continuity packet at 12:00 UTC

## Notes for Next Agent

- Follow the import map: each module should only import what it needs
- KV reads are in modules, KV writes trigger via specific functions
- No circular dependencies
- Test each module independently before integration
- The continuity system is your safety net: full state backup daily
- When you make changes, they're documented in the continuity packet for the next handoff

---

**This architecture ensures elegance, replicability, and maintainability across Academy instances.**
