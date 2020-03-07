import axios from "../config/axios";
import uuid from "uuid/v1";

let posts = [
  {
    id: 1,
    content: "Life is a beautiful journey",
    username: "Bikram Karki",
    likes: 55,
    comments: 55,
    shares: 55,
    ownerId: 1,
    originalPostId: null,
    creationDate: new Date().toUTCString()
  }
];

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

const getAllPosts = () => {
  return posts;
};

const getPostById = id => {
  return posts.find(i => i.id === +id);
};

const addNewPost = newPost => {
  // posts.push(newPost);
  newPost.id = uuid();
  newPost.creationDate = new Date().toUTCString();
  newPost.likes = 0;
  newPost.shares = 0;
  newPost.comments = 0;
  return newPost;
};

const sharePost = sharedPost => {
  sharedPost.id = uuid();
  sharedPost.creationDate = new Date().toUTCString();
  sharedPost.likes = 0;
  sharedPost.shares = 0;
  sharedPost.comments = 0;
  return sharedPost;
};

const updatePost = post => {
  let updatedPost = getPostById(post.id);
  updatedPost = { ...updatedPost, ...post };

  posts = post.map(i => {
    if (i.id === post.id) {
      return updatedPost;
    }
    return i;
  });
};

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
  getAllPosts,
  getPostById,
  addNewPost,
  sharePost,
  getCommentsByPostId,
  addComment
};
