import { ADD_POST } from "../actions/actionTypes";

import PostServices from "../../services/PostServices";

const initialPosts = PostServices.getAllPosts();

const postReducer = (state = initialPosts, { type, payload }) => {
  switch (type) {
    case ADD_POST:
      console.log("[NEW POST] : ", payload);
      return [payload, ...state];
    default:
      return state;
  }
};

export default postReducer;
