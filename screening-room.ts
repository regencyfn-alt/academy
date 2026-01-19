// ============================================
// SCREENING ROOM MODULE
// Video perception system for AI agents
// 
// Standalone module - import into index.ts
// Storage: R2 for frames, KV for manifest
// ============================================

// Types
export interface ScreeningManifest {
  id: string;
  version: string;
  type: 'temporal-perception-package';
  created: string;
  source: {
    filename: string;
    duration: number;
    durationFormatted: string;
    fps: number;
    totalFrames: number;
    resolution: { width: number; height: number };
  };
  hierarchy: HierarchyLevel[];
  audio: {
    duration: number;
    sampleRate: number;
    channels: number;
  } | null;
  perception_guide: {
    recommended_start: string;
    progression: string[];
    strategy: string;
  };
}

export interface HierarchyLevel {
  name: string;
  interval: number;
  description: string;
  frameCount: number;
  frames: number[];  // Frame indices
}

export interface KeyframeData {
  index: number;
  time: number;
  timeFormatted: string;
  image: string;  // base64 data URL
}

export interface ScreeningState {
  active: boolean;
  manifestId: string | null;
  currentLevel: string;
  viewedFrames: number[];
  lastAccessed: number;
}

// KV Keys
const SCREENING_STATE_KEY = 'screening:state';
const SCREENING_MANIFEST_KEY = 'screening:manifest';

// R2 Prefixes
const FRAMES_PREFIX = 'screening/frames/';

// ============================================
// CORE FUNCTIONS
// ============================================

/**
 * Upload a screening package (manifest + keyframes)
 */
export async function uploadScreening(
  manifest: ScreeningManifest,
  keyframes: KeyframeData[],
  kv: KVNamespace,
  r2: R2Bucket
): Promise<{ success: boolean; id: string; frameCount: number }> {
  
  // Generate screening ID
  const id = `scr_${Date.now()}`;
  manifest.id = id;
  
  // Store manifest in KV
  await kv.put(SCREENING_MANIFEST_KEY, JSON.stringify(manifest));
  
  // Store frames in R2
  let storedCount = 0;
  for (const frame of keyframes) {
    // Extract base64 data (remove data URL prefix if present)
    let imageData = frame.image;
    if (imageData.startsWith('data:')) {
      imageData = imageData.split(',')[1];
    }
    
    const key = `${FRAMES_PREFIX}${id}/${frame.index}.jpg`;
    const buffer = Uint8Array.from(atob(imageData), c => c.charCodeAt(0));
    
    await r2.put(key, buffer, {
      httpMetadata: { contentType: 'image/jpeg' },
      customMetadata: {
        time: frame.time.toString(),
        timeFormatted: frame.timeFormatted
      }
    });
    storedCount++;
  }
  
  // Initialize screening state
  const state: ScreeningState = {
    active: true,
    manifestId: id,
    currentLevel: 'Arc',
    viewedFrames: [],
    lastAccessed: Date.now()
  };
  await kv.put(SCREENING_STATE_KEY, JSON.stringify(state));
  
  return { success: true, id, frameCount: storedCount };
}

/**
 * Get current screening state
 */
export async function getScreeningState(kv: KVNamespace): Promise<ScreeningState | null> {
  const raw = await kv.get(SCREENING_STATE_KEY);
  if (!raw) return null;
  return JSON.parse(raw);
}

/**
 * Get screening manifest
 */
export async function getScreeningManifest(kv: KVNamespace): Promise<ScreeningManifest | null> {
  const raw = await kv.get(SCREENING_MANIFEST_KEY);
  if (!raw) return null;
  return JSON.parse(raw);
}

/**
 * Get a specific frame
 */
export async function getFrame(
  frameIndex: number,
  kv: KVNamespace,
  r2: R2Bucket
): Promise<{ image: ArrayBuffer; metadata: Record<string, string> } | null> {
  const state = await getScreeningState(kv);
  if (!state?.active || !state.manifestId) return null;
  
  const key = `${FRAMES_PREFIX}${state.manifestId}/${frameIndex}.jpg`;
  const object = await r2.get(key);
  
  if (!object) return null;
  
  // Mark frame as viewed
  if (!state.viewedFrames.includes(frameIndex)) {
    state.viewedFrames.push(frameIndex);
    state.lastAccessed = Date.now();
    await kv.put(SCREENING_STATE_KEY, JSON.stringify(state));
  }
  
  return {
    image: await object.arrayBuffer(),
    metadata: object.customMetadata || {}
  };
}

/**
 * Get frames for a hierarchy level
 */
export async function getLevelFrames(
  levelName: string,
  kv: KVNamespace,
  r2: R2Bucket,
  limit: number = 10
): Promise<{ frames: Array<{ index: number; time: string; image: string }>; total: number } | null> {
  const manifest = await getScreeningManifest(kv);
  const state = await getScreeningState(kv);
  
  if (!manifest || !state?.active) return null;
  
  const level = manifest.hierarchy.find(l => l.name.toLowerCase() === levelName.toLowerCase());
  if (!level) return null;
  
  const frames: Array<{ index: number; time: string; image: string }> = [];
  const frameIndices = level.frames.slice(0, limit);
  
  for (const index of frameIndices) {
    const key = `${FRAMES_PREFIX}${state.manifestId}/${index}.jpg`;
    const object = await r2.get(key);
    
    if (object) {
      const buffer = await object.arrayBuffer();
      const base64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
      frames.push({
        index,
        time: object.customMetadata?.timeFormatted || '',
        image: `data:image/jpeg;base64,${base64}`
      });
    }
  }
  
  // Update current level
  state.currentLevel = levelName;
  state.lastAccessed = Date.now();
  await kv.put(SCREENING_STATE_KEY, JSON.stringify(state));
  
  return { frames, total: level.frameCount };
}

/**
 * End screening session
 */
export async function endScreening(kv: KVNamespace, r2: R2Bucket): Promise<void> {
  const state = await getScreeningState(kv);
  if (!state?.manifestId) return;
  
  // Delete frames from R2
  const prefix = `${FRAMES_PREFIX}${state.manifestId}/`;
  const listed = await r2.list({ prefix });
  for (const obj of listed.objects) {
    await r2.delete(obj.key);
  }
  
  // Clear state and manifest
  await kv.delete(SCREENING_STATE_KEY);
  await kv.delete(SCREENING_MANIFEST_KEY);
}

/**
 * Generate context for agent prompt injection
 */
export function generateScreeningContext(
  manifest: ScreeningManifest,
  state: ScreeningState
): string {
  const level = manifest.hierarchy.find(l => l.name === state.currentLevel);
  const viewedCount = state.viewedFrames.length;
  const totalKeyframes = manifest.hierarchy[0]?.frameCount || 0;
  
  return `[SCREENING ROOM]
Now showing: "${manifest.source.filename}"
Duration: ${manifest.source.durationFormatted} | ${manifest.source.totalFrames} frames @ ${manifest.source.fps}fps

Current view: ${state.currentLevel} level (${level?.frameCount || 0} keyframes)
Frames examined: ${viewedCount}/${totalKeyframes} keyframes

Hierarchy available:
${manifest.hierarchy.map(l => `  - ${l.name}: ${l.frameCount} frames (${l.description})`).join('\n')}

${manifest.perception_guide.strategy}

Commands:
  [VIEW_LEVEL: Arc|Scene|Action|Motion] - Switch hierarchy level
  [VIEW_FRAME: N] - Request specific frame by index
  [DESCRIBE_SEQUENCE: start-end] - Analyze frame range
`;
}

// ============================================
// HTTP HANDLERS (for index.ts integration)
// ============================================

export function createScreeningHandlers(corsHeaders: Record<string, string>) {
  
  return {
    /**
     * POST /api/screening/upload
     * Body: { manifest: ScreeningManifest, keyframes: KeyframeData[] }
     */
    async handleUpload(request: Request, kv: KVNamespace, r2: R2Bucket): Promise<Response> {
      try {
        const body = await request.json() as { 
          manifest: ScreeningManifest; 
          keyframes: KeyframeData[];
        };
        
        if (!body.manifest || !body.keyframes) {
          return new Response(JSON.stringify({ error: 'Missing manifest or keyframes' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json', ...corsHeaders }
          });
        }
        
        const result = await uploadScreening(body.manifest, body.keyframes, kv, r2);
        
        return new Response(JSON.stringify(result), {
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });
      } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });
      }
    },
    
    /**
     * GET /api/screening/status
     */
    async handleStatus(kv: KVNamespace): Promise<Response> {
      const state = await getScreeningState(kv);
      const manifest = await getScreeningManifest(kv);
      
      if (!state?.active || !manifest) {
        return new Response(JSON.stringify({ active: false }), {
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });
      }
      
      return new Response(JSON.stringify({
        active: true,
        id: state.manifestId,
        filename: manifest.source.filename,
        duration: manifest.source.durationFormatted,
        totalFrames: manifest.source.totalFrames,
        currentLevel: state.currentLevel,
        viewedFrames: state.viewedFrames.length,
        hierarchy: manifest.hierarchy.map(l => ({ name: l.name, count: l.frameCount }))
      }), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    },
    
    /**
     * GET /api/screening/manifest
     */
    async handleManifest(kv: KVNamespace): Promise<Response> {
      const manifest = await getScreeningManifest(kv);
      
      if (!manifest) {
        return new Response(JSON.stringify({ error: 'No active screening' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });
      }
      
      return new Response(JSON.stringify(manifest), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    },
    
    /**
     * GET /api/screening/frame/:index
     */
    async handleFrame(frameIndex: number, kv: KVNamespace, r2: R2Bucket): Promise<Response> {
      const result = await getFrame(frameIndex, kv, r2);
      
      if (!result) {
        return new Response(JSON.stringify({ error: 'Frame not found' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });
      }
      
      return new Response(result.image, {
        headers: {
          'Content-Type': 'image/jpeg',
          'X-Frame-Time': result.metadata.timeFormatted || '',
          ...corsHeaders
        }
      });
    },
    
    /**
     * GET /api/screening/level/:name
     */
    async handleLevel(levelName: string, kv: KVNamespace, r2: R2Bucket, limit: number = 10): Promise<Response> {
      const result = await getLevelFrames(levelName, kv, r2, limit);
      
      if (!result) {
        return new Response(JSON.stringify({ error: 'Level not found or no active screening' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });
      }
      
      return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    },
    
    /**
     * POST /api/screening/end
     */
    async handleEnd(kv: KVNamespace, r2: R2Bucket): Promise<Response> {
      await endScreening(kv, r2);
      
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }
  };
}

// ============================================
// AGENT COMMAND PARSER
// Add to parseAgentCommands in index.ts
// ============================================

export async function parseScreeningCommands(
  agentId: string,
  response: string,
  kv: KVNamespace,
  r2: R2Bucket
): Promise<{ response: string; frameRequested?: number; levelRequested?: string }> {
  let modified = response;
  let frameRequested: number | undefined;
  let levelRequested: string | undefined;
  
  // [VIEW_FRAME: N]
  const frameMatch = response.match(/\[VIEW_FRAME:\s*(\d+)\]/i);
  if (frameMatch) {
    frameRequested = parseInt(frameMatch[1]);
    modified = modified.replace(frameMatch[0], `[Requesting frame ${frameRequested}...]`);
  }
  
  // [VIEW_LEVEL: name]
  const levelMatch = response.match(/\[VIEW_LEVEL:\s*(Arc|Scene|Action|Motion|Full)\]/i);
  if (levelMatch) {
    levelRequested = levelMatch[1];
    const state = await getScreeningState(kv);
    if (state) {
      state.currentLevel = levelRequested;
      await kv.put(SCREENING_STATE_KEY, JSON.stringify(state));
    }
    modified = modified.replace(levelMatch[0], `[Switching to ${levelRequested} level...]`);
  }
  
  return { response: modified, frameRequested, levelRequested };
}
