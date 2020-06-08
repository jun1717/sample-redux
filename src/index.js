import React from 'react'
import { render } from 'react-dom'
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import {configureStore} from '@reduxjs/toolkit';

import App from './App'
// import rootReducer from './reducers'
import rootReducer from './slices'

import './styles/index.css'

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// )
const store = configureStore({ reducer: rootReducer })

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
