import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer';
import notificationReducer from './reducers/notificationReducer';
import postReducer from './reducers/postReducer';
import commentReducer from './reducers/commentReducer';

const reducer = combineReducers({
  auth: authReducer,
  notification: notificationReducer,
  posts: postReducer,
  comments: commentReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
