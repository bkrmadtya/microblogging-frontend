import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer";
import errorReducer from "./reducers/errorReducer";
import postReducer from "./reducers/postReducer";

const reducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  posts: postReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
