import { ADD_POST, SHARE_POST, INIT_POST } from './actionTypes';

import PostServices from '../../services/PostServices';

export const initPost = () => dispatch => {
  const initialPosts = PostServices.getAllPosts();
  // console.log('INITIALIZING POST');

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
};

export const sharePost = postToShare => dispatch => {
  const sharedPost = PostServices.sharePost(postToShare);

  dispatch({
    type: SHARE_POST,
    payload: sharedPost
  });
};
