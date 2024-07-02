document.addEventListener('DOMContentLoaded', () => {
  function showComponent(componentName) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // Clear previous content

    switch (componentName) {
      case 'home':
        mainContent.innerHTML = `
          <div class="component-home">
            <h2>Welcome to Tranquil Talk</h2>
            <img src="images/home-image.jpg" class="small-img" alt="Home Image">
            <p>This is the home page content.</p>
          </div>`;
        break;
      case 'login':
        mainContent.innerHTML = `
          <div class="component-login">
            <h2>Login</h2>
            <form id="login-form" action="php/authentication.php" method="POST">
              <label>Username: <input type="text" name="username" required></label><br>
              <label>Password: <input type="password" name="password" required></label><br>
              <button type="submit">Login</button>
            </form>
            <button onclick="showComponent('register')">Register</button>
          </div>`;
        break;
      case 'register':
        mainContent.innerHTML = `
          <div class="component-register">
            <h2>Register</h2>
            <form id="register-form" action="php/authentication.php" method="POST">
              <label>Username: <input type="text" name="username" required></label><br>
              <label>Email: <input type="email" name="email" required></label><br>
              <label>Password: <input type="password" name="password" required></label><br>
              <button type="submit">Register</button>
            </form>
          </div>`;
        break;
      case 'dashboard':
        mainContent.innerHTML = `
          <div class="component-dashboard">
            <h2>Dashboard</h2>
            <img src="images/dashboard-image.jpg" class="small-img" alt="Dashboard Image">
            <p>Dashboard content will be here.</p>
          </div>`;
        break;
      case 'chatroom':
        mainContent.innerHTML = `
          <div class="component-chatroom">
            <h2>Chat Room</h2>
            <img src="images/chatroom-image.jpg" class="small-img" alt="Chatroom Image">
            <p>Chat room interface will be here.</p>
          </div>`;
        break;
      case 'profile':
        mainContent.innerHTML = `
          <div class="component-profile">
            <h2>Profile</h2>
            <img src="images/profile-image.jpg" class="small-img" alt="Profile Image">
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
  showComponent('login');

  // Check session for logged-in user
  fetch('php/check_session.php')
    .then(response => response.json())
    .then(data => {
      if (data.logged_in) {
        showComponent('dashboard');
        document.getElementById('nav-login').style.display = 'none';
        document.getElementById('nav-register').style.display = 'none';
        document.getElementById('nav-dashboard').classList.remove('hidden');
        document.getElementById('nav-chatroom').classList.remove('hidden');
        document.getElementById('nav-profile').classList.remove('hidden');
        document.getElementById('nav-logout').classList.remove('hidden');
      } else {
        showComponent('login');
        document.getElementById('nav-login').style.display = 'inline';
        document.getElementById('nav-register').style.display = 'inline';
        document.getElementById('nav-dashboard').classList.add('hidden');
        document.getElementById('nav-chatroom').classList.add('hidden');
        document.getElementById('nav-profile').classList.add('hidden');
        document.getElementById('nav-logout').classList.add('hidden');
      }
    });

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
      const formData = new FormData(event.target);
      fetch('php/authentication.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          showComponent('dashboard');
          document.getElementById('nav-login').style.display = 'none';
          document.getElementById('nav-register').style.display = 'none';
          document.getElementById('nav-dashboard').classList.remove('hidden');
          document.getElementById('nav-chatroom').classList.remove('hidden');
          document.getElementById('nav-profile').classList.remove('hidden');
          document.getElementById('nav-logout').classList.remove('hidden');
        } else {
          alert(data.message);
        }
      })
      .catch(error => console.error('Error:', error));
    }
  });

  // Logout function
  function logout() {
    fetch('php/logout.php')
      .then(response => response.json())
      .then(data => {
        if (data.logged_out) {
          showComponent('login');
          document.getElementById('nav-login').style.display = 'inline';
          document.getElementById('nav-register').style.display = 'inline';
          document.getElementById('nav-dashboard').classList.add('hidden');
          document.getElementById('nav-chatroom').classList.add('hidden');
          document.getElementById('nav-profile').classList.add('hidden');
          document.getElementById('nav-logout').classList.add('hidden');
        } else {
          alert(data.message);
        }
      })
      .catch(error => console.error('Error:', error));
  }
});
