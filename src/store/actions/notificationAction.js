import { SET_NOTIFICATION, RESET_NOTIFICATION } from './actionTypes';

export const setNotification = (message, type) => dispatch => {
  dispatch({
    type: SET_NOTIFICATION,
    payload: { message, type }
  });

  setTimeout(() => {
    dispatch({
      type: RESET_NOTIFICATION
    });
  }, 3000);
};
