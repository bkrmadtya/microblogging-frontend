import {
  LOGIN_INIT,
  LOGIN_SUCCESS,
  SIGNUP_INIT,
  SIGNUP_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_FAIL,
  LOGOUT,
  SUCCESS,
  ERROR
} from '../actions/actionTypes';

import AuthServices from '../../services/AuthServices';
import { saveUserLocally } from '../../services/LocalStorage';
import { setNotification } from './notificationAction';

export const login = user => dispatch => {
  dispatch({ type: LOGIN_INIT });

  AuthServices.login(user)
    .then(user => {
      saveUserLocally(user);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: user
      });

      dispatch(
        setNotification(`${user.username} logged in successfully`, SUCCESS)
      );
    })
    .catch(error => {
      dispatch({
        type: LOGIN_FAIL
      });

      dispatch(setNotification(error.response.data.message, ERROR));
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

      dispatch(
        setNotification(`${user.username} signed up successfully`, SUCCESS)
      );
    })
    .catch(error => {
      dispatch({
        type: SIGNUP_FAIL
      });

      dispatch(setNotification(error.response.data.message, ERROR));
    });
};

export const logout = username => dispatch => {
  dispatch({
    type: LOGOUT
  });

  dispatch(setNotification('Logout successful', SUCCESS));
};
