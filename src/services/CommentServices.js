import axios from "../config/axios";

const getCommentsByPostId = async postId => {
  const response = await axios.get(`post/${postId}/comment`);
  const comments = await response.data;
  return comments;
};

const addComment = async newComment => {
  const response = await axios.post("comment", newComment);
  const createdComment = await response.data;

  console.log(createdComment);

  return createdComment;
};

export default {
  getCommentsByPostId,
  addComment
};
