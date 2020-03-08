import {
  ADD_POST,
  INIT_POST,
  SHARE_POST,
  COMMENT_POST
} from '../actions/actionTypes';

const postReducer = (state = [], { type, payload }) => {
  switch (type) {
    case INIT_POST:
      // console.log("[INIT POST] : ", payload);
      return [...payload];
    case ADD_POST:
      // console.log("[NEW POST] : ", payload);
      return [payload, ...state];
    case SHARE_POST:
      // console.log('[SHARED POST] : ', payload);
      const newState = [
        payload,
        ...state.map(i => {
          if (i.id === payload.originalPostId) {
            i.shares = i.shares + 1;
          }
          return i;
        })
      ];
      return newState;
    case COMMENT_POST: // Increases no of comments
      return state.map(post => {
        if (post.id === payload.id) {
          return { ...post, comments: post.comments + 1 };
        }
        return post;
      });
    default:
      return state;
  }
};

export default postReducer;
