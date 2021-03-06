import {
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SIGNUP_INIT,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  UPDATE_USER_PRIVACY
} from '../actions/actionTypes';

import { getLocalSavedUser } from '../../services/LocalStorage';

const initialState = {
  user: getLocalSavedUser() || null,
  loading: false
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_INIT:
    case SIGNUP_INIT:
      // console.log('[AUTH INIT]');
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      console.log('[AUTH SUCCESS]', payload);
      return { ...state, user: payload, loading: false };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
      // console.log('[AUTH FAIL]', payload);
      return { ...state, loading: false };
    case LOGOUT:
      // console.log('[LOGOUT]');
      return { ...state, user: null };
    case UPDATE_USER_PRIVACY:
      return { ...state, user: payload };
    default:
      return state;
  }
};

export default authReducer;
