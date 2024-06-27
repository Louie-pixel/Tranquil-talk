document.addEventListener('DOMContentLoaded', () => {
  function showComponent(componentName) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // Clear previous content

    // Load component based on componentName
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
  }

  // Initial load
  showComponent('home');

  // Navigation event listeners
  document.getElementById('nav-home').addEventListener('click', () => showComponent('home'));
  document.getElementById('nav-login').addEventListener('click', () => showComponent('login'));
  document.getElementById('nav-register').addEventListener('click', () => showComponent('register'));
  document.getElementById('nav-dashboard').addEventListener('click', () => showComponent('dashboard'));
  document.getElementById('nav-chatroom').addEventListener('click', () => showComponent('chatroom'));
  document.getElementById('nav-profile').addEventListener('click', () => showComponent('profile'));
  document.getElementById('nav-expertprofile').addEventListener('click', () => showComponent('expertprofile'));
  document.getElementById('nav-userprofile').addEventListener('click', () => showComponent('userprofile'));

  // Login form submission
  document.addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.target.id === 'login-form') {
      // Handle login logic here
      console.log('Logged in');
      // Hide login and register buttons after login
      document.getElementById('nav-login').style.display = 'none';
      document.getElementById('nav-register').style.display = 'none';
    }
  });
});
