let isLoggedIn = false;

async function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const response = await fetch('login.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ username, password })
  });

  const result = await response.text();
  if (result.includes('Login successful!')) {
    isLoggedIn = true;
    showComponent('dashboard');
  } else {
    alert('Login failed: ' + result);
  }
}

async function handleRegister(event) {
  event.preventDefault();
  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  const response = await fetch('register.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ username, email, password })
  });

  const result = await response.text();
  if (result.includes('Registration successful!')) {
    isLoggedIn = true;
    showComponent('dashboard');
  } else {
    alert('Registration failed: ' + result);
  }
}

function logout() {
  isLoggedIn = false;
  showComponent('login');
}

function updateNavigation() {
  const loginItems = document.querySelectorAll('header nav ul li.login, header nav ul li.register');
  loginItems.forEach(item => {
    item.style.display = isLoggedIn ? 'none' : 'inline';
  });
}

function showComponent(componentName) {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = ''; // Clear previous content

  switch (componentName) {
    case 'home':
      mainContent.className = 'component-home';
      mainContent.innerHTML = `
        <h2>Welcome to Tranquil Talk</h2>
        <img src="images/logo.png" alt="Logo" class="small-img" />
        <p>This is the home page content.</p>`;
      break;
    case 'login':
      mainContent.className = 'component-login';
      mainContent.innerHTML = `
        <h2>Login</h2>
        <img src="images/user-avatar.png" alt="User Avatar" class="small-img" />
        <form onsubmit="handleLogin(event)">
          <label>
            Username:
            <input type="text" id="login-username" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" id="login-password" />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        <a href="#" onclick="showComponent('forgotPassword')">Forgot Password?</a>
        <p>Login as: 
          <button onclick="showComponent('userLogin')">User</button>
          <button onclick="showComponent('expertLogin')">Expert</button>
        </p>`;
      break;
    case 'register':
      mainContent.className = 'component-register';
      mainContent.innerHTML = `
        <h2>Register</h2>
        <form onsubmit="handleRegister(event)">
          <label>
            Username:
            <input type="text" id="register-username" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" id="register-email" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" id="register-password" />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>`;
      break;
    case 'dashboard':
      mainContent.className = 'component-dashboard';
      mainContent.innerHTML = `
        <div class="dashboard-container">
          <h2>Dashboard</h2>
          <div class="dashboard-item">
            <h3>Welcome, [Username]!</h3>
            <p>Here's a summary of your recent activity.</p>
          </div>
          <div class="dashboard-item">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#" onclick="showComponent('profile')">Profile</a></li>
              <li><a href="#" onclick="showComponent('chatroom')">Chat Room</a></li>
              <li><a href="#">Settings</a></li>
            </ul>
          </div>
          <div class="dashboard-item">
            <h3>Notifications</h3>
            <p>You have no new notifications.</p>
          </div>
          <div class="dashboard-item">
            <h3>Recent Activity</h3>
            <p>No recent activity to display.</p>
          </div>
          <div class="dashboard-item">
            <h3>Resources</h3>
            <p>Check out these <a href="#">helpful articles</a>.</p>
          </div>
          <div class="dashboard-item">
            <h3>Appointments</h3>
            <p>No upcoming appointments.</p>
          </div>
          <button onclick="logout()">Logout</button>
        </div>`;
      break;
    case 'chatroom':
      mainContent.className = 'component-chatroom';
      mainContent.innerHTML = `
        <h2>Chat Room</h2>
        <img src="images/chat-background.jpg" alt="Chat Background" class="medium-img" />
        <div id="chat-messages"></div>
        <input type="text" id="new-message" />
        <button onclick="sendMessage()">Send</button>`;
      break;
    case 'profile':
      mainContent.className = 'component-profile';
      mainContent.innerHTML = `
        <h2>User Profile</h2>
        <img src="images/user-avatar.png" alt="User Avatar" class="small-img" />
        <div>
          <label>Preferences:</label>
          <input type="text" id="profile-preferences" />
        </div>
        <div>
          <label>Mental Health Needs:</label>
          <textarea id="profile-mental-health-needs"></
