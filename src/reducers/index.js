import { combineReducers } from 'redux'

import postsReducer from './postsReducer'
import postReducer from './postReducer'
import commentsReducer from './commentsReducer'
import dashboardReducer from './dashboardReducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  comments: commentsReducer,
  dashboard: dashboardReducer,
})

export default rootReducer