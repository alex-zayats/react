import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './postsReducers';
import user from './usersReducers';

export default combineReducers({
  router: routerReducer,
  posts,
  user
});
