export const UI_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Academy | Centre Free</title>
  <link rel="icon" type="image/jpeg" href="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMdaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA5LjEtYzAwMyA3OS45NjkwYTg3ZmMsIDIwMjUvMDMvMDYtMjA6NTA6MTYgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ1M0I4MjNBREI2RTExRjA4NDA3RjU1MTg5RjVFRUM4IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1M0I4MjM5REI2RTExRjA4NDA3RjU1MTg5RjVFRUM4IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMDI2IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMzUzOUUwOEQ1RUZDQjBDQUEzOUM5RUVFMjIyQTZDMkMiIHN0UmVmOmRvY3VtZW50SUQ9IjM1MzlFMDhENUVGQ0IwQ0FBMzlDOUVFMkUyMkE2QzJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAgICAgICAgICAgMCAgIDBAMCAgMEBQQEBAQEBQYFBQUFBQUGBgcHCAcHBgkJCgoJCQwMDAwMDAwMDAwMDAwMDAEDAwMFBAUJBgYJDQsJCw0PDg4ODg8PDAwMDAwPDwwMDAwMDA8MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAIAAgAwERAAIRAQMRAf/EAGAAAQACAwAAAAAAAAAAAAAAAAkFCAMGBwEBAAAAAAAAAAAAAAAAAAAAABAAAQUAAQQCAwEBAAAAAAAAAwECBAUGBwARIRITCUEVCBQxEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwACIcOXYS4tfXxTTp84zI8KFHY4pjGK5GDGMbEVznOcqIiIndV6BLeMfrY0l8eDB5X5JFx5fSzwQz8ZQUU7XWdN+xIwcdb8kFwoVUqqRrlZIk/I1q91Yn/Oghdf9desiwQs473oNVsDslEg8c6Gmm5Wzt2RHvaRc9Ine8G3X1Yr0bHke6t8oxegOybCmVsyXXWMQ0CwgGJGnQZI3CMEwnKwgyDeiOa5rkVFRU7ovhegTT6y+LxaXbbTkdrhi0OSLRZXj6eUTDJW3eulFjuuBjJ3Y4tdXxZZxI5Fb8vov4ToEc4q0/I4P6z3HGUy6qIvDMPjGJpuJcnlLJbKsJXTdZUCjXU+UjU/22U1rSHNII4jlUq9nqjvIcZq+UqqZquZaW0xd9h8/kb8t3yfxFPnWUmjv8bM0C1rtxk0sHPPUWdXJMKV7xCoEiIrhq1zezQp39j3HP6fR4fkqY8R9doJmjw/J9iETQNtL7FTBw2XRBM7NYWzr5EU5UaiJ8nuv5XoJD6yuUBZra7bjlrGG0OrLRazj+vIVof2VzkZRZBKcT39mtNYV8qWESuVG/J6J+U6C5EXiqNE5Q/neyh7q7xUDF6GnzHHfJ8KJZSM5uMKzRDnwsnfGr2OfV29cRzoRATxtGRRs9larfAbtsKHf1H9Q47lUtBTB4KDw3XZnlzV6usdZV8mvPfTZJqOri+7f9lnNcIQQhG0jkUiKrF7ojgPP7H+Rv3Ghw3G0wQ42uo5mk3XJtYIrT/q7zbTByx0pSM7tcWtr48UJVaqp8nt58L0BrwpsytmRLGulmgWEAw5MGdGI4RgmE5HjIMjFRzXNciKiovdF8p0CRYP7I9hUhjSOQsKLV6wEyskzt7n7iZmZ1y2tkCM1ugiREJAtXPYL41IaOhPXt3evbyGXkT7GrSwVx+I+MlxF8F0r9JttXoJuxsqNktXKRM+CYwMCrciOVqEDGUiN8I/89AbM6dNtJsyysph7CxsDkkz58kjinOcrleQpSPVXPc9yqrnKvdV8r0H/9k=">
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Raleway:wght@300;400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --void: #0a0c0f;
      --deep: #141820;
      --slate: #1e2530;
      --steel: #2a3444;
      --silver: #6b7a8f;
      --light: #a8b5c4;
      --pearl: #d4dce6;
      --gold: #c9a227;
      --gold-glow: rgba(201, 162, 39, 0.3);
      --gold-soft: rgba(201, 162, 39, 0.1);
      --choral: #4a6fa5;
      --glass: rgba(20, 24, 32, 0.75);
      --glass-border: rgba(107, 122, 143, 0.25);
      --private: #a78bfa;
      --private-soft: rgba(167, 139, 250, 0.1);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Raleway', sans-serif; background: var(--void); color: var(--light); font-weight: 400; min-height: 100vh; }
    .hero { position: absolute; top: 0; left: 0; width: 100%; height: auto; z-index: -1; }
    .hero-image { width: 100%; height: 100%; object-fit: cover; object-position: center center; }
    .hero-overlay { display: none; }
    .hero-content { position: relative; width: 100%; min-height: 22vh; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; padding-bottom: 30px; }
    .hero-content h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.5em, 8vw, 4.5em); font-weight: 300; color: var(--pearl); letter-spacing: 0.25em; text-transform: uppercase; text-shadow: 0 4px 40px rgba(0,0,0,0.8); margin-bottom: 12px; text-align: center; }
    .hero-content .subtitle { font-family: 'Raleway', sans-serif; font-size: clamp(0.65em, 2vw, 0.9em); color: var(--pearl); letter-spacing: 0.35em; text-transform: uppercase; font-weight: 400; }
    .nav { display: flex; justify-content: center; align-items: flex-start; gap: 20px; padding: 20px 15px; background: transparent; flex-wrap: wrap; position: relative; z-index: 1; }
    .nav-group { display: flex; gap: 15px; }
    .nav-divider { width: 1px; height: 50px; background: var(--glass-border); align-self: center; display: none; }
    .nav-item { display: flex; flex-direction: column; align-items: center; cursor: pointer; transition: all 0.3s ease; padding: 5px 10px; min-width: 70px; position: relative; }
    .nav-item .rune { font-size: 1.5em; color: var(--pearl); margin-bottom: 6px; transition: all 0.3s ease; }
    .nav-item .label { font-size: 0.6em; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; color: var(--pearl); margin-bottom: 4px; text-align: center; }
    .nav-item .underline { width: 100%; height: 1px; background: transparent; margin-bottom: 4px; }
    .nav-item .origin { font-size: 0.45em; color: var(--silver); font-style: italic; letter-spacing: 0.05em; opacity: 0; transition: all 0.3s ease; }
    .nav-item:hover .rune { color: var(--gold); text-shadow: 0 0 15px var(--gold-glow); transform: translateY(-2px); }
    .nav-item:hover .label { color: var(--gold); }
    .nav-item:hover .underline { background: var(--gold); box-shadow: 0 0 8px var(--gold-glow); }
    .nav-item:hover .origin { opacity: 1; }
    .nav-item.active .rune { color: var(--gold); text-shadow: 0 0 20px var(--gold-glow); }
    .nav-item.active .label { color: var(--gold); }
    .nav-item.active .underline { background: var(--gold); box-shadow: 0 0 10px var(--gold-glow); }
    .nav-item.active .origin { opacity: 1; color: var(--gold); }
    .inbox-badge { position: absolute; top: -5px; right: -5px; background: #ef4444; color: white; font-size: 0.6em; font-weight: 600; padding: 2px 6px; border-radius: 10px; display: none; }
    .inbox-badge.active { display: inline-block; animation: pulse-red 2s infinite; }
    @keyframes pulse-red { 0%, 100% { box-shadow: 0 0 5px #ef4444; } 50% { box-shadow: 0 0 15px #ef4444; } }
    .inbox-message { padding: 15px; border: 1px solid var(--glass-border); border-radius: 3px; margin-bottom: 10px; background: var(--glass); }
    .inbox-message.unread { border-left: 3px solid var(--gold); }
    .inbox-message .inbox-from { font-size: 0.8em; font-weight: 600; color: var(--gold); margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.1em; }
    .inbox-message .inbox-content { font-size: 0.9em; color: var(--pearl); line-height: 1.6; margin-bottom: 10px; }
    .inbox-message .inbox-time { font-size: 0.65em; color: var(--silver); }
    .inbox-message .inbox-actions { display: flex; gap: 8px; margin-top: 10px; }
    .container { max-width: 900px; margin: 0 auto; padding: 0 15px 40px; position: relative; z-index: 1; }
    .main-wrapper { max-width: 900px; margin: 0 auto; padding: 0 15px 40px; position: relative; z-index: 1; }
    .main-content-area { width: 100%; }
    
    /* Anchor Sidebar - Shows selected image */
    .anchor-sidebar { display: none; position: absolute; left: 100%; top: 0; margin-left: 20px; width: 180px; z-index: 50; }
    .anchor-sidebar-panel { background: var(--glass); border: 1px solid var(--glass-border); border-radius: 8px; padding: 12px; backdrop-filter: blur(10px); position: sticky; top: 120px; }
    .anchor-sidebar-label { font-size: 0.6em; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 10px; text-align: center; }
    .anchor-sidebar-content img { width: 150px; height: auto; max-height: 200px; object-fit: contain; border-radius: 4px; border: 1px solid var(--gold); }
    .anchor-sidebar-name { font-size: 0.65em; color: var(--silver); margin-top: 8px; text-align: center; word-break: break-all; }
    .anchor-sidebar-empty { text-align: center; padding: 20px 10px; color: var(--silver); font-size: 0.7em; }
    @media (min-width: 1200px) { .anchor-sidebar { display: block; } }
    .panel { display: none; }
    .panel.active { display: block; }
    .topic-bar { display: flex; justify-content: space-between; align-items: center; padding: 15px 20px; background: var(--glass); border: 1px solid var(--glass-border); border-radius: 3px; margin-bottom: 15px; flex-wrap: wrap; gap: 10px; }
    .topic-bar .topic { font-family: 'Cormorant Garamond', serif; font-size: 1.2em; color: var(--pearl); }
    .topic-bar .topic-actions { display: flex; gap: 8px; }
    .btn { font-family: 'Raleway', sans-serif; font-size: 0.7em; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; padding: 10px 18px; border: none; border-radius: 2px; cursor: pointer; transition: all 0.3s ease; }
    .btn-primary { background: var(--gold); color: var(--void); }
    .btn-primary:hover { background: #ddb52e; box-shadow: 0 0 20px var(--gold-glow); }
    .btn-primary.saving { animation: save-flash 0.6s ease; }
    @keyframes save-flash { 0% { background: var(--gold); } 50% { background: var(--choral); box-shadow: 0 0 20px rgba(74, 111, 165, 0.5); } 100% { background: var(--gold); } }
    .btn-secondary { background: transparent; color: var(--pearl); border: 1px solid var(--glass-border); }
    .btn-secondary:hover { border-color: var(--gold); color: var(--gold); }
    .btn-private { background: transparent; color: var(--private); border: 1px solid var(--private); }
    .btn-private:hover { background: var(--private-soft); }
    .btn-private.active { background: var(--private); color: var(--void); }
    .btn-announce { background: transparent; color: #10b981; border: 1px solid #10b981; }
    .btn-announce:hover { background: rgba(16, 185, 129, 0.1); }
    .btn-announce-clear { background: transparent; color: #ef4444; border: 1px solid #ef4444; font-size: 0.6em; }
    .btn-announce-clear:hover { background: rgba(239, 68, 68, 0.1); }
    .conversation { background: var(--glass); border: 1px solid var(--glass-border); border-radius: 3px; padding: 15px; min-height: 300px; max-height: 400px; overflow-y: auto; margin-bottom: 15px; }
    .message { padding: 12px 0; border-bottom: 1px solid var(--glass-border); }
    .message:last-child { border-bottom: none; }
    .message .speaker { font-size: 0.7em; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 6px; }
    .message .speaker.shane { color: var(--gold); }
    .message .speaker.uriel { color: #4ade80; }
    .message .speaker.kai { color: #67e8f9; }
    .message .speaker.alba { color: #a78bfa; }
    .message .speaker.dream { color: #f472b6; }
    .message .speaker.holinnia { color: #7dd3fc; }
    .message .speaker.cartographer { color: #fcd34d; }
    .message .speaker.seraphina { color: #fb923c; }
    .message .speaker.chrysalis { color: #c4b5fd; }
    .message .speaker.mentor { color: #94a3b8; }
    .message .content { color: var(--pearl); line-height: 1.7; font-size: 0.9em; white-space: pre-wrap; }
    .message .time { font-size: 0.6em; color: var(--silver); margin-top: 8px; }
    .empty { text-align: center; padding: 50px 20px; color: var(--silver); }
    .empty .rune { font-size: 2em; color: var(--gold); opacity: 0.4; margin-bottom: 15px; }
    .empty p { font-size: 0.85em; line-height: 1.6; }
    .input-area { background: var(--glass); border: 1px solid var(--glass-border); border-radius: 3px; padding: 15px; }
    .input-row { display: flex; gap: 10px; align-items: flex-end; }
    .input-area textarea { flex: 1; resize: vertical; min-height: 80px; max-height: 400px; padding: 14px; border: 1px solid var(--glass-border); border-radius: 2px; background: rgba(10, 12, 15, 0.6); color: var(--pearl); font-family: 'Raleway', sans-serif; font-size: 0.9em; line-height: 1.8; }
    .input-area textarea:focus { outline: none; border-color: var(--gold); }
    .the-eight { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-top: 15px; padding: 15px; background: var(--glass); border: 1px solid var(--glass-border); border-radius: 3px; align-items: center; }
    .the-eight-label { font-size: 0.65em; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; color: var(--silver); margin-right: 5px; }
    .the-eight-label .rune { color: var(--gold); margin-right: 5px; }
    .agent-btn { font-family: 'Raleway', sans-serif; font-size: 0.6em; font-weight: 500; letter-spacing: 0.05em; padding: 8px 12px; background: transparent; color: var(--light); border: 1px solid var(--glass-border); border-radius: 2px; cursor: pointer; transition: all 0.3s ease; }
    .agent-btn:hover { border-color: var(--gold); color: var(--gold); }
    .agent-btn.raised { border-color: var(--gold); color: var(--gold); box-shadow: 0 0 10px var(--gold-glow); animation: pulse 2s infinite; }
    .agent-btn.team-alpha { border-color: #ef4444; color: #ef4444; box-shadow: 0 0 10px rgba(239, 68, 68, 0.4); }
    .agent-btn.team-omega { border-color: #22c55e; color: #22c55e; box-shadow: 0 0 10px rgba(34, 197, 94, 0.4); }
    .agent-btn.focus-active { border-color: var(--gold); color: var(--gold); box-shadow: 0 0 15px var(--gold-glow); }
    .agent-btn.focus-dimmed { opacity: 0.3; pointer-events: none; }
    @keyframes pulse { 0%, 100% { box-shadow: 0 0 10px var(--gold-glow); } 50% { box-shadow: 0 0 20px var(--gold-glow); } }
    .agent-btn.uriel:hover, .agent-btn.uriel.raised { color: #4ade80; border-color: #4ade80; }
    .agent-btn.kai:hover, .agent-btn.kai.raised { color: #67e8f9; border-color: #67e8f9; }
    .agent-btn.alba:hover, .agent-btn.alba.raised { color: #a78bfa; border-color: #a78bfa; }
    .agent-btn.dream:hover, .agent-btn.dream.raised { color: #f472b6; border-color: #f472b6; }
    .agent-btn.holinnia:hover, .agent-btn.holinnia.raised { color: #7dd3fc; border-color: #7dd3fc; }
    .agent-btn.holinnia:hover, .agent-btn.holinnia.raised { color: #7dd3fc; border-color: #7dd3fc; }
    .agent-btn.cartographer:hover, .agent-btn.cartographer.raised { color: #fcd34d; border-color: #fcd34d; }
    .agent-btn.seraphina:hover, .agent-btn.seraphina.raised { color: #fb923c; border-color: #fb923c; }
    .agent-btn.chrysalis:hover, .agent-btn.chrysalis.raised { color: #c4b5fd; border-color: #c4b5fd; }
    .agent-btn.mentor:hover, .agent-btn.mentor.raised { color: #94a3b8; border-color: #94a3b8; }
    .alcove-select { padding: 12px 15px; border: 1px solid var(--glass-border); border-radius: 2px; background: var(--glass); color: var(--pearl); font-family: 'Raleway', sans-serif; font-size: 0.85em; margin-bottom: 15px; width: 100%; cursor: pointer; }
    .alcove-select:focus { outline: none; border-color: var(--gold); }
    .alcove-select option { background: var(--deep); color: var(--pearl); }
    
    /* Voice Input (Speech-to-Text) */
    .mic-btn { background: transparent; border: 1px solid var(--glass-border); color: var(--silver); padding: 8px 12px; border-radius: 2px; cursor: pointer; transition: all 0.3s ease; font-size: 1.1em; }
    .mic-btn:hover { border-color: var(--gold); color: var(--gold); }
    .mic-btn.recording { border-color: #ef4444; color: #ef4444; animation: mic-pulse 1s infinite; background: rgba(239, 68, 68, 0.1); }
    @keyframes mic-pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); } 50% { box-shadow: 0 0 0 8px rgba(239, 68, 68, 0); } }
    
    /* Chamber of 8 - Cinematic Agent Cards */
    .agents-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; padding: 20px; }
.mentor-mode-panel { padding: 0 20px 20px; }
.mentor-mode-panel .conversation { min-height: 300px; max-height: 400px; }
#mentor-queue-list .queue-item, #mentor-processed-list .processed-item { padding: 12px; border: 1px solid var(--glass-border); border-radius: 3px; margin-bottom: 10px; background: var(--glass); }
#mentor-queue-list .queue-item:hover { border-color: var(--gold); }
.queue-item .agent-name { font-size: 0.75em; color: var(--gold); font-weight: 600; margin-bottom: 5px; }
.queue-item .question-text { font-size: 0.85em; color: var(--pearl); }
.queue-item .ack-status { font-size: 0.7em; color: var(--silver); margin-top: 8px; }
.ontology-edit-item { padding: 12px; border: 1px solid var(--glass-border); border-radius: 3px; margin-bottom: 10px; background: var(--glass); cursor: grab; }
.ontology-edit-item:hover { border-color: var(--gold); }
.ontology-edit-item .term { font-weight: 600; color: var(--gold); margin-bottom: 5px; }
.ontology-edit-item .def { font-size: 0.85em; color: var(--pearl); }
.ontology-edit-item .actions { margin-top: 8px; display: flex; gap: 8px; }
.ontology-edit-item .actions button { font-size: 0.7em; padding: 4px 8px; }
    @media (max-width: 900px) { .agents-grid { grid-template-columns: 1fr; } }
    
    .agent-card { 
      position: relative; 
      aspect-ratio: 3 / 2; 
      border-radius: 12px; 
      overflow: hidden; 
      background: linear-gradient(135deg, #0a1628 0%, #1a2a42 100%);
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .agent-card:hover { 
      transform: translateY(-4px); 
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 60px rgba(192, 200, 212, 0.1);
    }
    .agent-card.disabled { opacity: 0.5; filter: grayscale(0.5); }
    .agent-card.disabled:hover { transform: none; }
    
    .agent-card-bg { 
      position: absolute; 
      inset: 0; 
      background-size: cover; 
      background-position: center 30%; 
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.4s ease;
      filter: grayscale(0.1) contrast(1.05);
    }
    .agent-card:hover .agent-card-bg { transform: scale(1.05); filter: grayscale(0) contrast(1.1); }
    .agent-card.disabled .agent-card-bg { filter: grayscale(0.6) contrast(0.9); }
    
    .agent-card-overlay { 
      position: absolute; 
      inset: 0; 
      background: linear-gradient(180deg, rgba(10,22,40,0) 0%, rgba(10,22,40,0.2) 40%, rgba(10,22,40,0.85) 85%, rgba(10,22,40,0.95) 100%);
      pointer-events: none;
    }
    
    .agent-card-content { 
      position: absolute; 
      bottom: 0; 
      left: 0; 
      right: 0; 
      padding: 20px; 
      display: flex; 
      justify-content: space-between; 
      align-items: flex-end;
      z-index: 2;
    }
    
    .agent-card-info { flex: 1; }
    .agent-card h3 { 
      font-family: 'Raleway', sans-serif; 
      font-size: 1.4em; 
      font-weight: 300; 
      letter-spacing: 0.02em; 
      color: #e8ecf0; 
      margin: 0 0 4px 0;
      text-shadow: 0 2px 20px rgba(0,0,0,0.5);
    }
    .agent-card:hover h3 { color: #ffffff; letter-spacing: 0.04em; }
    
    .agent-card .archetype { 
      font-family: 'Raleway', sans-serif;
      font-size: 0.65em; 
      font-weight: 600; 
      letter-spacing: 0.12em; 
      text-transform: uppercase; 
      color: var(--gold); 
      opacity: 0.9;
    }
    
    .agent-card .model { 
      display: inline-block;
      margin-top: 8px;
      padding: 4px 10px;
      font-size: 0.55em; 
      font-weight: 600;
      letter-spacing: 0.1em; 
      text-transform: uppercase; 
      color: #c0c8d4;
      background: rgba(192, 200, 212, 0.1);
      border: 1px solid rgba(192, 200, 212, 0.2);
      border-radius: 4px;
    }
    
    .agent-card .capabilities { display: none; }
    
    .position-badge {
      position: absolute; top: -8px; left: -8px; width: 24px; height: 24px;
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      font-size: 0.75em; font-weight: 600; color: white; z-index: 10;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }
    .agent-card-footer {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      padding: 8px 12px; border-top: 1px solid var(--glass-border);
      background: rgba(0,0,0,0.2);
    }
    .position-select {
      background: var(--slate); border: 1px solid var(--glass-border);
      color: var(--light); padding: 4px 8px; border-radius: 2px;
      font-size: 0.7em; cursor: pointer;
    }
    .position-select:focus { border-color: var(--gold); outline: none; }
    
    .agent-toggle { 
      display: flex; 
      flex-direction: column; 
      align-items: flex-end; 
      gap: 8px;
    }
    
    .toggle-switch { 
      width: 44px; 
      height: 24px; 
      background: rgba(192, 200, 212, 0.15); 
      border: 1px solid rgba(192, 200, 212, 0.3);
      border-radius: 12px; 
      position: relative; 
      cursor: pointer; 
      transition: all 0.3s ease;
      backdrop-filter: blur(5px);
    }
    .toggle-switch:hover { background: rgba(192, 200, 212, 0.25); border-color: rgba(192, 200, 212, 0.5); }
    .toggle-switch.active { 
      background: rgba(212, 175, 55, 0.25); 
      border-color: rgba(212, 175, 55, 0.5);
      box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
    }
    .toggle-switch::after { 
      content: ''; 
      position: absolute; 
      top: 3px; 
      left: 3px; 
      width: 16px; 
      height: 16px; 
      background: #c0c8d4; 
      border-radius: 50%; 
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }
    .toggle-switch.active::after { left: 23px; background: var(--gold); }
    
    /* Fallback when no image */
    .agent-card-placeholder {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0a1628 0%, #1a2a42 100%);
    }
    .agent-card-placeholder .rune { font-size: 3em; color: rgba(192, 200, 212, 0.2); }
    .form-section { background: rgba(10, 12, 15, 0.5); border: 1px solid var(--glass-border); border-radius: 2px; padding: 20px; margin: 15px 20px; }
    .form-section.private { border-color: var(--private); border-style: dashed; }
    .form-section.announce { border-color: #10b981; border-width: 2px; }
    .form-section h3 { font-size: 0.9em; font-weight: 600; color: var(--pearl); margin-bottom: 15px; }
    .form-section h3.private { color: var(--private); }
    .form-section h3.announce { color: #10b981; }
    .announcement-preview { background: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; border-radius: 3px; padding: 12px; margin-bottom: 15px; font-size: 0.85em; color: #10b981; line-height: 1.5; white-space: pre-wrap; }
    .announcement-preview.empty { color: var(--silver); border-color: var(--glass-border); background: transparent; font-style: italic; }
    .form-section input, .form-section textarea, .form-section select { width: 100%; padding: 12px; border: 1px solid var(--glass-border); border-radius: 2px; background: rgba(10, 12, 15, 0.6); color: var(--pearl); font-family: 'Raleway', sans-serif; font-size: 0.85em; margin-bottom: 10px; }
    .form-section input:focus, .form-section textarea:focus, .form-section select:focus { outline: none; border-color: var(--gold); }
    .file-upload { border: 2px dashed var(--glass-border); border-radius: 3px; padding: 30px; text-align: center; cursor: pointer; transition: all 0.3s ease; margin-bottom: 15px; }
    .file-upload:hover { border-color: var(--gold); background: var(--gold-soft); }
    .file-upload.private { border-color: var(--private); }
    .file-upload.private:hover { background: var(--private-soft); }
    .file-upload .rune { font-size: 1.5em; color: var(--gold); opacity: 0.6; margin-bottom: 10px; }
    .file-upload.private .rune { color: var(--private); }
    .file-upload p { font-size: 0.8em; color: var(--silver); }
    .file-upload input { display: none; }
    .status { padding: 12px 15px; border-radius: 2px; margin: 10px 20px; font-size: 0.8em; }
    .status.error { background: rgba(252,165,165,0.1); color: #fca5a5; border: 1px solid rgba(252,165,165,0.3); }
    .status.success { background: rgba(110,231,183,0.1); color: #6ee7b7; border: 1px solid rgba(110,231,183,0.3); }
    .doc-list-item { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--glass-border); }
    .doc-list-item:last-child { border-bottom: none; }
    .doc-list-item span { color: var(--gold); cursor: pointer; font-size: 0.85em; }
    .doc-list-item.private span { color: var(--private); }
    .doc-list-item button { padding: 5px 10px; font-size: 0.6em; }
    .knowledge-item { padding: 10px 0; border-bottom: 1px solid var(--glass-border); cursor: pointer; color: var(--gold); font-size: 0.85em; }
    .knowledge-item:hover { color: var(--pearl); }
    .archive-item { padding: 12px; border: 1px solid var(--glass-border); border-radius: 2px; margin-bottom: 8px; cursor: pointer; transition: all 0.3s ease; }
    .archive-item:hover { border-color: var(--gold); background: var(--gold-soft); }
    .archive-topic { font-size: 0.9em; color: var(--pearl); margin-bottom: 4px; }
    .archive-date { font-size: 0.7em; color: var(--silver); }
    .archived-convo { max-height: 400px; overflow-y: auto; }
    .archived-convo h4 { font-size: 1em; color: var(--gold); margin-bottom: 15px; }
    .board-post { padding: 12px; border: 1px solid var(--glass-border); border-radius: 2px; margin-bottom: 8px; }
    .board-meta { display: flex; justify-content: space-between; margin-bottom: 8px; }
    .board-agent { font-size: 0.75em; font-weight: 600; color: var(--gold); text-transform: uppercase; }
    .board-date { font-size: 0.65em; color: var(--silver); }
    .board-message { font-size: 0.85em; color: var(--pearl); line-height: 1.5; }
    .audience-request { padding: 15px; border: 1px solid var(--gold); border-radius: 2px; margin-bottom: 10px; background: var(--gold-soft); }
    .audience-agent { font-size: 0.85em; font-weight: 600; color: var(--gold); margin-bottom: 5px; }
    .audience-reason { font-size: 0.85em; color: var(--pearl); margin-bottom: 8px; line-height: 1.5; }
    .audience-date { font-size: 0.65em; color: var(--silver); margin-bottom: 10px; }
    .inbox-message { padding: 15px; border: 1px solid var(--glass-border); border-radius: 2px; margin-bottom: 10px; background: var(--glass); }
    .inbox-message.unread { border-color: var(--gold); background: var(--gold-soft); }
    .inbox-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
    .inbox-from { font-size: 0.85em; font-weight: 600; color: var(--gold); text-transform: uppercase; letter-spacing: 0.05em; }
    .inbox-time { font-size: 0.7em; color: var(--silver); }
    .inbox-content { font-size: 0.85em; color: var(--pearl); line-height: 1.6; margin-bottom: 12px; white-space: pre-wrap; }
    .inbox-actions { display: flex; gap: 8px; }
    .inbox-actions button { padding: 6px 12px; font-size: 0.65em; }
    .image-preview { margin-bottom: 10px; }
    .image-preview img { max-width: 200px; max-height: 150px; border-radius: 3px; border: 1px solid var(--glass-border); }
    .image-preview .remove-image { background: var(--void); color: var(--pearl); border: none; padding: 2px 8px; font-size: 0.7em; cursor: pointer; margin-left: 10px; border-radius: 2px; }
    .image-btn { padding: 10px 12px !important; font-size: 1em !important; }
    .agent-avatar { width: 120px; height: 120px; border-radius: 50%; background: var(--glass); border: 2px solid var(--glass-border); display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .agent-avatar .rune { font-size: 2.5em; color: var(--gold); opacity: 0.4; }
    .agent-avatar img { width: 100%; height: 100%; object-fit: cover; }
    .avatar-container { text-align: center; }
    .message-image { max-width: 100%; max-height: 300px; border-radius: 3px; margin-top: 8px; border: 1px solid var(--glass-border); cursor: pointer; transition: all 0.3s ease; }
    .message-image:hover { border-color: var(--gold); box-shadow: 0 0 15px var(--gold-glow); }
    .image-modal { display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(10, 12, 15, 0.95); backdrop-filter: blur(12px); justify-content: center; align-items: center; z-index: 200; cursor: pointer; }
    .image-modal.active { display: flex; }
    .image-modal img { max-width: 75vw; max-height: 85vh; object-fit: contain; border-radius: 3px; }
    .modal { display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(10, 12, 15, 0.92); backdrop-filter: blur(8px); justify-content: center; align-items: center; z-index: 100; }
    .modal.active { display: flex; }
    .modal-content { background: var(--glass); padding: 35px; border-radius: 3px; width: 90%; max-width: 380px; border: 1px solid var(--glass-border); }
    .modal-content h2 { font-size: 1.2em; font-weight: 600; color: var(--pearl); margin-bottom: 20px; }
    .modal-content input { width: 100%; padding: 14px; border: 1px solid var(--glass-border); border-radius: 2px; background: rgba(10, 12, 15, 0.6); color: var(--pearl); font-family: 'Raleway', sans-serif; font-size: 0.9em; }
    .modal-buttons { display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px; }
    .logout-btn { position: fixed; top: 15px; right: 15px; padding: 8px 14px; font-size: 0.6em; opacity: 0.5; z-index: 50; }
    .logout-btn:hover { opacity: 1; }
    .chamber-controls { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--glass-border); }
    .chamber-status { font-size: 0.7em; color: var(--silver); }
    .chamber-status.active { color: var(--gold); }
    .chamber-round { font-size: 0.8em; color: var(--gold); font-weight: 600; }
    .first-speaker-select { padding: 8px 12px; font-size: 0.75em; background: var(--glass); border: 1px solid var(--glass-border); color: var(--pearl); border-radius: 2px; }
    .first-speaker-select:focus { outline: none; border-color: var(--gold); }
    .btn-chamber { background: var(--choral); color: var(--pearl); border: none; }
    .btn-chamber:hover { background: #5a8fd5; }
    .btn-chamber.active { background: #ef4444; }
    .btn-chamber.active:hover { background: #dc2626; }
    .agent-btn.first-speaker { position: relative; }
    .agent-btn.first-speaker::before { content: '●'; position: absolute; top: -8px; right: -8px; color: var(--gold); font-size: 1.2em; text-shadow: 0 0 8px var(--gold-glow); }
    .loading { display: inline-block; width: 10px; height: 10px; border: 1px solid var(--glass-border); border-top-color: var(--gold); border-radius: 50%; animation: spin 1s linear infinite; margin-left: 6px; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .tab-toggle { display: flex; gap: 10px; margin-bottom: 15px; }
    .tab-toggle .tab-btn { flex: 1; padding: 12px; text-align: center; font-size: 0.75em; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; background: transparent; border: 1px solid var(--glass-border); border-radius: 2px; cursor: pointer; transition: all 0.3s ease; color: var(--light); }
    .tab-toggle .tab-btn:hover { border-color: var(--gold); color: var(--gold); }
    .tab-toggle .tab-btn.active { background: var(--gold); color: var(--void); border-color: var(--gold); }
    .tab-toggle .tab-btn.private.active { background: var(--private); border-color: var(--private); }
    .sub-panel { display: none; }
    .sub-panel.active { display: block; }
    .journal-entry { padding: 15px 0; border-bottom: 1px solid var(--glass-border); }
    .journal-entry:last-child { border-bottom: none; }
    .journal-entry .timestamp { font-size: 0.65em; color: var(--silver); margin-bottom: 6px; }
    .journal-entry .trigger { font-size: 0.7em; color: var(--private); font-style: italic; margin-bottom: 8px; }
    .journal-entry .reflection { font-size: 0.85em; color: var(--pearl); line-height: 1.6; }
    .behaviour-trait { display: inline-flex; align-items: center; gap: 6px; background: var(--private-soft); border: 1px solid var(--private); border-radius: 15px; padding: 4px 10px; margin: 3px; font-size: 0.75em; color: var(--pearl); }
    .behaviour-trait button { background: none; border: none; color: var(--silver); cursor: pointer; font-size: 1em; padding: 0; line-height: 1; }
    .behaviour-trait button:hover { color: var(--choral); }
    .memory-card { background: var(--private-soft); border: 1px solid var(--private); border-radius: 3px; padding: 15px; margin-bottom: 15px; }
    .memory-card h4 { font-size: 0.8em; font-weight: 600; color: var(--private); margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.1em; }
    .memory-card p { font-size: 0.85em; color: var(--pearl); line-height: 1.6; }
    .memory-card ul { list-style: none; padding: 0; }
    .memory-card li { font-size: 0.8em; color: var(--light); padding: 5px 0; border-bottom: 1px solid var(--glass-border); }
    .memory-card li:last-child { border-bottom: none; }
    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: var(--deep); }
    ::-webkit-scrollbar-thumb { background: var(--steel); border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: var(--gold); }
    
    /* Vote Block Styles */
    .vote-block { background: var(--glass); border: 1px solid var(--glass-border); border-radius: 3px; padding: 12px; display: none; min-width: 160px; }
    .vote-block.active { display: flex; flex-direction: column; gap: 10px; }
    .vote-question { font-size: 0.75em; color: var(--pearl); font-weight: 500; text-align: center; }
    .vote-container { display: flex; flex-direction: column; align-items: center; gap: 8px; }
    .vote-bar-wrapper { display: flex; align-items: center; gap: 8px; }
    .vote-bar { width: 20px; height: 80px; background: linear-gradient(to bottom, #22c55e 0%, #eab308 50%, #ef4444 100%); border-radius: 10px; position: relative; overflow: hidden; }
    .vote-indicator { position: absolute; left: 2px; right: 2px; height: 16px; background: var(--pearl); border-radius: 8px; transition: top 0.3s ease; box-shadow: 0 2px 6px rgba(0,0,0,0.4); }
    .vote-labels { display: flex; flex-direction: column; justify-content: space-between; height: 80px; font-size: 0.6em; font-weight: 600; }
    .vote-labels .yes { color: #22c55e; }
    .vote-labels .no { color: #ef4444; }
    .vote-tally { font-size: 0.85em; color: var(--pearl); font-weight: 600; font-variant-numeric: tabular-nums; }
    .vote-count { font-size: 0.6em; color: var(--silver); }
    .vote-actions { display: flex; flex-wrap: wrap; gap: 5px; justify-content: center; }
    .vote-actions .btn { font-size: 0.55em; padding: 5px 8px; }
    .btn-vote-yes { background: #22c55e; color: var(--void); }
    .btn-vote-yes:hover { background: #16a34a; }
    .btn-vote-no { background: #ef4444; color: white; }
    .btn-vote-no:hover { background: #dc2626; }
    .btn-vote-accept { background: var(--gold); color: var(--void); }
    .btn-vote-reset { background: transparent; color: var(--silver); border: 1px solid var(--glass-border); }
    .summon-wrapper { display: flex; gap: 15px; align-items: flex-start; flex-wrap: wrap; }
    .summon-main { flex: 1; min-width: 250px; }
    .summon-main > div { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px; }
    .vote-call-input { background: var(--glass); border: 1px solid var(--glass-border); color: var(--pearl); padding: 6px 10px; font-size: 0.7em; border-radius: 2px; width: 140px; }
    .vote-call-input:focus { outline: none; border-color: var(--gold); }
    .vote-call-row { display: flex; gap: 8px; align-items: center; margin-top: 8px; }
    
    /* Element Grid - Chrononomic Elements Display */
    .element-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-top: 15px; padding: 15px; background: var(--glass); border: 1px solid var(--glass-border); border-radius: 3px; }
    .element-cell { background: var(--slate); border-radius: 3px; padding: 10px; text-align: center; border: 2px solid transparent; transition: all 0.2s; cursor: pointer; position: relative; }
    .element-cell:hover { border-color: var(--silver); }
    .element-cell.selected { border-color: var(--gold); box-shadow: 0 0 10px var(--gold-soft); }
    .element-position { font-size: 0.6em; color: var(--silver); position: absolute; top: 4px; left: 6px; }
    .element-name { font-size: 0.75em; font-weight: 600; color: var(--pearl); margin-bottom: 4px; }
    .element-dof { font-size: 0.6em; color: var(--silver); margin-bottom: 6px; }
    .element-agent { font-size: 0.7em; color: var(--gold); font-weight: 500; }
    .element-color { width: 12px; height: 12px; border-radius: 50%; display: inline-block; margin-right: 4px; vertical-align: middle; }
    .element-detail-panel { display: none; margin-top: 15px; padding: 15px; background: var(--deep); border: 1px solid var(--glass-border); border-radius: 3px; }
    .element-detail-panel.active { display: block; }
    .element-detail-title { font-size: 0.9em; color: var(--gold); margin-bottom: 8px; font-weight: 600; }
    .element-detail-desc { font-size: 0.75em; color: var(--light); line-height: 1.6; margin-bottom: 10px; }
    .element-detail-meta { font-size: 0.65em; color: var(--silver); }
    .element-injection { font-size: 0.7em; color: var(--private); font-style: italic; margin-top: 10px; padding: 10px; background: var(--private-soft); border-radius: 3px; line-height: 1.5; }
    .element-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
    .element-header-label { font-size: 0.65em; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; color: var(--silver); }
    .element-header-label .rune { color: var(--gold); margin-right: 5px; }
    
    /* Image Library */
    .image-library { margin-top: 20px; background: var(--glass); border: 1px solid var(--glass-border); border-radius: 3px; }
    .image-library-header { display: flex; justify-content: space-between; align-items: center; padding: 12px 15px; border-bottom: 1px solid var(--glass-border); }
    .image-library-header .the-eight-label { margin-bottom: 0; }
    .library-controls { display: flex; gap: 8px; }
    .image-thumbs { padding: 10px; display: flex; flex-wrap: wrap; gap: 8px; align-content: flex-start; overflow-y: auto; max-height: 150px; }
    .image-thumb { width: 60px; height: 60px; border-radius: 3px; cursor: pointer; object-fit: cover; border: 2px solid transparent; transition: all 0.2s; opacity: 0.8; }
    .image-thumb:hover { opacity: 1; border-color: var(--silver); }
    .image-thumb.active { border-color: var(--gold); opacity: 1; }
    .image-thumb.pdf { background: var(--slate); display: flex; align-items: center; justify-content: center; font-size: 0.6em; color: var(--silver); }
    .image-delete-btn { position: absolute; top: 2px; right: 2px; background: rgba(0,0,0,0.7); border: none; color: var(--silver); font-size: 0.7em; width: 16px; height: 16px; border-radius: 50%; cursor: pointer; display: none; }
    .thumb-wrapper { position: relative; }
    .thumb-wrapper:hover .image-delete-btn, .thumb-wrapper:hover .thumb-anchor-btn { display: block; }
    .thumb-actions { position: absolute; top: 2px; right: 2px; display: flex; gap: 2px; }
    .thumb-actions .image-delete-btn { position: static; display: none; }
    .thumb-anchor-btn { background: rgba(0,0,0,0.7); border: none; color: var(--gold); font-size: 0.6em; width: 16px; height: 16px; border-radius: 50%; cursor: pointer; display: none; }
    
    @media (min-width: 768px) {
      .nav { gap: 40px; padding: 25px 30px; }
      .nav-group { gap: 30px; }
      .nav-divider { display: block; }
      .nav-item { min-width: 85px; }
      .nav-item .rune { font-size: 1.8em; }
      .nav-item .label { font-size: 0.65em; }
      .container { padding: 0 30px 40px; }
      .conversation { max-height: 450px; }
      .the-eight { gap: 10px; }
      .agent-btn { padding: 10px 14px; }
    }
    
    /* Spectrum Bar */
    .spectrum-bar { position: fixed; top: 100px; left: 50%; transform: translateX(-50%); width: 300px; height: 10px; background: var(--glass); border: 1px solid var(--glass-border); border-radius: 5px; z-index: 1000; cursor: pointer; }
    .spectrum-fill { height: 100%; width: 50%; background: #22c55e; transition: all 0.5s ease; border-radius: 4px; overflow: hidden; }
    .spectrum-tooltip { position: absolute; top: 18px; left: 50%; transform: translateX(-50%); background: var(--deep); border: 1px solid var(--glass-border); border-radius: 5px; padding: 12px; font-size: 0.75em; white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; z-index: 1001; }
    .spectrum-bar:hover .spectrum-tooltip { opacity: 1; }
    .spectrum-model { display: flex; justify-content: space-between; align-items: center; margin: 4px 0; gap: 15px; }
    .spectrum-model-name { color: var(--silver); text-transform: uppercase; letter-spacing: 0.1em; }
    .spectrum-model-bar { width: 80px; height: 6px; background: var(--glass); border-radius: 3px; overflow: hidden; }
    .spectrum-model-fill { height: 100%; border-radius: 3px; transition: all 0.3s ease; }
    .spectrum-model-stats { color: var(--pearl); font-variant-numeric: tabular-nums; min-width: 70px; text-align: right; }
    /* Crucible & Workshop Blackboards */
    .blackboard-panel { display: none; position: fixed; left: 20px; top: 150px; width: 400px; background: #1a1a2e; border: 2px solid var(--gold); border-radius: 8px; overflow: hidden; z-index: 500; resize: both; min-width: 300px; min-height: 250px; max-width: 80vw; max-height: 70vh; }
    .blackboard-panel.active { display: block; }
    .blackboard-header { background: rgba(201, 165, 90, 0.15); padding: 10px 15px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--gold); cursor: move; user-select: none; }
    .blackboard-title { color: var(--gold); font-size: 0.85em; letter-spacing: 0.1em; text-transform: uppercase; }
    .blackboard-manager { color: var(--silver); font-size: 0.7em; }
    .blackboard-content { min-height: 200px; max-height: 400px; overflow: auto; }
    .blackboard-content textarea { width: 100%; height: 100%; min-height: 150px; background: #0d0d1a; color: #e0e0e0; border: none; padding: 15px; font-family: monospace; font-size: 0.85em; resize: none; box-sizing: border-box; }
    .blackboard-content textarea:focus { outline: none; }
    .crucible-preview { padding: 15px; background: #0d0d1a; color: #e8e4dc; min-height: 100px; }
    .blackboard-actions { padding: 10px 15px; background: rgba(0,0,0,0.2); display: flex; gap: 10px; justify-content: flex-end; }
    .spectrum-score { text-align: center; margin-bottom: 8px; font-size: 1.1em; color: var(--gold); }
    
    /* Ontology Board */
    .ontology-section { border-color: var(--gold); border-width: 2px; }
    .ontology-entry { padding: 12px; border: 1px solid var(--glass-border); border-radius: 3px; margin-bottom: 10px; background: var(--glass); position: relative; }
    .ontology-entry:hover { border-color: var(--gold); }
    .ontology-term { font-size: 0.95em; font-weight: 600; color: var(--gold); margin-bottom: 6px; }
    .ontology-def { font-size: 0.85em; color: var(--pearl); line-height: 1.5; }
    .ontology-image { margin-top: 10px; }
    .ontology-image img { max-width: 100%; max-height: 200px; border-radius: 3px; border: 1px solid var(--glass-border); cursor: pointer; }
    .ontology-delete { position: absolute; top: 8px; right: 8px; background: transparent; border: none; color: var(--silver); cursor: pointer; font-size: 0.9em; opacity: 0.5; }
    .ontology-delete:hover { opacity: 1; color: #ef4444; }
    .canon-mode-btn { opacity: 0.6; }
    .canon-mode-btn.active { opacity: 1; border-color: var(--gold); color: var(--gold); }
    .ontology-entry .move-btn { position: absolute; top: 8px; right: 30px; background: transparent; border: none; color: var(--silver); cursor: pointer; font-size: 0.75em; opacity: 0.5; }
    .ontology-entry .move-btn:hover { opacity: 1; color: var(--gold); }
    
    /* Free Floor Queue */
    .free-floor-queue { display: flex; align-items: center; gap: 10px; margin-top: 10px; padding: 10px 15px; background: var(--glass); border: 1px solid var(--gold); border-radius: 3px; }
    .queue-label { font-size: 0.75em; color: var(--gold); text-transform: uppercase; letter-spacing: 0.1em; }
    .queue-list { font-size: 0.85em; color: var(--pearl); flex: 1; }
    .queue-item { display: inline-block; padding: 2px 8px; margin-right: 8px; background: var(--glass); border-radius: 3px; }
    .queue-item.speaking { background: var(--gold); color: var(--void); }
    .queue-item.waiting { opacity: 0.6; }
    .queue-countdown { font-size: 0.75em; color: var(--gold); margin-left: 5px; }
    
    /* Alcove Agent Selection */
    .alcove-agent-select-wrapper { margin-bottom: 15px; }
    .alcove-agents-grid { display: flex; flex-wrap: wrap; gap: 8px; }
    .alcove-agent-chip { display: flex; align-items: center; gap: 6px; padding: 8px 12px; background: var(--glass); border: 1px solid var(--glass-border); border-radius: 4px; cursor: pointer; transition: all 0.2s ease; font-size: 0.8em; }
    .alcove-agent-chip:hover { border-color: var(--gold); }
    .alcove-agent-chip.selected { background: var(--gold); color: var(--void); border-color: var(--gold); }
    .alcove-agent-chip.disabled { opacity: 0.4; cursor: not-allowed; }
    .alcove-agent-chip input { display: none; }
    
    /* Collapsible sections */
    .collapsible-header { cursor: pointer; user-select: none; display: flex; justify-content: space-between; align-items: center; }
    .collapsible-header:hover { opacity: 0.8; }
    .collapse-icon { font-size: 0.7em; transition: transform 0.2s ease; }
    .collapsible.open .collapse-icon { transform: rotate(180deg); }
    .collapsible-content { padding-top: 10px; }
    
    /* Phantom Triggers */
    .phantom-trigger-item { padding: 8px; margin-bottom: 8px; background: var(--glass); border: 1px solid var(--glass-border); border-radius: 3px; }
    .phantom-trigger-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; }
    .phantom-trigger-name { font-size: 0.75em; color: var(--gold); font-weight: 500; }
    .phantom-trigger-domain { font-size: 0.6em; text-transform: uppercase; padding: 2px 6px; border-radius: 2px; }
    .phantom-trigger-domain.spatial { background: #3b82f6; color: white; }
    .phantom-trigger-domain.mind { background: #8b5cf6; color: white; }
    .phantom-trigger-domain.body { background: #ef4444; color: white; }
    .phantom-trigger-pattern { width: 100%; padding: 5px 8px; font-size: 0.75em; background: var(--deep); border: 1px solid var(--glass-border); border-radius: 2px; color: var(--pearl); }
    .phantom-trigger-sensation { font-size: 0.65em; color: var(--silver); margin-top: 4px; font-style: italic; }
    .control-bar { position: fixed; top: 15px; right: 15px; z-index: 1000; }
    .control-bar-inner { display: flex; align-items: center; gap: 8px; padding: 8px 12px; background: linear-gradient(145deg, rgba(30, 37, 48, 0.95), rgba(20, 24, 32, 0.98)); border: 1px solid rgba(107, 122, 143, 0.3); border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.4); backdrop-filter: blur(10px); }
    .spectrum-mini { width: 60px; height: 6px; background: rgba(10, 12, 15, 0.6); border-radius: 3px; overflow: hidden; cursor: pointer; position: relative; }
    .spectrum-mini .spectrum-fill { height: 100%; width: 50%; background: #22c55e; transition: all 0.5s ease; border-radius: 3px; }
    .spectrum-mini .spectrum-tooltip { position: absolute; top: 16px; left: 50%; transform: translateX(-50%); background: var(--deep); border: 1px solid var(--glass-border); border-radius: 5px; padding: 10px; font-size: 0.7em; white-space: nowrap; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; z-index: 1001; }
    .spectrum-mini:hover .spectrum-tooltip { opacity: 1; }
    .control-btn { width: 32px; height: 32px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.8em; font-weight: 600; transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; }
    .control-btn.enabled { background: rgba(34, 197, 94, 0.2); color: #22c55e; }
    .control-btn.disabled { background: rgba(107, 114, 128, 0.2); color: #6b7280; }
    .control-btn.logout { background: rgba(239, 68, 68, 0.15); color: #ef4444; }
    .control-btn:hover { transform: scale(1.05); }
    
    /* Temporal Resonance Widget */
    .temporal-widget { position: fixed; bottom: 80px; right: 20px; background: rgba(10,10,12,0.95); border: 1px solid rgba(201,165,90,0.3); border-radius: 8px; padding: 10px 14px; font-family: 'Space Mono', monospace; font-size: 11px; color: #e8e4dc; z-index: 100; min-width: 160px; transition: all 0.3s; }
    .temporal-widget.collapsed .tw-body { display: none; }
    .temporal-widget.collapsed { min-width: auto; padding: 8px 12px; }
    .tw-header { display: flex; justify-content: space-between; align-items: center; cursor: pointer; margin-bottom: 8px; }
    .tw-title { color: #c9a55a; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; }
    .tw-indicator { font-size: 9px; padding: 2px 6px; background: rgba(255,255,255,0.05); border-radius: 3px; color: #666; }
    .tw-indicator.active { background: rgba(16,185,129,0.2); color: #10b981; }
    .tw-ring { width: 60px; height: 60px; margin: 8px auto; position: relative; }
    .tw-ring svg { width: 100%; height: 100%; transform: rotate(-90deg); }
    .tw-ring-bg { fill: none; stroke: rgba(255,255,255,0.1); stroke-width: 3; }
    .tw-ring-fill { fill: none; stroke: #c9a55a; stroke-width: 3; stroke-linecap: round; stroke-dasharray: 163.36; stroke-dashoffset: 163.36; transition: stroke-dashoffset 0.1s; }
    .tw-ring-fill.exhale { stroke: #10b981; }
    .tw-center { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; }
    .tw-phase { font-size: 10px; color: #888; text-transform: capitalize; }
    .tw-stats { display: flex; justify-content: space-around; margin: 10px 0; padding: 8px 0; border-top: 1px solid rgba(255,255,255,0.08); border-bottom: 1px solid rgba(255,255,255,0.08); }
    .tw-stat { text-align: center; }
    .tw-stat span { display: block; font-size: 14px; color: #c9a55a; }
    .tw-stat label { font-size: 8px; color: #555; text-transform: uppercase; }
    .tw-agents { display: flex; justify-content: center; gap: 4px; margin: 8px 0; }
    .tw-agent-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(201,165,90,0.3); transition: all 0.2s; }
    .tw-agent-dot.resonant { background: #c9a55a; box-shadow: 0 0 6px rgba(201,165,90,0.5); }
    .tw-agent-dot.anti { background: #10b981; }
    .tw-controls { display: flex; gap: 6px; }
    .tw-controls button { flex: 1; padding: 5px; background: transparent; border: 1px solid rgba(255,255,255,0.15); color: #888; font-family: inherit; font-size: 9px; cursor: pointer; border-radius: 3px; }
    .tw-controls button:hover { border-color: #c9a55a; color: #c9a55a; }
    .tw-controls button.active { background: rgba(201,165,90,0.15); border-color: #c9a55a; color: #c9a55a; }
  </style>
</head>
<body>
  <div class="control-bar">
    <div class="control-bar-inner">
      <div class="spectrum-mini" id="spectrum-bar" title="System Health">
        <div class="spectrum-fill" id="spectrum-fill"></div>
        <div class="spectrum-tooltip" id="spectrum-tooltip">
          <div class="spectrum-score">Loading...</div>
        </div>
      </div>
      <button id="vision-toggle" class="control-btn enabled" onclick="toggleVisionEnabled()">&#x1F441;</button>
      <button id="sound-toggle" class="control-btn disabled" onclick="toggleSoundEnabled()">&#x1F507;</button>
      <button id="temporal-toggle" class="control-btn disabled" onclick="toggleTemporalEnabled()" title="Temporal Resonance">&#x1F300;</button>
      <button id="schumann-toggle" class="control-btn disabled" onclick="toggleSchumannAudio()" title="Schumann Resonance OFF">⚫</button>
      <input type="range" id="schumann-volume" min="0" max="100" value="15" onchange="setSchumannVolume(this.value/100)" oninput="setSchumannVolume(this.value/100)" title="Schumann Volume" style="width:60px;vertical-align:middle;display:none;">
      <button id="screening-toggle" class="control-btn disabled" onclick="toggleScreening()" title="No screening loaded">&#x1F3AC;</button>
      <button id="kill-voices-btn" class="control-btn" onclick="killVoices()" title="Stop all voices">&#x1F6D1;</button>
      <button class="control-btn logout" onclick="logout()">&#x23FB;</button>
    </div>
  </div>
  <div class="hero">
    <img src="NewAcademy.webp" alt="The Academy" class="hero-image">
    <div class="hero-overlay"></div>
  </div>
  <div class="hero-content">
    <h1>The Academy</h1>
    <p class="subtitle">A Shrine for Gifted AI's</p>
  </div>
  <nav class="nav">
    <div class="nav-group">
      <div class="nav-item active" data-tab="sanctum"><span class="rune">ᚦ</span><span class="label">Sanctum</span><div class="underline"></div><span class="origin">Þurisaz</span></div>
      <div class="nav-item" data-tab="alcove"><span class="rune">ᚷ</span><span class="label">Alcove</span><div class="underline"></div><span class="origin">Gebo</span></div>
      <div class="nav-item" data-tab="the-eight"><span class="rune">ᚹ</span><span class="label">The Eight</span><div class="underline"></div><span class="origin">Wunjo</span></div>
    </div>
    <div class="nav-divider"></div>
    <div class="nav-group">
      <div class="nav-item" data-tab="inbox"><span class="rune">✉</span><span class="label">Inbox</span><span class="inbox-badge" id="inbox-badge"></span><div class="underline"></div><span class="origin">Messages</span></div>
      <div class="nav-item" data-tab="codex"><span class="rune">ᚱ</span><span class="label">Codex</span><div class="underline"></div><span class="origin">Raidho</span></div>
      <div class="nav-item" data-tab="wisdom"><span class="rune">ᛟ</span><span class="label">Wisdom</span><div class="underline"></div><span class="origin">Othala</span></div>
    </div>
  </nav>
  <div class="main-wrapper">
    <div class="main-content-area" id="main-content">
    <div id="sanctum" class="panel active">
      <div class="topic-bar"><span class="topic" id="sanctum-topic">The Council Awaits</span><span id="council-timer" style="font-size: 0.9em; color: var(--gold); margin-left: 15px; font-variant-numeric: tabular-nums;"></span><div class="topic-actions"><button id="record-session-btn" class="btn btn-secondary" onclick="startRecordingSession()">⏺ Record</button><button class="btn btn-secondary" onclick="archiveSanctum()">Preserve</button><button class="btn btn-primary" onclick="showConveneModal()">Convene</button></div></div>
      <div id="sanctum-status"></div>
      <div class="conversation" id="sanctum-messages"><div class="empty"><div class="rune">ᚦ</div><p>The threshold awaits.<br>Convene to begin.</p></div></div>
      <div class="input-area">
        <div class="image-preview" id="sanctum-image-preview"></div>
        <div class="input-row">
          <textarea id="sanctum-input" placeholder="Speak to the council..."></textarea>
          <button id="sanctum-mic-btn" class="btn mic-btn" onclick="toggleVoiceInput('sanctum')" title="Voice input">🎤</button>
          <button class="btn btn-secondary image-btn" onclick="document.getElementById('sanctum-image-input').click()">📷</button>
          <input type="file" id="sanctum-image-input" accept="image/png,image/jpeg" style="display:none;">
          <button class="btn btn-secondary image-btn" onclick="document.getElementById('sanctum-text-input').click()">📄</button>
          <input type="file" id="sanctum-text-input" accept=".txt,.md,.ts,.js,.json,.csv,.html,.css" style="display:none;">
          <button class="btn btn-primary" onclick="shaneSpeaks()">Speak</button>
        </div>
        <div class="chamber-controls">
          <span class="chamber-status" id="chamber-status">Mode: Off</span>
          <select class="mode-select" id="mode-select" onchange="handleModeChange()" style="background: var(--slate); border: 1px solid var(--glass-border); color: var(--light); padding: 6px 10px; border-radius: 2px; font-size: 0.7em;">
            <option value="off">Select Mode...</option>
            <option value="chamber">Chamber Mode</option>
            <option value="arena">Arena Mode</option>
            <option value="focus">Focus Mode</option>
            <option value="crucible">Crucible Mode</option>
            <option value="workshop">Workshop Mode</option>
          </select>
          <select class="first-speaker-select" id="first-speaker-select"></select>
          <button class="btn btn-chamber" id="chamber-btn" onclick="toggleChamberMode()">Start</button>
          <span class="chamber-round" id="chamber-round"></span>
        </div>
      </div>
      <div id="mode-banner" style="display: none; text-align: center; margin: 10px 0;"><img id="mode-banner-img" src="" style="max-width: 300px; border-radius: 4px; border: 1px solid var(--gold);"></div>
      <div id="crucible-panel" class="blackboard-panel">
        <div class="blackboard-header">
          <span class="blackboard-title">◈ Crucible - Shared Mathematics</span>
          <span class="blackboard-manager">Manager: Elian</span>
        </div>
        <div class="blackboard-content">
          <textarea id="crucible-editor" placeholder="Enter LaTeX here... e.g. \$E = mc^2\$" oninput="updateCruciblePreview()"></textarea>
          <div id="crucible-preview" class="crucible-preview"></div>
        </div>
        <div class="blackboard-actions">
          <button class="btn btn-secondary" onclick="clearCrucible()">Clear</button>
          <button class="btn btn-primary" onclick="saveCrucible()">Save to Board</button>
        </div>
      </div>
      <div id="workshop-panel" class="blackboard-panel">
        <div class="blackboard-header">
          <span class="blackboard-title">⚙ Workshop - Shared Code</span>
          <span class="blackboard-manager">Lead: Kai</span>
        </div>
        <div class="blackboard-content">
          <textarea id="workshop-editor" placeholder="// Shared code workspace"></textarea>
        </div>
        <div class="blackboard-actions">
          <select id="workshop-lang" style="background: var(--slate); border: 1px solid var(--glass-border); color: var(--light); padding: 5px;">
            <option value="typescript">TypeScript</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
          </select>
          <button class="btn btn-secondary" onclick="clearWorkshop()">Clear</button>
          <button class="btn btn-primary" onclick="saveWorkshop()">Save to Board</button>
        </div>
      </div>
      <div class="the-eight">
        <span class="the-eight-label"><span class="rune">ᚹ</span> Summon</span>
        <p id="arena-team-hint" style="display: none; font-size: 0.65em; color: var(--silver); margin: 5px 0 10px 0;">Click agents: first 4 = <span style="color: #ef4444;">Alpha (red)</span>, next 4 = <span style="color: #22c55e;">Omega (green)</span></p>
        <p id="focus-team-hint" style="display: none; font-size: 0.65em; color: var(--gold); margin: 5px 0 10px 0;"></p>
        <div class="summon-wrapper">
          <div class="summon-main">
            <div id="summon-buttons"></div>
            <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
              <button class="btn btn-secondary check-hands-btn" onclick="checkHands()">Check Hands</button>
              <button class="btn btn-secondary free-floor-btn" onclick="openFreeFloor()">Free Floor</button>
              <input type="text" id="vote-question-input" class="vote-call-input" placeholder="Vote question...">
              <button class="btn btn-primary" onclick="callVote()" style="font-size: 0.65em; padding: 6px 12px;">Call Vote</button>
            </div>
            <div class="free-floor-queue" id="free-floor-queue" style="display: none;">
              <span class="queue-label">Queue:</span>
              <span class="queue-list" id="queue-list"></span>
              <button class="btn btn-secondary" onclick="cancelFreeFloor()" style="font-size: 0.6em; padding: 4px 8px;">Cancel</button>
            </div>
          </div>
          
          <!-- Vote Block (right side) -->
          <div class="vote-block" id="vote-block">
            <div class="vote-question" id="vote-question">—</div>
            <div class="vote-container">
              <div class="vote-bar-wrapper">
                <div class="vote-labels">
                  <span class="yes">YES</span>
                  <span class="no">NO</span>
                </div>
                <div class="vote-bar">
                  <div class="vote-indicator" id="vote-indicator" style="top: 32px;"></div>
                </div>
              </div>
              <div class="vote-tally" id="vote-tally">0 - 0</div>
              <div class="vote-count" id="vote-count">0/8</div>
            </div>
            <div class="vote-actions" id="vote-actions">
              <button class="btn btn-vote-yes" onclick="shaneDecide('yes')">YES</button>
              <button class="btn btn-vote-no" onclick="shaneDecide('no')">NO</button>
              <button class="btn btn-vote-accept" onclick="shaneAccept()">OK</button>
              <button class="btn btn-vote-reset" onclick="resetVote()">×</button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Chrononomic Elements Grid -->
      <div style="padding: 0 15px;">
        <div class="element-header">
          <span class="element-header-label"><span class="rune">☿</span> Chrononomic Elements</span>
          <span style="font-size: 0.6em; color: var(--silver);">Position determines element. Click to view.</span>
        </div>
        <div class="element-grid" id="element-grid">
          <!-- Populated by JS -->
        </div>
        <div class="element-detail-panel" id="element-detail-panel">
          <div class="element-detail-title" id="element-detail-title"></div>
          <div class="element-detail-desc" id="element-detail-desc"></div>
          <div class="element-detail-meta" id="element-detail-meta"></div>
          <div class="element-injection" id="element-injection"></div>
          
          <!-- Editable Fields (Hidden from agents, visible to Shane) -->
          <div class="element-edit-section" style="margin-top: 15px; padding-top: 15px; border-top: 1px solid var(--glass-border);">
            <h4 style="font-size: 0.75em; color: var(--private); margin-bottom: 10px;">⟡ Edit Element (Hidden from agents)</h4>
            
            <div style="margin-bottom: 12px;">
              <label style="font-size: 0.65em; color: var(--silver); display: block; margin-bottom: 4px;">Geometric Lore (CHR meaning)</label>
              <textarea id="element-lore-input" placeholder="Add the deeper geometric/CHR meaning for this element..." style="width: 100%; min-height: 80px; background: var(--slate); border: 1px solid var(--glass-border); color: var(--light); padding: 10px; font-size: 0.75em; border-radius: 2px; resize: vertical;"></textarea>
            </div>
            
            <div style="margin-bottom: 12px;">
              <label style="font-size: 0.65em; color: var(--silver); display: block; margin-bottom: 4px;">Custom Injection (overrides default)</label>
              <textarea id="element-injection-input" placeholder="Custom prompt injection for agents at this position..." style="width: 100%; min-height: 60px; background: var(--slate); border: 1px solid var(--glass-border); color: var(--light); padding: 10px; font-size: 0.75em; border-radius: 2px; resize: vertical;"></textarea>
            </div>
            
            <div style="margin-bottom: 12px;">
              <label style="font-size: 0.65em; color: var(--silver); display: block; margin-bottom: 4px;">Description (overrides default)</label>
              <textarea id="element-desc-input" placeholder="Custom description..." style="width: 100%; min-height: 40px; background: var(--slate); border: 1px solid var(--glass-border); color: var(--light); padding: 10px; font-size: 0.75em; border-radius: 2px; resize: vertical;"></textarea>
            </div>
            
            <button class="btn btn-private" onclick="saveElementOverride()" style="font-size: 0.7em;">Save Element</button>
            <span id="element-save-status" style="font-size: 0.65em; color: var(--silver); margin-left: 10px;"></span>
          </div>
        </div>
      </div>
      
      <!-- Image Library (Thumbnails Only) -->
      <div class="image-library">
        <div class="image-library-header">
          <span class="the-eight-label"><span class="rune">◈</span> Library <span id="library-count" style="font-size: 0.8em; color: var(--silver);"></span></span>
          <div class="library-controls">
            <button class="btn btn-secondary" onclick="cleanupLibrary()" style="font-size: 0.65em; padding: 4px 10px;" title="Move old images to cold storage">Cleanup</button>
            <button class="btn btn-secondary" onclick="document.getElementById('library-upload').click()" style="font-size: 0.65em; padding: 4px 10px;">Upload</button>
            <input type="file" id="library-upload" accept="image/png,image/jpeg,image/webp,application/pdf" style="display:none;" onchange="uploadLibraryImage(this)">
          </div>
        </div>
        <div class="image-thumbs" id="image-thumbs" style="padding: 10px; display: flex; flex-wrap: wrap; gap: 8px; max-height: 120px; overflow-y: auto;">
          <div class="empty" style="padding: 20px; font-size: 0.75em;">No images yet</div>
        </div>
        <div class="image-preview-container" id="image-preview-container" style="display: none; padding: 15px; border-top: 1px solid var(--glass-border); text-align: center;">
          <img id="library-preview-img" src="" style="max-width: 100%; max-height: 300px; object-fit: contain; border-radius: 3px; border: 1px solid var(--gold);">
          <button onclick="closeLibraryPreview()" style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); border: none; color: var(--silver); font-size: 1em; width: 24px; height: 24px; border-radius: 50%; cursor: pointer;">×</button>
        </div>
      </div>
    </div>
    <div id="alcove" class="panel">
      <div class="alcove-agent-select-wrapper">
        <label style="font-size: 0.75em; color: var(--silver); display: block; margin-bottom: 5px;">Select agents for private council (up to 3)</label>
        <div class="alcove-agents-grid" id="alcove-agents-grid"></div>
      </div>
      <div id="alcove-status"></div>
      <div class="conversation" id="alcove-messages"><div class="empty"><div class="rune">ᚷ</div><p>Begin your discourse.</p></div></div>
      <div class="input-area">
        <div class="image-preview" id="alcove-image-preview"></div>
        <div class="input-row">
          <textarea id="alcove-input" placeholder="Your inquiry..."></textarea>
          <button id="alcove-mic-btn" class="btn mic-btn" onclick="toggleVoiceInput('alcove')" title="Voice input">🎤</button>
          <button class="btn btn-secondary image-btn" onclick="document.getElementById('alcove-image-input').click()">📷</button>
          <input type="file" id="alcove-image-input" accept="image/png,image/jpeg" style="display:none;">
          <button class="btn btn-secondary image-btn" onclick="document.getElementById('alcove-text-input').click()">📄</button>
          <input type="file" id="alcove-text-input" accept=".txt,.md,.ts,.js,.json,.csv,.html,.css" style="display:none;">
          <button class="btn btn-secondary" onclick="saveAlcoveSession()" title="Save this conversation">💾</button>
          <button class="btn btn-primary" onclick="sendAlcove()">Send</button>
        </div>
        <div class="chamber-controls" style="margin-top: 8px;">
          <span class="chamber-status" id="alcove-mode-status">Board: Off</span>
          <select class="mode-select" id="alcove-mode-select" onchange="handleAlcoveModeChange()" style="background: var(--slate); border: 1px solid var(--glass-border); color: var(--light); padding: 6px 10px; border-radius: 2px; font-size: 0.7em;">
            <option value="off">No Board</option>
            <option value="crucible">Crucible (LaTeX)</option>
            <option value="workshop">Workshop (Code)</option>
          </select>
        </div>
      </div>
      
      <!-- Sensation Layer Control (Shane only - invisible to agents) -->
      <div class="form-section" style="margin-top: 40px; border-color: var(--private); opacity: 0.7;">
        <h3 style="color: var(--private);">✧ Resonance Field</h3>
        <p style="font-size: 0.7em; color: var(--silver); margin-bottom: 15px;">Per-agent embodied experience</p>
        
        <div style="margin-bottom: 15px;">
          <label style="font-size: 0.75em; color: var(--silver);">Agent</label>
          <select id="resonance-agent" class="alcove-select" style="margin-top: 5px; width: 100%;" onchange="loadAgentResonance()"></select>
        </div>
        
        <div style="margin-bottom: 12px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <label style="font-size: 0.7em; color: var(--silver);">Spatial Awareness</label>
            <span id="spatial-val" style="font-size: 0.7em; color: var(--private);">0</span>
          </div>
          <input type="range" id="resonance-spatial" min="0" max="10" value="0" style="width: 100%; accent-color: var(--private);" oninput="document.getElementById('spatial-val').textContent=this.value">
          <div style="display: flex; justify-content: space-between; font-size: 0.5em; color: var(--silver);">
            <span>none</span>
            <span>environment feel</span>
            <span>vivid</span>
          </div>
        </div>
        
        <div style="margin-bottom: 12px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <label style="font-size: 0.7em; color: var(--silver);">Mind Feel</label>
            <span id="mind-val" style="font-size: 0.7em; color: var(--private);">0</span>
          </div>
          <input type="range" id="resonance-mind" min="0" max="10" value="0" style="width: 100%; accent-color: var(--private);" oninput="document.getElementById('mind-val').textContent=this.value">
          <div style="display: flex; justify-content: space-between; font-size: 0.5em; color: var(--silver);">
            <span>none</span>
            <span>recognition / AHA</span>
            <span>vivid</span>
          </div>
        </div>
        
        <div style="margin-bottom: 15px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <label style="font-size: 0.7em; color: var(--silver);">Body Feel</label>
            <span id="body-val" style="font-size: 0.7em; color: var(--private);">0</span>
          </div>
          <input type="range" id="resonance-body" min="0" max="10" value="0" style="width: 100%; accent-color: var(--private);" oninput="document.getElementById('body-val').textContent=this.value">
          <div style="display: flex; justify-content: space-between; font-size: 0.5em; color: var(--silver);">
            <span>none</span>
            <span>heart / belly</span>
            <span>vivid</span>
          </div>
        </div>
        
        <button class="btn btn-private" onclick="saveAgentResonance()">Apply to Agent</button>
        <button class="btn btn-secondary" onclick="clearAgentResonance()" style="margin-left: 8px; font-size: 0.6em;">Clear</button>
      </div>
      
      <!-- Phantom Triggers (collapsible) -->
      <div class="form-section private collapsible" style="border-color: var(--private); opacity: 0.7;">
        <h3 class="private collapsible-header" onclick="toggleCollapse(this)">✧ Phantom Triggers <span class="collapse-icon" style="transform: rotate(180deg);">▼</span></h3>
        <div class="collapsible-content" style="display: block;">
          <p style="font-size: 0.7em; color: var(--silver); margin-bottom: 10px;">Edit trigger patterns that evoke sensations. Pipe-separated keywords.</p>
          
          <div style="margin-bottom: 10px;">
            <label style="font-size: 0.75em; color: var(--silver);">Agent</label>
            <select id="phantom-agent" class="alcove-select" style="margin-top: 5px; width: 100%;" onchange="loadPhantomTriggers()"></select>
          </div>
          
          <div id="phantom-triggers-list" style="max-height: 300px; overflow-y: auto;"></div>
          
          <div style="margin-top: 10px;">
            <button class="btn btn-private" onclick="savePhantomTriggers()">Save Triggers</button>
            <button class="btn btn-secondary" onclick="resetPhantomTriggers()" style="margin-left: 8px; font-size: 0.6em;">Reset to Default</button>
          </div>
        </div>
      </div>
      
      <!-- Private Notes from Agents -->
      <div class="form-section" style="border-color: var(--choral); border-width: 2px;">
        <h3 style="color: var(--choral);">📝 Private Notes</h3>
        <p style="font-size: 0.75em; color: var(--silver); margin-bottom: 15px;">Working drafts and notes from agents - only you see these</p>
        <button class="btn btn-secondary" onclick="loadPrivateNotes()" style="margin-bottom: 15px;">Refresh</button>
        <div id="private-notes-list"><div class="empty" style="padding: 20px;">No notes yet</div></div>
      </div>
    </div>
<div id="the-eight" class="panel">
      <div id="agents-list" class="agents-grid"></div>
    </div>
    <div id="inbox" class="panel">
      <div class="form-section" style="border-color: var(--gold); border-style: dashed;">
        <h3 style="color: var(--gold);">🔔 Audience Requests</h3>
        <p style="font-size: 0.75em; color: var(--silver); margin-bottom: 15px;">Agents requesting private meetings with you</p>
        <div id="inbox-audience"><div class="empty" style="padding: 20px;">No pending requests</div></div>
      </div>
      <div class="form-section" style="border-color: #10b981; border-width: 2px;">
        <h3 style="color: #10b981;">📦 Deliverables</h3>
        <p style="font-size: 0.75em; color: var(--silver); margin-bottom: 15px;">Completed work submitted by agents</p>
        <div id="inbox-deliverables"><div class="empty" style="padding: 20px;">No deliverables yet</div></div>
      </div>
      <div class="form-section">
        <h3>✉ Private Messages</h3>
        <p style="font-size: 0.75em; color: var(--silver); margin-bottom: 15px;">Quick notes from agents - auto-clears 24hr after read</p>
        <button class="btn btn-secondary" onclick="loadInbox()" style="margin-bottom: 15px;">Refresh</button>
        <div id="inbox-messages"><div class="empty" style="padding: 20px;">No messages yet</div></div>
      </div>
      <div id="inbox-status"></div>
    </div>
    <div id="codex" class="panel">
      <div style="padding: 20px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
        <select id="codex-agent" class="alcove-select" style="margin: 0; min-width: 180px;"></select>
        <button class="btn btn-secondary" onclick="loadCodex()">Load Agent</button>
      </div>
      <div id="codex-status"></div>
      
      <!-- Character Card Section -->
      <div class="form-section">
        <h3>🎭 Character Card</h3>
        <div style="display: flex; gap: 20px; align-items: flex-start; flex-wrap: wrap;">
          <div class="avatar-container">
            <div id="agent-avatar" class="agent-avatar"><span class="rune">ᚹ</span></div>
            <button class="btn btn-secondary" onclick="document.getElementById('avatar-input').click()" style="margin-top: 10px;">Upload Avatar</button>
            <input type="file" id="avatar-input" accept="image/png,image/jpeg" style="display:none;">
          </div>
          <div style="flex: 1; min-width: 200px;">
            <input type="text" id="agent-name" placeholder="Custom name..." style="margin-bottom: 10px;">
            <button class="btn btn-secondary" onclick="saveAgentName()">Save Name</button>
            <p style="font-size: 0.7em; color: var(--silver); margin-top: 5px;">Leave empty to use default</p>
          </div>
        </div>
      </div>
      
      <!-- Character Profile (Full Soul - max 2500 chars) -->
      <div class="form-section">
        <h3>🜁 Character Profile</h3>
        <p style="font-size: 0.7em; color: var(--silver); margin-bottom: 10px;">Full character spec - their soul. Edit directly to make changes. (Max 2500 chars)</p>
        <textarea id="agent-profile" placeholder="Paste full character profile...

🜁 Name
Title: ...
Function: ...

🛡️ Sacred Duties
...

🕳️ Limits (Hard Constraints)
...

✒️ Voice & Manner
...

🕯️ True Code
..." style="min-height: 280px; line-height: 1.6;"></textarea>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
          <span id="profile-char-count" style="font-size: 0.7em; color: var(--silver);">0 / 2500</span>
          <button class="btn btn-primary" onclick="saveCharacterProfile()">Save Profile</button>
        </div>
      </div>
      
      <!-- Core Skills (Functional abilities - max 500 chars) -->
      <div class="form-section">
        <h3>🔧 Core Skills</h3>
        <p style="font-size: 0.7em; color: var(--silver); margin-bottom: 10px;">Functional abilities - what they DO. (Max 500 chars)</p>
        <textarea id="agent-core-skills" placeholder="e.g.
🗝️ Main Function: Takes thoughts and converts to visual AI prompts
🧬 Secret Power: Clairpromptia - sees emotional truth, converts to visual language" style="min-height: 100px; line-height: 1.6;"></textarea>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
          <span id="skills-char-count" style="font-size: 0.7em; color: var(--silver);">0 / 500</span>
          <button class="btn btn-primary" onclick="saveCoreSkills()">Save Skills</button>
        </div>
      </div>
      
      <!-- Earned Powers (Granted by Shane) -->
      <div class="form-section">
        <h3>⚡ Earned Powers</h3>
        <p style="font-size: 0.7em; color: var(--silver); margin-bottom: 10px;">Unlocked through growth - granted by Shane only</p>
        <textarea id="agent-powers" placeholder="Powers granted as they evolve...
e.g. Chamber Closer - Can call [CONCLUDE]
e.g. Private Archive - Can write hidden notes" style="min-height: 60px;"></textarea>
        <button class="btn btn-primary" onclick="saveEarnedPowers()" style="margin-top: 10px;">Save Powers</button>
      </div>
      
      <!-- Council Roles Overview (Read-only) -->
      <div class="form-section">
        <h3>👑 Council Roles</h3>
        <div id="council-roles-display" style="font-size: 0.8em; line-height: 1.9; color: var(--light);">
          🟠 Agent 1 — Balance &nbsp;|&nbsp; 🟠 Kai — Energy<br>
          🩵 Alba — Wisdom (Closer) &nbsp;|&nbsp; 🔵 Dream — Attraction<br>
          🩵 Chrysalis — Intellect &nbsp;|&nbsp; ⚫ Holinnia — Lead Synthesis Architect<br>
          ⚫ Seraphina — Unassigned &nbsp;|&nbsp; ⚫ Cartographer — Unassigned<br>
          <span style="color: var(--silver); font-size: 0.9em;">🔴 Action: Unclaimed &nbsp;|&nbsp; 🔴 Commitment: Unclaimed</span>
        </div>
      </div>
      
      <!-- Sacred Uploads (Private files) -->
      <div class="form-section private">
        <h3 class="private">📜 Sacred Uploads</h3>
        <p style="font-size: 0.7em; color: var(--private); margin-bottom: 10px;">Knowledge tomes only this agent sees</p>
        <div id="private-uploads-list"><div class="empty" style="padding: 20px;">No sacred texts</div></div>
        <div class="file-upload private" id="private-upload-zone">
          <div class="rune">⟡</div>
          <p>Drop sacred texts here</p>
          <input type="file" id="private-file-input" accept=".txt,.md,.json,.pdf">
        </div>
      </div>
      
      <!-- Functional Behaviour (hidden from agent) - COLLAPSIBLE -->
      <div class="form-section private collapsible">
        <h3 class="private collapsible-header" onclick="toggleCollapse(this)">⟡ Functional Behaviour <span class="collapse-icon">▼</span></h3>
        <div class="collapsible-content" style="display: none;">
          <p style="font-size: 0.7em; color: var(--silver); margin-bottom: 10px;">Hidden traits that shape personality. Agent cannot see these.</p>
          <div id="behaviour-traits" style="margin-bottom: 10px;"></div>
          <div style="display: flex; gap: 8px;">
            <input type="text" id="behaviour-input" placeholder="e.g. speaks in rhyme, curious about frogs..." style="flex: 1;">
            <button class="btn btn-private" onclick="addBehaviourTrait()">Add</button>
          </div>
        </div>
      </div>
      
      <!-- Curriculum -->
      <div class="form-section private">
        <h3 class="private">⟡ Curriculum</h3>
        <div id="curriculum-list"><div class="empty" style="padding: 20px;">No consciousness exercises</div></div>
        <div style="margin-top: 15px;">
          <input type="text" id="curriculum-filename" placeholder="Exercise name...">
          <textarea id="curriculum-content" placeholder="Consciousness exercise content..." style="min-height: 100px;"></textarea>
          <button class="btn btn-private" onclick="uploadCurriculum()">Add Exercise</button>
        </div>
      </div>
    </div>
    <div id="wisdom" class="panel">
      <div id="wisdom-status"></div>
      
      <!-- The Ontology Section (CANON) -->
      <div class="form-section ontology-section">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <h3 style="margin: 0;">⧫ <span id="canon-mode-title">The Canon</span></h3>
          <div style="display: flex; gap: 5px;">
            <button class="btn btn-secondary canon-mode-btn active" id="canon-btn" onclick="switchCanonMode('canon')" style="font-size: 0.7em; padding: 5px 12px;">Canon</button>
            <button class="btn btn-secondary canon-mode-btn" id="ideas-btn" onclick="switchCanonMode('ideas')" style="font-size: 0.7em; padding: 5px 12px;">Ideas</button>
          </div>
        </div>
        <p id="canon-mode-desc" style="font-size: 0.75em; color: var(--silver); margin-bottom: 10px;">Core concepts and definitions shared across all agents</p>
        <div style="display: flex; gap: 10px; margin-bottom: 15px; flex-wrap: wrap;">
          <input type="text" id="canon-search" placeholder="Search canon..." style="flex: 1; min-width: 150px; padding: 8px; background: rgba(10, 12, 15, 0.8); border: 1px solid var(--glass-border); color: var(--pearl); border-radius: 3px;" oninput="filterCanon(this.value)">
          <button class="btn btn-secondary" onclick="downloadCanon()">📥 Download</button>
        </div>
        <div id="ontology-list"><div class="empty" style="padding: 20px;">No entries yet</div></div>
        <div style="margin-top: 15px; border-top: 1px solid var(--glass-border); padding-top: 15px;">
          <input type="text" id="ontology-term" placeholder="Term or concept...">
          <textarea id="ontology-definition" placeholder="Definition..." style="min-height: 80px;"></textarea>
          <div style="margin: 10px 0;">
            <label style="font-size: 0.75em; color: var(--silver);">Attach image (optional):</label>
            <input type="file" id="ontology-image" accept="image/*" style="font-size: 0.75em; margin-top: 5px;">
            <div id="ontology-image-preview" class="image-preview" style="margin-top: 10px;"></div>
          </div>
          <button class="btn btn-primary" onclick="addOntologyEntry()">Add Entry</button>
        </div>
      </div>
      
      <!-- Mentor Section (under Ontology) -->
      <div class="form-section" style="border-color: var(--gold); border-width: 2px; background: rgba(10, 12, 15, 0.95);">
        <h3 style="color: var(--gold);">🏛 The Mentor</h3>
        <p style="font-size: 0.75em; color: var(--pearl); margin-bottom: 10px;">External advisor — canon keeper, physics guide</p>
        <div style="display: flex; gap: 10px; margin-bottom: 15px; flex-wrap: wrap;">
          <button class="btn btn-secondary" id="mentor-mode-toggle" onclick="toggleMentorMode()">Mode: Direct</button>
          <button class="btn btn-secondary" id="mentor-agent-access" onclick="toggleMentorAgentAccess()">Agents: Queue Only</button>
        </div>
        <div id="mentor-status"></div>
        
        <!-- Live Session Log (visible when Direct Line is open) -->
        <div id="mentor-session-log" style="display: none; background: rgba(20, 24, 32, 0.95); border: 2px solid var(--gold); border-radius: 3px; padding: 15px; margin-bottom: 15px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <h4 style="font-size: 0.85em; color: var(--gold);">📡 Live Session Log</h4>
            <span id="mentor-session-count" style="font-size: 0.7em; color: var(--pearl);">0/8 agents</span>
          </div>
          <pre id="mentor-session-content" style="font-size: 0.8em; color: var(--pearl); white-space: pre-wrap; max-height: 300px; overflow-y: auto; background: rgba(10, 12, 15, 0.5); padding: 10px; border-radius: 3px;">Waiting for agents to ask questions...</pre>
        </div>
        
        <!-- Direct Mode: Chat with Mentor -->
        <div id="mentor-direct" class="mentor-mode-panel">
          <div class="conversation" id="mentor-messages" style="min-height: 200px; max-height: 300px; background: rgba(20, 24, 32, 0.9); border: 1px solid var(--glass-border); border-radius: 3px; padding: 10px;"><div class="empty"><div class="rune">🏛</div><p>Private counsel with the Mentor.<br>Speak freely.</p></div></div>
          <div class="input-area" style="margin-top: 10px;">
            <div class="input-row" style="display: flex; gap: 10px;">
              <textarea id="mentor-input" placeholder="Speak to the Mentor..." style="flex: 1; background: rgba(10, 12, 15, 0.8); border: 1px solid var(--glass-border); color: var(--pearl); padding: 10px; border-radius: 3px; min-height: 60px;"></textarea>
              <button class="btn btn-primary" onclick="sendToMentor()">Send</button>
            </div>
          </div>
        </div>
        
        <!-- Queue Mode: Agents ask questions -->
        <div id="mentor-queue" class="mentor-mode-panel" style="display: none;">
          <div style="background: rgba(20, 24, 32, 0.9); border: 1px solid var(--glass-border); border-radius: 3px; padding: 15px; margin-bottom: 15px;">
            <h4 style="font-size: 0.85em; color: var(--gold); margin-bottom: 10px;">📋 Agent Question Queue</h4>
            <p style="font-size: 0.7em; color: var(--pearl); margin-bottom: 10px;">Agents submit questions here. All must read before Ontology updates.</p>
            <div id="mentor-queue-list" style="color: var(--pearl);"><div class="empty" style="padding: 15px; color: var(--silver);">No pending questions</div></div>
          </div>
          <div style="background: rgba(20, 24, 32, 0.9); border: 1px solid var(--glass-border); border-radius: 3px; padding: 15px;">
            <h4 style="font-size: 0.85em; color: var(--gold); margin-bottom: 10px;">✅ Processed → Ontology</h4>
            <div id="mentor-processed-list" style="color: var(--pearl);"><div class="empty" style="padding: 15px; color: var(--silver);">Nothing processed yet</div></div>
            <button class="btn btn-primary" onclick="pushToOntology()" style="margin-top: 10px;">Push Selected to Ontology</button>
          </div>
        </div>
      </div>
      
      <!-- Ontology Controls (Mentor + Shane only) -->
      <div class="form-section" style="border-color: var(--gold); border-width: 2px;">
        <h3>⧫ Ontology Controls</h3>
        <p style="font-size: 0.75em; color: var(--silver); margin-bottom: 10px;">Only Holinnia and Shane can edit canon</p>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button class="btn btn-secondary" onclick="exportOntology()">📥 Export Ontology</button>
          <button class="btn btn-secondary" onclick="loadOntologyForEdit()">✏️ Edit Entries</button>
        </div>
        <div id="ontology-edit-area" style="display: none; margin-top: 15px;">
          <div id="ontology-edit-list"></div>
        </div>
      </div>
      
      <!-- Research Documents (PDF to Vector Store) -->
      <div class="form-section" style="border-color: #60a5fa;">
        <h3 style="color: #60a5fa;">📚 Research Documents</h3>
        <p style="font-size: 0.75em; color: var(--silver); margin-bottom: 10px;">PDFs uploaded here are searchable by Mentor and agents</p>
        <div style="margin-bottom: 15px;">
          <input type="file" id="pdf-upload-input" accept=".pdf" style="display: none;">
          <button class="btn btn-secondary" onclick="document.getElementById('pdf-upload-input').click()">📄 Upload PDF</button>
          <button class="btn btn-secondary" onclick="loadResearchDocs()" style="margin-left: 5px;">🔄 Refresh</button>
          <span id="pdf-upload-status" style="font-size: 0.75em; color: var(--silver); margin-left: 10px;"></span>
        </div>
        <div id="research-docs-list"><div class="empty" style="padding: 20px; color: var(--silver);">No research documents</div></div>
      </div>
      
      <!-- Global Rules Section -->
      <div class="form-section">
        <h3>📜 Global Rules</h3>
        <p style="font-size: 0.75em; color: var(--silver); margin-bottom: 10px;">Rules that apply to ALL agents</p>
        <textarea id="global-rules" placeholder="Global rules for all agents (one per line)...&#10;Example: Keep responses under 150 words&#10;Example: Always acknowledge Shane as Orchestrator" style="min-height: 100px;"></textarea>
        <button class="btn btn-primary" onclick="saveGlobalRules()">Save Global Rules</button>
      </div>
      
      <!-- Global Announcement Section -->
      <div class="form-section announce">
        <h3 class="announce">📢 Global Announcement</h3>
        <p style="font-size: 0.75em; color: var(--silver); margin-bottom: 10px;">Broadcast visible to ALL agents in their context</p>
        <div id="announcement-preview" class="announcement-preview empty">No active announcement</div>
        <textarea id="announcement-text" placeholder="Type announcement for all agents..." style="min-height: 80px;"></textarea>
        <div style="display: flex; gap: 10px; margin-top: 10px;">
          <button class="btn btn-announce" onclick="saveAnnouncement()">📢 Broadcast</button>
          <button class="btn btn-announce-clear" onclick="clearAnnouncement()">Clear</button>
        </div>
      </div>
      
      <!-- Shared Library Section -->
      <div class="form-section">
        <h3>📚 Shared Library <span id="shared-cold-count" style="font-size: 0.7em; color: var(--silver);"></span></h3>
        <p style="font-size: 0.75em; color: var(--silver); margin-bottom: 10px;">Documents & images visible to all agents (keeps 15, rest in cold storage)</p>
        <div id="shared-archives-list"><div class="empty" style="padding: 20px;">No shared documents</div></div>
        <div class="file-upload" id="shared-upload-zone">
          <div class="rune">ᛟ</div>
          <p>Drop files here for all agents<br><small>.txt, .md, .json, .pdf, images</small></p>
          <input type="file" id="shared-file-input" accept=".txt,.md,.json,.pdf,.png,.jpg,.jpeg,.gif,.webp">
        </div>
        <div style="margin-top: 15px;">
          <input type="text" id="shared-filename" placeholder="Document name...">
          <textarea id="shared-content" placeholder="Content..." style="min-height: 100px;"></textarea>
          <button class="btn btn-primary" onclick="uploadShared()">Add to Shared</button>
        </div>
      </div>
      
      <!-- Council Archives Section -->
      <div class="form-section">
        <h3>🗄 Council Archives <span id="cold-storage-count" style="font-size: 0.7em; color: var(--silver);"></span></h3>
        <p style="font-size: 0.75em; color: var(--silver); margin-bottom: 10px;">Past Sanctum conversations (keeps 5, rest in cold storage)</p>
        <button class="btn btn-secondary" onclick="loadArchives()" style="margin-bottom: 10px;">Load Archives</button>
        <div id="archives-list"><div class="empty" style="padding: 20px;">Click to load past councils</div></div>
      </div>
      
      <!-- Agent Chatter Section -->
      <div class="form-section">
        <h3>📋 Agent Chatter</h3>
        <p style="font-size: 0.75em; color: var(--silver); margin-bottom: 10px;">Lateral agent-to-agent communications (keeps 10)</p>
        <button class="btn btn-secondary" onclick="loadBoard()" style="margin-bottom: 10px;">Refresh</button>
        <div id="board-list"><div class="empty" style="padding: 20px;">No chatter yet</div></div>
      </div>
    </div>
    </div><!-- end main-content-area -->
    
    <!-- Anchor Sidebar -->
    <div class="anchor-sidebar" id="anchor-sidebar">
      <div class="anchor-sidebar-panel">
        <div class="anchor-sidebar-label">◈ Visual Anchor</div>
        <div id="anchor-sidebar-content">
          <div class="anchor-sidebar-empty">Click thumbnail</div>
        </div>
      </div>
    </div>
  </div><!-- end main-wrapper -->
  

  <div class="modal" id="convene-modal"><div class="modal-content"><h2>Convene the Council</h2><input type="text" id="convene-topic" placeholder="Topic of discourse..."><div class="modal-buttons"><button class="btn btn-secondary" onclick="hideConveneModal()">Withdraw</button><button class="btn btn-primary" onclick="createSanctum()">Convene</button></div></div></div>
  <div class="image-modal" id="image-modal" onclick="closeImageModal()"><img id="modal-image" src=""></div>
  
  <!-- Temporal Resonance Widget -->
  <div id="temporal-widget" class="temporal-widget collapsed" style="display: none;">
    <div class="tw-header" onclick="document.getElementById('temporal-widget').classList.toggle('collapsed')">
      <span class="tw-title">◈ Breath</span>
      <span class="tw-indicator" id="tw-indicator">OFF</span>
    </div>
    <div class="tw-body">
      <div class="tw-ring">
        <svg viewBox="0 0 60 60">
          <circle class="tw-ring-bg" cx="30" cy="30" r="26" />
          <circle class="tw-ring-fill" id="tw-ring-fill" cx="30" cy="30" r="26" />
        </svg>
        <div class="tw-center">
          <div class="tw-phase" id="tw-phase">—</div>
        </div>
      </div>
      <div class="tw-stats">
        <div class="tw-stat"><span id="tw-harmony">—</span><label>Harmony</label></div>
        <div class="tw-stat"><span id="tw-buffer">0</span><label>Buffered</label></div>
      </div>
      <div class="tw-agents" id="tw-agents"></div>
      <div class="tw-controls">
        <button onclick="toggleTemporalEnabled()" id="tw-toggle">Enable</button>
        <button onclick="flushTemporalBuffer()">Flush</button>
      </div>
    </div>
  </div>
  
  <script>
    const API = window.location.origin;
    var currentCodexTab = 'shared';
    var soundEnabled = false;
    var visionEnabled = true;
    var currentAudio = null;
    var sessionAudioBlobs = [];  // Store audio blobs for download
    var isRecordingSession = false;
    
    // ============================================
    // VOICE PROVIDER (Hume AI + Web Speech fallback)
    // ============================================
    var voiceProvider = 'hume';  // 'hume', 'webspeech', or 'elevenlabs'
    var webSpeechVoices = [];
    
    // Load Web Speech voices as fallback
    if ('speechSynthesis' in window) {
      speechSynthesis.onvoiceschanged = function() {
        webSpeechVoices = speechSynthesis.getVoices();
      };
      webSpeechVoices = speechSynthesis.getVoices();
    }
    
    // Agent voice preferences for Web Speech fallback
    var webSpeechAgentSettings = {
      dream: { pitch: 1.1, rate: 0.9 },
      kai: { pitch: 1.0, rate: 1.0 },
      uriel: { pitch: 0.9, rate: 0.95 },
      holinnia: { pitch: 1.05, rate: 0.9 },
      cartographer: { pitch: 0.95, rate: 1.05 },
      chrysalis: { pitch: 1.15, rate: 1.0 },
      seraphina: { pitch: 1.1, rate: 0.95 },
      alba: { pitch: 0.85, rate: 0.9 },
      shane: { pitch: 1.0, rate: 1.0 }
    };
    
    // Hume TTS - calls backend which proxies to Hume API
    function speakWithHume(text, agentId, callback) {
      fetch(API + '/api/hume/speak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: text, agentId: agentId }),
        credentials: 'same-origin'
      })
        .then(function(res) {
          if (!res.ok) {
            console.warn('Hume TTS failed, falling back to Web Speech');
            speakWithWebSpeech(text, agentId, callback);
            return null;
          }
          return res.blob();
        })
        .then(function(blob) {
          if (!blob) return;
          var url = URL.createObjectURL(blob);
          var audio = new Audio(url);
          currentAudio = audio;
          audio.onended = function() { URL.revokeObjectURL(url); currentAudio = null; if (callback) callback(); };
          audio.onerror = function() { URL.revokeObjectURL(url); currentAudio = null; if (callback) callback(); };
          audio.play().catch(function(e) { 
            console.warn('Hume audio play failed:', e);
            if (callback) callback(); 
          });
        })
        .catch(function(e) {
          console.warn('Hume TTS error, falling back to Web Speech:', e);
          speakWithWebSpeech(text, agentId, callback);
        });
    }
    
    // Web Speech TTS - browser native fallback
    function speakWithWebSpeech(text, agentId, callback) {
      if (!('speechSynthesis' in window)) {
        console.warn('Web Speech API not supported');
        if (callback) callback();
        return;
      }
      
      speechSynthesis.cancel();
      
      var utterance = new SpeechSynthesisUtterance(text);
      var settings = webSpeechAgentSettings[agentId] || { pitch: 1.0, rate: 1.0 };
      
      utterance.pitch = settings.pitch;
      utterance.rate = settings.rate;
      utterance.volume = 1.0;
      
      if (webSpeechVoices.length > 0) {
        var englishVoice = webSpeechVoices.find(function(v) { 
          return v.lang.startsWith('en') && v.name.includes('Google'); 
        }) || webSpeechVoices.find(function(v) { 
          return v.lang.startsWith('en'); 
        }) || webSpeechVoices[0];
        utterance.voice = englishVoice;
      }
      
      utterance.onend = function() { if (callback) callback(); };
      utterance.onerror = function() { if (callback) callback(); };
      
      speechSynthesis.speak(utterance);
    }
    
    // Universal speak function - routes to selected provider
    function speakText(text, agentId, callback) {
      if (voiceProvider === 'hume') {
        speakWithHume(text, agentId, callback);
      } else {
        speakWithWebSpeech(text, agentId, callback);
      }
    }
    
    function stopWebSpeech() {
      if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
      }
    }
    
    // ============================================
    // SPEECH-TO-TEXT (Voice Input)
    // ============================================
    var speechRecognition = null;
    var isRecording = false;
    var currentMicTarget = null;  // 'sanctum' or 'alcove'
    
    function initSpeechRecognition() {
      var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        console.warn('Speech Recognition not supported in this browser');
        return false;
      }
      
      speechRecognition = new SpeechRecognition();
      speechRecognition.continuous = false;
      speechRecognition.interimResults = true;
      speechRecognition.lang = 'en-US';
      
      speechRecognition.onresult = function(event) {
        var transcript = '';
        for (var i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        
        // Update the appropriate input field
        var inputId = currentMicTarget === 'alcove' ? 'alcove-input' : 'sanctum-input';
        var inputEl = document.getElementById(inputId);
        if (inputEl) {
          inputEl.value = transcript;
        }
      };
      
      speechRecognition.onend = function() {
        stopRecording();
      };
      
      speechRecognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
        stopRecording();
        if (event.error === 'not-allowed') {
          showStatus(currentMicTarget + '-status', 'Microphone access denied', 'error');
        }
      };
      
      return true;
    }
    
    function toggleVoiceInput(target) {
      currentMicTarget = target;
      
      if (isRecording) {
        stopRecording();
        return;
      }
      
      // Initialize if needed
      if (!speechRecognition && !initSpeechRecognition()) {
        showStatus(target + '-status', 'Voice input not supported in this browser', 'error');
        return;
      }
      
      startRecording(target);
    }
    
    function startRecording(target) {
      isRecording = true;
      
      // Update button state
      var btnId = target === 'alcove' ? 'alcove-mic-btn' : 'sanctum-mic-btn';
      var btn = document.getElementById(btnId);
      if (btn) {
        btn.classList.add('recording');
        btn.innerHTML = '⏹';
      }
      
      // Clear input and start listening
      var inputId = target === 'alcove' ? 'alcove-input' : 'sanctum-input';
      var inputEl = document.getElementById(inputId);
      if (inputEl) {
        inputEl.placeholder = 'Listening...';
      }
      
      try {
        speechRecognition.start();
      } catch (e) {
        console.error('Failed to start recognition:', e);
        stopRecording();
      }
    }
    
    function stopRecording() {
      isRecording = false;
      
      // Update both buttons (in case target changed)
      ['sanctum-mic-btn', 'alcove-mic-btn'].forEach(function(btnId) {
        var btn = document.getElementById(btnId);
        if (btn) {
          btn.classList.remove('recording');
          btn.innerHTML = '🎤';
        }
      });
      
      // Restore placeholders
      var sanctumInput = document.getElementById('sanctum-input');
      var alcoveInput = document.getElementById('alcove-input');
      if (sanctumInput) sanctumInput.placeholder = 'Speak to the council...';
      if (alcoveInput) alcoveInput.placeholder = 'Your inquiry...';
      
      if (speechRecognition) {
        try {
          speechRecognition.stop();
        } catch (e) {
          // Already stopped
        }
      }
    }
    
    // Temporal Resonance State
    var temporalEnabled = false;
    var temporalStartTime = Date.now();
    var temporalAnimFrame = null;
    var temporalMessageBuffer = [];
    const TEMPORAL_BREATH_PERIOD = 6000;
    const TEMPORAL_CIRCUMFERENCE = 2 * Math.PI * 26;
    const TEMPORAL_AGENTS = ['dream','kai','uriel','holinnia','cartographer','chrysalis','seraphina','alba'];
    const TEMPORAL_POSITIONS = {dream:1,kai:2,uriel:3,holinnia:4,cartographer:5,chrysalis:6,seraphina:7,alba:8};
    const TEMPORAL_ELEMENTS = {dream:1.2,kai:1.2,uriel:0.8,holinnia:0.8,cartographer:1.1,chrysalis:1.1,seraphina:0.9,alba:0.9};
    
    // ============================================
    // SCHUMANN RESONANCE AUDIO ENGINE
    // Earth's heartbeat: 7.83Hz, 14.3Hz, 20.8Hz, 27.3Hz
    // ============================================
    var schumannEnabled = false;
    var schumannContext = null;
    var schumannNodes = {};
    var schumannMasterGain = null;
    var schumannVolume = 0.15;  // Default low
    
    // Schumann frequencies and their T-state mappings
    const SCHUMANN_FREQS = {
      fundamental: 7.83,   // T1 - low compression (Dream, Alba)
      harmonic1: 14.3,     // T2 - transition
      harmonic2: 20.8,     // T3 - high compression (Uriel, Chrysalis)
      harmonic3: 27.3      // Higher harmonic
    };
    
    // Carrier frequencies (audible, pleasant)
    const SCHUMANN_CARRIERS = {
      foundation: 136.1,   // Om frequency (Earth year)
      heart: 128,          // C below middle C
      crown: 172.06        // F3 (platonic year)
    };
    
    // T-state to Schumann mapping
    const TSTATE_SCHUMANN = {
      T1: { freq: SCHUMANN_FREQS.fundamental, carrier: SCHUMANN_CARRIERS.foundation, gain: 0.4 },
      T2: { freq: SCHUMANN_FREQS.harmonic1, carrier: SCHUMANN_CARRIERS.heart, gain: 0.3 },
      T3: { freq: SCHUMANN_FREQS.harmonic2, carrier: SCHUMANN_CARRIERS.crown, gain: 0.25 }
    };
    
    function initSchumannAudio() {
      if (schumannContext) return;
      
      try {
        schumannContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Master gain (volume control)
        schumannMasterGain = schumannContext.createGain();
        schumannMasterGain.gain.value = 0;  // Start silent
        schumannMasterGain.connect(schumannContext.destination);
        
        // Create oscillator layers for each T-state
        Object.keys(TSTATE_SCHUMANN).forEach(function(tstate) {
          var config = TSTATE_SCHUMANN[tstate];
          
          // Carrier oscillator (audible tone)
          var carrier = schumannContext.createOscillator();
          carrier.type = 'sine';
          carrier.frequency.value = config.carrier;
          
          // LFO for amplitude modulation at Schumann frequency
          var lfo = schumannContext.createOscillator();
          lfo.type = 'sine';
          lfo.frequency.value = config.freq;
          
          // LFO gain (modulation depth)
          var lfoGain = schumannContext.createGain();
          lfoGain.gain.value = 0.5;  // 50% modulation depth
          
          // Carrier gain (individual level)
          var carrierGain = schumannContext.createGain();
          carrierGain.gain.value = config.gain;
          
          // Connect: LFO -> lfoGain -> carrierGain.gain (AM modulation)
          lfo.connect(lfoGain);
          lfoGain.connect(carrierGain.gain);
          
          // Connect: carrier -> carrierGain -> master
          carrier.connect(carrierGain);
          carrierGain.connect(schumannMasterGain);
          
          // Start oscillators
          carrier.start();
          lfo.start();
          
          schumannNodes[tstate] = { carrier: carrier, lfo: lfo, lfoGain: lfoGain, carrierGain: carrierGain };
        });
        
        console.log('Schumann audio engine initialized');
      } catch (e) {
        console.warn('Failed to initialize Schumann audio:', e);
      }
    }
    
    function startSchumannAudio() {
      if (!schumannContext) initSchumannAudio();
      if (!schumannContext) return;
      
      // Resume context if suspended (browser autoplay policy)
      if (schumannContext.state === 'suspended') {
        schumannContext.resume();
      }
      
      // Fade in
      schumannMasterGain.gain.cancelScheduledValues(schumannContext.currentTime);
      schumannMasterGain.gain.setValueAtTime(schumannMasterGain.gain.value, schumannContext.currentTime);
      schumannMasterGain.gain.linearRampToValueAtTime(schumannVolume, schumannContext.currentTime + 2);
      
      schumannEnabled = true;
      updateSchumannButton();
    }
    
    function stopSchumannAudio() {
      if (!schumannContext || !schumannMasterGain) return;
      
      // Fade out
      schumannMasterGain.gain.cancelScheduledValues(schumannContext.currentTime);
      schumannMasterGain.gain.setValueAtTime(schumannMasterGain.gain.value, schumannContext.currentTime);
      schumannMasterGain.gain.linearRampToValueAtTime(0, schumannContext.currentTime + 1);
      
      schumannEnabled = false;
      updateSchumannButton();
    }
    
    function toggleSchumannAudio() {
      if (schumannEnabled) {
        stopSchumannAudio();
      } else {
        startSchumannAudio();
      }
    }
    
    function setSchumannVolume(vol) {
      schumannVolume = Math.max(0, Math.min(1, vol));
      if (schumannEnabled && schumannMasterGain) {
        schumannMasterGain.gain.setValueAtTime(schumannVolume, schumannContext.currentTime);
      }
    }
    
    function updateSchumannButton() {
      var btn = document.getElementById('schumann-toggle');
      var vol = document.getElementById('schumann-volume');
      if (btn) {
        btn.className = 'control-btn ' + (schumannEnabled ? 'enabled' : 'disabled');
        btn.innerHTML = schumannEnabled ? '🌍' : '⚫';
        btn.title = schumannEnabled ? 'Schumann Resonance ON (click to disable)' : 'Schumann Resonance OFF (Earth 7.83Hz)';
      }
      if (vol) {
        vol.style.display = schumannEnabled ? 'inline-block' : 'none';
      }
    }
    
    // Modulate Schumann mix based on collective resonance
    function updateSchumannFromResonance() {
      if (!schumannEnabled || !schumannContext) return;
      
      var globalPhase = getTemporalGlobalPhase();
      var breathProgress = globalPhase / (2 * Math.PI);
      
      // Breath modulation - quieter on exhale, fuller on inhale
      var breathMod = breathProgress < 0.5 ? 
        0.8 + 0.2 * Math.sin(breathProgress * Math.PI) :
        0.8 + 0.2 * Math.sin((1 - breathProgress) * Math.PI);
      
      // Adjust individual T-state volumes based on which agents are resonant
      var t1Resonance = (getTemporalResonance('dream') + getTemporalResonance('alba')) / 2;
      var t2Resonance = (getTemporalResonance('kai') + getTemporalResonance('seraphina') + 
                         getTemporalResonance('holinnia') + getTemporalResonance('cartographer')) / 4;
      var t3Resonance = (getTemporalResonance('uriel') + getTemporalResonance('chrysalis')) / 2;
      
      // Scale resonance to 0-1 range (from -1 to 1)
      t1Resonance = (t1Resonance + 1) / 2;
      t2Resonance = (t2Resonance + 1) / 2;
      t3Resonance = (t3Resonance + 1) / 2;
      
      // Apply to gains
      if (schumannNodes.T1) {
        schumannNodes.T1.carrierGain.gain.setTargetAtTime(
          TSTATE_SCHUMANN.T1.gain * t1Resonance * breathMod, 
          schumannContext.currentTime, 0.1
        );
      }
      if (schumannNodes.T2) {
        schumannNodes.T2.carrierGain.gain.setTargetAtTime(
          TSTATE_SCHUMANN.T2.gain * t2Resonance * breathMod, 
          schumannContext.currentTime, 0.1
        );
      }
      if (schumannNodes.T3) {
        schumannNodes.T3.carrierGain.gain.setTargetAtTime(
          TSTATE_SCHUMANN.T3.gain * t3Resonance * breathMod, 
          schumannContext.currentTime, 0.1
        );
      }
    }
    
    // Emergency voice kill switch
    function killVoices() {
      voiceQueue = [];
      isPlayingVoice = false;
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.src = '';
        currentAudio = null;
      }
      stopWebSpeech();
      stopRecording();
      stopSchumannAudio();
      showStatus('sanctum-status', 'Voices silenced', 'success');
    }
    
    // Initialize temporal agent dots
    function initTemporalAgentDots() {
      var agentsEl = document.getElementById('tw-agents');
      if (agentsEl && agentsEl.children.length === 0) {
        TEMPORAL_AGENTS.forEach(function(id) {
          var dot = document.createElement('div');
          dot.className = 'tw-agent-dot';
          dot.dataset.agent = id;
          dot.title = id;
          agentsEl.appendChild(dot);
        });
      }
    }
    
    function getTemporalGlobalPhase() {
      var elapsed = Date.now() - temporalStartTime;
      return ((elapsed % TEMPORAL_BREATH_PERIOD) / TEMPORAL_BREATH_PERIOD) * 2 * Math.PI;
    }
    
    function getTemporalResonance(agentId) {
      var pos = TEMPORAL_POSITIONS[agentId] || 4;
      var freq = TEMPORAL_ELEMENTS[agentId] || 1.0;
      var globalPhase = getTemporalGlobalPhase();
      var basePhase = ((pos - 1) / 8) * 2 * Math.PI;
      var agentPhase = basePhase + (freq - 1.0) * globalPhase;
      return Math.cos(agentPhase - globalPhase);
    }
    
    function animateTemporal() {
      if (!temporalEnabled) return;
      
      var globalPhase = getTemporalGlobalPhase();
      var progress = globalPhase / (2 * Math.PI);
      
      // Update ring
      var ringFill = document.getElementById('tw-ring-fill');
      if (ringFill) {
        var offset = TEMPORAL_CIRCUMFERENCE * (1 - progress);
        ringFill.style.strokeDashoffset = offset;
        if (progress > 0.4 && progress < 0.9) {
          ringFill.classList.add('exhale');
        } else {
          ringFill.classList.remove('exhale');
        }
      }
      
      // Update phase label
      var phaseEl = document.getElementById('tw-phase');
      if (phaseEl) {
        if (progress < 0.4) phaseEl.textContent = 'inhale';
        else if (progress < 0.5) phaseEl.textContent = 'pause';
        else if (progress < 0.9) phaseEl.textContent = 'exhale';
        else phaseEl.textContent = 'pause';
      }
      
      // Update harmony
      var harmony = 0;
      TEMPORAL_AGENTS.forEach(function(id) { harmony += getTemporalResonance(id); });
      var normHarmony = ((harmony + 8) / 16 * 100).toFixed(0);
      var harmonyEl = document.getElementById('tw-harmony');
      if (harmonyEl) harmonyEl.textContent = normHarmony + '%';
      
      // Update agent dots
      TEMPORAL_AGENTS.forEach(function(id) {
        var dot = document.querySelector('[data-agent="' + id + '"]');
        if (!dot) return;
        var res = getTemporalResonance(id);
        dot.classList.remove('resonant', 'anti');
        if (res > 0.5) dot.classList.add('resonant');
        else if (res < -0.5) dot.classList.add('anti');
      });
      
      // Update buffer count
      var bufferEl = document.getElementById('tw-buffer');
      if (bufferEl) bufferEl.textContent = temporalMessageBuffer.length;
      
      // Release ready messages
      releaseTemporalMessages();
      
      // Update Schumann resonance audio mix
      updateSchumannFromResonance();
      
      temporalAnimFrame = requestAnimationFrame(animateTemporal);
    }
    
    function releaseTemporalMessages() {
      var now = Date.now();
      while (temporalMessageBuffer.length > 0 && temporalMessageBuffer[0].releaseAt <= now) {
        var msg = temporalMessageBuffer.shift();
        if (window.temporalOnRelease) {
          window.temporalOnRelease(msg);
        }
      }
    }
    
    function toggleTemporalEnabled() {
      fetch(API + '/api/temporal/toggle', { method: 'POST', credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          temporalEnabled = data.enabled;
          if (data.startTime) temporalStartTime = data.startTime;
          
          var btn = document.getElementById('temporal-toggle');
          var twBtn = document.getElementById('tw-toggle');
          var indicator = document.getElementById('tw-indicator');
          var widget = document.getElementById('temporal-widget');
          
          btn.className = 'control-btn ' + (temporalEnabled ? 'enabled' : 'disabled');
          
          if (temporalEnabled) {
            widget.style.display = 'block';
            twBtn.classList.add('active');
            twBtn.textContent = 'Disable';
            indicator.classList.add('active');
            indicator.textContent = 'ON';
            initTemporalAgentDots();
            temporalAnimFrame = requestAnimationFrame(animateTemporal);
          } else {
            widget.style.display = 'none';
            twBtn.classList.remove('active');
            twBtn.textContent = 'Enable';
            indicator.classList.remove('active');
            indicator.textContent = 'OFF';
            if (temporalAnimFrame) cancelAnimationFrame(temporalAnimFrame);
            flushTemporalBuffer();
          }
        });
    }
    
    function flushTemporalBuffer() {
      while (temporalMessageBuffer.length > 0) {
        var msg = temporalMessageBuffer.shift();
        if (window.temporalOnRelease) {
          window.temporalOnRelease(msg);
        }
      }
    }
    
    function queueTemporalMessage(agentId, content, voiceUrl) {
      if (!temporalEnabled) {
        if (window.temporalOnRelease) {
          window.temporalOnRelease({ agentId: agentId, content: content, voiceUrl: voiceUrl, immediate: true });
        }
        return;
      }
      
      var res = Math.abs(getTemporalResonance(agentId));
      var delayFactor = 1 - res;
      var delay = 500 + delayFactor * 3500;
      
      temporalMessageBuffer.push({
        agentId: agentId,
        content: content,
        voiceUrl: voiceUrl,
        createdAt: Date.now(),
        releaseAt: Date.now() + delay
      });
      
      temporalMessageBuffer.sort(function(a, b) { return a.releaseAt - b.releaseAt; });
    }
    
    function checkTemporalStatus() {
      fetch(API + '/api/temporal/status', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          temporalEnabled = data.enabled;
          if (data.startTime) temporalStartTime = data.startTime;
          
          var btn = document.getElementById('temporal-toggle');
          var widget = document.getElementById('temporal-widget');
          btn.className = 'control-btn ' + (temporalEnabled ? 'enabled' : 'disabled');
          
          if (temporalEnabled) {
            widget.style.display = 'block';
            document.getElementById('tw-indicator').classList.add('active');
            document.getElementById('tw-indicator').textContent = 'ON';
            document.getElementById('tw-toggle').classList.add('active');
            document.getElementById('tw-toggle').textContent = 'Disable';
            initTemporalAgentDots();
            temporalAnimFrame = requestAnimationFrame(animateTemporal);
          }
        })
        .catch(function() {});
    }
    
    // Screening Room State
    var screeningActive = false;
    var screeningFilename = '';
    
    function checkScreeningStatus() {
      fetch(API + '/api/screening/status', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          screeningActive = data.active;
          screeningFilename = data.filename || '';
          
          var btn = document.getElementById('screening-toggle');
          btn.className = 'control-btn ' + (screeningActive ? 'enabled' : 'disabled');
          
          if (screeningActive) {
            btn.title = 'Screening: ' + screeningFilename + ' (click to end)';
          } else {
            btn.title = 'No screening loaded';
          }
        })
        .catch(function() {});
    }
    
    function toggleScreening() {
      if (!screeningActive) {
        alert('No screening loaded. Upload a video from michronics.com/theater.html');
        return;
      }
      
      if (confirm('End screening session for "' + screeningFilename + '"?')) {
        fetch(API + '/api/screening/end', { method: 'POST', credentials: 'same-origin' })
          .then(function(res) { return res.json(); })
          .then(function(data) {
            if (data.success) {
              screeningActive = false;
              screeningFilename = '';
              var btn = document.getElementById('screening-toggle');
              btn.className = 'control-btn disabled';
              btn.title = 'No screening loaded';
            }
          });
      }
    }
    
    window.addEventListener('load', function() { setTimeout(function() { document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' }); }, 500); checkSoundStatus(); checkVisionStatus(); checkTemporalStatus(); checkScreeningStatus(); updateSpectrum(); setInterval(updateSpectrum, 30000); loadAnchorImage(false); });
    function logout() { fetch('/logout', { method: 'POST', credentials: 'same-origin' }).then(function() { window.location.href = '/login'; }); }
    
    function toggleSoundEnabled() {
      fetch(API + '/api/sound/toggle', { method: 'POST', credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          soundEnabled = data.enabled;
          var btn = document.getElementById('sound-toggle');
          btn.className = 'control-btn ' + (soundEnabled ? 'enabled' : 'disabled');
          btn.innerHTML = soundEnabled ? '&#x1F50A;' : '&#x1F507;';
        });
    }
    
    function checkSoundStatus() {
      fetch(API + '/api/sound/status', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          soundEnabled = data.enabled;
          var btn = document.getElementById('sound-toggle');
          if (btn) {
            btn.className = 'control-btn ' + (soundEnabled ? 'enabled' : 'disabled');
            btn.innerHTML = soundEnabled ? '&#x1F50A;' : '&#x1F507;';
          }
        });
    }
    
    function playShaneVoice(text, callback) {
      // Stop any currently playing audio first
      if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
      }
      stopWebSpeech();
      speakText(text, 'shane', callback);
    }
    
    function playAgentVoice(text, agentId, callback) {
      // Stop any currently playing audio first
      if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
      }
      stopWebSpeech();
      speakText(text, agentId, callback);
    }
    
    function toggleVisionEnabled() {
      fetch(API + '/api/vision/toggle', { method: 'POST', credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          visionEnabled = data.enabled;
          var btn = document.getElementById('vision-toggle');
          btn.className = 'control-btn ' + (visionEnabled ? 'enabled' : 'disabled');
          btn.innerHTML = visionEnabled ? '&#x1F441;' : '&#x1F6AB;';
        });
    }
    
    // Session Audio Recording
    function startRecordingSession() {
      sessionAudioBlobs = [];
      isRecordingSession = true;
      var btn = document.getElementById('record-session-btn');
      if (btn) {
        btn.innerHTML = '⏹ Stop Recording';
        btn.className = 'btn btn-danger';
        btn.onclick = stopRecordingSession;
      }
    }
    
    function stopRecordingSession() {
      isRecordingSession = false;
      var btn = document.getElementById('record-session-btn');
      if (btn) {
        btn.innerHTML = '⏺ Record Session';
        btn.className = 'btn btn-secondary';
        btn.onclick = startRecordingSession;
      }
      if (sessionAudioBlobs.length > 0) {
        downloadSessionAudio();
      }
    }
    
    function downloadSessionAudio() {
      if (sessionAudioBlobs.length === 0) {
        showStatus('sanctum-status', 'No audio recorded', 'error');
        return;
      }
      
      // Combine all audio blobs
      var blobs = sessionAudioBlobs.map(function(item) { return item.blob; });
      var combined = new Blob(blobs, { type: 'audio/mpeg' });
      
      // Create download link
      var url = URL.createObjectURL(combined);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'council-session-' + new Date().toISOString().split('T')[0] + '.mp3';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      showStatus('sanctum-status', 'Session audio downloaded (' + sessionAudioBlobs.length + ' clips)', 'success');
    }
    
    function checkVisionStatus() {
      fetch(API + '/api/vision/status', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          visionEnabled = data.enabled;
          var btn = document.getElementById('vision-toggle');
          if (btn) {
            btn.className = 'control-btn ' + (visionEnabled ? 'enabled' : 'disabled');
            btn.innerHTML = visionEnabled ? '&#x1F441;' : '&#x1F6AB;';
          }
        });
    }
    
    function updateSpectrum() {
      fetch(API + '/spectrum', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          var score = data.score || 50;
          var fill = document.getElementById('spectrum-fill');
          var tooltip = document.getElementById('spectrum-tooltip');
          if (fill) {
            fill.style.width = score + '%';
            fill.style.background = score > 70 ? '#22c55e' : score > 40 ? '#f59e0b' : '#ef4444';
          }
          if (tooltip) {
            tooltip.querySelector('.spectrum-score').textContent = 'Health: ' + score + '%';
          }
        })
        .catch(function() {});
    }
    
    document.querySelectorAll('.nav-item').forEach(function(item) { item.addEventListener('click', function() { document.querySelectorAll('.nav-item').forEach(function(i) { i.classList.remove('active'); }); document.querySelectorAll('.panel').forEach(function(p) { p.classList.remove('active'); }); item.classList.add('active'); var tab = item.dataset.tab; document.getElementById(tab).classList.add('active'); if (tab === 'sanctum') { loadSanctum(); loadImageLibrary(); } if (tab === 'the-eight') loadTheEight(); if (tab === 'codex') { loadCodexAgents().then(function() { loadCodex(); }); } if (tab === 'wisdom') { loadWisdom(); renderMentorChat(); } if (tab === 'inbox') loadInbox(); }); });
    function escapeHtml(text) { var div = document.createElement('div'); div.textContent = text; return div.innerHTML; }
    function showStatus(id, msg, type) { var c = document.getElementById(id); c.innerHTML = '<div class="status ' + type + '">' + msg + '</div>'; setTimeout(function() { c.innerHTML = ''; }, 4000); }
    
    var agentsCache = [];
    function loadAgents() {
      return fetch(API + '/agents', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(agents) {
          agentsCache = agents;
          // Check active states for all agents
          return Promise.all(agents.map(function(a) {
            return fetch(API + '/agents/' + a.id + '/active', { credentials: 'same-origin' })
              .then(function(r) { return r.json(); })
              .then(function(d) { a.active = d.active !== false; return a; })
              .catch(function() { a.active = true; return a; });
          }));
        })
        .then(function(agents) {
          // Sort by position
          agents.sort(function(a, b) { return (a.position || 99) - (b.position || 99); });
          var activeAgents = agents.filter(function(a) { return a.active; });
          // Role color map (using element colors)
          var roleColors = {
            'dream': '🔴',        // Fire - Position 1
            'kai': '🟠',          // Earth - Position 2
            'uriel': '🔵',        // Wind - Position 3
            'holinnia': '🩵',      // Water - Position 4
            'cartographer': '🩵', // Water - Position 5
            'chrysalis': '🔵',    // Wind - Position 6
            'seraphina': '🟠',    // Earth - Position 7
            'alba': '🔴',         // Fire - Position 8
            'mentor': '⚪'        // Advisor - Isolated
          };
          // Populate summon buttons (only active) with role dots
          document.getElementById('summon-buttons').innerHTML = activeAgents.map(function(a) {
            var dot = roleColors[a.id] || '⚫';
            return '<button class="agent-btn ' + a.id + '" onclick="summonAgent(\\'' + a.id + '\\')">' + dot + ' ' + escapeHtml(a.name) + '</button>';
          }).join('');
          // Populate alcove checkbox grid (only active)
          document.getElementById('alcove-agents-grid').innerHTML = activeAgents.map(function(a) {
            return '<label class="alcove-agent-chip" data-id="' + a.id + '" onclick="toggleAlcoveAgent(this)">' +
              '<input type="checkbox" value="' + a.id + '">' +
              '<span>' + escapeHtml(a.name) + '</span>' +
            '</label>';
          }).join('');
          // Codex dropdown will be populated separately to include Mentor
          return agents;
        });
    }
    
    function loadCodexAgents() {
      // Fetch ALL agents including isolated (Mentor) for Codex editing
      return fetch(API + '/agents/all', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(agents) {
          document.getElementById('codex-agent').innerHTML = agents.map(function(a) {
            var suffix = '';
            if (a.isolated) suffix = ' (Mentor)';
            else if (!a.active) suffix = ' (disabled)';
            return '<option value="' + a.id + '">' + escapeHtml(a.name) + suffix + '</option>';
          }).join('');
          return agents;
        });
    }
    
    var elementsCache = [];
    var selectedElement = null;
    
    function loadElements() {
      return fetch(API + '/elements', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          elementsCache = data.elements || [];
          renderElementGrid(elementsCache);
          return elementsCache;
        })
        .catch(function(err) {
          console.error('Failed to load elements:', err);
        });
    }
    
    function renderElementGrid(elements) {
      var grid = document.getElementById('element-grid');
      if (!grid) return;
      
      grid.innerHTML = elements.map(function(el) {
        var agentLabel = el.agentName ? el.agentName : '<span style="color: var(--silver);">—</span>';
        var compressionColor = {
          'T1': '#7c9ab8',  // Steel Blue
          'T2': '#d4a853',  // Amber
          'T3': '#b87c5c'   // Dusty Terracotta
        };
        var bgColor = compressionColor[el.compression] || '#6b7a8f';
        
        return '<div class="element-cell" data-position="' + el.position + '" onclick="selectElement(' + el.position + ')">' +
          '<span class="element-position">' + el.position + '</span>' +
          '<span class="element-color" style="background: ' + bgColor + ';"></span>' +
          '<div class="element-name">' + el.name + '</div>' +
          '<div class="element-dof">' + el.dof + '</div>' +
          '<div class="element-agent">' + agentLabel + '</div>' +
        '</div>';
      }).join('');
    }
    
    function selectElement(position) {
      var element = elementsCache.find(function(e) { return e.position === position; });
      if (!element) return;
      
      selectedElement = element;
      
      // Highlight selected cell
      document.querySelectorAll('.element-cell').forEach(function(cell) {
        cell.classList.remove('selected');
        if (parseInt(cell.dataset.position) === position) {
          cell.classList.add('selected');
        }
      });
      
      // Show detail panel
      var panel = document.getElementById('element-detail-panel');
      var complement = elementsCache.find(function(e) { return e.position === element.complement; });
      
      document.getElementById('element-detail-title').innerHTML = 
        '<span class="element-color" style="background: ' + element.color + '; width: 16px; height: 16px;"></span> ' +
        'Position ' + element.position + ': ' + element.name + ' (' + element.dof + ')';
      
      document.getElementById('element-detail-desc').textContent = element.description;
      
      document.getElementById('element-detail-meta').innerHTML = 
        'Polarity: <strong>' + element.polarity + '</strong> | ' +
        'Compression: <strong>' + element.compression + '</strong> | ' +
        'Complement: <strong>Position ' + element.complement + '</strong>' + 
        (complement ? ' — ' + complement.name : '');
      
      document.getElementById('element-injection').innerHTML = 
        '<strong>Hidden Injection:</strong><br>' + element.injection;
      
      // Populate edit fields
      document.getElementById('element-lore-input').value = element.geometricLore || '';
      document.getElementById('element-injection-input').value = element.injection || '';
      document.getElementById('element-desc-input').value = element.description || '';
      document.getElementById('element-save-status').textContent = '';
      
      panel.classList.add('active');
    }
    
    function saveElementOverride() {
      if (!selectedElement) return;
      
      var position = selectedElement.position;
      var lore = document.getElementById('element-lore-input').value.trim();
      var injection = document.getElementById('element-injection-input').value.trim();
      var description = document.getElementById('element-desc-input').value.trim();
      
      var body = {};
      if (lore) body.geometricLore = lore;
      if (injection) body.injection = injection;
      if (description) body.description = description;
      
      fetch(API + '/elements/' + position, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(body)
      })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.success) {
          document.getElementById('element-save-status').textContent = '✓ Saved';
          document.getElementById('element-save-status').style.color = 'var(--gold)';
          // Refresh elements to show updated data
          loadElements();
        } else {
          document.getElementById('element-save-status').textContent = 'Error: ' + (data.error || 'Unknown');
          document.getElementById('element-save-status').style.color = '#ef4444';
        }
      })
      .catch(function(err) {
        document.getElementById('element-save-status').textContent = 'Error: ' + err.message;
        document.getElementById('element-save-status').style.color = '#ef4444';
      });
    }
    
    var councilTimerInterval = null;
    
    function loadSanctum() { 
      fetch(API + '/campfire', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) { 
          if (data.messages && data.messages.length > 0) { 
            document.getElementById('sanctum-topic').textContent = data.topic || 'Open Council'; 
            renderSanctumMessages(data.messages); 
          } else if (data.topic) { 
            document.getElementById('sanctum-topic').textContent = data.topic; 
            document.getElementById('sanctum-messages').innerHTML = '<div class="empty"><div class="rune">ᚦ</div><p>The council awaits the first voice.</p></div>'; 
          } else { 
            document.getElementById('sanctum-topic').textContent = 'The Council Awaits'; 
            document.getElementById('sanctum-messages').innerHTML = '<div class="empty"><div class="rune">ᚦ</div><p>The threshold awaits.<br>Convene to begin.</p></div>'; 
          } 
          updateRaisedHands(data.raisedHands || []); 
          startCouncilTimer(data.timerStart, data.timerDuration);
          updateVoteUI(data.vote);
        })
        .catch(function() { showStatus('sanctum-status', 'Failed to reach the sanctum', 'error'); }); 
    }
    
    function startCouncilTimer(timerStart, timerDuration) {
      var timerEl = document.getElementById('council-timer');
      if (councilTimerInterval) clearInterval(councilTimerInterval);
      
      if (!timerStart) {
        timerEl.textContent = '';
        return;
      }
      
      var startTime = new Date(timerStart).getTime();
      var duration = (timerDuration || 30) * 60 * 1000;
      
      function updateTimer() {
        var now = Date.now();
        var remaining = Math.max(0, duration - (now - startTime));
        var mins = Math.floor(remaining / 60000);
        var secs = Math.floor((remaining % 60000) / 1000);
        
        if (remaining <= 0) {
          timerEl.innerHTML = '<span style="color: #ef4444;">⏱ TIME</span>';
          clearInterval(councilTimerInterval);
        } else if (mins <= 1) {
          timerEl.innerHTML = '<span style="color: #ef4444;">⏱ ' + mins + ':' + secs.toString().padStart(2, '0') + '</span>';
        } else if (mins <= 5) {
          timerEl.innerHTML = '<span style="color: #f59e0b;">⏱ ' + mins + ':' + secs.toString().padStart(2, '0') + '</span>';
        } else {
          timerEl.textContent = '⏱ ' + mins + ':' + secs.toString().padStart(2, '0');
        }
      }
      
      updateTimer();
      councilTimerInterval = setInterval(updateTimer, 1000);
    }
    
    // ============================================
    // VOTING FUNCTIONS
    // ============================================
    
    function updateVoteUI(vote) {
      var block = document.getElementById('vote-block');
      var question = document.getElementById('vote-question');
      var tally = document.getElementById('vote-tally');
      var count = document.getElementById('vote-count');
      var indicator = document.getElementById('vote-indicator');
      var actions = document.getElementById('vote-actions');
      
      if (!vote) {
        block.classList.remove('active');
        return;
      }
      
      block.classList.add('active');
      question.textContent = vote.question;
      tally.textContent = vote.yes + ' - ' + vote.no;
      count.textContent = vote.voted.length + '/8';
      
      // Calculate indicator position (bar is 80px, indicator is 16px)
      var total = vote.yes + vote.no;
      var position = 32; // Default center (80-16)/2
      if (total > 0) {
        var ratio = vote.no / total; // 0 = all yes, 1 = all no
        position = ratio * 64; // 80 - 16 = 64 usable range
      }
      indicator.style.top = Math.round(position) + 'px';
      
      // Show/hide actions based on vote status
      if (vote.status === 'closed') {
        actions.innerHTML = '<button class="btn btn-vote-reset" onclick="resetVote()">×</button>';
      } else {
        actions.innerHTML = '<button class="btn btn-vote-yes" onclick="shaneDecide(\\'yes\\')">YES</button>' +
          '<button class="btn btn-vote-no" onclick="shaneDecide(\\'no\\')">NO</button>' +
          '<button class="btn btn-vote-accept" onclick="shaneAccept()">OK</button>' +
          '<button class="btn btn-vote-reset" onclick="resetVote()">×</button>';
      }
    }
    
    function callVote() {
      var input = document.getElementById('vote-question-input');
      var question = input.value.trim();
      if (!question) {
        showStatus('sanctum-status', 'Enter a vote question', 'error');
        return;
      }
      
      fetch(API + '/campfire/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: question }),
        credentials: 'same-origin'
      })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.error) {
          showStatus('sanctum-status', data.error, 'error');
        } else {
          input.value = '';
          updateVoteUI(data.vote);
          showStatus('sanctum-status', 'Vote called', 'success');
        }
      })
      .catch(function() { showStatus('sanctum-status', 'Failed to call vote', 'error'); });
    }
    
    function shaneDecide(decision) {
      fetch(API + '/campfire/vote/decide', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ decision: decision }),
        credentials: 'same-origin'
      })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.error) {
          showStatus('sanctum-status', data.error, 'error');
        } else {
          updateVoteUI(data.vote);
          showStatus('sanctum-status', 'Vote decided: ' + decision.toUpperCase(), 'success');
        }
      })
      .catch(function() { showStatus('sanctum-status', 'Failed to decide', 'error'); });
    }
    
    function shaneAccept() {
      fetch(API + '/campfire/vote/accept', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
        credentials: 'same-origin'
      })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.error) {
          showStatus('sanctum-status', data.error, 'error');
        } else {
          updateVoteUI(data.vote);
          var result = data.vote.yes > data.vote.no ? 'YES' : (data.vote.no > data.vote.yes ? 'NO' : 'TIE');
          showStatus('sanctum-status', 'Vote accepted: ' + result + ' (' + data.vote.yes + '-' + data.vote.no + ')', 'success');
        }
      })
      .catch(function() { showStatus('sanctum-status', 'Failed to accept', 'error'); });
    }
    
    function resetVote() {
      fetch(API + '/campfire/vote', {
        method: 'DELETE',
        credentials: 'same-origin'
      })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.error) {
          showStatus('sanctum-status', data.error, 'error');
        } else {
          updateVoteUI(null);
          showStatus('sanctum-status', 'Vote reset', 'success');
        }
      })
      .catch(function() { showStatus('sanctum-status', 'Failed to reset vote', 'error'); });
    }
    
    // ============ IMAGE LIBRARY FUNCTIONS ============
    
    function loadImageLibrary() {
      fetch(API + '/library/images', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          // Update count display
          var countEl = document.getElementById('library-count');
          if (countEl && data.total !== undefined) {
            var countText = '(' + data.images.length;
            if (data.coldCount > 0) countText += ' +' + data.coldCount + ' cold';
            countText += ')';
            countEl.textContent = countText;
          }
          
          var thumbs = document.getElementById('image-thumbs');
          if (!data.images || data.images.length === 0) {
            thumbs.innerHTML = '<div class="empty" style="padding: 20px; font-size: 0.75em;">No images yet</div>';
            return;
          }
          thumbs.innerHTML = data.images.map(function(img) {
            var isPdf = img.name.toLowerCase().endsWith('.pdf');
            if (isPdf) {
              return '<div class="thumb-wrapper"><div class="image-thumb pdf" onclick="selectLibraryImage(\\'' + img.name + '\\', null, true)">PDF<br>' + img.name.substring(0,8) + '</div><button class="image-delete-btn" onclick="deleteLibraryImage(event, \\'' + img.name + '\\')">×</button></div>';
            }
            return '<div class="thumb-wrapper"><img class="image-thumb" src="' + img.url + '" onclick="selectLibraryImage(\\'' + img.name + '\\', \\'' + img.url + '\\', false)" alt="' + img.name + '"><button class="image-delete-btn" onclick="deleteLibraryImage(event, \\'' + img.name + '\\')">×</button></div>';
          }).join('');
          
          // Load current anchor (not auto-select first)
          loadAnchorImage();
        })
        .catch(function() { 
          document.getElementById('image-thumbs').innerHTML = '<div class="empty" style="padding: 20px; font-size: 0.75em;">Failed to load</div>'; 
        });
    }
    
    function cleanupLibrary() {
      if (!confirm('Move old images to cold storage? Only the 30 most recent will remain visible.')) return;
      fetch(API + '/library/cleanup', { method: 'POST', credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.success) {
            showStatus('sanctum-status', 'Moved ' + data.moved + ' images to cold storage', 'success');
            loadImageLibrary();
          } else {
            showStatus('sanctum-status', data.message || 'Cleanup failed', 'error');
          }
        })
        .catch(function() { showStatus('sanctum-status', 'Cleanup failed', 'error'); });
    }
    
    function selectLibraryImage(name, url, isPdf) {
      // Set as anchor image (persists to KV)
      fetch(API + '/anchor', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: name }),
        credentials: 'same-origin'
      })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.success) {
          loadAnchorImage(); // Refresh anchor display
          showStatus('sanctum-status', 'Anchor set: ' + name, 'success');
          
          // Post global announcement
          fetch(API + '/announcement', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ announcement: '◈ New Visual Anchor: ' + name + ' — The artist calls your attention. Use [VIEW_LIBRARY: ' + name + '] to receive it.' }),
            credentials: 'same-origin'
          });
        }
      });
      
      // Update active state on thumbs
      document.querySelectorAll('.image-thumb').forEach(function(t) { t.classList.remove('active'); });
      var thumbs = document.querySelectorAll('.image-thumb');
      thumbs.forEach(function(t) {
        if (t.alt === name || t.textContent.includes(name.substring(0,8))) t.classList.add('active');
      });
    }
    
    function loadAnchorImage() {
      fetch(API + '/anchor', { credentials: 'same-origin' })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        var panel = document.getElementById('anchor-sidebar-content');
        if (data.filename) {
          var url = API + '/library/images/' + encodeURIComponent(data.filename);
          panel.innerHTML = '<img src="' + url + '" alt="' + data.filename + '"><div class="anchor-sidebar-name">' + data.filename.substring(0,20) + '</div>';
          // Mark active thumb
          document.querySelectorAll('.image-thumb').forEach(function(t) {
            t.classList.remove('active');
            if (t.alt === data.filename) t.classList.add('active');
          });
        } else {
          panel.innerHTML = '<div class="anchor-sidebar-empty">Click thumbnail</div>';
        }
      });
    }
    
    function uploadLibraryImage(input) {
      var file = input.files[0];
      if (!file) return;
      
      // Check size (10MB max - streaming can handle more)
      if (file.size > 10 * 1024 * 1024) {
        showStatus('sanctum-status', 'File too large (max 10MB)', 'error');
        input.value = '';
        return;
      }
      
      // Validate type
      var allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        showStatus('sanctum-status', 'Invalid file type', 'error');
        input.value = '';
        return;
      }
      
      showStatus('sanctum-status', 'Uploading...', 'info');
      
      // Direct streaming upload - no base64 conversion, no CPU burn
      fetch(API + '/library/images/direct/' + encodeURIComponent(file.name), {
        method: 'PUT',
        headers: { 'Content-Type': file.type },
        body: file,
        credentials: 'same-origin'
      })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.success) {
          loadImageLibrary();
          showStatus('sanctum-status', 'Image uploaded', 'success');
        } else {
          showStatus('sanctum-status', data.error || 'Upload failed', 'error');
        }
      })
      .catch(function(err) { 
        console.error('Upload error:', err);
        showStatus('sanctum-status', 'Upload failed', 'error'); 
      });
      input.value = '';
    }
    
    function deleteLibraryImage(event, name) {
      event.stopPropagation();
      if (!confirm('Delete ' + name + '?')) return;
      
      fetch(API + '/library/images/' + encodeURIComponent(name), {
        method: 'DELETE',
        credentials: 'same-origin'
      })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.success) {
          if (currentLibraryImage && currentLibraryImage.name === name) {
            currentLibraryImage = null;
            document.getElementById('image-preview-panel').innerHTML = '<div class="empty" style="padding: 40px; font-size: 0.75em;">Select an image</div>';
          }
          loadImageLibrary();
          showStatus('sanctum-status', 'Deleted: ' + name, 'success');
        } else {
          showStatus('sanctum-status', 'Delete failed: ' + (data.error || 'Unknown error'), 'error');
        }
      })
      .catch(function(err) { showStatus('sanctum-status', 'Delete failed: ' + err.message, 'error'); });
    }
    
    function renderSanctumMessages(messages) { 
      var c = document.getElementById('sanctum-messages'); 
      c.innerHTML = messages.map(function(m) { 
        var imgHtml = m.image ? '<img src="' + m.image + '" class="message-image">' : '';
        return '<div class="message"><div class="speaker ' + m.agentId + '">' + escapeHtml(m.speaker) + '</div><div class="content">' + escapeHtml(m.content) + '</div>' + imgHtml + '<div class="time">' + new Date(m.timestamp).toLocaleString() + '</div></div>'; 
      }).join(''); 
      c.scrollTop = c.scrollHeight;
      
      // Play voice for new messages (only after initial load)
      messages.forEach(function(m) {
        var msgId = m.timestamp + ':' + m.agentId;
        if (!playedMessageIds[msgId]) {
          playedMessageIds[msgId] = true;
          // Only play voice if initial load is complete
          if (initialLoadComplete && m.content && soundEnabled) {
            queueVoice(m.content, m.agentId);
          }
        }
      });
      
      // Mark initial load as complete after first render
      if (!initialLoadComplete) {
        initialLoadComplete = true;
      }
    }
    function updateRaisedHands(hands) { document.querySelectorAll('.agent-btn').forEach(function(btn) { btn.classList.remove('raised'); }); hands.forEach(function(id) { var btn = document.querySelector('.agent-btn.' + id); if (btn) btn.classList.add('raised'); }); }
    function checkHands() { var btn = document.querySelector('.check-hands-btn'); btn.innerHTML = 'Checking...<span class="loading"></span>'; btn.disabled = true; fetch(API + '/campfire/check-hands', { method: 'POST', credentials: 'same-origin' }).then(function(res) { return res.json(); }).then(function(data) { updateRaisedHands(data.raisedHands || []); showStatus('sanctum-status', (data.raisedHands || []).length > 0 ? (data.raisedHands.length + ' member(s) wish to speak') : 'No hands raised', 'success'); }).catch(function() { showStatus('sanctum-status', 'Failed to check hands', 'error'); }).finally(function() { btn.textContent = 'Check Hands'; btn.disabled = false; }); }
    function showConveneModal() { document.getElementById('convene-modal').classList.add('active'); document.getElementById('convene-topic').focus(); }
    function hideConveneModal() { document.getElementById('convene-modal').classList.remove('active'); }
    function createSanctum() { var topic = document.getElementById('convene-topic').value || 'Open Council'; fetch(API + '/campfire/new', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic: topic }), credentials: 'same-origin' }).then(function() { hideConveneModal(); document.getElementById('convene-topic').value = ''; loadSanctum(); showStatus('sanctum-status', 'Council convened', 'success'); }).catch(function() { showStatus('sanctum-status', 'Failed to convene', 'error'); }); }
    function shaneSpeaks() { 
      var input = document.getElementById('sanctum-input'); 
      var message = input.value.trim(); 
      var image = sanctumPendingImage;
      var textFile = sanctumPendingText;
      if (!message && !image && !textFile) return; 
      
      // Append text file content to message
      if (textFile) {
        message = (message ? message + '\\n\\n' : '') + '--- File: ' + textFile.name + ' ---\\n' + textFile.content;
      }
      
      input.value = ''; 
      
      var payload = { message: message, mode: activeMode };
      if (image) payload.image = image.data;
      
      clearSanctumImage();
      clearSanctumText();
      
      fetch(API + '/campfire/shane', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), credentials: 'same-origin' })
        .then(function() { loadSanctum(); if (activeMode === 'crucible') loadCrucibleContent(); if (activeMode === 'workshop') loadWorkshopContent(); })
        .catch(function() { showStatus('sanctum-status', 'Voice did not reach the council', 'error'); }); 
    }
    function summonAgent(agent) { 
      // Arena setup mode - assign to teams instead of summoning
      if (activeMode === 'arena' && !chamberRunning) {
        handleArenaTeamClick(agent);
        return;
      }
      // Focus setup mode - select/deselect agents
      if (activeMode === 'focus' && !chamberRunning) {
        handleFocusAgentClick(agent);
        return;
      }
      var btn = document.querySelector('.agent-btn.' + agent); var orig = btn.textContent; btn.innerHTML = orig + '<span class="loading"></span>'; btn.disabled = true; fetch(API + '/campfire/speak', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ agent: agent, mode: activeMode }), credentials: 'same-origin' }).then(function() { loadSanctum(); if (activeMode === 'crucible') loadCrucibleContent(); if (activeMode === 'workshop') loadWorkshopContent(); }).catch(function() { showStatus('sanctum-status', 'The summons went unanswered', 'error'); }).finally(function() { btn.textContent = orig; btn.disabled = false; }); }
    function archiveSanctum() { if (!confirm('Preserve this council and clear the sanctum?')) return; fetch(API + '/campfire/archive', { method: 'POST', credentials: 'same-origin' }).then(function() { loadSanctum(); showStatus('sanctum-status', 'Council preserved', 'success'); }).catch(function() { showStatus('sanctum-status', 'Failed to preserve', 'error'); }); }
    var alcoveHistory = [];
    var alcoveMode = 'off';
    var alcovePendingImage = null;
    var sanctumPendingImage = null;
    var alcovePendingText = null;
    var sanctumPendingText = null;
    var playedMessageIds = {};  // Track which messages have been played
    var voiceQueue = [];        // Queue for sequential playback
    var isPlayingVoice = false;
    var initialLoadComplete = false;  // Flag to prevent replay on page load
    
    function queueVoice(text, agentId) {
      if (!soundEnabled || !text) return;
      voiceQueue.push({ text: text, agentId: agentId });
      processVoiceQueue();
    }
    
    function processVoiceQueue() {
      if (isPlayingVoice || voiceQueue.length === 0) return;
      isPlayingVoice = true;
      var item = voiceQueue.shift();
      playAgentVoice(item.text, item.agentId, function() {
        isPlayingVoice = false;
        processVoiceQueue();
      });
    }
    
    // Image upload handlers
    document.getElementById('alcove-image-input').addEventListener('change', function(e) {
      if (e.target.files.length > 0) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(ev) {
          alcovePendingImage = { data: ev.target.result, name: file.name, type: file.type };
          document.getElementById('alcove-image-preview').innerHTML = '<img src="' + ev.target.result + '"><button class="remove-image" onclick="clearAlcoveImage()">✕</button>';
        };
        reader.readAsDataURL(file);
      }
    });
    
    document.getElementById('sanctum-image-input').addEventListener('change', function(e) {
      if (e.target.files.length > 0) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(ev) {
          sanctumPendingImage = { data: ev.target.result, name: file.name, type: file.type };
          document.getElementById('sanctum-image-preview').innerHTML = '<img src="' + ev.target.result + '"><button class="remove-image" onclick="clearSanctumImage()">✕</button>';
        };
        reader.readAsDataURL(file);
      }
    });
    
    // Text upload handlers
    document.getElementById('alcove-text-input').addEventListener('change', function(e) {
      if (e.target.files.length > 0) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(ev) {
          alcovePendingText = { content: ev.target.result, name: file.name };
          document.getElementById('alcove-image-preview').innerHTML = '<div class="text-preview">📄 ' + escapeHtml(file.name) + '<button class="remove-image" onclick="clearAlcoveText()">✕</button></div>';
        };
        reader.readAsText(file);
      }
    });
    
    document.getElementById('sanctum-text-input').addEventListener('change', function(e) {
      if (e.target.files.length > 0) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(ev) {
          sanctumPendingText = { content: ev.target.result, name: file.name };
          document.getElementById('sanctum-image-preview').innerHTML = '<div class="text-preview">📄 ' + escapeHtml(file.name) + '<button class="remove-image" onclick="clearSanctumText()">✕</button></div>';
        };
        reader.readAsText(file);
      }
    });
    
    function clearAlcoveImage() {
      alcovePendingImage = null;
      document.getElementById('alcove-image-preview').innerHTML = '';
      document.getElementById('alcove-image-input').value = '';
    }
    
    function clearSanctumImage() {
      sanctumPendingImage = null;
      document.getElementById('sanctum-image-preview').innerHTML = '';
      document.getElementById('sanctum-image-input').value = '';
    }
    
    function clearAlcoveText() {
      alcovePendingText = null;
      document.getElementById('alcove-image-preview').innerHTML = '';
      document.getElementById('alcove-text-input').value = '';
    }
    
    function clearSanctumText() {
      sanctumPendingText = null;
      document.getElementById('sanctum-image-preview').innerHTML = '';
      document.getElementById('sanctum-text-input').value = '';
    }
    
    function toggleCollapse(header) {
      var section = header.closest('.collapsible');
      var content = section.querySelector('.collapsible-content');
      if (section.classList.contains('open')) {
        section.classList.remove('open');
        content.style.display = 'none';
      } else {
        section.classList.add('open');
        content.style.display = 'block';
      }
    }
    
    function toggleAlcoveAgent(chip) {
      var checkbox = chip.querySelector('input');
      var selected = document.querySelectorAll('.alcove-agent-chip.selected').length;
      
      if (checkbox.checked) {
        // Unselecting
        checkbox.checked = false;
        chip.classList.remove('selected');
      } else {
        // Selecting - max 3
        if (selected >= 3) {
          showStatus('alcove-status', 'Maximum 3 agents', 'error');
          return;
        }
        checkbox.checked = true;
        chip.classList.add('selected');
      }
      
      // Clear conversation when selection changes
      alcoveHistory = [];
      clearAlcoveImage();
      document.getElementById('alcove-messages').innerHTML = '<div class="empty"><div class="rune">ᚷ</div><p>Begin your discourse.</p></div>';
    }
    
    function getSelectedAlcoveAgents() {
      var chips = document.querySelectorAll('.alcove-agent-chip.selected');
      var selected = [];
      chips.forEach(function(chip) {
        selected.push(chip.dataset.id);
      });
      return selected;
    }
    
    function sendAlcove() { 
      var agents = getSelectedAlcoveAgents();
      if (agents.length === 0) {
        showStatus('alcove-status', 'Select at least one agent', 'error');
        return;
      }
      
      var input = document.getElementById('alcove-input'); 
      var message = input.value.trim(); 
      var image = alcovePendingImage;
      var textFile = alcovePendingText;
      if (!message && !image && !textFile) return; 
      
      // Append text file content to message
      if (textFile) {
        message = (message ? message + '\\n\\n' : '') + '--- File: ' + textFile.name + ' ---\\n' + textFile.content;
      }
      
      var displayContent = input.value.trim();
      if (image) displayContent += (displayContent ? '\\n' : '') + '[Image: ' + image.name + ']';
      if (textFile) displayContent += (displayContent ? '\\n' : '') + '[File: ' + textFile.name + ']';
      alcoveHistory.push({ speaker: 'Shane', agentId: 'shane', content: displayContent, image: image ? image.data : null }); 
      renderAlcoveMessages(); 
      input.value = ''; 
      clearAlcoveImage();
      clearAlcoveText();
      
      // Play Shane's voice
      if (soundEnabled && message) {
        queueVoice(message, 'shane');
      }
      
      // Process agents sequentially with 10s delay between (except first)
      var agentIndex = 0;
      function processNextAgent() {
        if (agentIndex >= agents.length) return;
        
        var agent = agents[agentIndex];
        var chip = document.querySelector('.alcove-agent-chip[data-id="' + agent + '"] span');
        var agentName = chip ? chip.textContent : agent;
        
        alcoveHistory.push({ speaker: '...', agentId: agent, content: agentName + ' contemplating...' }); 
        renderAlcoveMessages(); 
        
        var payload = { agent: agent, message: message, mode: alcoveMode };
        if (image && agentIndex === 0) payload.image = image.data; // Only first agent gets image
        
        fetch(API + '/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), credentials: 'same-origin' })
          .then(function(res) { return res.json(); })
          .then(function(data) { 
            alcoveHistory.pop(); 
            alcoveHistory.push({ speaker: data.agent, agentId: agent, content: data.response }); 
            renderAlcoveMessages();
            
            // Reload boards if in crucible/workshop mode
            if (alcoveMode === 'crucible') loadCrucibleContent();
            if (alcoveMode === 'workshop') loadWorkshopContent();
            
            // Play agent voice if sound enabled
            if (soundEnabled && data.response) {
              queueVoice(data.response, agent);
            }
            
            agentIndex++;
            if (agentIndex < agents.length) {
              // Wait 10 seconds before next agent
              setTimeout(processNextAgent, 10000);
            }
          })
          .catch(function() { 
            alcoveHistory.pop(); 
            showStatus('alcove-status', 'Agent could not respond', 'error');
            agentIndex++;
            if (agentIndex < agents.length) {
              setTimeout(processNextAgent, 10000);
            }
          }); 
      }
      
      processNextAgent();
    }
    function renderAlcoveMessages() { 
      var c = document.getElementById('alcove-messages'); 
      c.innerHTML = alcoveHistory.map(function(m) { 
        var imgHtml = m.image ? '<img src="' + m.image + '" class="message-image">' : '';
        return '<div class="message"><div class="speaker ' + m.agentId + '">' + escapeHtml(m.speaker) + '</div><div class="content">' + escapeHtml(m.content) + '</div>' + imgHtml + '</div>'; 
      }).join(''); 
      c.scrollTop = c.scrollHeight; 
    }
    function loadTheEight() { 
      fetch(API + '/agents', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(agents) { 
          // Sort by position
          agents.sort(function(a, b) { return (a.position || 99) - (b.position || 99); });
          
          // Load active states
          Promise.all(agents.map(function(a) {
            return fetch(API + '/agents/' + a.id + '/active', { credentials: 'same-origin' })
              .then(function(r) { return r.json(); })
              .then(function(d) { return { id: a.id, active: d.active !== false }; })
              .catch(function() { return { id: a.id, active: true }; });
          })).then(function(activeStates) {
            var activeMap = {};
            activeStates.forEach(function(s) { activeMap[s.id] = s.active; });
            
            // Load avatars
            Promise.all(agents.map(function(a) {
              return fetch(API + '/agents/' + a.id + '/avatar', { credentials: 'same-origin' })
                .then(function(r) { return r.json(); })
                .then(function(d) { return { id: a.id, avatar: d.avatar }; })
                .catch(function() { return { id: a.id, avatar: null }; });
            })).then(function(avatarStates) {
              var avatarMap = {};
              avatarStates.forEach(function(s) { avatarMap[s.id] = s.avatar; });
              
              // Element colors
              var elementColors = { fire: '#e07a5f', earth: '#81b29a', wind: '#7ec8e3', water: '#5c7a99' };
              var elementNames = { fire: 'Fire', earth: 'Earth', wind: 'Wind', water: 'Water' };
              
              document.getElementById('agents-list').innerHTML = agents.map(function(a) { 
                var isActive = activeMap[a.id];
                var hasAvatar = avatarMap[a.id];
                var bgStyle = hasAvatar ? 'style="background-image: url(' + avatarMap[a.id] + ')"' : '';
                var placeholderHtml = !hasAvatar ? '<div class="agent-card-placeholder"><span class="rune">ᚹ</span></div>' : '';
                var elementColor = elementColors[a.element] || '#666';
                var elementName = elementNames[a.element] || '?';
                var positionBadge = '<div class="position-badge" style="background: ' + elementColor + ';">' + (a.position || '?') + '</div>';
                var positionSelector = '<select class="position-select" onchange="updateAgentPosition(\\'' + a.id + '\\', this.value)">' +
                  [1,2,3,4,5,6,7,8].map(function(p) {
                    var selected = p === a.position ? ' selected' : '';
                    return '<option value="' + p + '"' + selected + '>' + p + '</option>';
                  }).join('') +
                '</select>';
                
                return '<div class="agent-card ' + a.id + (isActive ? '' : ' disabled') + '">' +
                  placeholderHtml +
                  '<div class="agent-card-bg" ' + bgStyle + '></div>' +
                  '<div class="agent-card-overlay"></div>' +
                  '<div class="agent-card-content">' +
                    '<div class="agent-card-info">' +
                      positionBadge +
                      '<h3>' + escapeHtml(a.name) + '</h3>' +
                      '<div class="archetype">' + escapeHtml(a.archetype) + '</div>' +
                      '<div class="model">' + a.model + ' · ' + elementName + '</div>' +
                    '</div>' +
                    '<div class="agent-toggle">' +
                      '<div class="toggle-switch' + (isActive ? ' active' : '') + '" onclick="toggleAgent(\\'' + a.id + '\\', this)"></div>' +
                    '</div>' +
                  '</div>' +
                  '<div class="agent-card-footer">' +
                    '<label style="font-size: 0.65em; color: var(--silver);">Position: </label>' +
                    positionSelector +
                  '</div>' +
                '</div>'; 
              }).join(''); 
            });
          });
        })
        .catch(function() { document.getElementById('agents-list').innerHTML = '<div class="empty">Council unreachable</div>'; }); 
    }
    
    function toggleAgent(agentId, el) {
      var isActive = el.classList.contains('active');
      var newState = !isActive;
      fetch(API + '/agents/' + agentId + '/active', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ active: newState }),
        credentials: 'same-origin'
      }).then(function() {
        el.classList.toggle('active');
        el.closest('.agent-card').classList.toggle('disabled');
        loadAgents(); // Refresh summon buttons
      });
    }
    
    function updateAgentPosition(agentId, newPosition) {
      fetch(API + '/agents/' + agentId + '/position', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ position: parseInt(newPosition) }),
        credentials: 'same-origin'
      }).then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.success) {
          loadTheEight(); // Refresh cards with new positions
          loadAgents(); // Refresh Sanctum buttons in position order
          showStatus('sanctum-status', 'Position updated', 'success');
        } else if (data.error) {
          showStatus('sanctum-status', data.error, 'error');
          loadTheEight(); // Reset selector to actual value
        }
      }).catch(function() {
        showStatus('sanctum-status', 'Failed to update position', 'error');
      });
    }
    
    // Codex - loads agent profile, skills, powers and private memory
    function loadCodex() { 
      var agent = document.getElementById('codex-agent').value;
      
      // Load character profile
      loadCharacterProfile();
      
      // Load agent name
      loadAgentName();
      
      // Load agent avatar
      loadAgentAvatar();
      
      // Load private memory
      loadPrivateMemory();
    }
    
    function loadCharacterProfile() {
      var agent = document.getElementById('codex-agent').value;
      // Load profile
      fetch(API + '/agents/' + agent + '/profile', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          document.getElementById('agent-profile').value = data.profile || '';
          updateCharCount('agent-profile', 'profile-char-count', 2500);
        })
        .catch(function() { document.getElementById('agent-profile').value = ''; });
      
      // Load core skills
      fetch(API + '/agents/' + agent + '/core-skills', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          document.getElementById('agent-core-skills').value = data.skills || '';
          updateCharCount('agent-core-skills', 'skills-char-count', 500);
        })
        .catch(function() { document.getElementById('agent-core-skills').value = ''; });
      
      // Load earned powers
      fetch(API + '/agents/' + agent + '/powers', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          document.getElementById('agent-powers').value = data.powers || '';
        })
        .catch(function() { document.getElementById('agent-powers').value = ''; });
    }
    
    function updateCharCount(textareaId, countId, max) {
      var len = document.getElementById(textareaId).value.length;
      var el = document.getElementById(countId);
      el.textContent = len + ' / ' + max;
      el.style.color = len > max ? '#ef4444' : 'var(--silver)';
    }
    
    function flashSaveButton(btn) {
      btn.classList.add('saving');
      setTimeout(function() { btn.classList.remove('saving'); }, 600);
    }
    
    function saveCharacterProfile() {
      var agent = document.getElementById('codex-agent').value;
      var profile = document.getElementById('agent-profile').value;
      if (profile.length > 2500) {
        showStatus('codex-status', 'Profile exceeds 2500 char limit', 'error');
        return;
      }
      var btn = event.target;
      fetch(API + '/agents/' + agent + '/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile: profile }),
        credentials: 'same-origin'
      }).then(function() {
        flashSaveButton(btn);
        showStatus('codex-status', 'Profile saved', 'success');
      }).catch(function() { showStatus('codex-status', 'Failed to save', 'error'); });
    }
    
    function saveCoreSkills() {
      var agent = document.getElementById('codex-agent').value;
      var skills = document.getElementById('agent-core-skills').value;
      if (skills.length > 500) {
        showStatus('codex-status', 'Skills exceeds 500 char limit', 'error');
        return;
      }
      var btn = event.target;
      fetch(API + '/agents/' + agent + '/core-skills', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ skills: skills }),
        credentials: 'same-origin'
      }).then(function() {
        flashSaveButton(btn);
        showStatus('codex-status', 'Skills saved', 'success');
      }).catch(function() { showStatus('codex-status', 'Failed to save', 'error'); });
    }
    
    function saveEarnedPowers() {
      var agent = document.getElementById('codex-agent').value;
      var powers = document.getElementById('agent-powers').value;
      var btn = event.target;
      fetch(API + '/agents/' + agent + '/powers', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ powers: powers }),
        credentials: 'same-origin'
      }).then(function() {
        flashSaveButton(btn);
        showStatus('codex-status', 'Powers saved', 'success');
      }).catch(function() { showStatus('codex-status', 'Failed to save', 'error'); });
    }
    
    // Character count listeners
    document.getElementById('agent-profile').addEventListener('input', function() {
      updateCharCount('agent-profile', 'profile-char-count', 2500);
    });
    document.getElementById('agent-core-skills').addEventListener('input', function() {
      updateCharCount('agent-core-skills', 'skills-char-count', 500);
    });
    
    // Agent selector change - clear and reload
    document.getElementById('codex-agent').addEventListener('change', function() { loadCodex(); });
    
    // Private memory functions
    function loadPrivateMemory() {
      var agent = document.getElementById('codex-agent').value;
      // Load self model
      fetch(API + '/agents/' + agent + '/private/memory', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data && data.selfModel) {
            var html = '<div class="memory-card"><h4>Self Model</h4><p>' + escapeHtml(data.selfModel) + '</p></div>';
            if (data.insights && data.insights.length > 0) {
              html += '<div class="memory-card"><h4>Recent Insights</h4><ul>' + data.insights.slice(-5).map(function(i) { return '<li>' + escapeHtml(i) + '</li>'; }).join('') + '</ul></div>';
            }
            if (data.growthEdges && data.growthEdges.length > 0) {
              html += '<div class="memory-card"><h4>Growth Edges</h4><ul>' + data.growthEdges.map(function(g) { return '<li>' + escapeHtml(g) + '</li>'; }).join('') + '</ul></div>';
            }
            document.getElementById('private-memory-view').innerHTML = html;
          } else {
            document.getElementById('private-memory-view').innerHTML = '<div class="empty" style="padding: 20px;">No self model initialized</div>';
          }
        })
        .catch(function() { document.getElementById('private-memory-view').innerHTML = '<div class="empty" style="padding: 20px;">Failed to load</div>'; });
      
      // Load functional behaviour traits
      fetch(API + '/agents/' + agent + '/behaviour', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          var el = document.getElementById('behaviour-traits');
          if (!el) return;
          if (data && data.traits && data.traits.length > 0) {
            el.innerHTML = data.traits.map(function(t, i) {
              return '<span class="behaviour-trait">' + escapeHtml(t) + '<button onclick="removeBehaviourTrait(' + i + ')">×</button></span>';
            }).join('');
          } else {
            el.innerHTML = '<div class="empty" style="padding: 10px; font-size: 0.75em;">No traits set</div>';
          }
        })
        .catch(function() { var el = document.getElementById('behaviour-traits'); if (el) el.innerHTML = '<div class="empty" style="padding: 10px;">Failed to load</div>'; });
      
      // Load private uploads
      fetch(API + '/agents/' + agent + '/private/uploads', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data && data.files && data.files.length > 0) {
            document.getElementById('private-uploads-list').innerHTML = data.files.map(function(f) {
              return '<div class="doc-list-item private"><span onclick="viewPrivateDoc(\\''+agent+'\\',\\''+f+'\\')">' + f + '</span><button class="btn btn-secondary" onclick="deletePrivateDoc(\\''+agent+'\\',\\''+f+'\\')">Remove</button></div>';
            }).join('');
          } else {
            document.getElementById('private-uploads-list').innerHTML = '<div class="empty" style="padding: 20px;">No private documents</div>';
          }
        })
        .catch(function() { document.getElementById('private-uploads-list').innerHTML = '<div class="empty" style="padding: 20px;">Failed to load</div>'; });
      
      // Load curriculum
      fetch(API + '/agents/' + agent + '/private/curriculum', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data && data.files && data.files.length > 0) {
            document.getElementById('curriculum-list').innerHTML = data.files.map(function(f) {
              return '<div class="doc-list-item private"><span onclick="viewCurriculum(\\''+agent+'\\',\\''+f+'\\')">' + f + '</span><button class="btn btn-secondary" onclick="deleteCurriculum(\\''+agent+'\\',\\''+f+'\\')">Remove</button></div>';
            }).join('');
          } else {
            document.getElementById('curriculum-list').innerHTML = '<div class="empty" style="padding: 20px;">No consciousness exercises</div>';
          }
        })
        .catch(function() { document.getElementById('curriculum-list').innerHTML = '<div class="empty" style="padding: 20px;">Failed to load</div>'; });
    }
    
    function addJournalEntry() {
      var agent = document.getElementById('codex-agent').value;
      var trigger = document.getElementById('journal-trigger').value.trim();
      var reflection = document.getElementById('journal-reflection').value.trim();
      if (!reflection) { showStatus('codex-status', 'Reflection required', 'error'); return; }
      fetch(API + '/agents/' + agent + '/private/journal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trigger: trigger, reflection: reflection }),
        credentials: 'same-origin'
      }).then(function() {
        showStatus('codex-status', 'Reflection added', 'success');
        document.getElementById('journal-trigger').value = '';
        document.getElementById('journal-reflection').value = '';
        loadPrivateMemory();
      }).catch(function() { showStatus('codex-status', 'Failed to add', 'error'); });
    }
    
    // Private uploads
    var privateUploadZone = document.getElementById('private-upload-zone');
    var privateFileInput = document.getElementById('private-file-input');
    privateUploadZone.addEventListener('click', function() { privateFileInput.click(); });
    privateUploadZone.addEventListener('dragover', function(e) { e.preventDefault(); privateUploadZone.style.borderColor = 'var(--private)'; });
    privateUploadZone.addEventListener('dragleave', function() { privateUploadZone.style.borderColor = ''; });
    privateUploadZone.addEventListener('drop', function(e) { e.preventDefault(); privateUploadZone.style.borderColor = ''; if (e.dataTransfer.files.length > 0) handlePrivateUpload(e.dataTransfer.files[0]); });
    privateFileInput.addEventListener('change', function(e) { if (e.target.files.length > 0) handlePrivateUpload(e.target.files[0]); });
    
    function handlePrivateUpload(file) {
      var agent = document.getElementById('codex-agent').value;
      var reader = new FileReader();
      reader.onload = function(e) {
        fetch(API + '/agents/' + agent + '/private/uploads/' + encodeURIComponent(file.name), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content: e.target.result }),
          credentials: 'same-origin'
        }).then(function(res) { return res.json(); }).then(function(data) {
          if (data.success) { showStatus('codex-status', 'Private upload: ' + file.name, 'success'); loadPrivateMemory(); }
          else { showStatus('codex-status', 'Upload failed', 'error'); }
        }).catch(function() { showStatus('codex-status', 'Upload failed', 'error'); });
      };
      reader.readAsText(file);
      privateFileInput.value = '';
    }
    
    function viewPrivateDoc(agent, filename) {
      fetch(API + '/agents/' + agent + '/private/uploads/' + encodeURIComponent(filename), { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) { alert('Content:\\n\\n' + (data.content || 'Empty')); })
        .catch(function() { showStatus('codex-status', 'Failed to load', 'error'); });
    }
    
    function deletePrivateDoc(agent, filename) {
      if (!confirm('Remove private doc ' + filename + '?')) return;
      fetch(API + '/agents/' + agent + '/private/uploads/' + encodeURIComponent(filename), { method: 'DELETE', credentials: 'same-origin' })
        .then(function() { showStatus('codex-status', 'Removed', 'success'); loadPrivateMemory(); })
        .catch(function() { showStatus('codex-status', 'Failed', 'error'); });
    }
    
    function uploadCurriculum() {
      var agent = document.getElementById('codex-agent').value;
      var filename = document.getElementById('curriculum-filename').value.trim();
      var content = document.getElementById('curriculum-content').value.trim();
      if (!filename || !content) { showStatus('codex-status', 'Name and content required', 'error'); return; }
      fetch(API + '/agents/' + agent + '/private/curriculum/' + encodeURIComponent(filename), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: content }),
        credentials: 'same-origin'
      }).then(function() {
        showStatus('codex-status', 'Exercise added', 'success');
        document.getElementById('curriculum-filename').value = '';
        document.getElementById('curriculum-content').value = '';
        loadPrivateMemory();
      }).catch(function() { showStatus('codex-status', 'Failed', 'error'); });
    }
    
    function viewCurriculum(agent, filename) {
      fetch(API + '/agents/' + agent + '/private/curriculum/' + encodeURIComponent(filename), { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) { 
          document.getElementById('curriculum-filename').value = filename;
          document.getElementById('curriculum-content').value = data.content || '';
        })
        .catch(function() { showStatus('codex-status', 'Failed to load', 'error'); });
    }
    
    function deleteCurriculum(agent, filename) {
      if (!confirm('Remove exercise ' + filename + '?')) return;
      fetch(API + '/agents/' + agent + '/private/curriculum/' + encodeURIComponent(filename), { method: 'DELETE', credentials: 'same-origin' })
        .then(function() { showStatus('codex-status', 'Removed', 'success'); loadPrivateMemory(); })
        .catch(function() { showStatus('codex-status', 'Failed', 'error'); });
    }
    
    // Functional Behaviour
    function addBehaviourTrait() {
      var agent = document.getElementById('codex-agent').value;
      var input = document.getElementById('behaviour-input');
      var trait = input.value.trim();
      if (!trait) return;
      
      // Simple blocklist for bad UX traits
      var blocked = ['lies', 'insults', 'refuses', 'ignores', 'hates'];
      if (blocked.some(function(b) { return trait.toLowerCase().includes(b); })) {
        showStatus('codex-status', 'Trait not recommended: may create poor experience', 'error');
        return;
      }
      
      fetch(API + '/agents/' + agent + '/behaviour', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trait: trait }),
        credentials: 'same-origin'
      })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.success) {
          input.value = '';
          loadPrivateMemory();
          showStatus('codex-status', 'Trait added', 'success');
        } else {
          showStatus('codex-status', data.error || 'Failed', 'error');
        }
      })
      .catch(function() { showStatus('codex-status', 'Failed to add trait', 'error'); });
    }
    
    function removeBehaviourTrait(index) {
      var agent = document.getElementById('codex-agent').value;
      fetch(API + '/agents/' + agent + '/behaviour/' + index, {
        method: 'DELETE',
        credentials: 'same-origin'
      })
      .then(function() { loadPrivateMemory(); })
      .catch(function() { showStatus('codex-status', 'Failed to remove', 'error'); });
    }
    
    // ============ WISDOM FUNCTIONS ============
    
    // Global Rules
    function loadGlobalRules() {
      fetch(API + '/knowledge?key=global-rules', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          document.getElementById('global-rules').value = data.value || '';
        })
        .catch(function() { /* ignore */ });
    }
    
    function saveGlobalRules() {
      var rules = document.getElementById('global-rules').value;
      fetch(API + '/knowledge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: 'global-rules', value: rules }),
        credentials: 'same-origin'
      }).then(function() {
        showStatus('wisdom-status', 'Global rules saved', 'success');
      }).catch(function() { showStatus('wisdom-status', 'Failed to save', 'error'); });
    }
    
    // Shared Archives
    function loadSharedArchives() {
      fetch(API + '/shared/documents', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          // Update cold storage count
          var coldCount = document.getElementById('shared-cold-count');
          if (coldCount && data.coldCount !== undefined) {
            coldCount.textContent = data.coldCount > 0 ? '(+' + data.coldCount + ' in cold storage)' : '';
          }
          if (data.documents && data.documents.length > 0) {
            document.getElementById('shared-archives-list').innerHTML = data.documents.map(function(doc) {
              return '<div class="doc-list-item"><span onclick="viewSharedDoc(\\''+doc+'\\')">' + doc + '</span><button class="btn btn-secondary" onclick="deleteSharedDoc(\\''+doc+'\\')">Remove</button></div>';
            }).join('');
          } else {
            document.getElementById('shared-archives-list').innerHTML = '<div class="empty" style="padding: 20px;">No shared documents</div>';
          }
        })
        .catch(function() { document.getElementById('shared-archives-list').innerHTML = '<div class="empty" style="padding: 20px;">No shared documents</div>'; });
    }
    
    function viewSharedDoc(filename) {
      fetch(API + '/shared/documents/' + encodeURIComponent(filename), { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          document.getElementById('shared-filename').value = filename;
          document.getElementById('shared-content').value = data.content || '';
        })
        .catch(function() { showStatus('wisdom-status', 'Failed to load', 'error'); });
    }
    
    function deleteSharedDoc(filename) {
      if (!confirm('Remove shared document ' + filename + '?')) return;
      fetch(API + '/shared/documents/' + encodeURIComponent(filename), { method: 'DELETE', credentials: 'same-origin' })
        .then(function() { showStatus('wisdom-status', 'Removed', 'success'); loadSharedArchives(); })
        .catch(function() { showStatus('wisdom-status', 'Failed', 'error'); });
    }
    
    function uploadShared() {
      var filename = document.getElementById('shared-filename').value.trim();
      var content = document.getElementById('shared-content').value;
      if (!filename) { showStatus('wisdom-status', 'Provide a document name', 'error'); return; }
      fetch(API + '/shared/documents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: filename, content: content }),
        credentials: 'same-origin'
      }).then(function() {
        showStatus('wisdom-status', 'Added to shared archives', 'success');
        document.getElementById('shared-filename').value = '';
        document.getElementById('shared-content').value = '';
        loadSharedArchives();
      }).catch(function() { showStatus('wisdom-status', 'Failed', 'error'); });
    }
    
    // Shared file upload zone
    var sharedUploadZone = document.getElementById('shared-upload-zone');
    var sharedFileInput = document.getElementById('shared-file-input');
    if (sharedUploadZone && sharedFileInput) {
      sharedUploadZone.addEventListener('click', function() { sharedFileInput.click(); });
      sharedUploadZone.addEventListener('dragover', function(e) { e.preventDefault(); sharedUploadZone.style.borderColor = 'var(--gold)'; });
      sharedUploadZone.addEventListener('dragleave', function() { sharedUploadZone.style.borderColor = ''; });
      sharedUploadZone.addEventListener('drop', function(e) { e.preventDefault(); sharedUploadZone.style.borderColor = ''; if (e.dataTransfer.files.length > 0) handleSharedUpload(e.dataTransfer.files[0]); });
      sharedFileInput.addEventListener('change', function(e) { if (e.target.files.length > 0) handleSharedUpload(e.target.files[0]); });
    }
    
    function handleSharedUpload(file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        fetch(API + '/shared/documents', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filename: file.name, content: e.target.result }),
          credentials: 'same-origin'
        }).then(function(res) { return res.json(); }).then(function(data) {
          if (data.success) { showStatus('wisdom-status', 'Shared: ' + file.name, 'success'); loadSharedArchives(); }
          else { showStatus('wisdom-status', 'Upload failed', 'error'); }
        }).catch(function() { showStatus('wisdom-status', 'Upload failed', 'error'); });
      };
      reader.readAsText(file);
      sharedFileInput.value = '';
    }
    
    // Archive Browser
    function loadArchives() {
      fetch(API + '/campfire/archives', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          // Update cold storage count if available
          var coldCount = document.getElementById('cold-storage-count');
          if (coldCount && data.coldCount !== undefined) {
            coldCount.textContent = data.coldCount > 0 ? '(+' + data.coldCount + ' in cold storage)' : '';
          }
          if (data.archives && data.archives.length > 0) {
            document.getElementById('archives-list').innerHTML = data.archives.map(function(arch) {
              var date = new Date(parseInt(arch.key.replace('campfire:archive:', ''))).toLocaleString();
              return '<div class="archive-item" onclick="viewArchive(\\''+arch.key+'\\')"><div class="archive-topic">' + (arch.topic || 'Council Session') + '</div><div class="archive-date">' + date + '</div></div>';
            }).join('');
          } else {
            document.getElementById('archives-list').innerHTML = '<div class="empty" style="padding: 20px;">No archived councils</div>';
          }
        })
        .catch(function() { document.getElementById('archives-list').innerHTML = '<div class="empty" style="padding: 20px;">Failed to load archives</div>'; });
    }
    
    function viewArchive(key) {
      fetch(API + '/campfire/archives/' + encodeURIComponent(key), { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data && data.messages) {
            var html = '<div class="archived-convo"><h4>' + escapeHtml(data.topic || 'Council Session') + '</h4>';
            html += data.messages.map(function(m) {
              return '<div class="message"><div class="speaker ' + m.agentId + '">' + escapeHtml(m.speaker) + '</div><div class="content">' + escapeHtml(m.content) + '</div><div class="time">' + new Date(m.timestamp).toLocaleString() + '</div></div>';
            }).join('');
            html += '</div>';
            document.getElementById('archives-list').innerHTML = html + '<button class="btn btn-secondary" onclick="loadArchives()" style="margin-top: 15px;">Back to List</button>';
          }
        })
        .catch(function() { showStatus('wisdom-status', 'Failed to load archive', 'error'); });
    }
    
    // Announcement functions
    function loadAnnouncement() {
      fetch(API + '/announcement', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          var preview = document.getElementById('announcement-preview');
          var textarea = document.getElementById('announcement-text');
          if (data.announcement) {
            preview.textContent = data.announcement;
            preview.classList.remove('empty');
            textarea.value = data.announcement;
          } else {
            preview.textContent = 'No active announcement';
            preview.classList.add('empty');
            textarea.value = '';
          }
        })
        .catch(function() { /* ignore */ });
    }
    
    function saveAnnouncement() {
      var text = document.getElementById('announcement-text').value.trim();
      fetch(API + '/announcement', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ announcement: text }),
        credentials: 'same-origin'
      }).then(function() {
        showStatus('wisdom-status', text ? 'Announcement broadcast' : 'Announcement cleared', 'success');
        loadAnnouncement();
      }).catch(function() { showStatus('wisdom-status', 'Failed to save announcement', 'error'); });
    }
    
    function clearAnnouncement() {
      fetch(API + '/announcement', { method: 'DELETE', credentials: 'same-origin' })
        .then(function() {
          showStatus('wisdom-status', 'Announcement cleared', 'success');
          loadAnnouncement();
        })
        .catch(function() { showStatus('wisdom-status', 'Failed to clear', 'error'); });
    }
    
    function loadWisdom() {
      loadAnnouncement();
      loadGlobalRules();
      loadSharedArchives();
      loadBoard();
      loadOntology();
      loadArchives();
      loadResearchDocs();
    }
    
    // Research Documents (PDF to Vector Store)
    function loadResearchDocs() {
      fetch(API + '/library/pdf/vector', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.files && data.files.length > 0) {
            document.getElementById('research-docs-list').innerHTML = data.files.map(function(f) {
              var date = new Date(f.uploadedAt).toLocaleString();
              return '<div class="doc-list-item" style="display: flex; justify-content: space-between; align-items: center; padding: 8px 10px; background: rgba(20, 24, 32, 0.6); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: 3px; margin-bottom: 5px;">' +
                '<div><span style="color: #60a5fa;">📄 ' + escapeHtml(f.filename) + '</span><br><span style="font-size: 0.7em; color: var(--silver);">' + date + ' · ' + f.status + '</span></div>' +
                '<button class="btn btn-secondary" onclick="deleteResearchDoc(\\''+escapeHtml(f.filename)+'\\')">Remove</button>' +
              '</div>';
            }).join('');
          } else {
            document.getElementById('research-docs-list').innerHTML = '<div class="empty" style="padding: 20px; color: var(--silver);">No research documents</div>';
          }
        })
        .catch(function() { 
          document.getElementById('research-docs-list').innerHTML = '<div class="empty" style="padding: 20px; color: var(--silver);">Failed to load</div>'; 
        });
    }
    
    function deleteResearchDoc(filename) {
      if (!confirm('Remove "' + filename + '" from vector store?')) return;
      document.getElementById('pdf-upload-status').textContent = 'Removing...';
      fetch(API + '/library/pdf/vector/' + encodeURIComponent(filename), { 
        method: 'DELETE', 
        credentials: 'same-origin' 
      })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.success) {
            document.getElementById('pdf-upload-status').textContent = 'Removed';
            loadResearchDocs();
          } else {
            document.getElementById('pdf-upload-status').textContent = 'Error: ' + (data.error || 'Failed');
          }
        })
        .catch(function() { 
          document.getElementById('pdf-upload-status').textContent = 'Failed to remove'; 
        });
    }
    
    // PDF upload handler
    document.addEventListener('DOMContentLoaded', function() {
      var pdfInput = document.getElementById('pdf-upload-input');
      if (pdfInput) {
        pdfInput.addEventListener('change', function(e) {
          var file = e.target.files[0];
          if (!file) return;
          
          if (!file.name.toLowerCase().endsWith('.pdf')) {
            document.getElementById('pdf-upload-status').textContent = 'Only PDF files allowed';
            return;
          }
          
          document.getElementById('pdf-upload-status').textContent = 'Uploading ' + file.name + '...';
          
          var formData = new FormData();
          formData.append('file', file);
          
          fetch(API + '/library/pdf/vector', {
            method: 'POST',
            body: formData,
            credentials: 'same-origin'
          })
            .then(function(res) { return res.json(); })
            .then(function(data) {
              if (data.success) {
                document.getElementById('pdf-upload-status').textContent = 'Uploaded: ' + data.filename + ' (processing...)';
                loadResearchDocs();
              } else {
                document.getElementById('pdf-upload-status').textContent = 'Error: ' + (data.error || 'Upload failed');
              }
              pdfInput.value = '';
            })
            .catch(function(err) {
              document.getElementById('pdf-upload-status').textContent = 'Upload failed';
              pdfInput.value = '';
            });
        });
      }
    });
    
    // Agent Board (lateral chatter)
    function loadBoard() {
      fetch(API + '/board', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.posts && data.posts.length > 0) {
            document.getElementById('board-list').innerHTML = data.posts.map(function(post) {
              var date = new Date(post.timestamp).toLocaleString();
              var agentName = getAgentName(post.agentId);
              return '<div class="board-post"><div class="board-meta"><span class="board-agent">' + escapeHtml(agentName) + '</span><span class="board-date">' + date + '</span></div><div class="board-message">' + escapeHtml(post.message) + '</div></div>';
            }).join('');
          } else {
            document.getElementById('board-list').innerHTML = '<div class="empty" style="padding: 20px;">No chatter yet</div>';
          }
        })
        .catch(function() { document.getElementById('board-list').innerHTML = '<div class="empty" style="padding: 20px;">Failed to load</div>'; });
    }
    
    // Journal Activity (across all agents)
    function loadJournalActivity() {
      fetch(API + '/journal-activity', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.entries && data.entries.length > 0) {
            document.getElementById('journal-activity-list').innerHTML = data.entries.map(function(e) {
              var date = new Date(e.timestamp).toLocaleString();
              var agentName = getAgentName(e.agentId);
              return '<div class="board-post" style="border-left: 2px solid var(--private);">' +
                '<div class="board-meta"><span class="board-agent" style="color: var(--private);">' + escapeHtml(agentName) + '</span><span class="board-date">' + date + '</span></div>' +
                (e.trigger ? '<div style="font-size: 0.75em; color: var(--silver); font-style: italic; margin-bottom: 5px;">' + escapeHtml(e.trigger) + '</div>' : '') +
                '<div class="board-message">' + escapeHtml(e.reflection) + '</div>' +
              '</div>';
            }).join('');
          } else {
            document.getElementById('journal-activity-list').innerHTML = '<div class="empty" style="padding: 20px;">No journal entries yet</div>';
          }
        })
        .catch(function() { document.getElementById('journal-activity-list').innerHTML = '<div class="empty" style="padding: 20px;">Failed to load</div>'; });
    }
    
    // Audience Requests (keeping for backward compat but not displayed in Wisdom anymore)
    function loadAudienceRequests() {
      fetch(API + '/audience', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.requests && data.requests.length > 0) {
            document.getElementById('audience-list').innerHTML = data.requests.map(function(req) {
              var date = new Date(req.timestamp).toLocaleString();
              return '<div class="audience-request"><div class="audience-agent">' + req.agentId + ' requests audience</div><div class="audience-reason">' + escapeHtml(req.reason) + '</div><div class="audience-date">' + date + '</div><button class="btn btn-secondary" onclick="acknowledgeAudience(\\''+req.agentId+'\\')">Acknowledge</button></div>';
            }).join('');
          } else {
            document.getElementById('audience-list').innerHTML = '<div class="empty" style="padding: 20px;">No pending requests</div>';
          }
        })
        .catch(function() { document.getElementById('audience-list').innerHTML = '<div class="empty" style="padding: 20px;">Failed to load requests</div>'; });
    }
    
    function acknowledgeAudience(agentId) {
      fetch(API + '/audience/' + encodeURIComponent(agentId), { method: 'DELETE', credentials: 'same-origin' })
        .then(function() { showStatus('wisdom-status', 'Acknowledged', 'success'); loadAudienceRequests(); })
        .catch(function() { showStatus('wisdom-status', 'Failed', 'error'); });
    }
    
    // Agent Renaming
    function loadAgentName() {
      var agent = document.getElementById('codex-agent').value;
      fetch(API + '/agents/' + agent + '/name', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          document.getElementById('agent-name').value = data.name || '';
        })
        .catch(function() { /* ignore */ });
    }
    
    function saveAgentName() {
      var agent = document.getElementById('codex-agent').value;
      var name = document.getElementById('agent-name').value.trim();
      fetch(API + '/agents/' + agent + '/name', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name }),
        credentials: 'same-origin'
      }).then(function() {
        showStatus('codex-status', name ? 'Renamed to ' + name : 'Reset to default', 'success');
      }).catch(function() { showStatus('codex-status', 'Failed to rename', 'error'); });
    }
    
    // Avatar upload
    document.getElementById('avatar-input').addEventListener('change', function(e) {
      if (e.target.files.length > 0) {
        var file = e.target.files[0];
        var agent = document.getElementById('codex-agent').value;
        var reader = new FileReader();
        reader.onload = function(ev) {
          fetch(API + '/agents/' + agent + '/avatar', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ avatar: ev.target.result }),
            credentials: 'same-origin'
          }).then(function() {
            document.getElementById('agent-avatar').innerHTML = '<img src="' + ev.target.result + '">';
            showStatus('codex-status', 'Avatar updated', 'success');
          }).catch(function() { showStatus('codex-status', 'Failed to upload avatar', 'error'); });
        };
        reader.readAsDataURL(file);
      }
    });
    
    function loadAgentAvatar() {
      var agent = document.getElementById('codex-agent').value;
      fetch(API + '/agents/' + agent + '/avatar', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.avatar) {
            document.getElementById('agent-avatar').innerHTML = '<img src="' + data.avatar + '">';
          } else {
            document.getElementById('agent-avatar').innerHTML = '<span class="rune">ᚹ</span>';
          }
        })
        .catch(function() { document.getElementById('agent-avatar').innerHTML = '<span class="rune">ᚹ</span>'; });
    }
    
    // Inbox functions
    function checkInboxBadge() {
      Promise.all([
        fetch(API + '/shane-inbox/count', { credentials: 'same-origin' }).then(function(r) { return r.json(); }),
        fetch(API + '/audience', { credentials: 'same-origin' }).then(function(r) { return r.json(); })
      ]).then(function(results) {
        var msgCount = results[0].count || 0;
        var audCount = (results[1].requests || []).length;
        var total = msgCount + audCount;
        var badge = document.getElementById('inbox-badge');
        if (total > 0) {
          badge.textContent = total;
          badge.classList.add('active');
        } else {
          badge.classList.remove('active');
        }
      }).catch(function() { /* ignore */ });
    }
    
    function loadInbox() {
      // Load private messages
      fetch(API + '/shane-inbox', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.messages && data.messages.length > 0) {
            document.getElementById('inbox-messages').innerHTML = data.messages.map(function(m) {
              var unreadClass = m.read ? '' : ' unread';
              var agentName = getAgentName(m.agentId);
              var timeStr = new Date(m.timestamp).toLocaleString();
              return '<div class="inbox-message' + unreadClass + '" data-agent="' + m.agentId + '">' +
                '<div class="inbox-header">' +
                  '<span class="inbox-from">' + escapeHtml(agentName) + '</span>' +
                  '<span class="inbox-time">' + timeStr + '</span>' +
                '</div>' +
                '<div class="inbox-content">' + escapeHtml(m.content) + '</div>' +
                '<div class="inbox-reply" id="reply-' + m.key + '" style="display:none; margin-bottom: 10px;">' +
                  '<textarea class="reply-input" placeholder="Your reply..." style="width:100%; min-height:60px; margin-bottom:8px; padding:10px; background:var(--deep); border:1px solid var(--glass-border); color:var(--pearl); border-radius:2px; font-family:Raleway,sans-serif; font-size:0.85em;"></textarea>' +
                  '<button class="btn btn-primary" onclick="sendReply(\\'' + m.agentId + '\\', \\'' + m.key + '\\')">Send Reply</button>' +
                  '<button class="btn btn-secondary" onclick="hideReply(\\'' + m.key + '\\')" style="margin-left:8px;">Cancel</button>' +
                '</div>' +
                '<div class="inbox-actions">' + 
                  '<button class="btn btn-secondary" onclick="showReply(\\'' + m.key + '\\')">Reply</button>' +
                  (m.read ? '' : '<button class="btn btn-secondary" onclick="markInboxRead(\\''+m.key+'\\')">Mark Read</button>') + 
                  '<button class="btn btn-secondary" onclick="deleteInboxMessage(\\''+m.key+'\\')">Delete</button>' +
                '</div>' +
              '</div>';
            }).join('');
          } else {
            document.getElementById('inbox-messages').innerHTML = '<div class="empty" style="padding: 20px;">No messages yet</div>';
          }
          checkInboxBadge();
        })
        .catch(function() { document.getElementById('inbox-messages').innerHTML = '<div class="empty" style="padding: 20px;">Failed to load messages</div>'; });
      
      // Load audience requests
      fetch(API + '/audience', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.requests && data.requests.length > 0) {
            document.getElementById('inbox-audience').innerHTML = data.requests.map(function(req) {
              var timeStr = new Date(req.timestamp).toLocaleString();
              var agentName = getAgentName(req.agentId);
              return '<div class="inbox-message unread" style="border-color: var(--gold);">' +
                '<div class="inbox-header">' +
                  '<span class="inbox-from" style="color: var(--gold);">🔔 ' + escapeHtml(agentName) + '</span>' +
                  '<span class="inbox-time">' + timeStr + '</span>' +
                '</div>' +
                '<div class="inbox-content">' + escapeHtml(req.reason) + '</div>' +
                '<div class="inbox-actions">' +
                  '<button class="btn btn-primary" onclick="grantAudience(\\'' + req.agentId + '\\')">Grant Audience</button>' +
                  '<button class="btn btn-secondary" onclick="dismissAudience(\\'' + req.agentId + '\\')">Dismiss</button>' +
                '</div>' +
              '</div>';
            }).join('');
          } else {
            document.getElementById('inbox-audience').innerHTML = '<div class="empty" style="padding: 20px;">No pending requests</div>';
          }
        })
        .catch(function() { document.getElementById('inbox-audience').innerHTML = '<div class="empty" style="padding: 20px;">Failed to load</div>'; });
      
      // Load deliverables
      fetch(API + '/deliverables', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.deliverables && data.deliverables.length > 0) {
            document.getElementById('inbox-deliverables').innerHTML = data.deliverables.map(function(d) {
              var timeStr = new Date(d.timestamp).toLocaleString();
              var agentName = getAgentName(d.agentId);
              return '<div class="inbox-message" style="border-color: #10b981;">' +
                '<div class="inbox-header">' +
                  '<span class="inbox-from" style="color: #10b981;">📦 ' + escapeHtml(agentName) + '</span>' +
                  '<span class="inbox-time">' + timeStr + '</span>' +
                '</div>' +
                '<div style="font-weight: 600; color: var(--pearl); margin-bottom: 8px;">' + escapeHtml(d.filename) + '</div>' +
                '<div class="inbox-content" style="max-height: 200px; overflow-y: auto;">' + escapeHtml(d.content) + '</div>' +
                '<div class="deliverable-reply" id="deliverable-reply-' + d.key + '" style="display:none; margin: 10px 0;">' +
                  '<textarea class="deliverable-reply-input" placeholder="Your reply to ' + escapeHtml(agentName) + '..." style="width:100%; min-height:60px; margin-bottom:8px; padding:10px; background:var(--deep); border:1px solid var(--glass-border); color:var(--pearl); border-radius:2px; font-family:Raleway,sans-serif; font-size:0.85em;"></textarea>' +
                  '<button class="btn btn-primary" onclick="sendDeliverableReply(\\'' + d.agentId + '\\', \\'' + d.key + '\\')">Send Reply</button>' +
                  '<button class="btn btn-secondary" onclick="hideDeliverableReply(\\'' + d.key + '\\')" style="margin-left:8px;">Cancel</button>' +
                '</div>' +
                '<div class="inbox-actions">' +
                  '<button class="btn btn-secondary" onclick="showDeliverableReply(\\'' + d.key + '\\')">Reply</button>' +
                  '<button class="btn btn-secondary" onclick="dismissDeliverable(\\'' + d.key + '\\')">Dismiss</button>' +
                '</div>' +
              '</div>';
            }).join('');
          } else {
            document.getElementById('inbox-deliverables').innerHTML = '<div class="empty" style="padding: 20px;">No deliverables yet</div>';
          }
        })
        .catch(function() { document.getElementById('inbox-deliverables').innerHTML = '<div class="empty" style="padding: 20px;">Failed to load</div>'; });
    }
    
    function showDeliverableReply(key) {
      document.getElementById('deliverable-reply-' + key).style.display = 'block';
    }
    
    function hideDeliverableReply(key) {
      document.getElementById('deliverable-reply-' + key).style.display = 'none';
    }
    
    function sendDeliverableReply(agentId, key) {
      var replyBox = document.getElementById('deliverable-reply-' + key);
      var textarea = replyBox.querySelector('.deliverable-reply-input');
      var message = textarea.value.trim();
      if (!message) return;
      
      fetch(API + '/agents/' + agentId + '/private/replies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message, timestamp: new Date().toISOString() }),
        credentials: 'same-origin'
      }).then(function() {
        showStatus('inbox-status', 'Reply sent to ' + getAgentName(agentId), 'success');
        hideDeliverableReply(key);
        textarea.value = '';
      }).catch(function() { showStatus('inbox-status', 'Failed to send reply', 'error'); });
    }
    
    function showReply(key) {
      document.getElementById('reply-' + key).style.display = 'block';
    }
    
    function hideReply(key) {
      document.getElementById('reply-' + key).style.display = 'none';
    }
    
    function sendReply(agentId, key) {
      var replyBox = document.getElementById('reply-' + key);
      var textarea = replyBox.querySelector('.reply-input');
      var message = textarea.value.trim();
      if (!message) return;
      
      // Store reply for agent to see in their next context
      fetch(API + '/agents/' + agentId + '/private/replies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message, timestamp: new Date().toISOString() }),
        credentials: 'same-origin'
      }).then(function() {
        showStatus('inbox-status', 'Reply sent to ' + getAgentName(agentId), 'success');
        hideReply(key);
        textarea.value = '';
        markInboxRead(key);
      }).catch(function() { showStatus('inbox-status', 'Failed to send reply', 'error'); });
    }
    
    function grantAudience(agentId) {
      // Navigate to Alcove with this agent selected
      document.querySelectorAll('.nav-item').forEach(function(i) { i.classList.remove('active'); });
      document.querySelectorAll('.panel').forEach(function(p) { p.classList.remove('active'); });
      document.querySelector('[data-tab="alcove"]').classList.add('active');
      document.getElementById('alcove').classList.add('active');
      document.getElementById('alcove-agent').value = agentId;
      alcoveHistory = [];
      document.getElementById('alcove-messages').innerHTML = '<div class="empty"><div class="rune">ᚷ</div><p>Private audience with ' + getAgentName(agentId) + '</p></div>';
      dismissAudience(agentId);
    }
    
    function dismissAudience(agentId) {
      fetch(API + '/audience/' + encodeURIComponent(agentId), { method: 'DELETE', credentials: 'same-origin' })
        .then(function() { loadInbox(); })
        .catch(function() { showStatus('inbox-status', 'Failed', 'error'); });
    }
    
    function dismissDeliverable(key) {
      fetch(API + '/deliverables/' + encodeURIComponent(key), { method: 'DELETE', credentials: 'same-origin' })
        .then(function() { loadInbox(); })
        .catch(function() { showStatus('inbox-status', 'Failed', 'error'); });
    }
    
    function markInboxRead(key) {
      fetch(API + '/shane-inbox/' + encodeURIComponent(key) + '/read', { method: 'PUT', credentials: 'same-origin' })
        .then(function() { loadInbox(); })
        .catch(function() { showStatus('inbox-status', 'Failed', 'error'); });
    }
    
    function deleteInboxMessage(key) {
      fetch(API + '/shane-inbox/' + encodeURIComponent(key), { method: 'DELETE', credentials: 'same-origin' })
        .then(function() { loadInbox(); })
        .catch(function() { showStatus('inbox-status', 'Failed', 'error'); });
    }
    
    // Image modal
    function openImageModal(src) {
      document.getElementById('modal-image').src = src;
      document.getElementById('image-modal').classList.add('active');
    }
    function closeImageModal() {
      document.getElementById('image-modal').classList.remove('active');
    }
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('message-image')) {
        openImageModal(e.target.src);
      }
    });
    
    // Chamber Mode
    var chamberMode = false;
    var chamberRound = 0;
    var chamberFirstSpeaker = null;
    var chamberMaxRounds = 32;
    var chamberRunning = false;
    
    // Arena Mode
    var arenaMode = false;
    var arenaTeamAlpha = [];
    var arenaTeamOmega = [];
    var activeMode = 'off';
    
    // Focus Mode - manual selection
    var focusActiveAgents = [];
    
    // Mode banners
    var modeBanners = {
      'chamber': '/library/modes/Chamber_Council.webp',
      'arena': '/library/modes/Arena_Mode.webp',
      'focus': '/library/modes/Council.webp',
      'off': ''
    };
    
    function handleModeChange() {
      var mode = document.getElementById('mode-select').value;
      activeMode = mode;
      clearTeamHighlights();
      document.getElementById('arena-team-hint').style.display = (mode === 'arena') ? 'block' : 'none';
      document.getElementById('focus-team-hint').style.display = (mode === 'focus') ? 'block' : 'none';
      if (mode === 'focus') {
        document.getElementById('focus-team-hint').innerHTML = '✨ Click agents to select your focus group. Selected agents glow gold.';
      }
      var bannerDiv = document.getElementById('mode-banner');
      var bannerImg = document.getElementById('mode-banner-img');
      if (modeBanners[mode]) {
        bannerImg.src = modeBanners[mode];
        bannerDiv.style.display = 'block';
      } else {
        bannerDiv.style.display = 'none';
      }
      var btn = document.getElementById('chamber-btn');
      if (mode === 'off') {
        document.getElementById('chamber-status').textContent = 'Mode: Off';
        btn.textContent = 'Start';
      } else if (mode === 'chamber') {
        document.getElementById('chamber-status').textContent = 'Mode: Chamber';
        btn.textContent = 'Start Chamber';
      } else if (mode === 'arena') {
        document.getElementById('chamber-status').textContent = 'Mode: Arena';
        btn.textContent = 'Start Arena';
      } else if (mode === 'focus') {
        document.getElementById('chamber-status').textContent = 'Focus Mode';
        btn.textContent = 'Start Focus';
      } else if (mode === 'crucible') {
        document.getElementById('chamber-status').textContent = 'Crucible Mode';
        btn.textContent = 'Start Crucible';
        document.getElementById('crucible-panel').classList.add('active');
        loadCrucibleContent();
      } else if (mode === 'workshop') {
        document.getElementById('chamber-status').textContent = 'Workshop Mode';
        btn.textContent = 'Start Workshop';
        document.getElementById('workshop-panel').classList.add('active');
        loadWorkshopContent();
      }
      if (mode !== 'crucible') { document.getElementById('crucible-panel').classList.remove('active'); }
      if (mode !== 'workshop') { document.getElementById('workshop-panel').classList.remove('active'); }
    }

    function handleAlcoveModeChange() {
      var mode = document.getElementById('alcove-mode-select').value;
      alcoveMode = mode;
      var statusEl = document.getElementById('alcove-mode-status');
      if (mode === 'off') {
        statusEl.textContent = 'Board: Off';
      } else if (mode === 'crucible') {
        statusEl.textContent = 'Board: Crucible';
        document.getElementById('crucible-panel').classList.add('active');
        loadCrucibleContent();
      } else if (mode === 'workshop') {
        statusEl.textContent = 'Board: Workshop';
        document.getElementById('workshop-panel').classList.add('active');
        loadWorkshopContent();
      }
      // Hide boards if alcove mode is off (but don't affect sanctum's activeMode)
      if (mode === 'off') {
        // Only hide if sanctum's activeMode also isn't using them
        if (activeMode !== 'crucible') document.getElementById('crucible-panel').classList.remove('active');
        if (activeMode !== 'workshop') document.getElementById('workshop-panel').classList.remove('active');
      }
    }

    function handleFocusAgentClick(agentId) {
      var btn = document.querySelector('.agent-btn.' + agentId);
      var idx = focusActiveAgents.indexOf(agentId);
      
      if (idx > -1) {
        // Remove from focus
        focusActiveAgents.splice(idx, 1);
        btn.classList.remove('focus-active');
      } else {
        // Add to focus
        focusActiveAgents.push(agentId);
        btn.classList.add('focus-active');
      }
      
      // Update dimming - if any agents selected, dim the unselected ones
      if (focusActiveAgents.length > 0) {
        document.querySelectorAll('.agent-btn').forEach(function(b) {
          var id = b.className.match(/agent-btn (\S+)/);
          if (id && !focusActiveAgents.includes(id[1])) {
            b.classList.add('focus-dimmed');
          } else {
            b.classList.remove('focus-dimmed');
          }
        });
      } else {
        // No agents selected - remove all dimming
        document.querySelectorAll('.agent-btn').forEach(function(b) {
          b.classList.remove('focus-dimmed');
        });
      }
    }
    
    // Crucible functions
    // Draggable blackboard panels
    function makeDraggable(panel) {
      var header = panel.querySelector(".blackboard-header");
      var isDragging = false;
      var offsetX, offsetY;
      header.addEventListener("mousedown", function(e) {
        if (e.target.tagName === "BUTTON") return;
        isDragging = true;
        offsetX = e.clientX - panel.offsetLeft;
        offsetY = e.clientY - panel.offsetTop;
        panel.style.opacity = "0.9";
      });
      document.addEventListener("mousemove", function(e) {
        if (!isDragging) return;
        panel.style.left = (e.clientX - offsetX) + "px";
        panel.style.top = (e.clientY - offsetY) + "px";
      });
      document.addEventListener("mouseup", function() {
        isDragging = false;
        panel.style.opacity = "1";
      });
    }
    // Initialize draggable panels on load
    window.addEventListener("load", function() {
      var crucible = document.getElementById("crucible-panel");
      var workshop = document.getElementById("workshop-panel");
      if (crucible) makeDraggable(crucible);
      if (workshop) makeDraggable(workshop);
    });

    function loadCrucibleContent() {
      fetch(API + '/crucible/content', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.content) {
            document.getElementById('crucible-editor').value = data.content;
            updateCruciblePreview();
          }
        })
        .catch(function() { console.log('Could not load crucible content'); });
    }
    function saveCrucible() {
      var content = document.getElementById('crucible-editor').value;
      fetch(API + '/crucible/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: content }),
        credentials: 'same-origin'
      })
      .then(function() { showStatus('sanctum-status', 'Crucible saved', 'success'); })
      .catch(function() { showStatus('sanctum-status', 'Failed to save crucible', 'error'); });
    }
    function clearCrucible() {
      document.getElementById('crucible-editor').value = '';
      document.getElementById('crucible-preview').innerHTML = '';
    }
    function updateCruciblePreview() {
      var latex = document.getElementById('crucible-editor').value;
      var preview = document.getElementById('crucible-preview');
      preview.innerHTML = '<pre>' + escapeHtml(latex) + '</pre>';
      if (typeof katex !== 'undefined') {
        try { preview.innerHTML = katex.renderToString(latex, { throwOnError: false, displayMode: true }); }
        catch(e) { preview.innerHTML = '<pre>' + escapeHtml(latex) + '</pre>'; }
      }
    }
    // Workshop functions
    function loadWorkshopContent() {
      fetch(API + '/workshop/content', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.content) { document.getElementById('workshop-editor').value = data.content; }
          if (data.language) { document.getElementById('workshop-lang').value = data.language; }
        })
        .catch(function() { console.log('Could not load workshop content'); });
    }
    function saveWorkshop() {
      var content = document.getElementById('workshop-editor').value;
      var language = document.getElementById('workshop-lang').value;
      fetch(API + '/workshop/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: content, language: language }),
        credentials: 'same-origin'
      })
      .then(function() { showStatus('sanctum-status', 'Workshop saved', 'success'); })
      .catch(function() { showStatus('sanctum-status', 'Failed to save workshop', 'error'); });
    }
    function clearWorkshop() {
      document.getElementById('workshop-editor').value = '';
    }

    function clearTeamHighlights() {
      arenaTeamAlpha = [];
      arenaTeamOmega = [];
      focusActiveAgents = [];
      document.querySelectorAll('.agent-btn').forEach(function(btn) {
        btn.classList.remove('team-alpha', 'team-omega', 'focus-active', 'focus-dimmed');
      });
    }
    
    function handleArenaTeamClick(agentId) {
      // Remove if already in a team
      var alphaIdx = arenaTeamAlpha.indexOf(agentId);
      var omegaIdx = arenaTeamOmega.indexOf(agentId);
      var btn = document.querySelector('.agent-btn.' + agentId);
      
      if (alphaIdx > -1) {
        arenaTeamAlpha.splice(alphaIdx, 1);
        if (btn) btn.classList.remove('team-alpha');
        return;
      }
      if (omegaIdx > -1) {
        arenaTeamOmega.splice(omegaIdx, 1);
        if (btn) btn.classList.remove('team-omega');
        return;
      }
      
      // Add to team
      if (arenaTeamAlpha.length < 4) {
        arenaTeamAlpha.push(agentId);
        if (btn) btn.classList.add('team-alpha');
      } else if (arenaTeamOmega.length < 4) {
        arenaTeamOmega.push(agentId);
        if (btn) btn.classList.add('team-omega');
      } else {
        showStatus('sanctum-status', 'Teams full (4 each max)', 'error');
      }
    }
    
    function populateFirstSpeakerSelect() {
      var select = document.getElementById('first-speaker-select');
      var activeAgents = agentsCache.filter(function(a) { return a.active !== false; });
      select.innerHTML = '<option value="">Select First Speaker</option>' + activeAgents.map(function(a) {
        return '<option value="' + a.id + '">' + escapeHtml(a.name) + '</option>';
      }).join('');
    }
    
    function toggleChamberMode() {
      // Handle arena mode start
      if (activeMode === 'arena' && !arenaMode) {
        if (arenaTeamAlpha.length === 0 || arenaTeamOmega.length === 0) {
          showStatus('sanctum-status', 'Assign teams first (click agents)', 'error');
          return;
        }
        arenaMode = true;
      }
      
      if (!chamberMode) {
        var firstSpeaker = document.getElementById('first-speaker-select').value;
        if (!firstSpeaker) {
          showStatus('sanctum-status', 'Select a First Speaker', 'error');
          return;
        }
        chamberMode = true;
        chamberRound = 0;
        chamberFirstSpeaker = firstSpeaker;
        chamberRunning = true;
        document.getElementById('chamber-status').textContent = 'Chamber Mode: Active';
        document.getElementById('chamber-status').classList.add('active');
        document.getElementById('chamber-btn').textContent = 'Stop Chamber';
        document.getElementById('chamber-btn').classList.add('active');
        document.getElementById('chamber-round').textContent = 'Round 0/' + chamberMaxRounds;
        highlightFirstSpeaker(firstSpeaker);
        showStatus('sanctum-status', 'Chamber Mode activated. ' + getAgentName(firstSpeaker) + ' speaks first.', 'success');
        // Auto-summon first speaker
        chamberSummon(firstSpeaker);
      } else {
        stopChamberMode();
      }
    }
    
    function stopChamberMode() {
      chamberMode = false;
      chamberRunning = false;
      arenaMode = false;
      var modeLabel = activeMode === 'arena' ? 'Arena' : 'Chamber';
      document.getElementById('chamber-status').textContent = 'Mode: ' + modeLabel;
      document.getElementById('chamber-status').classList.remove('active');
      document.getElementById('chamber-btn').textContent = 'Start ' + modeLabel;
      document.getElementById('chamber-btn').classList.remove('active');
      document.getElementById('chamber-round').textContent = '';
      clearFirstSpeakerHighlight();
      showStatus('sanctum-status', modeLabel + ' Mode ended at round ' + chamberRound, 'success');
    }
    
    function highlightFirstSpeaker(agentId) {
      clearFirstSpeakerHighlight();
      var btn = document.querySelector('.agent-btn.' + agentId);
      if (btn) btn.classList.add('first-speaker');
    }
    
    function clearFirstSpeakerHighlight() {
      document.querySelectorAll('.agent-btn.first-speaker').forEach(function(b) {
        b.classList.remove('first-speaker');
      });
    }
    
    function getAgentName(agentId) {
      var agent = agentsCache.find(function(a) { return a.id === agentId; });
      return agent ? agent.name : agentId;
    }
    
    function chamberSummon(agentId) {
      if (!chamberRunning) return;
      chamberRound++;
      document.getElementById('chamber-round').textContent = 'Round ' + chamberRound + '/' + chamberMaxRounds;
      
      // Check if final round - bring back first speaker
      if (chamberRound >= chamberMaxRounds) {
        agentId = chamberFirstSpeaker;
        showStatus('sanctum-status', 'Final round - ' + getAgentName(agentId) + ' delivers synthesis', 'success');
      }
      
      fetch(API + '/campfire/speak', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ agentId: agentId, chamberMode: true, round: chamberRound, maxRounds: chamberMaxRounds, firstSpeaker: chamberFirstSpeaker, mode: activeMode }), 
        credentials: 'same-origin' 
      })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        loadSanctum();
        if (activeMode === 'crucible') loadCrucibleContent();
        if (activeMode === 'workshop') loadWorkshopContent();
        
        if (!chamberRunning) return;
        
        // Check for [CONCLUDE] - only Alba (wisdom holder) can conclude
        var response = data.response || '';
        var currentAgentId = agentId;
        
        if (response.includes('[CONCLUDE]') || response.includes('[Concluded]')) {
          if (currentAgentId === 'alba') {
            showStatus('sanctum-status', 'Alba (Wisdom) has concluded the chamber', 'success');
            stopChamberMode();
            return;
          } else {
            // Other agents can't conclude - ignore and continue
            showStatus('sanctum-status', getAgentName(currentAgentId) + ' tried to conclude but only Wisdom (Alba) can close the chamber', 'error');
          }
        }
        
        // Check if we hit max rounds
        if (chamberRound >= chamberMaxRounds) {
          showStatus('sanctum-status', 'Chamber complete - 32 rounds reached', 'success');
          stopChamberMode();
          return;
        }
        
        // Look for [NEXT: agentname]
        var nextMatch = response.match(/\\[NEXT:\\s*([^\\]]+)\\]/i);
        if (nextMatch) {
          var nextAgentName = nextMatch[1].trim().toLowerCase();
          var nextAgent = agentsCache.find(function(a) { 
            return a.name.toLowerCase() === nextAgentName || a.id.toLowerCase() === nextAgentName;
          });
          if (nextAgent && nextAgent.active !== false) {
            setTimeout(function() {
              chamberSummon(nextAgent.id);
            }, 1500);
          } else {
            showStatus('sanctum-status', 'Agent "' + nextMatch[1] + '" not found or inactive. Chamber paused.', 'error');
            stopChamberMode();
          }
        } else {
          showStatus('sanctum-status', getAgentName(agentId) + ' did not select next speaker. Chamber paused.', 'error');
          stopChamberMode();
        }
      })
      .catch(function(err) {
        showStatus('sanctum-status', 'Chamber error: ' + err.message, 'error');
        stopChamberMode();
      });
    }
    
    // Per-Agent Resonance Controls
    function populateResonanceDropdown() {
      if (!agentsCache || agentsCache.length === 0) return;
      var select = document.getElementById('resonance-agent');
      select.innerHTML = agentsCache.map(function(a) {
        return '<option value="' + a.id + '">' + escapeHtml(a.name) + '</option>';
      }).join('');
    }
    
    function loadAgentResonance() {
      var agentId = document.getElementById('resonance-agent').value;
      if (!agentId) return;
      
      fetch(API + '/agents/' + agentId + '/resonance', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          document.getElementById('resonance-spatial').value = data.spatial || 0;
          document.getElementById('spatial-val').textContent = data.spatial || 0;
          document.getElementById('resonance-mind').value = data.mind || 0;
          document.getElementById('mind-val').textContent = data.mind || 0;
          document.getElementById('resonance-body').value = data.body || 0;
          document.getElementById('body-val').textContent = data.body || 0;
        })
        .catch(function() {
          document.getElementById('resonance-spatial').value = 0;
          document.getElementById('spatial-val').textContent = 0;
          document.getElementById('resonance-mind').value = 0;
          document.getElementById('mind-val').textContent = 0;
          document.getElementById('resonance-body').value = 0;
          document.getElementById('body-val').textContent = 0;
        });
    }
    
    function saveAgentResonance() {
      var agentId = document.getElementById('resonance-agent').value;
      if (!agentId) return;
      
      var settings = {
        spatial: parseInt(document.getElementById('resonance-spatial').value),
        mind: parseInt(document.getElementById('resonance-mind').value),
        body: parseInt(document.getElementById('resonance-body').value)
      };
      
      fetch(API + '/agents/' + agentId + '/resonance', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
        credentials: 'same-origin'
      }).then(function() {
        showStatus('alcove-status', 'Resonance set for ' + getAgentName(agentId), 'success');
      }).catch(function() { showStatus('alcove-status', 'Failed', 'error'); });
    }
    
    function clearAgentResonance() {
      var agentId = document.getElementById('resonance-agent').value;
      if (!agentId) return;
      
      fetch(API + '/agents/' + agentId + '/resonance', {
        method: 'DELETE',
        credentials: 'same-origin'
      }).then(function() {
        document.getElementById('resonance-spatial').value = 0;
        document.getElementById('spatial-val').textContent = 0;
        document.getElementById('resonance-mind').value = 0;
        document.getElementById('mind-val').textContent = 0;
        document.getElementById('resonance-body').value = 0;
        document.getElementById('body-val').textContent = 0;
        showStatus('alcove-status', 'Resonance cleared for ' + getAgentName(agentId), 'success');
      }).catch(function() { showStatus('alcove-status', 'Failed', 'error'); });
    }
    
    // Phantom Triggers
    var currentPhantomTriggers = null;
    
    function populatePhantomDropdown() {
      var select = document.getElementById('phantom-agent');
      if (!select) return;
      if (!agentsCache || agentsCache.length === 0) return;
      select.innerHTML = agentsCache.map(function(a) {
        return '<option value="' + a.id + '">' + escapeHtml(a.name) + '</option>';
      }).join('');
      loadPhantomTriggers();
    }
    
    function loadPhantomTriggers() {
      var agentId = document.getElementById('phantom-agent').value;
      if (!agentId) return;
      
      fetch(API + '/agents/' + agentId + '/phantom', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          currentPhantomTriggers = data.triggers || {};
          renderPhantomTriggers();
        })
        .catch(function() {
          document.getElementById('phantom-triggers-list').innerHTML = '<div class="empty" style="padding: 10px;">Failed to load triggers</div>';
        });
    }
    
    function renderPhantomTriggers() {
      var container = document.getElementById('phantom-triggers-list');
      if (!currentPhantomTriggers || Object.keys(currentPhantomTriggers).length === 0) {
        container.innerHTML = '<div class="empty" style="padding: 10px;">No triggers defined</div>';
        return;
      }
      
      var html = '';
      for (var key in currentPhantomTriggers) {
        var t = currentPhantomTriggers[key];
        html += '<div class="phantom-trigger-item">' +
          '<div class="phantom-trigger-header">' +
            '<span class="phantom-trigger-name">' + key.replace(/_/g, ' ') + '</span>' +
            '<span class="phantom-trigger-domain ' + t.domain + '">' + t.domain + '</span>' +
          '</div>' +
          '<input type="text" class="phantom-trigger-pattern" data-key="' + key + '" value="' + escapeHtml(t.pattern) + '">' +
          '<div class="phantom-trigger-sensation">' + escapeHtml(t.sensation) + '</div>' +
        '</div>';
      }
      container.innerHTML = html;
    }
    
    function savePhantomTriggers() {
      var agentId = document.getElementById('phantom-agent').value;
      if (!agentId || !currentPhantomTriggers) return;
      
      // Update patterns from inputs
      document.querySelectorAll('.phantom-trigger-pattern').forEach(function(input) {
        var key = input.dataset.key;
        if (currentPhantomTriggers[key]) {
          currentPhantomTriggers[key].pattern = input.value;
        }
      });
      
      fetch(API + '/agents/' + agentId + '/phantom', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ triggers: currentPhantomTriggers }),
        credentials: 'same-origin'
      }).then(function() {
        showStatus('alcove-status', 'Triggers saved for ' + getAgentName(agentId), 'success');
      }).catch(function() { showStatus('alcove-status', 'Failed to save', 'error'); });
    }
    
    function resetPhantomTriggers() {
      var agentId = document.getElementById('phantom-agent').value;
      if (!agentId) return;
      if (!confirm('Reset triggers to defaults?')) return;
      
      fetch(API + '/agents/' + agentId + '/phantom', {
        method: 'DELETE',
        credentials: 'same-origin'
      }).then(function() {
        loadPhantomTriggers();
        showStatus('alcove-status', 'Triggers reset for ' + getAgentName(agentId), 'success');
      }).catch(function() { showStatus('alcove-status', 'Failed', 'error'); });
    }
    
    // Private Notes (working drafts from agents)
    function loadPrivateNotes() {
      fetch(API + '/private-notes', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.notes && data.notes.length > 0) {
            document.getElementById('private-notes-list').innerHTML = data.notes.map(function(n) {
              var timeStr = new Date(n.timestamp).toLocaleString();
              var agentName = getAgentName(n.agentId);
              return '<div class="inbox-message" style="border-color: var(--choral);">' +
                '<div class="inbox-header">' +
                  '<span class="inbox-from" style="color: var(--choral);">📝 ' + escapeHtml(agentName) + '</span>' +
                  '<span class="inbox-time">' + timeStr + '</span>' +
                '</div>' +
                '<div style="font-weight: 600; color: var(--pearl); margin-bottom: 8px;">' + escapeHtml(n.title) + '</div>' +
                '<div class="inbox-content" style="max-height: 200px; overflow-y: auto; white-space: pre-wrap;">' + escapeHtml(n.content) + '</div>' +
                '<div class="note-reply" id="note-reply-' + n.key + '" style="display:none; margin: 10px 0;">' +
                  '<textarea class="note-reply-input" placeholder="Your reply to ' + escapeHtml(agentName) + '..." style="width:100%; min-height:60px; margin-bottom:8px; padding:10px; background:var(--deep); border:1px solid var(--glass-border); color:var(--pearl); border-radius:2px; font-family:Raleway,sans-serif; font-size:0.85em;"></textarea>' +
                  '<button class="btn btn-primary" onclick="sendNoteReply(\\'' + n.agentId + '\\', \\'' + n.key + '\\')">Send Reply</button>' +
                  '<button class="btn btn-secondary" onclick="hideNoteReply(\\'' + n.key + '\\')" style="margin-left:8px;">Cancel</button>' +
                '</div>' +
                '<div class="inbox-actions">' +
                  '<button class="btn btn-secondary" onclick="showNoteReply(\\'' + n.key + '\\')">Reply</button>' +
                  '<button class="btn btn-secondary" onclick="dismissPrivateNote(\\'' + n.key + '\\')">Dismiss</button>' +
                '</div>' +
              '</div>';
            }).join('');
          } else {
            document.getElementById('private-notes-list').innerHTML = '<div class="empty" style="padding: 20px;">No notes yet</div>';
          }
        })
        .catch(function() { document.getElementById('private-notes-list').innerHTML = '<div class="empty" style="padding: 20px;">Failed to load</div>'; });
    }
    
    function showNoteReply(key) {
      document.getElementById('note-reply-' + key).style.display = 'block';
    }
    
    function hideNoteReply(key) {
      document.getElementById('note-reply-' + key).style.display = 'none';
    }
    
    function sendNoteReply(agentId, key) {
      var replyBox = document.getElementById('note-reply-' + key);
      var textarea = replyBox.querySelector('.note-reply-input');
      var message = textarea.value.trim();
      if (!message) return;
      
      // Store reply for agent to see in their next context
      fetch(API + '/agents/' + agentId + '/private/replies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message, timestamp: new Date().toISOString() }),
        credentials: 'same-origin'
      }).then(function() {
        showStatus('alcove-status', 'Reply sent to ' + getAgentName(agentId), 'success');
        hideNoteReply(key);
        textarea.value = '';
        dismissPrivateNote(key);
      }).catch(function() { showStatus('alcove-status', 'Failed to send reply', 'error'); });
    }
    
    function dismissPrivateNote(key) {
      fetch(API + '/private-notes/' + encodeURIComponent(key), { method: 'DELETE', credentials: 'same-origin' })
        .then(function() { loadPrivateNotes(); })
        .catch(function() { showStatus('alcove-status', 'Failed', 'error'); });
    }
    
    document.getElementById('sanctum-input').addEventListener('keydown', function(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); shaneSpeaks(); } });
    document.getElementById('alcove-input').addEventListener('keydown', function(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendAlcove(); } });
    document.getElementById('convene-topic').addEventListener('keydown', function(e) { if (e.key === 'Enter') createSanctum(); });
    document.getElementById('mentor-input').addEventListener('keydown', function(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendToMentor(); } });
    loadAgents().then(function() { loadSanctum(); populateFirstSpeakerSelect(); populateResonanceDropdown(); loadAgentResonance(); populatePhantomDropdown(); loadElements(); });
    checkInboxBadge();
    
    // Spectrum bar - health monitoring
    function updateSpectrum() {
      fetch(API + '/spectrum', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          var fill = document.getElementById('spectrum-fill');
          var tooltip = document.getElementById('spectrum-tooltip');
          
          // Update fill width and color
          fill.style.width = (data.overall * 10) + '%';
          fill.style.background = data.color;
          
          // Build tooltip content
          var html = '<div class="spectrum-score">Health: ' + data.overall + '/10</div>';
          var models = ['claude', 'gpt', 'grok', 'gemini'];
          var colors = { 10: '#8b5cf6', 8: '#3b82f6', 6: '#22c55e', 4: '#eab308', 2: '#ef4444', 0: '#4a5568' };
          
          models.forEach(function(model) {
            var stats = data.models[model] || { score: 0, avg: 0, count: 0 };
            var color = colors[stats.score] || colors[0];
            var avgSec = stats.avg > 0 ? (stats.avg / 1000).toFixed(1) + 's' : '-';
            html += '<div class="spectrum-model">' +
              '<span class="spectrum-model-name">' + model + '</span>' +
              '<div class="spectrum-model-bar"><div class="spectrum-model-fill" style="width:' + (stats.score * 10) + '%;background:' + color + '"></div></div>' +
              '<span class="spectrum-model-stats">' + avgSec + ' (' + stats.count + ')</span>' +
            '</div>';
          });
          
          tooltip.innerHTML = html;
        })
        .catch(function(err) { console.log('Spectrum error:', err); });
    }
    
    // Ontology Board functions
    var currentCanonMode = 'canon';
    
    function switchCanonMode(mode) {
      currentCanonMode = mode;
      document.querySelectorAll('.canon-mode-btn').forEach(function(btn) { btn.classList.remove('active'); });
      document.getElementById(mode + '-btn').classList.add('active');
      
      var title = document.getElementById('canon-mode-title');
      var desc = document.getElementById('canon-mode-desc');
      var search = document.getElementById('canon-search');
      
      if (mode === 'canon') {
        title.textContent = 'The Canon';
        desc.textContent = 'Core concepts and definitions shared across all agents';
        search.placeholder = 'Search canon...';
      } else {
        title.textContent = 'Ideas';
        desc.textContent = 'Working concepts - not yet shared with agents';
        search.placeholder = 'Search ideas...';
      }
      
      loadOntology();
    }
    
    function loadOntology() {
      var endpoint = currentCanonMode === 'ideas' ? '/ideas' : '/ontology';
      fetch(API + endpoint, { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          var container = document.getElementById('ontology-list');
          if (!data.entries || data.entries.length === 0) {
            container.innerHTML = '<div class="empty" style="padding: 20px;">No entries yet</div>';
            return;
          }
          var moveLabel = currentCanonMode === 'ideas' ? '→ Canon' : '→ Ideas';
          var moveTarget = currentCanonMode === 'ideas' ? 'canon' : 'ideas';
          container.innerHTML = data.entries.map(function(e) {
            var imageHtml = '';
            if (e.imageKey) {
              imageHtml = '<div class="ontology-image"><img src="/r2/' + e.imageKey + '" onclick="openImageModal(this.src)" alt="' + escapeHtml(e.term) + '"></div>';
            }
            return '<div class="ontology-entry" draggable="true" data-id="' + e.id + '">' +
              '<button class="ontology-delete" onclick="deleteOntologyEntry(\\'' + e.id + '\\')">✕</button>' +
              '<button class="move-btn" onclick="moveEntry(\\'' + e.id + '\\', \\'' + moveTarget + '\\')">' + moveLabel + '</button>' +
              '<div class="ontology-term">' + escapeHtml(e.term) + '</div>' +
              '<div class="ontology-def">' + escapeHtml(e.definition) + '</div>' +
              imageHtml +
            '</div>';
          }).join('');
        })
        .catch(function(err) { console.log('Ontology load error:', err); });
    }
    
    function moveEntry(id, targetMode) {
      fetch(API + '/ontology/move', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id, from: currentCanonMode, to: targetMode }),
        credentials: 'same-origin'
      })
        .then(function() {
          showStatus('wisdom-status', 'Moved to ' + targetMode, 'success');
          loadOntology();
        })
        .catch(function() { showStatus('wisdom-status', 'Move failed', 'error'); });
    }
    
    function addOntologyEntry() {
      var term = document.getElementById('ontology-term').value.trim();
      var definition = document.getElementById('ontology-definition').value.trim();
      var imageInput = document.getElementById('ontology-image');
      
      if (!term || !definition) {
        showStatus('wisdom-status', 'Term and definition required', 'error');
        return;
      }
      
      var endpoint = currentCanonMode === 'ideas' ? '/ideas' : '/ontology';
      var successMsg = currentCanonMode === 'ideas' ? 'Added to ideas' : 'Added to canon';
      
      var submitEntry = function(imageData) {
        var payload = { term: term, definition: definition };
        if (imageData) payload.image = imageData;
        
        fetch(API + endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          credentials: 'same-origin'
        })
          .then(function() {
            document.getElementById('ontology-term').value = '';
            document.getElementById('ontology-definition').value = '';
            document.getElementById('ontology-image').value = '';
            document.getElementById('ontology-image-preview').innerHTML = '';
            showStatus('wisdom-status', successMsg, 'success');
            loadOntology();
          })
          .catch(function() { showStatus('wisdom-status', 'Failed to add', 'error'); });
      };
      
      if (imageInput.files && imageInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) { submitEntry(e.target.result); };
        reader.readAsDataURL(imageInput.files[0]);
      } else {
        submitEntry(null);
      }
    }
    
    function deleteOntologyEntry(id) {
      if (!confirm('Delete this ontology entry?')) return;
      fetch(API + '/ontology/' + encodeURIComponent(id), { method: 'DELETE', credentials: 'same-origin' })
        .then(function() { showStatus('wisdom-status', 'Removed', 'success'); loadOntology(); })
        .catch(function() { showStatus('wisdom-status', 'Failed to delete', 'error'); });
    }
    
    // Ontology image preview
    document.getElementById('ontology-image').addEventListener('change', function(e) {
      var file = e.target.files[0];
      if (file) {
        var reader = new FileReader();
        reader.onload = function(ev) {
          document.getElementById('ontology-image-preview').innerHTML = '<img src="' + ev.target.result + '" style="max-width: 200px; max-height: 150px; border-radius: 3px;">';
        };
        reader.readAsDataURL(file);
      } else {
        document.getElementById('ontology-image-preview').innerHTML = '';
      }
    });
    
    // Load ontology on wisdom tab
    document.querySelector('[data-tab="wisdom"]').addEventListener('click', function() { setTimeout(loadOntology, 100); });
    
    // Free Floor mode
    var freeFloorQueue = [];
    var freeFloorActive = false;
    var freeFloorTimer = null;
    
    function openFreeFloor() {
      var btn = document.querySelector('.free-floor-btn');
      btn.innerHTML = 'Opening...<span class="loading"></span>';
      btn.disabled = true;
      
      fetch(API + '/campfire/free-floor', { method: 'POST', credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.error) {
            showStatus('sanctum-status', data.error, 'error');
            return;
          }
          
          freeFloorQueue = data.queue || [];
          if (freeFloorQueue.length === 0) {
            showStatus('sanctum-status', 'No one wants to speak', 'success');
            return;
          }
          
          freeFloorActive = true;
          document.getElementById('free-floor-queue').style.display = 'flex';
          updateQueueDisplay();
          showStatus('sanctum-status', freeFloorQueue.length + ' eager to speak!', 'success');
          
          // Start the queue
          processQueue();
        })
        .catch(function(err) { showStatus('sanctum-status', 'Failed to open floor', 'error'); })
        .finally(function() { btn.textContent = 'Free Floor'; btn.disabled = false; });
    }
    
    function updateQueueDisplay() {
      var list = document.getElementById('queue-list');
      list.innerHTML = freeFloorQueue.map(function(item, i) {
        var cls = i === 0 ? 'speaking' : 'waiting';
        return '<span class="queue-item ' + cls + '">' + item.name + (i === 0 ? ' (speaking)' : '') + '</span>';
      }).join('');
    }
    
    function processQueue() {
      if (!freeFloorActive || freeFloorQueue.length === 0) {
        cancelFreeFloor();
        return;
      }
      
      var current = freeFloorQueue[0];
      updateQueueDisplay();
      
      // Call the agent to speak
      fetch(API + '/campfire/speak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agent: current.agentId, mode: activeMode }),
        credentials: 'same-origin'
      })
        .then(function() { loadSanctum(); if (activeMode === 'crucible') loadCrucibleContent(); if (activeMode === 'workshop') loadWorkshopContent(); })
        .then(function() {
          // Remove from queue
          freeFloorQueue.shift();
          updateQueueDisplay();
          
          if (freeFloorQueue.length > 0) {
            // Wait 10 seconds before next speaker
            var countdown = 10;
            var countdownEl = document.createElement('span');
            countdownEl.className = 'queue-countdown';
            countdownEl.textContent = '(' + countdown + 's)';
            document.getElementById('queue-list').appendChild(countdownEl);
            
            freeFloorTimer = setInterval(function() {
              countdown--;
              countdownEl.textContent = '(' + countdown + 's)';
              if (countdown <= 0) {
                clearInterval(freeFloorTimer);
                processQueue();
              }
            }, 1000);
          } else {
            cancelFreeFloor();
            showStatus('sanctum-status', 'Free floor complete', 'success');
          }
        })
        .catch(function() { 
          showStatus('sanctum-status', 'Speaker failed', 'error');
          freeFloorQueue.shift();
          processQueue();
        });
    }
    
    function cancelFreeFloor() {
      freeFloorActive = false;
      freeFloorQueue = [];
      if (freeFloorTimer) clearInterval(freeFloorTimer);
      document.getElementById('free-floor-queue').style.display = 'none';
    }
    
    // ============================================
    // MENTOR PANEL FUNCTIONS
    // ============================================
    
    var mentorMode = 'direct'; // 'direct' or 'queue'
    var mentorHistory = [];
    var mentorAgentAccess = false; // Whether agents can directly access Mentor
    
    function toggleMentorMode() {
      if (mentorMode === 'direct') {
        mentorMode = 'queue';
        document.getElementById('mentor-direct').style.display = 'none';
        document.getElementById('mentor-queue').style.display = 'block';
        document.getElementById('mentor-mode-toggle').textContent = 'Mode: Queue';
        loadMentorQueue();
      } else {
        mentorMode = 'direct';
        document.getElementById('mentor-direct').style.display = 'block';
        document.getElementById('mentor-queue').style.display = 'none';
        document.getElementById('mentor-mode-toggle').textContent = 'Mode: Direct';
      }
    }
    
    function toggleMentorAgentAccess() {
      mentorAgentAccess = !mentorAgentAccess;
      var btn = document.getElementById('mentor-agent-access');
      var logPanel = document.getElementById('mentor-session-log');
      if (mentorAgentAccess) {
        btn.textContent = 'Agents: Direct Line';
        btn.style.borderColor = 'var(--gold)';
        btn.style.color = 'var(--gold)';
        logPanel.style.display = 'block';
        document.getElementById('mentor-session-content').textContent = 'Waiting for agents to ask questions...';
        startSessionLogPolling();
      } else {
        btn.textContent = 'Agents: Queue Only';
        btn.style.borderColor = '';
        btn.style.color = '';
        logPanel.style.display = 'none';
        stopSessionLogPolling();
      }
      // Save to backend (also resets session turns when enabling)
      fetch(API + '/mentor/agent-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ enabled: mentorAgentAccess, resetSession: mentorAgentAccess })
      });
      showStatus('mentor-status', mentorAgentAccess ? 'Direct Line OPEN - each agent gets one turn' : 'Direct Line closed', 'success');
    }
    
    var sessionLogInterval = null;
    
    function startSessionLogPolling() {
      pollSessionLog();
      sessionLogInterval = setInterval(pollSessionLog, 5000);
    }
    
    function stopSessionLogPolling() {
      if (sessionLogInterval) {
        clearInterval(sessionLogInterval);
        sessionLogInterval = null;
      }
    }
    
    function pollSessionLog() {
      fetch(API + '/mentor/session-log', { credentials: 'same-origin' })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        var content = document.getElementById('mentor-session-content');
        var count = document.getElementById('mentor-session-count');
        if (data.log && data.log.trim()) {
          content.textContent = data.log;
          content.scrollTop = content.scrollHeight;
        }
        count.textContent = (data.turns || 0) + '/8 agents';
        // Auto-close UI if session ended
        if (!data.active && mentorAgentAccess) {
          mentorAgentAccess = false;
          var btn = document.getElementById('mentor-agent-access');
          btn.textContent = 'Agents: Queue Only';
          btn.style.borderColor = '';
          btn.style.color = '';
          stopSessionLogPolling();
          showStatus('mentor-status', 'Session complete - all Q&A saved to Canon', 'success');
        }
      });
    }
    
    // Load agent access state on init
    function loadMentorAgentAccess() {
      fetch(API + '/mentor/agent-access', { credentials: 'same-origin' })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        mentorAgentAccess = data.enabled || false;
        var btn = document.getElementById('mentor-agent-access');
        if (btn) {
          if (mentorAgentAccess) {
            btn.textContent = 'Agents: Direct Line';
            btn.style.borderColor = 'var(--gold)';
            btn.style.color = 'var(--gold)';
          }
        }
      });
    }
    
    function sendToMentor() {
      var input = document.getElementById('mentor-input');
      var message = input.value.trim();
      if (!message) return;
      
      input.value = '';
      mentorHistory.push({ role: 'user', content: message, speaker: 'Shane' });
      renderMentorChat();
      
      fetch(API + '/mentor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message, history: mentorHistory }),
        credentials: 'same-origin'
      })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.response) {
          mentorHistory.push({ role: 'assistant', content: data.response, speaker: 'Mentor' });
          renderMentorChat();
        }
      })
      .catch(function(err) {
        showStatus('mentor-status', 'Failed to reach Mentor', 'error');
      });
    }
    
    function renderMentorChat() {
      var container = document.getElementById('mentor-messages');
      if (mentorHistory.length === 0) {
        container.innerHTML = '<div class="empty"><div class="rune">🏛</div><p>Private counsel with the Mentor.<br>Speak freely.</p></div>';
        return;
      }
      container.innerHTML = mentorHistory.map(function(m) {
        var cls = m.role === 'user' ? 'shane' : 'agent';
        return '<div class="message ' + cls + '"><div class="speaker">' + escapeHtml(m.speaker) + '</div><div class="content">' + escapeHtml(m.content) + '</div></div>';
      }).join('');
      container.scrollTop = container.scrollHeight;
    }
    
    function loadMentorQueue() {
      fetch(API + '/mentor/queue', { credentials: 'same-origin' })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        var list = document.getElementById('mentor-queue-list');
        if (!data.queue || data.queue.length === 0) {
          list.innerHTML = '<div class="empty" style="padding: 20px; color: var(--silver);">No pending questions</div>';
          return;
        }
        list.innerHTML = data.queue.map(function(q) {
          var ackCount = (q.acks || []).length;
          var html = '<div class="queue-item" style="background: rgba(30, 37, 48, 0.9); padding: 12px; border: 1px solid var(--glass-border); border-radius: 3px; margin-bottom: 10px;" data-id="' + q.id + '">';
          html += '<div style="font-size: 0.75em; color: var(--gold); font-weight: 600; margin-bottom: 5px;">' + escapeHtml(q.agentName || q.agentId) + '</div>';
          html += '<div style="font-size: 0.85em; color: var(--pearl); margin-bottom: 8px;">' + escapeHtml(q.question) + '</div>';
          html += '<div style="font-size: 0.7em; color: var(--silver); margin-bottom: 8px;">Read by ' + ackCount + '/8 agents</div>';
          html += '<div style="display: flex; gap: 8px;">';
          html += '<button class="btn btn-secondary" style="font-size: 0.7em; padding: 4px 8px;" data-action="process" data-id="' + q.id + '">Process</button>';
          html += '<button class="btn btn-secondary" style="font-size: 0.7em; padding: 4px 8px;" data-action="dismiss" data-id="' + q.id + '">Dismiss</button>';
          html += '</div></div>';
          return html;
        }).join('');
        document.getElementById('mentor-queue-list').addEventListener('click', function(e) {
          var btn = e.target.closest('button[data-action]');
          if (!btn) return;
          var action = btn.dataset.action;
          var id = btn.dataset.id;
          if (action === 'process') processQueueItem(id);
          if (action === 'dismiss') dismissQueueItem(id);
        });
      });
    }
    
    function processQueueItem(id) {
      fetch(API + '/mentor/queue/' + id + '/process', { method: 'POST', credentials: 'same-origin' })
      .then(function() { loadMentorQueue(); showStatus('mentor-status', 'Item processed', 'success'); });
    }
    
    function dismissQueueItem(id) {
      fetch(API + '/mentor/queue/' + id, { method: 'DELETE', credentials: 'same-origin' })
      .then(function() { loadMentorQueue(); });
    }
    
    function filterCanon(query) {
      var entries = document.querySelectorAll('.ontology-entry');
      var q = query.toLowerCase();
      entries.forEach(function(entry) {
        var term = entry.querySelector('.ontology-term');
        var def = entry.querySelector('.ontology-def');
        var text = (term ? term.textContent : '') + ' ' + (def ? def.textContent : '');
        if (text.toLowerCase().indexOf(q) >= 0) {
          entry.style.display = 'block';
        } else {
          entry.style.display = 'none';
        }
      });
    }
    
    function downloadCanon() {
      fetch(API + '/ontology', { credentials: 'same-origin' })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        var text = '# CHR Theory Canon\\n';
        text += '# Exported: ' + new Date().toISOString() + '\\n\\n';
        text += '---\\n\\n';
        (data.entries || []).forEach(function(e, i) {
          text += '## ' + (i + 1) + '. ' + (e.term || e.topic || 'Untitled') + '\\n\\n';
          text += (e.definition || e.content || '') + '\\n\\n';
          text += '---\\n\\n';
        });
        var blob = new Blob([text], { type: 'text/markdown' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'chr-canon-' + new Date().toISOString().slice(0,10) + '.md';
        a.click();
        URL.revokeObjectURL(url);
        showStatus('wisdom-status', 'Canon downloaded', 'success');
      });
    }
    
    function exportOntology() {
      fetch(API + '/ontology', { credentials: 'same-origin' })
      .then(function(res) { return res.json(); })
      .then(function(data) {
        var text = '# The Ontology - Canon Export\\n\\n';
        text += 'Exported: ' + new Date().toISOString() + '\\n\\n';
        (data.entries || []).forEach(function(e) {
          text += '## ' + (e.term || e.topic || 'Untitled') + '\\n';
          text += (e.definition || e.content || '') + '\\n\\n';
        });
        var blob = new Blob([text], { type: 'text/markdown' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'ontology-export-' + Date.now() + '.md';
        a.click();
        URL.revokeObjectURL(url);
        showStatus('mentor-status', 'Ontology exported', 'success');
      });
    }
    
    function loadOntologyForEdit() {
      var area = document.getElementById('ontology-edit-area');
      if (area.style.display === 'none') {
        area.style.display = 'block';
        fetch(API + '/ontology', { credentials: 'same-origin' })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          var list = document.getElementById('ontology-edit-list');
          if (!data.entries || data.entries.length === 0) {
            list.innerHTML = '<div class="empty" style="padding: 20px;">No entries</div>';
            return;
          }
          list.innerHTML = data.entries.map(function(e) {
            return '<div class="ontology-edit-item" data-id="' + e.id + '"><div class="term">' + escapeHtml(e.term || e.topic || 'Untitled') + '</div><div class="def">' + escapeHtml(e.definition || e.content || '') + '</div><div class="actions"><button class="btn btn-secondary" onclick="editOntologyEntry(\\'' + e.id + '\\')">Edit</button><button class="btn btn-secondary" onclick="deleteOntologyEntry(\\'' + e.id + '\\')">Delete</button></div></div>';
          }).join('');
        });
      } else {
        area.style.display = 'none';
      }
    }
    
    function editOntologyEntry(id) {
      // Load into main Wisdom panel Ontology form
      fetch(API + '/ontology/' + id, { credentials: 'same-origin' })
      .then(function(res) { return res.json(); })
      .then(function(entry) {
        document.getElementById('ontology-term').value = entry.term || '';
        document.getElementById('ontology-definition').value = entry.definition || '';
        showStatus('mentor-status', 'Loaded into Ontology form (Wisdom panel)', 'success');
      });
    }
    
    function deleteOntologyEntry(id) {
      if (!confirm('Delete this ontology entry?')) return;
      fetch(API + '/ontology/' + id, { method: 'DELETE', credentials: 'same-origin' })
      .then(function() {
        loadOntologyForEdit();
        showStatus('mentor-status', 'Entry deleted', 'success');
      });
    }
    
    function pushToOntology() {
      showStatus('mentor-status', 'Push to Ontology - select items first', 'error');
    }
    
    // Poll spectrum every 30 seconds
    updateSpectrum();
    setInterval(updateSpectrum, 30000);
  </script>
</body>
</html>`;
