// index.js

document.addEventListener('DOMContentLoaded', function() {
  const mainContent = document.getElementById('main-content');
  const loginLink = document.getElementById('login-link');
  const registerLink = document.getElementById('register-link');
  const homeLink = document.getElementById('home-link');
  const dashboardLink = document.getElementById('dashboard-link');
  const chatroomLink = document.getElementById('chatroom-link');
  const profileLink = document.getElementById('profile-link');

  // Initial setup: Show login and register components
  showLogin();

  // Event listeners for navigation links
  loginLink.addEventListener('click', showLogin);
  registerLink.addEventListener('click', showRegister);
  homeLink.addEventListener('click', showHome);
  dashboardLink.addEventListener('click', showDashboard);
  chatroomLink.addEventListener('click', showChatroom);
  profileLink.addEventListener('click', showProfile);

  function showLogin() {
    mainContent.innerHTML = '';
    const loginComponent = document.createElement('div');
    loginComponent.classList.add('component-login');
    loginComponent.innerHTML = `
      <h2>Login</h2>
      <form onsubmit="handleLogin(event)">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username" required><br>
        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password" required><br><br>
        <button type="submit">Login</button>
      </form>
    `;
    mainContent.appendChild(loginComponent);
  }

  function showRegister() {
    mainContent.innerHTML = '';
    const registerComponent = document.createElement('div');
    registerComponent.classList.add('component-register');
    registerComponent.innerHTML = `
      <h2>Register</h2>
      <form onsubmit="handleRegister(event)">
        <label for="reg-username">Username:</label><br>
        <input type="text" id="reg-username" name="reg-username" required><br>
        <label for="reg-email">Email:</label><br>
        <input type="email" id="reg-email" name="reg-email" required><br>
        <label for="reg-password">Password:</label><br>
        <input type="password" id="reg-password" name="reg-password" required><br><br>
        <button type="submit">Register</button>
      </form>
    `;
    mainContent.appendChild(registerComponent);
  }

  function showHome() {
    mainContent.innerHTML = '<h2>Welcome to Tranquil Talk</h2><p>This is the home page content.</p>';
  }

  function showDashboard() {
    mainContent.innerHTML = '<h2>Dashboard</h2><p>Dashboard content will be here.</p>';
  }

  function showChatroom() {
    mainContent.innerHTML = '<h2>Chat Room</h2><p>Chat room interface will be here.</p>';
  }

  function showProfile() {
    mainContent.innerHTML = '<h2>Profile</h2><p>User profile details will be here.</p>';
  }

  function handleLogin(event) {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    // Perform login logic (simulated)
    if (username === 'user' && password === 'password') {
      mainContent.innerHTML = '';
      showDashboard(); // Show dashboard after successful login
    } else {
      alert('Invalid username or password');
    }
  }

  function handleRegister(event) {
    event.preventDefault();
    const regUsername = event.target.elements['reg-username'].value;
    const regEmail = event.target.elements['reg-email'].value;
    const regPassword = event.target.elements['reg-password'].value;

    // Perform registration logic (simulated)
    alert(`Registration successful!\nUsername: ${regUsername}\nEmail: ${regEmail}`);
  }
});
