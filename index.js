document.addEventListener('DOMContentLoaded', () => {
  let isLoggedIn = false;

  function showComponent(componentName) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // Clear previous content

    switch (componentName) {
      case 'home':
        mainContent.innerHTML = `
          <div class="component-home">
            <h2>Welcome to Tranquil Talk</h2>
            <img src="home-image.jpg" class="small-img" alt="Home Image">
            <p>This is the home page content.</p>
          </div>`;
        break;
      case 'login':
        mainContent.innerHTML = `
          <div class="component-login">
            <h2>Login</h2>
            <form id="login-form">
              <label>Username: <input type="text" id="login-username"></label><br>
              <label>Password: <input type="password" id="login-password"></label><br>
              <button type="submit">Login</button>
            </form>
            <button onclick="showComponent('register')">Register</button>
          </div>`;
        break;
      case 'register':
        mainContent.innerHTML = `
          <div class="component-register">
            <h2>Register</h2>
            <form id="register-form">
              <label>Username: <input type="text" id="register-username"></label><br>
              <label>Email: <input type="email" id="register-email"></label><br>
              <label>Password: <input type="password" id="register-password"></label><br>
              <button type="submit">Register</button>
            </form>
          </div>`;
        break;
      case 'dashboard':
        mainContent.innerHTML = `
          <div class="component-dashboard">
            <h2>Dashboard</h2>
            <img src="dashboard-image.jpg" class="small-img" alt="Dashboard Image">
            <p>Dashboard content will be here.</p>
          </div>`;
        break;
      case 'chatroom':
        mainContent.innerHTML = `
          <div class="component-chatroom">
            <h2>Chat Room</h2>
            <img src="chatroom-image.jpg" class="small-img" alt="Chatroom Image">
            <p>Chat room interface will be here.</p>
          </div>`;
        break;
      case 'profile':
        mainContent.innerHTML = `
          <div class="component-profile">
            <h2>Profile</h2>
            <img src="profile-image.jpg" class="small-img" alt="Profile Image">
            <p>User profile details will be here.</p>
          </div>`;
        break;
      case 'expertprofile':
        mainContent.innerHTML = `
          <div class="component-expertprofile">
            <h2>Expert Profile</h2>
            <img src="expertprofile-image.jpg" class="small-img" alt="Expert Profile Image">
            <p>Expert profile details will be here.</p>
          </div>`;
        break;
      case 'userprofile':
        mainContent.innerHTML = `
          <div class="component-userprofile">
            <h2>User Profile</h2>
            <img src="userprofile-image.jpg" class="small-img" alt="User Profile Image">
            <p>User profile details will be here.</p>
          </div>`;
        break;
      default:
        mainContent.innerHTML = `
          <div>
            <h2>Component Not Found</h2>
            <p>The requested component does not exist.</p>
          </div>`;
    }

    updateNavigation();
  }

  function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Call to PHP backend for authentication
    fetch('authentication.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'login', username, password })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          isLoggedIn = true;
          showComponent('dashboard');
        } else {
          alert('Login failed: ' + data.message);
        }
      });
  }

  function handleRegister(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Call to PHP backend for registration
    fetch('authentication.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'register', username, email, password })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          isLoggedIn = true;
          showComponent('dashboard');
        } else {
          alert('Registration failed: ' + data.message);
        }
      });
  }

  function updateNavigation() {
    const loginItems = document.querySelectorAll('header nav ul li#nav-login, header nav ul li#nav-register');
    const protectedItems = document.querySelectorAll('header nav ul li#nav-dashboard, header nav ul li#nav-chatroom, header nav ul li#nav-profile');
    
    loginItems.forEach(item => {
      item.style.display = isLoggedIn ? 'none' : 'inline';
    });

    protectedItems.forEach(item => {
      item.style.display = isLoggedIn ? 'inline' : 'none';
    });
  }

  // Initial load
  showComponent('login');

  // Navigation event listeners
  document.getElementById('nav-home').addEventListener('click', () => showComponent('home'));
  document.getElementById('nav-login').addEventListener('click', () => showComponent('login'));
  document.getElementById('nav-register').addEventListener('click', () => showComponent('register'));
  document.getElementById('nav-dashboard').addEventListener('click', () => showComponent('dashboard'));
  document.getElementById('nav-chatroom').addEventListener('click', () => showComponent('chatroom'));
  document.getElementById('nav-profile').addEventListener('click', () => showComponent('profile'));

  // Form submission listeners
  document.addEventListener('submit', (event) => {
    if (event.target.id === 'login-form') {
      handleLogin(event);
    } else if (event.target.id === 'register-form') {
      handleRegister(event);
    }
  });
});
