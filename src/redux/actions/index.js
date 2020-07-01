import * as api from '../services/api';
import {
  GET_POSTS,
  SET_POST,
  EDIT_POST,
  DELETE_POST } from "./types";

// export const clickButton = (value) => ({ type: CLICK_UPDATE_VALUE, newValue: value });

export const handleGetPosts = () => (dispatch) => {
  api.getPosts().then((result) => {
    dispatch({ type: GET_POSTS, posts: result })
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};

export const handleGetPostsById = (data) => (dispatch) => {
  api.getPost(data).then((result) => {
    dispatch({ type: GET_POSTS_BY_ID, post: result })
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};

export const handleGetPostsByCategory = (data) => (dispatch) => {
  api.getPostsByCategory(data).then((result) => {
    dispatch({ type: GET_POSTS_BY_CATEGORY, postsByCategory: result })
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};

export const handleSetPost = (data) => (dispatch) => {
  api.createPost(data).then((res) => {
    dispatch({ type: SET_POST });
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};

export const handleEditPost = (data) => (dispatch) => {
  api.editPost(data).then((res) => {
    dispatch({ type: EDIT_POST });
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};

export const handleDeletePost = (data) => (dispatch) => {
  api.deletePost(data).then((res) => {
    dispatch({ type: DELETE_POST });
  }).catch(error => dispatch({ type: 'ERROR_API', error }))
};
