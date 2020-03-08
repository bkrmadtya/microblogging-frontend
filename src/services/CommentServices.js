import axios from "../config/axios";
import uuid from "uuid/v1";

let comments = [
  {
    id: 1,
    owner: {
      username: "Karki",
      avatar: "asdf"
    },
    content: "This is my first comment to this post",
    date: new Date().toUTCString(),
    postId: 1,
    commentParent: null
  },
  {
    id: 2,
    owner: {
      username: "Hari",
      avatar: "asdf"
    },
    content: "Nice post",
    date: new Date().toUTCString(),
    postId: 1,
    commentParent: null
  }
];

const getCommentsByPostId = postId => {
  const result = comments.filter(i => i.postId === postId);
  return result;
};

const addComment = newComment => {
  newComment.id = uuid();
  newComment.date = new Date().toUTCString();
  newComment.commentParent = null;

  return newComment;
};

export default {
  getCommentsByPostId,
  addComment
};
