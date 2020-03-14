import { GET_USER_BY_USERNAME, ERROR, SUCCESS } from "../actions/actionTypes";

import UserServices from "../../services/UserServices";
import { setNotification } from "./notificationAction";

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
      dispatch(setNotification("Password updated successfully", SUCCESS));
    })
    .catch(error => {
      dispatch(
        setNotification(error?.response?.data?.message || error.message, ERROR)
      );
    });
};
