import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import LoginPage from "./components/Pages/LoginPage";
import SignupPage from "./components/Pages/SignupPage";
import Home from "./components/Pages/Home";
import Profile from "./components/Pages/Profile";
import AccountSetting from "./components/Pages/AccountSetting";

import { initPost } from "./store/actions/postActions";
import { connect } from "react-redux";

function App({ user, initPost }) {
  useEffect(() => {
    initPost();
  });

  return (
    <div>
      <Router>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/user/:username" exact component={Profile} />
        <Route
          path="/user/:username/setting"
          exact
          component={AccountSetting}
        />
        <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { initPost })(App);
