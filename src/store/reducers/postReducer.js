import {
  ADD_POST,
  GET_POST_BY_USERNAME,
  INIT_POST,
  SHARE_POST,
  COMMENT_POST
} from "../actions/actionTypes";

const initialPosts = {
  publicPosts: [],
  userPosts: []
};

const postReducer = (state = initialPosts, { type, payload }) => {
  switch (type) {
    case INIT_POST:
      console.log("[INIT POST] : ", payload);
      return { ...state, publicPosts: [...payload] };
    case GET_POST_BY_USERNAME:
      console.log("[GET POST BY USERNAME] : ", payload);
      return { ...state, userPosts: [...payload] };
    case ADD_POST:
      // console.log("[NEW POST] : ", payload);
      return {
        ...state,
        publicPosts: [payload, ...state.publicPosts],
        userPosts: [payload, ...state.userPosts]
      };
    case SHARE_POST:
      // console.log("[SHARED POST] : ", payload);
      const getSharedPosts = key => {
        return [
          payload,
          ...state[key].map(post => {
            if (post.postId === payload.originalPostDTO.postID) {
              return {
                ...post,
                numberOfPostShares: post.numberOfPostShares + 1
              };
            }
            return post;
          })
        ];
      };

      return {
        ...state,
        publicPosts: getSharedPosts("publicPosts"),
        userPosts: getSharedPosts("userPosts")
      };

    case COMMENT_POST: // Increases no of comments
      const getCommentedPosts = key => {
        return [
          ...state[key].map(post => {
            if (post.postId === payload.id) {
              return {
                ...post,
                numberOfComments: post.numberOfComments + 1
              };
            }
            return post;
          })
        ];
      };

      return {
        ...state,
        publicPosts: getCommentedPosts("publicPosts"),
        userPosts: getCommentedPosts("userPosts")
      };
    default:
      return state;
  }
};

export default postReducer;
