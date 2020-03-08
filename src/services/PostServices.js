import axios from '../config/axios';
import uuid from 'uuid/v1';

let posts = [
  {
    id: '2',
    content: 'Nice Quote',
    username: 'Hima Ever',
    likes: 0,
    comments: 0,
    shares: 0,
    ownerId: 1,
    originalPostId: '1',
    creationDate: new Date().toUTCString()
  },
  {
    id: '1',
    content: 'Life is a beautiful journey',
    username: 'Ural Moun',
    likes: 12,
    comments: 3,
    shares: 1,
    ownerId: 1,
    originalPostId: null,
    creationDate: new Date().toUTCString()
  }
];

const getAllPosts = () => {
  return posts.map(i => {
    if (i.originalPostId) {
      i.originalPost = { ...getPostById(i.originalPostId) };
    }
    return i;
  });
};

const getPostById = id => {
  return posts.find(i => {
    console.log(typeof i.id + ' : ' + i.id, typeof id + ' : ' + id);

    return i.id === id;
  });
};

const addNewPost = newPost => {
  // posts.push(newPost);
  newPost.id = uuid();
  newPost.creationDate = new Date().toUTCString();
  newPost.likes = 0;
  newPost.shares = 0;
  newPost.comments = 0;

  posts = [newPost, ...posts];
  return newPost;
};

const sharePost = sharedPost => {
  sharedPost.id = uuid();
  sharedPost.creationDate = new Date().toUTCString();
  sharedPost.likes = 0;
  sharedPost.shares = 0;
  sharedPost.comments = 0;
  sharedPost.originalPost = { ...getPostById(sharedPost.originalPostId) };

  posts = [sharedPost, ...posts];

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

export default {
  getAllPosts,
  getPostById,
  addNewPost,
  sharePost
};
