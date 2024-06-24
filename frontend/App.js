import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ChatRoom from './components/ChatRoom';
import UserProfile from './components/UserProfile';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/chatroom" component={ChatRoom} />
            <Route path="/profile" render={() => <UserProfile user={{ username: 'JohnDoe', email: 'johndoe@example.com' }} />} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
