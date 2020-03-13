import { GET_COMMENT, ADD_COMMENT } from "../actions/actionTypes";

const commentReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_COMMENT:
      // console.log("[GETTING COMMENTS] : ", payload);
      return [...payload, ...state];
    case ADD_COMMENT:
      return [payload, ...state];
    default:
      return state;
  }
};

export default commentReducer;
