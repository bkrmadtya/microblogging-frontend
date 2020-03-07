import { ADD_POST, COMMENT_POST } from "../actions/actionTypes";

import PostServices from "../../services/PostServices";

const initialPosts = PostServices.getAllPosts();

const postReducer = (state = initialPosts, { type, payload }) => {
  switch (type) {
    case ADD_POST:
      // console.log("[NEW POST] : ", payload);
      return [payload, ...state];
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
