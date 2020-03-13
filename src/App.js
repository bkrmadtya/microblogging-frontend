import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import LoginPage from "./components/Pages/LoginPage";
import SignupPage from "./components/Pages/SignupPage";
import Wall from "./components/Pages/Wall";
import Profile from "./components/Pages/Profile";
import AccountSetting from "./components/Pages/AccountSetting";

import { initPost } from "./store/actions/postActions";
import { connect } from "react-redux";

function App({ user, initPost }) {
  useEffect(() => {
    // if (user) {
    //   initPost(user.userId);
    // } else{
    // }
    initPost();
  });

  return (
    <div>
      <Router>
        <Route
          path="/"
          exact
          render={() =>
            user ? <Redirect to={`/user/${user.username}`} /> : <LoginPage />
          }
        />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/user/:username" exact component={Wall} />
        <Route path="/user/:username/profile" exact component={Profile} />
        <Route
          path="/user/:username/setting"
          exact
          component={AccountSetting}
        />
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
