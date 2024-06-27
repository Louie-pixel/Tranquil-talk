let isLoggedIn = false;

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
          <textarea id="profile-mental-health-needs"></textarea>
        </div>
        <button onclick="updateUserProfile()">Update Profile</button>`;
      break;
    case 'expertprofile':
      mainContent.className = 'component-expertprofile';
      mainContent.innerHTML = `
        <h2>Expert Profile</h2>
        <img src="images/expert-avatar.png" alt="Expert Avatar" class="small-img" />
        <div>
          <label>Field:</label>
          <input type="text" id="expert-field" />
        </div>
        <div>
          <label>Experience:</label>
          <input type="number" id="expert-experience" />
        </div>
        <div>
          <label>Clinics:</label>
          <input type="text" id="expert-clinics" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" id="expert-email" />
        </div>
        <div>
          <label>Number:</label>
          <input type="tel" id="expert-number" />
        </div>
        <button onclick="updateExpertProfile()">Update Profile</button>`;
      break;
    case 'userprofile':
      mainContent.className = 'component-userprofile';
      mainContent.innerHTML = `
        <h2>User Profile</h2>
        <img src="images/user-avatar.png" alt="User Avatar" class="small-img" />
        <div>
          <label>Preferences:</label>
          <input type="text" id="user-preferences" />
        </div>
        <div>
          <label>Mental Health Needs:</label>
          <textarea id="user-mental-health-needs"></textarea>
        </div>
        <button onclick="updateUserProfile()">Update Profile</button>`;
      break;
    case 'forgotPassword':
      mainContent.innerHTML = `
        <h2>Forgot Password</h2>
        <p>Enter your email to reset your password.</p>
        <input type="email" id="forgot-email" />
        <button onclick="resetPassword()">Reset Password</button>`;
      break;
    case 'userLogin':
      mainContent.innerHTML = `
        <h2>User Login</h2>
        <form onsubmit="handleUserLogin(event)">
          <label>
            Username:
            <input type="text" id="user-login-username" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" id="user-login-password" />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>`;
      break;
    case 'expertLogin':
      mainContent.innerHTML = `
        <h2>Expert Login</h2>
        <form onsubmit="handleExpertLogin(event)">
          <label>
            Username:
            <input type="text" id="expert-login-username" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" id="expert-login-password" />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>`;
      break;
    default:
      mainContent.innerHTML = `
        <h2>Component Not Found</h2>
        <p>The requested component does not exist.</p>`;
  }

  updateNavigation();
}

function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  // Perform login logic here
  console.log('Logging in with:', username, password);

  isLoggedIn = true;
  showComponent('dashboard');
}

function handleRegister(event) {
  event.preventDefault();
  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  // Perform registration logic here
  console.log('Registering with:', username, email, password);

  isLoggedIn = true;
  showComponent('dashboard');
}

function handleUserLogin(event) {
  event.preventDefault();
  const username = document.getElementById('user-login-username').value;
  const password = document.getElementById('user-login-password').value;

  // Perform user login logic here
  console.log('User logging in with:', username, password);

  isLoggedIn = true;
  showComponent('dashboard');
}

function handleExpertLogin(event) {
  event.preventDefault();
  const username = document.getElementById('expert-login-username').value;
  const password = document.getElementById('expert-login-password').value;

  // Perform expert login logic here
  console.log('Expert logging in with:', username, password);

  isLoggedIn = true;
  showComponent('dashboard');
}

function logout() {
  isLoggedIn = false;
  showComponent('login');
}

function updateNavigation() {
  const loginNav = document.querySelector('.login');
  const registerNav = document.querySelector('.register');

  if (isLoggedIn) {
    loginNav.style.display = 'none';
    registerNav.style.display = 'none';
  } else {
    loginNav.style.display = 'inline';
    registerNav.style.display = 'inline';
  }
}

// Initial setup
showComponent('login'); // Show login page by default
