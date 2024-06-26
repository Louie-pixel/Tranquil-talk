let isLoggedIn = false;

function showComponent(componentName) {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = ''; // Clear previous content

  // Load component based on componentName
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
        <h2>Dashboard</h2>
        <img src="images/dashboard.png" alt="Dashboard" class="medium-img" />
        <p>Welcome to your dashboard!</p>`;
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
    default:
      mainContent.className = ''; // Reset class
      mainContent.innerHTML = `
        <h2>Component Not Found</h2>
        <p>The requested component does not exist.</p>`;
  }

  // Change background and hide buttons if logged in
  if (isLoggedIn) {
    document.body.style.backgroundColor = '#d3d3d3'; // Grey background
    document.querySelectorAll('header nav ul li.login, header nav ul li.register').forEach(button => {
      button.style.display = 'none';
    });
  } else {
    document.body.style.backgroundColor = '#f0f0f0'; // Default background
    document.querySelectorAll('header nav ul li.login, header nav ul li.register').forEach(button => {
      button.style.display = 'inline';
    });
  }
}

function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  console.log('Logging in with:', username, password);

  // Simulate successful login (replace with actual login logic)
  isLoggedIn = true;

  // Show home page after login
  showComponent('home');
}

function handleRegister(event) {
  event.preventDefault();
  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  console.log('Registering with:', username, email, password);
  // Implement registration logic here
}

function sendMessage() {
  const newMessage = document.getElementById('new-message').value;
  const chatMessages = document.getElementById('chat-messages');
  chatMessages.innerHTML += `<div>${newMessage}</div>`;
  document.getElementById('new-message').value = '';
  console.log('Sending message:', newMessage);
  // Implement send message logic here
}

function updateUserProfile() {
  const preferences = document.getElementById('profile-preferences').value;
  const mentalHealthNeeds = document.getElementById('profile-mental-health-needs').value;
  console.log('Updating user profile with:', preferences, mentalHealthNeeds);
  // Implement user profile update logic here
}

function updateExpertProfile() {
  const field = document.getElementById('expert-field').value;
  const experience = document.getElementById('expert-experience').value;
  const clinics = document.getElementById('expert-clinics').value;
  const email = document.getElementById('expert-email').value;
  const number = document.getElementById('expert-number').value;
  console.log('Updating expert profile with:', field, experience, clinics, email, number);
  // Implement expert profile update logic here
}

// Initially show login page
showComponent('login');
