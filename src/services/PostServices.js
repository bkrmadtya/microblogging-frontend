import axios from "../config/axios";

const posts = [
  {
    id: 1,
    content: "Life is a beautiful journey",
    username: "Bikram Karki",
    likes: 55,
    comments: 55,
    shares: 55,
    creationDate: new Date().toUTCString()
  }
];

const getAllPosts = () => {
  return posts;
};

const getPostById = id => {
  return posts.find(i => i.id === +id);
};

const addNewPost = newPost => {
  // posts.push(newPost);
  newPost.id = posts.length + 1;
  newPost.creationDate = new Date().toUTCString();
  newPost.username = "Bikram Karki";
  newPost.likes = 0;
  newPost.shares = 0;
  newPost.comments = 0;
  return newPost;
};

export default {
  getAllPosts,
  getPostById,
  addNewPost
};
