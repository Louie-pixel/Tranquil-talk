let isLoggedIn = false;

function showComponent(componentName) {
  const mainContent = document.getElementById('main-content');
  const navList = document.querySelector('header nav ul');

  // Clear previous content
  mainContent.innerHTML = '';

  // Load component based on componentName
  switch (componentName) {
    case 'home':
      mainContent.className = 'component-home';
      mainContent.innerHTML = `
        <h2>Welcome to Tranquil Talk</h2>
        <img src="images/home.jpg" alt="Home Image" class="page-image" />
        <p>This is the home page content.</p>`;
      break;
    case 'login':
      mainContent.className = 'component-login';
      mainContent.innerHTML = `
        <h2>Login</h2>
        <img src="images/login.jpg" alt="Login Image" class="page-image" />
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
        <img src="images/register.jpg" alt="Register Image" class="page-image" />
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
        <img src="images/dashboard.jpg" alt="Dashboard Image" class="page-image" />
        <p>Welcome to your dashboard!</p>`;
      break;
    case 'chatroom':
      mainContent.className = 'component-chatroom';
      mainContent.innerHTML = `
        <h2>Chat Room</h2>
        <img src="images/chatroom.jpg" alt="Chat Room Image" class="page-image" />
        <div id="chat-messages"></div>
        <input type="text" id="new-message" />
        <button onclick="sendMessage()">Send</button>`;
      break;
    case 'profile':
      mainContent.className = 'component-profile';
      mainContent.innerHTML = `
        <h2>User Profile</h2>
        <img src="images/profile.jpg" alt="Profile Image" class="page-image" />
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
        <img src="images/expertprofile.jpg" alt="Expert Profile Image" class="page-image" />
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
        <img src="images/userprofile.jpg" alt="User Profile Image" class="page-image" />
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

  // Update navigation visibility based on login status
  updateNavigationVisibility(componentName);
}

function updateNavigationVisibility(activeComponent) {
  const navListItems = document.querySelectorAll('header nav ul li');

  if (isLoggedIn) {
    // Show all navigation items except login and register
    navListItems.forEach(item => {
      if (item.classList.contains('login') || item.classList.contains('register')) {
        item.style.display = 'none';
      } else {
        item.style.display = 'inline';
      }
    });

    // Display additional tabs based on active component
    switch (activeComponent) {
      case 'dashboard':
        navListItems.forEach(item => {
          if (item.classList.contains('dashboard')) {
            item.style.display = 'none';
          }
        });
        break;
      case 'chatroom':
        navListItems.forEach(item => {
          if (item.classList.contains('chatroom')) {
            item.style.display = 'none';
          }
        });
        break;
      case 'profile':
        navListItems.forEach(item => {
          if (item.classList.contains('profile')) {
            item.style.display = 'none';
          }
        });
        break;
      case 'expertprofile':
        navListItems.forEach(item => {
          if (item.classList.contains('expertprofile')) {
            item.style.display = 'none';
          }
        });
        break;
      case 'userprofile':
        navListItems.forEach(item => {
          if (item.classList.contains('userprofile')) {
            item.style.display = 'none';
          }
        });
        break;
    }
  } else {
    // Show only login and register
    navListItems.forEach(item => {
      if (item.classList.contains('login') || item.classList.contains('register')) {
        item.style.display = 'inline';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Set background color based on login status
  document.body.style.backgroundColor = isLoggedIn ? '#d3d3d3' : '#f0f0f0';
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
