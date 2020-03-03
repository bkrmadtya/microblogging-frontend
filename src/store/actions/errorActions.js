import { SET_ERROR, RESET_ERROR } from "../actions/actionTypes";

export const setError = error => dispatch => {
  dispatch({
    type: SET_ERROR,
    payload: error
  });
};

export const resetError = () => dispatch => {
  dispatch({
    type: RESET_ERROR
  });
};
