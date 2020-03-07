import { GET_COMMENT, ADD_COMMENT, COMMENT_POST } from "../actions/actionTypes";

import CommentServices from "../../services/CommentServices";

export const getComments = postId => dispatch => {
  console.log("[GETTING COMMENTS]");
  const comments = CommentServices.getCommentsByPostId(postId);

  dispatch({
    type: GET_COMMENT,
    payload: comments
  });
};

export const addComment = newComment => dispatch => {
  const comment = CommentServices.addComment(newComment);

  dispatch({
    type: ADD_COMMENT,
    payload: comment
  });

  dispatch({
    type: COMMENT_POST,
    payload: {
      id: comment.postId
    }
  });
};
