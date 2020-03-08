import { SET_NOTIFICATION, RESET_NOTIFICATION } from '../actions/actionTypes';

const notificationReducer = (state = null, { type, payload }) => {
  switch (type) {
    case SET_NOTIFICATION:
      console.log('SETTING NOTIFICATION : ', payload);
      return { ...payload };
    case RESET_NOTIFICATION:
      return null;
    default:
      return state;
  }
};

export default notificationReducer;
