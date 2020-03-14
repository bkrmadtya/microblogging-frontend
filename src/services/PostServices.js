import axios from "../config/axios";

const getAllPublicPosts = async () => {
  const response = await axios.get(`post/allPublic`);
  const allPosts = response.data;
  // console.log(allPosts);

  return allPosts;
};

const getAllPostsByUsername = async username => {
  const response = await axios.get(`post/byUsername/${username}`);
  const allPosts = response.data;

  return allPosts;
};

const addNewPost = async newPost => {
  newPost.creationDate = new Date().toUTCString();
  const response = await axios.post("post/", newPost);
  const createdPost = response.data;
  // console.log(createdPost);

  return createdPost;
};

const sharePost = async postToShare => {
  postToShare.creationDate = new Date().toUTCString();
  const response = await axios.post("post/share", postToShare);
  const sharedPost = response.data;
  console.log(sharedPost);

  return sharedPost;
};

export default {
  getAllPublicPosts,
  getAllPostsByUsername,
  addNewPost,
  sharePost
};
