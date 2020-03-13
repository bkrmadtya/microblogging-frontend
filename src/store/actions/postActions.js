import { ADD_POST, SHARE_POST, INIT_POST, SUCCESS, ERROR } from "./actionTypes";

import PostServices from "../../services/PostServices";
import { setNotification } from "./notificationAction";

export const initPost = () => dispatch => {
  PostServices.getAllPosts()
    .then(result => {
      dispatch({
        type: INIT_POST,
        payload: result
      });
    })
    .catch(error => {
      console.log(error);
      dispatch(
        setNotification(error?.response?.data?.message || error.message, ERROR)
      );
    });
};

export const addPost = newPost => dispatch => {
  PostServices.addNewPost(newPost).then(result => {
    dispatch({
      type: ADD_POST,
      payload: result
    });

    dispatch(
      setNotification(`${result.username} just created a new post`, SUCCESS)
    );
  });
};

export const sharePost = postToShare => dispatch => {
  PostServices.sharePost(postToShare).then(result => {
    dispatch({
      type: SHARE_POST,
      payload: result
    });

    dispatch(setNotification(`${result.username} just shared a post`, SUCCESS));
  });
};
