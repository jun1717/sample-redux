import { ADD_COUNT } from '../actions/actionTypes';

export const initialState = {
  count: 0,
}

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNT:
      const result = state.count + action.payload;
      return { count: result }
    default:
      return state
  }
}
