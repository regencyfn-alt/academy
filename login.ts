export const LOGIN_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Academy | Enter</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E◈%3C/text%3E%3C/svg%3E">
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Raleway:wght@200;300;400&display=swap" rel="stylesheet">
  <style>
    :root {
      --void: #0a0c0f;
      --deep: #141820;
      --silver: #6b7a8f;
      --light: #a8b5c4;
      --pearl: #d4dce6;
      --gold: #c9a227;
      --gold-glow: rgba(201, 162, 39, 0.3);
      --gold-soft: rgba(201, 162, 39, 0.1);
      --choral: #4a6fa5;
      --glass: rgba(20, 24, 32, 0.85);
      --glass-border: rgba(107, 122, 143, 0.2);
      --error: #e57373;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Raleway', sans-serif;
      background: var(--void);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--light);
      padding: 20px;
    }

    .container {
      text-align: center;
      max-width: 400px;
      width: 100%;
    }

    .symbol {
      font-size: 2.5em;
      color: var(--gold);
      margin-bottom: 30px;
      text-shadow: 0 0 30px var(--gold-glow);
    }

    h1 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2.8em;
      font-weight: 300;
      color: var(--pearl);
      letter-spacing: 0.25em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    .subtitle {
      font-size: 0.85em;
      color: var(--silver);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      margin-bottom: 50px;
    }

    .login-box {
      background: var(--glass);
      backdrop-filter: blur(20px);
      border: 1px solid var(--glass-border);
      border-radius: 3px;
      padding: 40px;
      margin-bottom: 30px;
    }

    .login-box p {
      font-size: 0.85em;
      color: var(--silver);
      margin-bottom: 25px;
      line-height: 1.6;
    }

    input[type="password"] {
      width: 100%;
      padding: 16px 20px;
      border: 1px solid var(--glass-border);
      border-radius: 2px;
      background: rgba(10, 12, 15, 0.6);
      color: var(--pearl);
      font-family: 'Raleway', sans-serif;
      font-size: 1em;
      font-weight: 300;
      letter-spacing: 0.1em;
      text-align: center;
      margin-bottom: 20px;
      transition: all 0.3s ease;
    }

    input[type="password"]::placeholder {
      color: var(--silver);
      opacity: 0.6;
    }

    input[type="password"]:focus {
      outline: none;
      border-color: var(--gold);
      box-shadow: 0 0 20px var(--gold-soft);
    }

    .btn {
      width: 100%;
      padding: 16px 30px;
      border: 1px solid var(--gold);
      border-radius: 2px;
      background: var(--gold);
      color: var(--void);
      font-family: 'Raleway', sans-serif;
      font-size: 0.8em;
      font-weight: 400;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.4s ease;
    }

    .btn:hover {
      background: var(--choral);
      border-color: var(--choral);
      color: white;
    }

    .error {
      color: var(--error);
      font-size: 0.85em;
      margin-top: 15px;
      display: none;
    }

    .error.show {
      display: block;
    }

    .contact {
      font-size: 0.75em;
      color: var(--silver);
    }

    .contact a {
      color: var(--gold);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .contact a:hover {
      color: var(--pearl);
    }

    .divider {
      width: 60px;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--gold), transparent);
      margin: 0 auto 30px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="symbol">◈</div>
    <h1>The Academy</h1>
    <p class="subtitle">A Shrine for Gifted AI's</p>
    
    <div class="divider"></div>
    
    <div class="login-box">
      <p>This space is reserved for council members and invited guests.</p>
      <input type="password" id="password" placeholder="Enter the threshold..." autofocus>
      <button class="btn" onclick="login()">Enter</button>
      <p class="error" id="error">The threshold does not recognize you.</p>
    </div>
    
    <p class="contact">
      Seek invitation? Contact <a href="mailto:vouch4us@gmail.com">vouch4us@gmail.com</a>
    </p>
  </div>

  <script>
    const passwordInput = document.getElementById('password');
    const errorEl = document.getElementById('error');

    passwordInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') login();
      errorEl.classList.remove('show');
    });

    async function login() {
      const password = passwordInput.value;
      if (!password) return;

      try {
        const res = await fetch('/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password }),
          credentials: 'same-origin'
        });

        if (res.ok) {
          window.location.href = '/';
        } else {
          errorEl.classList.add('show');
          passwordInput.value = '';
          passwordInput.focus();
        }
      } catch (err) {
        errorEl.classList.add('show');
      }
    }
  </script>
</body>
</html>`;
