import {GET_COMMENTS, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILURE} from '../actions/actionTypes';

export const initialState = {
  loading: false,
  hasErrors: false,
  comments: [],
}

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, loading: true }
    case GET_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload, loading: false, hasErrors: false }
    case GET_COMMENTS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
