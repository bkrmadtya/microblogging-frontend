import { SET_ERROR, RESET_ERROR } from "../actions/actionTypes";

const initialState = {
  error: "This is an error message"
};

const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ERROR:
      return { error: payload };
    case RESET_ERROR:
      return { error: null };
    default:
      return state;
  }
};

export default errorReducer;
