import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  count: 0,
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addCount: state => {
      state.count += 1;
    },
  },
})

export const { addCount } = dashboardSlice.actions
export const dashBoardSelector = state => state.dashboard

export default dashboardSlice.reducer
