import {GET_POST, GET_POST_SUCCESS, GET_POST_FAILURE} from './actionTypes'

export const getPost = () => ({ type: GET_POST })
export const getPostSuccess = post => ({
  type: GET_POST_SUCCESS,
  payload: post,
})
export const getPostFailure = () => ({ type: GET_POST_FAILURE })

export function fetchPost(id) {
  return async dispatch => {
    dispatch(getPost())

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      const data = await response.json()

      dispatch(getPostSuccess(data))
    } catch (error) {
      dispatch(getPostFailure())
    }
  }
}
