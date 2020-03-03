import { ADD_POST } from "../actions/actionTypes";

const initialPosts = [
  {
    id: 1,
    content: "A new post",
    user: {
      id: 1,
      username: "bikram"
    },
    likes: 55,
    comments: 55,
    shares: 55
  }
];

export const postReducer = (state = initialPosts, { type, payload }) => {
  switch (type) {
    case ADD_POST:
      return state.concat(payload);
    default:
      return state;
  }
};
