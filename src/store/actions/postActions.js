import {
  ADD_POST,
  GET_POST_BY_USERNAME,
  SHARE_POST,
  INIT_POST,
  SUCCESS,
  ERROR
} from './actionTypes';

import PostServices from '../../services/PostServices';
import { setNotification } from './notificationAction';

export const initPost = () => dispatch => {
  PostServices.getAllPublicPosts()
    .then(result => {
      dispatch({
        type: INIT_POST,
        payload: result
      });
    })
    .catch(error => {
      dispatch(
        setNotification(error?.response?.data?.message || error.message, ERROR)
      );
    });
};

export const getPostsByUsername = username => dispatch => {
  PostServices.getAllPostsByUsername(username)
    .then(result => {
      dispatch({ type: GET_POST_BY_USERNAME, payload: result });
    })
    .catch(error => {
      dispatch(
        setNotification(error?.response?.data?.message || error.message, ERROR)
      );
    });
};

export const addPost = newPost => dispatch => {
  PostServices.addNewPost(newPost)
    .then(result => {
      dispatch({
        type: ADD_POST,
        payload: result
      });

      dispatch(
        setNotification(`${result.username} just created a new post`, SUCCESS)
      );
    })
    .catch(error => {
      dispatch(
        setNotification(error?.response?.data?.message || error.message, ERROR)
      );
    });
};

export const sharePost = postToShare => dispatch => {
  PostServices.sharePost(postToShare)
    .then(result => {
      dispatch({
        type: SHARE_POST,
        payload: result
      });

      dispatch(
        setNotification(`${result.username} just shared a post`, SUCCESS)
      );
    })
    .catch(error => {
      dispatch(
        setNotification(error?.response?.data?.message || error.message, ERROR)
      );
    });
};
