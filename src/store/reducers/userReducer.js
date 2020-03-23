import { GET_USER_BY_USERNAME } from '../actions/actionTypes';

const userReducer = (state = null, { type, payload }) => {
  switch (type) {
    case GET_USER_BY_USERNAME:
      console.log('GET USER BY USERNAME  : ', payload);
      return { ...payload };
    default:
      return state;
  }
};

export default userReducer;
