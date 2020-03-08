import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from './components/Pages/LoginPage';
import SignupPage from './components/Pages/SignupPage';
import Home from './components/Pages/Home';
import Wall from './components/Pages/Wall';

import { initPost } from './store/actions/postActions';
import { connect } from 'react-redux';

function App({ initPost }) {
  useEffect(() => {
    initPost();
  });

  return (
    <div>
      <Router>
        <Route path="/" exact component={Wall} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/user/:username" exact component={Wall} />
      </Router>
    </div>
  );
}

export default connect(null, { initPost })(App);
