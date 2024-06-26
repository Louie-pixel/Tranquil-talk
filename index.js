function showComponent(componentName) {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = ''; // Clear previous content

  // Load component based on componentName
  switch (componentName) {
    case 'home':
      mainContent.innerHTML = '<h2>Welcome to Tranquil Talk</h2><p>This is the home page content.</p>';
      break;
    case 'login':
      mainContent.innerHTML = '<h2>Login</h2><p>Login form will be here.</p>';
      break;
    case 'register':
      mainContent.innerHTML = '<h2>Register</h2><p>Registration form will be here.</p>';
      break;
    case 'dashboard':
      mainContent.innerHTML = '<h2>Dashboard</h2><p>Dashboard content will be here.</p>';
      break;
    case 'chatroom':
      mainContent.innerHTML = '<h2>Chat Room</h2><p>Chat room interface will be here.</p>';
      break;
    case 'profile':
      mainContent.innerHTML = '<h2>Profile</h2><p>User profile details will be here.</p>';
      break;
    case 'expertprofile':
      mainContent.innerHTML = '<h2>Expert Profile</h2><p>Expert profile details will be here.</p>';
      break;
    case 'userprofile':
      mainContent.innerHTML = '<h2>User Profile</h2><p>User profile details will be here.</p>';
      break;
    default:
      mainContent.innerHTML = '<h2>Component Not Found</h2><p>The requested component does not exist.</p>';
  }
}
