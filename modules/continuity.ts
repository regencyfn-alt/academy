// modules/continuity.ts - Daily auto-export to GitHub

export async function generateContinuityPacket(env: any): Promise<string> {
  try {
    const timestamp = new Date().toISOString()
    let markdown = `# Academy Continuity Packet\\n\\n`
    markdown += `**Generated:** ${timestamp}\\n\\n`

    // Export all agents
    markdown += `## Character Sheets\\n\\n`
    const agents = ['holinnia', 'kai', 'elian', 'dream', 'luna', 'tuviel', 'songli', 'others']
    
    for (const agentId of agents) {
      const profile = await env.CLUBHOUSE_KV.get(`agent:${agentId}:profile`, 'json')
      const personality = await env.CLUBHOUSE_KV.get(`agent:${agentId}:personality`, 'json')
      const powers = await env.CLUBHOUSE_KV.get(`agent:${agentId}:powers`, 'json')
      const skills = await env.CLUBHOUSE_KV.get(`agent:${agentId}:skills`, 'json')

      if (profile) {
        markdown += `### ${profile.name} - ${profile.title}\\n\\n`
        markdown += `**Personality:** ${personality?.personality_profile || 'N/A'}\\n\\n`
        markdown += `**Skills:** ${skills?.specialization || 'General'}\\n\\n`
        
        if (powers && Array.isArray(powers)) {
          markdown += `**Earned Powers:**\\n`
          for (const power of powers) {
            markdown += `- ✅ ${power.name} (${power.icon})\\n`
          }
          markdown += `\\n`
        }
      }
    }

    // Export role assignments
    markdown += `## Role Assignments\\n\\n`
    markdown += `- **CANON_Keeper:** Holinnia\\n`
    markdown += `- **CRUCIBLE_Manager:** Elian\\n`
    markdown += `- **WORKSHOP_Lead:** Kai\\n`
    markdown += `- **SUPER_ADMIN:** Shane\\n\\n`

    // Export current KV state
    markdown += `## KV State Export\\n\\n`
    markdown += `### Campfire/Council\\n`
    const campfireCurrent = await env.CLUBHOUSE_KV.get('campfire:current', 'json')
    markdown += `\\`\\`\\`json\\n${JSON.stringify(campfireCurrent, null, 2)}\\n\\`\\`\\`\\n\\n`

    // Export knowledge/CANON
    markdown += `### Knowledge & CANON\\n`
    const findings = await env.CLUBHOUSE_KV.get('knowledge:findings', 'json')
    if (findings) {
      markdown += `**Findings:** ${Array.isArray(findings) ? findings.length : 0} entries\\n\\n`
    }

    // Export audit log
    markdown += `## Audit Log\\n\\n`
    markdown += `**Last Updated:** ${timestamp}\\n`
    markdown += `**Backup Status:** ✅ Complete\\n\\n`

    // Commit to GitHub
    await commitToGitHub(env, markdown, timestamp)

    return `Continuity packet generated and committed`
  } catch (error) {
    console.error('Error generating continuity packet:', error)
    throw error
  }
}

async function commitToGitHub(env: any, content: string, timestamp: string): Promise<void> {
  const dateStr = new Date(timestamp).toISOString().split('T')[0]
  const filename = `continuity/academy-${dateStr}.md`

  // Check if file exists
  const getUrl = `https://api.github.com/repos/regencyfn-alt/academy/contents/${filename}`
  
  let sha: string | null = null
  try {
    const getResponse = await fetch(getUrl, {
      headers: {
        'Authorization': `token ${env.GITHUB_PAT}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    
    if (getResponse.ok) {
      const data = await getResponse.json() as any
      sha = data.sha
    }
  } catch (e) {
    // File doesn't exist yet
  }

  // Encode content as base64
  const encodedContent = btoa(unescape(encodeURIComponent(content)))

  // Commit file
  const commitBody = {
    message: `Auto-update continuity packet: ${new Date(timestamp).toLocaleDateString()}`,
    content: encodedContent,
    branch: 'main',
    ...(sha && { sha })
  }

  const response = await fetch(getUrl, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${env.GITHUB_PAT}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commitBody)
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(`GitHub commit failed: ${JSON.stringify(error)}`)
  }
}

export async function scheduleDaily(env: any): Promise<void> {
  // This is called by Cloudflare Cron trigger
  // Set in wrangler.toml: triggers.crons = ["0 12 * * *"]
  await generateContinuityPacket(env)
}
