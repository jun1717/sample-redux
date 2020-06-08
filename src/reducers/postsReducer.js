import {GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE} from '../actions/actionTypes';

export const initialState = {
  loading: false,
  hasErrors: false,
  posts: [],
}

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, loading: true }
    case GET_POSTS_SUCCESS:
      return { posts: action.payload, loading: false, hasErrors: false }
    case GET_POSTS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
