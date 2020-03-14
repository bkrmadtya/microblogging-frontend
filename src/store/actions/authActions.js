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
} from "../actions/actionTypes";

import AuthServices from "../../services/AuthServices";
import { saveUserLocally, clearLocalData } from "../../services/LocalStorage";
import { setNotification } from "./notificationAction";

export const login = user => dispatch => {
  dispatch({ type: LOGIN_INIT });

  AuthServices.login(user)
    .then(result => {
      saveUserLocally(result);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: result
      });

      dispatch(
        setNotification(`${result.username} logged in successfully`, SUCCESS)
      );
    })
    .catch(error => {
      dispatch({
        type: LOGIN_FAIL
      });

      dispatch(
        setNotification(error?.response?.data?.message || error.message, ERROR)
      );
    });
};

export const signup = user => dispatch => {
  saveUserLocally(user);
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

      dispatch(
        setNotification(error?.response?.data?.message || error.message, ERROR)
      );
    });
};

export const logout = () => dispatch => {
  clearLocalData();

  dispatch({
    type: LOGOUT
  });

  dispatch(setNotification("Logout successful", SUCCESS));
};
