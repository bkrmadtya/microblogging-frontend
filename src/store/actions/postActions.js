import { ADD_POST, SHARE_POST, INIT_POST, SUCCESS } from './actionTypes';

import PostServices from '../../services/PostServices';
import { setNotification } from './notificationAction';

export const initPost = () => dispatch => {
  const initialPosts = PostServices.getAllPosts();

  dispatch({
    type: INIT_POST,
    payload: initialPosts
  });
};

export const addPost = newPost => dispatch => {
  const createdPost = PostServices.addNewPost(newPost);

  dispatch({
    type: ADD_POST,
    payload: createdPost
  });

  dispatch(
    setNotification(`${createdPost.username} just created a new post`, SUCCESS)
  );
};

export const sharePost = postToShare => dispatch => {
  const sharedPost = PostServices.sharePost(postToShare);

  dispatch({
    type: SHARE_POST,
    payload: sharedPost
  });
  dispatch(
    setNotification(`${sharedPost.username} just shared a post`, SUCCESS)
  );
};
