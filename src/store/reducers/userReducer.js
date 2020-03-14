import {
  GET_USER_BY_USERNAME,
  UPDATE_PASSWORD,
  UPDATE_USER_PRIVACY
} from "../actions/actionTypes";

const userReducer = (state = null, { type, payload }) => {
  switch (type) {
    case GET_USER_BY_USERNAME:
      return { ...payload };
    case UPDATE_PASSWORD:
      return { ...state, private: payload };
    case UPDATE_USER_PRIVACY:
      return { ...state, private: payload };
    default:
      return state;
  }
};

export default userReducer;
