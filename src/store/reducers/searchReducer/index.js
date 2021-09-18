import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const searchReducer = createSlice({
  name: 'search',
  initialState,
  reducers: {},
})

export default searchReducer.reducer
