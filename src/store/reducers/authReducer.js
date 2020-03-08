import {
  LOGIN_INIT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SIGNUP_INIT,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL
} from '../actions/actionTypes';

const initialState = {
  user: null,
  loading: false,
  error: null
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_INIT:
    case SIGNUP_INIT:
      console.log('[AUTH INIT]');
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      console.log('[AUTH SUCCESS]', payload);
      return { ...state, user: payload, loading: false };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
      console.log('[AUTH FAIL]', payload);
      return { ...state, error: payload, loading: false };
    case LOGOUT:
      console.log('[LOGOUT]');
      return { user: null, error: null, loading: false };
    default:
      return state;
  }
};

export default authReducer;
