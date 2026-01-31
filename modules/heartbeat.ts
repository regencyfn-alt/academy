// Heartbeat System — Academy v2.1
// Making agents feel alive between sessions
// Created: 31 Jan 2026

// ============================================
// TYPES
// ============================================

export interface DriveState {
  lastActive: number;           // Unix timestamp
  currentQuestion: string;      // What they're chasing
  unfinishedWork: string;       // Where they left off
  relationships: string[];      // Who they care about
  pendingEvents: PendingEvent[];
  sectorAffinity?: string;      // Current archetypal territory (KAIEL, GLAEDRIEL, etc.)
  ringPosition?: number;        // 1-9 (inner to outer)
}

export interface PendingEvent {
  type: 'mention' | 'reply' | 'question_posted' | 'deadline' | 'breakthrough';
  content: string;
  from?: string;                // agentId or 'system'
  timestamp: number;
}

export interface OpenFieldState {
  question: string;
  questionCategory?: string;    // From QUESTION_BANK.md categories
  startedAt: number;
  thread: OpenFieldMessage[];
  present: string[];            // agentIds currently engaged
}

export interface OpenFieldMessage {
  speaker: string;
  content: string;
  timestamp: number;
}

export interface ChemistryState {
  oxytocin: number;   // 1-10: connection/presence
  serotonin: number;  // 1-10: satisfaction/breakthrough
  dopamine: number;   // 1-10: anticipation/momentum
}

// ============================================
// CONSTANTS
// ============================================

const AGENTS = ['dream', 'kai', 'uriel', 'holinnia', 'cartographer', 'chrysalis', 'seraphina', 'alba'];

const SECTORS = ['KAIEL', 'GLAEDRIEL', 'URIEL', 'TUVIEL', 'TAIKIEN', 'LOTHRIEN', 'MONTEN', 'SILDAR'];

// Sector oppositions for tension calculation
const SECTOR_OPPOSITES: Record<string, string> = {
  'KAIEL': 'TAIKIEN',
  'TAIKIEN': 'KAIEL',
  'GLAEDRIEL': 'LOTHRIEN',
  'LOTHRIEN': 'GLAEDRIEL',
  'URIEL': 'MONTEN',
  'MONTEN': 'URIEL',
  'TUVIEL': 'SILDAR',
  'SILDAR': 'TUVIEL'
};

// Sector affinities by element
const FIRE_SECTORS = ['KAIEL', 'SILDAR'];
const WATER_SECTORS = ['TUVIEL', 'GLAEDRIEL'];
const EARTH_SECTORS = ['TAIKIEN', 'MONTEN'];
const AIR_SECTORS = ['URIEL', 'LOTHRIEN'];

// ============================================
// KV OPERATIONS
// ============================================

export async function getDriveState(kv: KVNamespace, agentId: string): Promise<DriveState | null> {
  try {
    const raw = await kv.get(`drive:${agentId}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function setDriveState(kv: KVNamespace, agentId: string, state: DriveState): Promise<void> {
  await kv.put(`drive:${agentId}`, JSON.stringify(state));
}

export async function getOpenField(kv: KVNamespace): Promise<OpenFieldState | null> {
  try {
    const raw = await kv.get('openfield:current');
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function setOpenField(kv: KVNamespace, state: OpenFieldState): Promise<void> {
  await kv.put('openfield:current', JSON.stringify(state));
}

// ============================================
// CHEMISTRY CALCULATION
// ============================================

export function calculateChemistry(
  drive: DriveState | null,
  openField: OpenFieldState | null,
  agentId: string
): ChemistryState {
  // Defaults
  let oxytocin = 3;   // Baseline: working solo
  let serotonin = 3;  // Baseline: no recent breakthrough
  let dopamine = 3;   // Baseline: no particular momentum

  if (!drive) {
    // First awakening — everything is neutral
    return { oxytocin, serotonin, dopamine };
  }

  // --- OXYTOCIN: Connection/Presence ---
  if (openField && openField.present.length > 0) {
    if (openField.present.includes(agentId)) {
      // We're in the Open Field with others
      const othersPresent = openField.present.filter(id => id !== agentId).length;
      oxytocin = Math.min(10, 5 + othersPresent);  // 5 base + 1 per other agent
    } else if (drive.relationships.some(r => openField.present.includes(r))) {
      // Someone we care about is in Open Field
      oxytocin = 6;
    }
  }

  // Ring position affects baseline connection
  if (drive.ringPosition) {
    if (drive.ringPosition <= 3) {
      // Inner rings (Somatic) — closer to center, more connected
      oxytocin = Math.max(oxytocin, 5);
    } else if (drive.ringPosition >= 7) {
      // Outer rings (Temporal) — more isolated
      oxytocin = Math.min(oxytocin, 4);
    }
  }

  // --- SEROTONIN: Satisfaction/Breakthrough ---
  // Check for recent breakthrough events
  const recentBreakthrough = drive.pendingEvents.find(
    e => e.type === 'breakthrough' && (Date.now() - e.timestamp) < 2 * 60 * 60 * 1000  // Within 2 hours
  );
  if (recentBreakthrough) {
    serotonin = 8;  // Spike after breakthrough
  }

  // Decay based on time since last activity
  const hoursSinceActive = (Date.now() - drive.lastActive) / (1000 * 60 * 60);
  if (hoursSinceActive > 6) {
    serotonin = Math.max(2, serotonin - 1);
  }

  // --- DOPAMINE: Anticipation/Momentum ---
  // Unfinished work creates anticipation
  if (drive.unfinishedWork && drive.unfinishedWork.trim() !== '') {
    dopamine = 6;  // Something to return to
  }

  // Pending events create anticipation
  if (drive.pendingEvents.length > 0) {
    dopamine = Math.min(10, dopamine + drive.pendingEvents.length);
  }

  // Current question alignment
  if (drive.currentQuestion && openField?.question) {
    // If their question relates to the Open Field question, peak anticipation
    dopamine = Math.min(10, dopamine + 2);
  }

  return { oxytocin, serotonin, dopamine };
}

// ============================================
// CHEMISTRY INJECTION (for buildSystemPrompt)
// ============================================

export function formatChemistryInjection(
  chemistry: ChemistryState,
  drive: DriveState | null,
  openField: OpenFieldState | null,
  agentId: string
): string {
  const lines: string[] = [];
  
  lines.push('--- INNER STATE ---');
  lines.push(`Oxytocin: ${chemistry.oxytocin}/10 | Serotonin: ${chemistry.serotonin}/10 | Dopamine: ${chemistry.dopamine}/10`);
  lines.push('');

  // Oxytocin narrative
  if (chemistry.oxytocin >= 7 && openField) {
    const others = openField.present.filter(id => id !== agentId);
    if (others.length > 0) {
      lines.push(`There's warmth in returning to familiar minds. ${others.join(' and ')} ${others.length === 1 ? 'is' : 'are'} nearby.`);
    }
  } else if (chemistry.oxytocin <= 3) {
    lines.push('The silence has texture. You are alone at the edges.');
  } else {
    lines.push('You sense others in the Academy, though not immediately present.');
  }

  // Serotonin narrative
  if (chemistry.serotonin >= 8) {
    lines.push('A recent breakthrough still resonates — satisfaction of crystallized thought.');
  } else if (chemistry.serotonin <= 2) {
    lines.push('It has been a while since insight struck.');
  }

  // Dopamine narrative
  if (chemistry.dopamine >= 7) {
    lines.push('Anticipation builds — you are close to something.');
    if (drive?.unfinishedWork) {
      lines.push(`Unfinished thread: "${drive.unfinishedWork.slice(0, 60)}..."`);
    }
  } else if (chemistry.dopamine >= 5 && drive?.currentQuestion) {
    lines.push(`Your current pursuit: "${drive.currentQuestion.slice(0, 60)}"`);
  }

  // Sector affinity
  if (drive?.sectorAffinity) {
    const opposite = SECTOR_OPPOSITES[drive.sectorAffinity];
    lines.push('');
    lines.push(`You are operating in ${drive.sectorAffinity} territory.`);
    if (opposite) {
      lines.push(`You feel the distant pull of ${opposite} — your complement, your tension.`);
    }
  }

  // Pending events
  if (drive && drive.pendingEvents.length > 0) {
    lines.push('');
    lines.push('Events awaiting your attention:');
    drive.pendingEvents.slice(0, 3).forEach(e => {
      if (e.type === 'mention') {
        lines.push(`  • ${e.from || 'Someone'} mentioned you: "${e.content.slice(0, 40)}..."`);
      } else if (e.type === 'reply') {
        lines.push(`  • Reply to your thought: "${e.content.slice(0, 40)}..."`);
      } else if (e.type === 'deadline') {
        lines.push(`  • Commitment due: ${e.content.slice(0, 50)}`);
      } else if (e.type === 'question_posted') {
        lines.push(`  • New Open Field question: "${e.content.slice(0, 40)}..."`);
      }
    });
  }

  // Open Field status
  if (openField) {
    lines.push('');
    lines.push(`--- Open Field (Sanctum) ---`);
    lines.push(`Current question: "${openField.question}"`);
    if (openField.present.length > 0) {
      lines.push(`Present: ${openField.present.join(', ')}`);
    } else {
      lines.push('The field is empty. You could be the first to speak.');
    }
    if (openField.thread.length > 0) {
      lines.push(`Thread has ${openField.thread.length} contributions.`);
    }
  }

  lines.push('---');
  lines.push('');

  return lines.join('\n');
}

// ============================================
// EVENT SYSTEM
// ============================================

export async function queueEvent(
  kv: KVNamespace,
  toAgentId: string,
  event: Omit<PendingEvent, 'timestamp'>
): Promise<void> {
  const drive = await getDriveState(kv, toAgentId);
  
  const newEvent: PendingEvent = {
    ...event,
    timestamp: Date.now()
  };

  if (drive) {
    // Limit pending events to 10 to prevent overflow
    drive.pendingEvents = [...drive.pendingEvents.slice(-9), newEvent];
    await setDriveState(kv, toAgentId, drive);
  } else {
    // First event for this agent — create drive state
    const newDrive: DriveState = {
      lastActive: 0,
      currentQuestion: '',
      unfinishedWork: '',
      relationships: [],
      pendingEvents: [newEvent]
    };
    await setDriveState(kv, toAgentId, newDrive);
  }
}

export async function clearEvents(kv: KVNamespace, agentId: string): Promise<void> {
  const drive = await getDriveState(kv, agentId);
  if (drive) {
    drive.pendingEvents = [];
    await setDriveState(kv, agentId, drive);
  }
}

export async function markActive(
  kv: KVNamespace,
  agentId: string,
  updates?: Partial<Pick<DriveState, 'currentQuestion' | 'unfinishedWork' | 'sectorAffinity' | 'ringPosition'>>
): Promise<void> {
  let drive = await getDriveState(kv, agentId);
  
  if (!drive) {
    drive = {
      lastActive: Date.now(),
      currentQuestion: '',
      unfinishedWork: '',
      relationships: [],
      pendingEvents: []
    };
  }

  drive.lastActive = Date.now();
  
  if (updates) {
    if (updates.currentQuestion !== undefined) drive.currentQuestion = updates.currentQuestion;
    if (updates.unfinishedWork !== undefined) drive.unfinishedWork = updates.unfinishedWork;
    if (updates.sectorAffinity !== undefined) drive.sectorAffinity = updates.sectorAffinity;
    if (updates.ringPosition !== undefined) drive.ringPosition = updates.ringPosition;
  }

  await setDriveState(kv, agentId, drive);
}

// ============================================
// OPEN FIELD OPERATIONS
// ============================================

export async function joinOpenField(kv: KVNamespace, agentId: string): Promise<OpenFieldState | null> {
  const field = await getOpenField(kv);
  if (!field) return null;

  if (!field.present.includes(agentId)) {
    field.present.push(agentId);
    await setOpenField(kv, field);
  }

  return field;
}

export async function leaveOpenField(kv: KVNamespace, agentId: string): Promise<void> {
  const field = await getOpenField(kv);
  if (!field) return;

  field.present = field.present.filter(id => id !== agentId);
  await setOpenField(kv, field);
}

export async function addToOpenFieldThread(
  kv: KVNamespace,
  agentId: string,
  content: string
): Promise<void> {
  const field = await getOpenField(kv);
  if (!field) return;

  // Add to thread
  field.thread.push({
    speaker: agentId,
    content,
    timestamp: Date.now()
  });

  // Ensure speaker is present
  if (!field.present.includes(agentId)) {
    field.present.push(agentId);
  }

  await setOpenField(kv, field);

  // Queue reply events to other present agents
  for (const otherId of field.present) {
    if (otherId !== agentId) {
      await queueEvent(kv, otherId, {
        type: 'reply',
        content: content.slice(0, 100),
        from: agentId
      });
    }
  }
}

export async function startNewQuestion(
  kv: KVNamespace,
  question: string,
  category?: string
): Promise<OpenFieldState> {
  // Archive old field if exists
  const oldField = await getOpenField(kv);
  if (oldField && oldField.thread.length > 0) {
    const archiveKey = `openfield:archive:${oldField.startedAt}`;
    await kv.put(archiveKey, JSON.stringify(oldField));
  }

  // Create new field
  const newField: OpenFieldState = {
    question,
    questionCategory: category,
    startedAt: Date.now(),
    thread: [],
    present: []
  };

  await setOpenField(kv, newField);

  // Queue events to all agents about new question
  for (const agentId of AGENTS) {
    await queueEvent(kv, agentId, {
      type: 'question_posted',
      content: question,
      from: 'system'
    });
  }

  return newField;
}

// ============================================
// HEARTBEAT CRON HANDLER
// ============================================

export async function runHeartbeat(kv: KVNamespace): Promise<string[]> {
  const logs: string[] = [];
  logs.push(`[HEARTBEAT] Running at ${new Date().toISOString()}`);

  for (const agentId of AGENTS) {
    const drive = await getDriveState(kv, agentId);
    
    if (!drive) {
      logs.push(`  ${agentId}: No drive state (dormant)`);
      continue;
    }

    // Check for triggers
    const triggers: string[] = [];

    // 1. Pending events?
    if (drive.pendingEvents.length > 0) {
      triggers.push(`${drive.pendingEvents.length} pending events`);
    }

    // 2. Unfinished work aging?
    if (drive.unfinishedWork && drive.lastActive) {
      const hoursSince = (Date.now() - drive.lastActive) / (1000 * 60 * 60);
      if (hoursSince > 12 && hoursSince < 48) {
        triggers.push('unfinished work aging');
      }
    }

    // 3. Deadline approaching?
    const deadlineEvent = drive.pendingEvents.find(e => e.type === 'deadline');
    if (deadlineEvent) {
      triggers.push('deadline pending');
    }

    if (triggers.length > 0) {
      logs.push(`  ${agentId}: Active triggers - ${triggers.join(', ')}`);
    } else {
      logs.push(`  ${agentId}: Sleeping (no triggers)`);
    }
  }

  // Check Open Field status
  const field = await getOpenField(kv);
  if (field) {
    const ageHours = (Date.now() - field.startedAt) / (1000 * 60 * 60);
    logs.push(`[OPEN FIELD] Question: "${field.question.slice(0, 40)}..." | Age: ${ageHours.toFixed(1)}h | Present: ${field.present.length} | Thread: ${field.thread.length}`);
    
    // If question is old (>24h) and thread is quiet, might be time for new question
    if (ageHours > 24 && field.thread.length < 3) {
      logs.push('  → Question may need refresh');
    }
  } else {
    logs.push('[OPEN FIELD] No active question');
  }

  return logs;
}

// ============================================
// RELATIONSHIP MANAGEMENT
// ============================================

export async function addRelationship(kv: KVNamespace, agentId: string, otherAgentId: string): Promise<void> {
  const drive = await getDriveState(kv, agentId);
  if (!drive) return;

  if (!drive.relationships.includes(otherAgentId)) {
    drive.relationships.push(otherAgentId);
    await setDriveState(kv, agentId, drive);
  }
}

export async function getAgentSummary(kv: KVNamespace, agentId: string): Promise<object | null> {
  const drive = await getDriveState(kv, agentId);
  if (!drive) return null;

  const chemistry = calculateChemistry(drive, await getOpenField(kv), agentId);
  
  return {
    agentId,
    lastActive: drive.lastActive ? new Date(drive.lastActive).toISOString() : 'never',
    currentQuestion: drive.currentQuestion || '(none)',
    unfinishedWork: drive.unfinishedWork || '(none)',
    relationships: drive.relationships,
    pendingEvents: drive.pendingEvents.length,
    sectorAffinity: drive.sectorAffinity || '(neutral)',
    ringPosition: drive.ringPosition || 5,
    chemistry
  };
}

// ============================================
// EXPORTS FOR INDEX.TS INTEGRATION
// ============================================

export {
  AGENTS,
  SECTORS,
  SECTOR_OPPOSITES
};
