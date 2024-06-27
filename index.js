function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Implement login logic here
    console.log('Logging in with:', username, password);
    // Example: Perform authentication and set token in localStorage
    localStorage.setItem('token', 'your_auth_token_here');
    showComponent('dashboard'); // Redirect to dashboard after login
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function Register() {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleRegister = () => {
    // Implement registration logic here
    console.log('Registering with:', username, email, password);
    // Example: Handle registration process
    showComponent('login'); // Redirect to login after registration
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome to Tranquil Talk</h2>
      <p>This is the home page content.</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
    </div>
  );
}

function ChatRoom() {
  const [messages, setMessages] = React.useState([]);
  const [newMessage, setNewMessage] = React.useState('');

  const sendMessage = () => {
    // Implement send message logic
    console.log('Sending message:', newMessage);
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  return (
    <div>
      <h2>Chat Room</h2>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

function UserProfile() {
  const [profile, setProfile] = React.useState({ preferences: [], mentalHealthNeeds: '' });

  const handleUpdate = () => {
    // Implement update profile logic
    console.log('Updating profile:', profile);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>Preferences:</label>
        <input type="text" value={profile.preferences.join(', ')} onChange={(e) => setProfile({ ...profile, preferences: e.target.value.split(', ') })} />
      </div>
      <div>
        <label>Mental Health Needs:</label>
        <textarea value={profile.mentalHealthNeeds} onChange={(e) => setProfile({ ...profile, mentalHealthNeeds: e.target.value })}></textarea>
      </div>
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
}

function ExpertProfile() {
  const [expert, setExpert] = React.useState({ field: '', experience: 0, clinics: [], email: '', number: '' });

  const handleUpdate = () => {
    // Implement update expert profile logic
    console.log('Updating expert profile:', expert);
  };

  return (
    <div>
      <h2>Expert Profile</h2>
      <div>
        <label>Field:</label>
        <input type="text" value={expert.field} onChange={(e) => setExpert({ ...expert, field: e.target.value })} />
      </div>
      <div>
        <label>Experience:</label>
        <input type="number" value={expert.experience} onChange={(e) => setExpert({ ...expert, experience: e.target.value })} />
      </div>
      <div>
        <label>Clinics:</label>
        <input type="text" value={expert.clinics.join(', ')} onChange={(e) => setExpert({ ...expert, clinics: e.target.value.split(', ') })} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={expert.email} onChange={(e) => setExpert({ ...expert, email: e.target.value })} />
      </div>
      <div>
        <label>Number:</label>
        <input type="tel" value={expert.number} onChange={(e) => setExpert({ ...expert, number: e.target.value })} />
      </div>
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
}

function showComponent(componentName) {
  const mainContent = document.getElementById('main-content');
  const navList = document.getElementById('nav-list');

  // Clear previous content
  mainContent.innerHTML = '';

  // Load component based on componentName
  switch (componentName) {
    case 'login':
      ReactDOM.render(<Login />, mainContent);
      break;
    case 'register':
      ReactDOM.render(<Register />, mainContent);
      break;
    case 'home':
      ReactDOM.render(<Home />, mainContent);
      break;
    case 'dashboard':
      ReactDOM.render(<Dashboard />, mainContent);
      break;
    case 'chatroom':
      ReactDOM.render(<ChatRoom />, mainContent);
      break;
    case 'profile':
      ReactDOM.render(<UserProfile />, mainContent);
      break;
    case 'expertprofile':
      ReactDOM.render(<ExpertProfile />, mainContent);
      break;
    case 'userprofile':
      ReactDOM.render(<UserProfile />, mainContent);
      break;
    default:
      mainContent.innerHTML = '<h2>Component Not Found</h2><p>The requested component does not exist.</p>';
  }

  // Hide login and register links after successful login
  if (componentName === 'home' || componentName === 'dashboard' || componentName === 'chatroom' ||
      componentName === 'profile' || componentName === 'expertprofile' || componentName === 'userprofile') {
    navList.style.display = 'none';
  } else {
    navList.style.display = 'block';
  }
}

// Initial load
showComponent('login'); // Display login page initially
