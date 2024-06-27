document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const mainContent = document.getElementById('main-content');
  
  // Initial state: show login and register, hide other components
  showComponent('login');
  hideComponent('dashboard');
  hideComponent('chatroom');
  hideComponent('profile');

  // Event listeners for navbar links
  navbar.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;

    if (target.id === 'nav-login') {
      showComponent('login');
    } else if (target.id === 'nav-register') {
      showComponent('register');
    } else if (target.id === 'nav-home') {
      showComponent('home');
    } else if (target.id === 'nav-dashboard') {
      showComponent('dashboard');
    } else if (target.id === 'nav-chatroom') {
      showComponent('chatroom');
    } else if (target.id === 'nav-profile') {
      showComponent('profile');
    }
  });

  // Login form submission
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    try {
      // Simulate login request with Axios
      // Replace with actual API call
      const response = await axios.post('/api/login', {
        username,
        password
      });

      if (response.status === 200) {
        // Login successful, show other components
        hideComponent('login');
        hideComponent('register');
        showComponent('dashboard');
        showComponent('chatroom');
        showComponent('profile');
        document.getElementById('nav-dashboard').style.display = 'inline';
        document.getElementById('nav-chatroom').style.display = 'inline';
        document.getElementById('nav-profile').style.display = 'inline';
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  });

  // Register form submission
  const registerForm = document.getElementById('register-form');
  registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    try {
      // Simulate registration request with Axios
      // Replace with actual API call
      const response = await axios.post('/api/register', {
        username,
        password
      });

      if (response.status === 200) {
        console.log('Registration successful');
        // Optionally, auto-login after registration
        loginForm.submit();
      } else {
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  });

  function showComponent(componentName) {
    mainContent.innerHTML = ''; // Clear previous content

    switch (componentName) {
      case 'login':
        mainContent.innerHTML = `
          <div class="component-login">
            <h2>Login</h2>
            <form id="login-form">
              <label>
                Username:
                <input type="text" id="login-username" required>
              </label>
              <br>
              <label>
                Password:
                <input type="password" id="login-password" required>
              </label>
              <br>
              <button type="submit">Login</button>
            </form>
          </div>
        `;
        break;
      case 'register':
        mainContent.innerHTML = `
          <div class="component-register">
            <h2>Register</h2>
            <form id="register-form">
              <label>
                Username:
                <input type="text" id="register-username" required>
              </label>
              <br>
              <label>
                Password:
                <input type="password" id="register-password" required>
              </label>
              <br>
              <button type="submit">Register</button>
            </form>
          </div>
        `;
        break;
      case 'home':
        mainContent.innerHTML = `
          <div class="component-home">
            <h2>Welcome to Tranquil Talk</h2>
            <p>This is the home page content.</p>
          </div>
        `;
        break;
      case 'dashboard':
        mainContent.innerHTML = `
          <div class="component-dashboard">
            <h2>Dashboard</h2>
            <p>Welcome to your dashboard!</p>
          </div>
        `;
        break;
      case 'chatroom':
        mainContent.innerHTML = `
          <div class="component-chatroom">
            <h2>Chat Room</h2>
            <p>Chat room interface will be here.</p>
          </div>
        `;
        break;
      case 'profile':
        mainContent.innerHTML = `
          <div class="component-profile">
            <h2>User Profile</h2>
            <p>User profile details will be here.</p>
          </div>
        `;
        break;
      default:
        mainContent.innerHTML = `
          <div class="component-notfound">
            <h2>Component Not Found</h2>
            <p>The requested component does not exist.</p>
          </div>
        `;
    }
  }

  function hideComponent(componentName) {
    const component = document.getElementById(`component-${componentName}`);
    if (component) {
      component.style.display = 'none';
    }
  }
});
