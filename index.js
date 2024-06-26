// Function to show or hide components based on user actions
function showComponent(componentName) {
  const mainContent = document.getElementById('main-content');
  
  // Hide login and register tabs
  const loginTab = document.getElementById('loginTab');
  const registerTab = document.getElementById('registerTab');
  loginTab.style.display = 'none';
  registerTab.style.display = 'none';

  // Show main content based on componentName
  switch (componentName) {
    case 'home':
      mainContent.innerHTML = `
        <h2>Welcome to Tranquil Talk</h2>
        <p>This is the home page content.</p>`;
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
}

// Function to handle login
function handleLogin() {
  // Implement your login logic here
  // For demonstration purposes, simply showing the dashboard after "logging in"
  showComponent('dashboard');
}

// Function to handle registration
function handleRegister() {
  // Implement your registration logic here
  // For demonstration purposes, simply showing the profile page after "registering"
  showComponent('profile');
}

// Function to send a message (for chat room example)
function sendMessage() {
  const newMessage = document.getElementById('new-message').value;
  const chatMessages = document.getElementById('chat-messages');
  chatMessages.innerHTML += `<div>${newMessage}</div>`;
  document.getElementById('new-message').value = '';
  console.log('Sending message:', newMessage);
  // Implement send message logic here
}

// Function to update user profile
function updateUserProfile() {
  const preferences = document.getElementById('profile-preferences').value;
  const mentalHealthNeeds = document.getElementById('profile-mental-health-needs').value;
  console.log('Updating user profile with:', preferences, mentalHealthNeeds);
  // Implement user profile update logic here
}

// Function to update expert profile
function updateExpertProfile() {
  const field = document.getElementById('expert-field').value;
  const experience = document.getElementById('expert-experience').value;
  const clinics = document.getElementById('expert-clinics').value;
  const email = document.getElementById('expert-email').value;
  const number = document.getElementById('expert-number').value;
  console.log('Updating expert profile with:', field, experience, clinics, email, number);
  // Implement expert profile update logic here
}
