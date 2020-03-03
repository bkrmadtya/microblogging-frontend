import {
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_INIT,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT
} from "../actions/actionTypes";

import AuthServices from "../../services/AuthServices";

export const login = user => dispatch => {
  dispatch({ type: LOGIN_INIT });

  AuthServices.login(user)
    .then(result => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: result
      });
    })
    .catch(error => {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.error
      });
    });
};

export const signup = user => dispatch => {
  dispatch({ type: SIGNUP_INIT });

  AuthServices.signup(user)
    .then(result => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: user
      });
    })
    .catch(error => {
      dispatch({
        type: SIGNUP_FAIL,
        payload: error.response.data.error
      });
    });
};

export const logout = () => dispatch => [
  dispatch({
    type: LOGOUT
  })
];
