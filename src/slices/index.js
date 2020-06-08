import { combineReducers } from 'redux'

import postsReducer from './posts'
import postReducer from './post'
import commentsReducer from './comments'
import dashboardReducer from './dashboard'

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  post: postReducer,
  dashboard: dashboardReducer,
})

export default rootReducer
