import { GET_COMMENT, ADD_COMMENT, COMMENT_POST } from "../actions/actionTypes";

import CommentServices from "../../services/CommentServices";

export const getComments = postId => dispatch => {
  CommentServices.getCommentsByPostId(postId)
    .then(result => {
      const comments = {};
      comments[result[0].postId] = { comments: [...result] };

      dispatch({
        type: GET_COMMENT,
        payload: comments
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const addComment = newComment => dispatch => {
  console.log(newComment);
  CommentServices.addComment(newComment)
    .then(result => {
      dispatch({
        type: ADD_COMMENT,
        payload: result
      });

      dispatch({
        type: COMMENT_POST,
        payload: {
          id: result.postId
        }
      });
    })
    .catch(error => {
      console.log(error);
    });
};
