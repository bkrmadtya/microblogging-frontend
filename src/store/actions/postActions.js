import { ADD_POST } from "./actionTypes";

import PostServices from "../../services/PostServices";

export const addPost = newPost => dispatch => {
  const createdPost = PostServices.addNewPost(newPost);

  dispatch({
    type: ADD_POST,
    payload: createdPost
  });
};
