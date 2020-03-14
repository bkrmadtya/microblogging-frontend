import { GET_COMMENT, ADD_COMMENT } from "../actions/actionTypes";

const commentReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_COMMENT:
      console.log("[GETTING COMMENTS] : ", payload);
      return { ...state, ...payload };
    case ADD_COMMENT:
      const commentedPost = state[payload.postId] || {};
      commentedPost.comments = [payload, ...commentedPost.comments];
      console.log(commentedPost);
      return { ...state, [payload.postId]: { ...commentedPost } };
    default:
      return state;
  }
};

export default commentReducer;
