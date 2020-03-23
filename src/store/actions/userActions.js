import {
  GET_USER_BY_USERNAME,
  UPDATE_USER_PRIVACY,
  ERROR,
  SUCCESS
} from '../actions/actionTypes';

import { saveUserLocally } from '../../services/LocalStorage';
import UserServices from '../../services/UserServices';
import { setNotification } from './notificationAction';

export const getUserByUsername = username => dispatch => {
  UserServices.getUserByUsername(username)
    .then(result => {
      dispatch({
        type: GET_USER_BY_USERNAME,
        payload: result
      });
    })
    .catch(error => {
      dispatch(
        setNotification(error?.response?.data?.message || error.message, ERROR)
      );
    });
};

export const updatePassword = (userDetails, userId) => dispatch => {
  UserServices.updatePassword(userDetails, userId)
    .then(result => {
      dispatch(setNotification('Password updated successfully', SUCCESS));
    })
    .catch(error => {
      dispatch(
        setNotification(error?.response?.data?.message || error.message, ERROR)
      );
    });
};

export const updatePrivacy = user => dispatch => {
  UserServices.updatePrivacy(user)
    .then(result => {
      const updatedUser = { ...user, private: !user.private };

      saveUserLocally(updatedUser);

      dispatch({
        type: UPDATE_USER_PRIVACY,
        payload: updatedUser
      });

      dispatch(setNotification('Privacy updated successfully', SUCCESS));
    })
    .catch(error => {
      dispatch(
        setNotification(error?.response?.data?.message || error.message, ERROR)
      );
    });
};
