// Function to initialize the app
function initApp() {
  // Initially show the login component
  showComponent('login');
}

// Function to switch between components and manage login state
function showComponent(componentName) {
  const mainContent = document.getElementById('main-content');
  const loginNav = document.getElementById('login-nav');
  const loggedInNav = document.getElementById('logged-in-nav');

  mainContent.innerHTML = ''; // Clear previous content

  // Load component based on componentName
  switch (componentName) {
    case 'home':
      mainContent.innerHTML = `
        <h2>Welcome to Tranquil Talk</h2>
        <p>This is the home page content.</p>`;
      break;
    case 'login':
      mainContent.innerHTML = `
        <h2>Login</h2>
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
        <a href="#" onclick="showComponent('forgotPassword')">Forgot Password?</a>`;
      break;
    case 'register':
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
      mainContent.innerHTML = `
        <h2>Dashboard</h2>
        <p>Welcome to your dashboard!</p>`;
      break;
    case 'chatroom':
      mainContent.innerHTML = `
        <h2>Chat Room</h2>
        <div id="chat-messages"></div>
        <input type="text" id="new-message" />
        <button onclick="sendMessage()">Send</button>`;
      break;
    case 'profile':
      mainContent.innerHTML = `
        <h2>User Profile</h2>
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
      mainContent.innerHTML = `
        <h2>Expert Profile</h2>
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
      mainContent.innerHTML = `
        <h2>User Profile</h2>
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
    default:
      mainContent.innerHTML = `
        <h2>Component Not Found</h2>
        <p>The requested component does not exist.</p>`;
  }

  // Toggle visibility of navigation based on login state
  if (isLoggedIn()) {
    loginNav.style.display = 'none';
    loggedInNav.style.display = 'block';
  } else {
    loginNav.style.display = 'block';
    loggedInNav.style.display = 'none';
  }
}

// Simulated login function (replace with actual login logic)
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  console.log('Logging in with:', username, password);

  // Simulate successful login for demonstration
  // Replace with actual login logic that sets the logged-in state
  setLoggedIn(true);

  // Load dashboard after login
  showComponent('dashboard');
}

// Simulated registration function (replace with actual registration logic)
function handleRegister(event) {
  event.preventDefault();
  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  console.log('Registering with:', username, email, password);

  // Simulate successful registration for demonstration
  // Replace with actual registration logic that may also log the user in
  setLoggedIn(true);

  // Load dashboard after registration
  showComponent('dashboard');
}

// Simulated logout function (replace with actual logout logic)
function logout() {
  // Simulate logout by clearing logged-in state
  setLoggedIn(false);

  // Show login page after logout
  showComponent('login');
}

// Function to check if user is logged in (replace with actual logic)
function isLoggedIn() {
  // Simulated check for demonstration
  return localStorage.getItem('loggedIn') === 'true';
}

// Function to set logged-in state (replace with actual logic)
function setLoggedIn(value) {
  // Simulated setting of logged-in state
  localStorage.setItem('loggedIn', value ? 'true' : 'false');
}

// Initialize the app on page load
document.addEventListener('DOMContentLoaded', initApp);
