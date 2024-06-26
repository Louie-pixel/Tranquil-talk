import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './app.css'; // Assuming you have styles defined in app.css
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ChatRoom from './components/ChatRoom';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import ExpertProfile from './components/ExpertProfile';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/chatroom" component={ChatRoom} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/expertprofile" component={ExpertProfile} />
          <Route path="/userprofile" component={UserProfile} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
