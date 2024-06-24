import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import UserProfile from './components/UserProfile';
import ExpertProfile from './components/ExpertProfile';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={UserProfile} />
                <Route path="/expert-profile" component={ExpertProfile} />
                <Route path="/" exact component={() => <h1>Welcome to Tranquil Talk</h1>} />
            </Switch>
        </Router>
    );
};

export default App;
