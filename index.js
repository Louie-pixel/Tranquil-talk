let isLoggedIn = false; // Initial login state

function showComponent(componentName) {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = ''; // Clear previous content

  // Load component based on componentName
  switch (componentName) {
    case 'home':
      mainContent.innerHTML = `
        <h2>Welcome to Tranquil Talk</h2>
        <img src="images/logo.png" alt="Logo" class="medium-img" />
        <p>This is the home page content.</p>`;
      break;
    case 'login':
      if (!isLoggedIn) {
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
      } else {
        // Redirect to home or dashboard if already logged in
        showComponent('home');
      }
      break;
    case 'register':
      if (!isLoggedIn) {
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
      } else {
        // Redirect to home or dashboard if already logged in
        showComponent('home');
      }
      break;
    case 'dashboard':
      if (isLoggedIn) {
        mainContent.innerHTML = `
          <h2>Dashboard</h2>
          <img src="images/dashboard.png" alt="Dashboard" class="medium-img" />
          <p>Welcome to your dashboard!</p>`;
      } else {
        showComponent('login'); // Redirect to login if not logged in
      }
      break;
    case 'chatroom':
      if (isLoggedIn) {
        mainContent.innerHTML = `
          <h2>Chat Room</h2>
          <img src="images/chat-background.jpg" alt="Chat Background" class="medium-img" />
          <div id="chat-messages"></div>
          <input type="text" id="new-message" />
          <button onclick="sendMessage()">Send</button>`;
      } else {
        showComponent('login'); // Redirect to login if not logged in
      }
      break;
    case 'profile':
      if (isLoggedIn) {
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
      } else {
        showComponent('login'); // Redirect to login if not logged in
      }
      break;
    case 'expertprofile':
      if (isLoggedIn) {
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
      } else {
        showComponent('login'); // Redirect to login if not logged in
      }
      break;
    case 'userprofile':
      if (isLoggedIn) {
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
      } else {
        showComponent('login'); // Redirect to login if not logged in
      }
      break;
    default:
      mainContent.innerHTML = `
        <h2>Component Not Found</h2>
        <p>The requested component does not exist.</p>`;
  }
}

function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  
  // Simulate a login (replace with actual login logic)
  if (username === 'user' && password === 'password') {
    isLoggedIn = true;
    showComponent('home'); // Redirect to home after successful login
  } else {
    alert('Invalid username or password');
  }
}

function handleRegister(event) {
  event.preventDefault();
  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  
  // Simulate a registration (replace with actual registration logic)
  alert(`Registered with: ${username}, ${email}, ${password}`);
  showComponent('login'); // Redirect to login after successful registration
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

// Initial page load: Show the home page
showComponent('home');
