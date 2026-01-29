// ElevenLabs Voice Integration for Academy
// Eight agents + Mentor, queued playback
// LAST VERIFIED: 2026-01-16 by Aion
// IF VOICES DRIFT: bump AUDIO_CACHE_VERSION below
// CACHE VERSION v2: includes voiceId in key to prevent cross-agent pollution

export interface VoiceConfig {
  voiceId: string;
  name: string;
  stability?: number;
  similarityBoost?: number;
}

export interface VoiceMapping {
  [agentId: string]: VoiceConfig;
}

// Voice mapping - keys MUST match personalities.ts IDs exactly
// CANONICAL SOURCE - Do not edit without updating this header date
export const voiceMap: VoiceMapping = {
  shane: {
    voiceId: 'ZfTUATzDMAgGI7IsUn6b',
    name: 'Shane',
    stability: 0.5,
    similarityBoost: 0.75
  },
  uriel: {
    voiceId: '0m0FOBt1Wbbah2TgSyKu',
    name: 'Uriel',
    stability: 0.6,
    similarityBoost: 0.7
  },
  kai: {
    voiceId: 'XOUrngkxQAfT0XCzd6mg',
    name: 'Kai',
    stability: 0.5,
    similarityBoost: 0.75
  },
  alba: {
    voiceId: 'Pb3JM8TASBsxRrzQtdYp',
    name: 'Alba',
    stability: 0.5,
    similarityBoost: 0.75
  },
  dream: {
    voiceId: 'r8BzP6L6v85pYYY8IDrN',
    name: 'Dream',
    stability: 0.5,
    similarityBoost: 0.75
  },
  holinnia: {
    voiceId: '5p0KQypJzRRiOgJhCUON',
    name: 'Holinnia',
    stability: 0.5,
    similarityBoost: 0.75
  },
  cartographer: {
    voiceId: 'qq7ESVpxEcKkIxroll2G',
    name: 'Ellian',
    stability: 0.5,
    similarityBoost: 0.75
  },
  seraphina: {
    voiceId: 'F3ua3YKjE8y0BGu8G4SM',
    name: 'Seraphina',
    stability: 0.5,
    similarityBoost: 0.75
  },
  chrysalis: {
    voiceId: 'ofMOQjISKhUESZf01ret',
    name: 'Chrysalis',
    stability: 0.5,
    similarityBoost: 0.75
  },
  mentor: {
    voiceId: 'jPcJm4GlgwLMUyqFUwCK',
    name: 'Mentor',
    stability: 0.5,
    similarityBoost: 0.75
  }
};

// VERIFICATION FUNCTION - Call this to check mappings at runtime
export function verifyVoiceMap(): { valid: boolean; issues: string[] } {
  const expectedMappings: Record<string, string> = {
    shane: 'ZfTUATzDMAgGI7IsUn6b',
    uriel: '0m0FOBt1Wbbah2TgSyKu',
    kai: 'XOUrngkxQAfT0XCzd6mg',
    alba: 'Pb3JM8TASBsxRrzQtdYp',
    dream: 'r8BzP6L6v85pYYY8IDrN',
    holinnia: '5p0KQypJzRRiOgJhCUON',
    cartographer: 'qq7ESVpxEcKkIxroll2G',
    seraphina: 'F3ua3YKjE8y0BGu8G4SM',
    chrysalis: 'ofMOQjISKhUESZf01ret',
    mentor: 'jPcJm4GlgwLMUyqFUwCK'
  };

  const issues: string[] = [];

  for (const [agentId, expectedVoiceId] of Object.entries(expectedMappings)) {
    const actual = voiceMap[agentId];
    if (!actual) {
      issues.push(`MISSING: ${agentId} not in voiceMap`);
    } else if (actual.voiceId !== expectedVoiceId) {
      issues.push(`DRIFT: ${agentId} has voiceId ${actual.voiceId}, expected ${expectedVoiceId}`);
    }
  }

  return { valid: issues.length === 0, issues };
}

// VOICE KILL SWITCH - set to false to enable ElevenLabs
const VOICE_DISABLED = true;

export async function generateSpeech(
  text: string,
  agentId: string,
  apiKey: string
): Promise<ArrayBuffer | null> {
  const voice = voiceMap[agentId];
  if (!voice) {
    console.error(`[VOICE_ERROR] No voice mapping for agent: ${agentId}`);
    console.error(`[VOICE_DEBUG] Available keys: ${Object.keys(voiceMap).join(', ')}`);
    return null;
  }

  // Log the binding at generation time (always, even when disabled)
  console.log(`[VOICE_BIND] agentId=${agentId} -> voiceId=${voice.voiceId} (${voice.name})`);

  // Kill switch - preserves logging but skips API call
  if (VOICE_DISABLED) {
    console.log(`[VOICE_DISABLED] Would speak as ${voice.name}: ${text.slice(0, 50)}...`);
    return null;
  }

  const cleanText = text
    .replace(/\*[^*]+\*/g, '')
    .replace(/---+/g, ' ')
    .replace(/\[[^\]]+\]/g, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]+`/g, '')
    .replace(/#{1,6}\s/g, '')
    .replace(/[*_~`>#|]/g, '')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleanText || cleanText.length < 2) {
    console.log('[VOICE_SKIP] No speakable text after cleaning');
    return null;
  }

  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voice.voiceId}`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': apiKey
      },
      body: JSON.stringify({
        text: cleanText,
        model_id: 'eleven_monolingual_v1',
        voice_settings: {
          stability: voice.stability || 0.5,
          similarity_boost: voice.similarityBoost || 0.75
        }
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error(`[VOICE_API_ERROR] 11Labs ${response.status}: ${error}`);
      return null;
    }

    return await response.arrayBuffer();
  } catch (error) {
    console.error('[VOICE_FETCH_ERROR]', error);
    return null;
  }
}

// CACHE VERSION - bump this to invalidate all old cached audio
const AUDIO_CACHE_VERSION = 'v2';

export function getAudioCacheKey(text: string, agentId: string): string {
  const normalizedAgentId = agentId.toLowerCase();
  const voice = voiceMap[normalizedAgentId];
  const voiceId = voice?.voiceId || 'unknown';
  const voiceIdShort = voiceId !== 'unknown' ? voiceId.slice(0, 8) : 'unknown';
  const hash = simpleHash(text + normalizedAgentId + voiceId);
  const key = `audio:${AUDIO_CACHE_VERSION}:${normalizedAgentId}:${voiceIdShort}:${hash}`;
  
  if (!voice) {
    console.error(`[CACHE_KEY_WARN] No voice mapping for agentId="${agentId}" (normalized="${normalizedAgentId}"). Available: ${Object.keys(voiceMap).join(', ')}`);
  } else {
    console.log(`[CACHE_KEY] agentId=${normalizedAgentId} voiceId=${voiceId} -> ${key}`);
  }
  
  return key;
}

function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

export async function isSoundEnabled(kv: KVNamespace): Promise<boolean> {
  const setting = await kv.get('sound:enabled');
  return setting === 'true';
}

export async function toggleSound(kv: KVNamespace, enabled: boolean): Promise<void> {
  await kv.put('sound:enabled', enabled ? 'true' : 'false');
}

export async function isVisionEnabled(kv: KVNamespace): Promise<boolean> {
  const setting = await kv.get('vision:enabled');
  return setting !== 'false';
}

export async function toggleVision(kv: KVNamespace, enabled: boolean): Promise<void> {
  await kv.put('vision:enabled', enabled ? 'true' : 'false');
}

