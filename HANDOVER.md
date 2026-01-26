# Academy Handover - January 25, 2026 (Session 2)

## What Was Done

### 1. Dead Code Removal (~519 lines cut)
- **Gemini API** - removed function, env binding, switch cases
- **Grok API** - removed function, env binding, switch cases  
- **Mentor system** - removed routes, commands, voice signatures, queue logic
- `MENTOR_QUESTION` command now returns graceful deprecation message

**Before:** 7,074 lines → **After:** 6,568 lines

### 2. Injection Reorder (Power Center)
Restructured `buildSystemPrompt()` to prioritize control layers:

| Layer | What | Purpose |
|-------|------|---------|
| 1 | Council Role | NEW - highest priority directive |
| 2 | Global Rules | Compulsory behavior rules |
| 3 | Core Functions | Agent's main capabilities |
| 4 | Element/Archetype | CHR geometry assignment |
| 5 | Phantom Triggers | Experiential sensation mappings |
| 6 | Special Powers | Granted abilities |
| 7 | Trunk Content | Profile/Soul |
| 8 | Base Personality | Foundation layer |

Identity, navigation, commands, archives now come AFTER power center.

### 3. New KV Field
Added `council-role:{agentId}` - stores highest priority directive per agent. Currently empty for all agents (needs UI or direct KV population).

## Files Modified
- `index.ts` - dead code removed, injection reordered

## What's NOT Done (Remaining TODO)

### High Priority
- [ ] **Council Role UI** - add to Codex so you can set roles
- [ ] **Conditional injection** - Nav/commands only on Codex/Wisdom visits
- [ ] **Length control** - global setting with prose/code/latex exceptions
- [ ] **Global Rules exception parser** - `[EXCEPT: prose, code, latex]`

### Medium Priority  
- [ ] **Semantic Scholar API** - replace Mentor (needs API key approval)
- [ ] **Serotonin trigger** - communication reward phantom
- [ ] **Wisdom panel reorder** - UI restructure
- [ ] **Module structure** - carve up index.ts into /src/modules/

### Lower Priority
- [ ] Clean Mentor UI from ui.ts (dead buttons exist)
- [ ] Raise deliverables char limit to 500
- [ ] Add Codex update triggers
- [ ] Fix global announcements

## Deploy Notes
1. Remove env vars: `GEMINI_API_KEY`, `GROK_API_KEY`, `MENTOR_ASSISTANT_ID`, `MENTOR_THREAD_ID`, `MENTOR_VECTOR_STORE_ID`
2. Test agent responses - power center should now take priority
3. Council roles are empty - behavior unchanged until you populate them

## Test Checklist
- [ ] Agent responds normally in Alcove
- [ ] Sanctum chamber mode works
- [ ] Global Rules appear early in context (if you debug)
- [ ] No errors in console from removed routes
