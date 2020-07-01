import { posts } from './posts';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  posts: posts,
});
