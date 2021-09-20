import { createSlice } from '@reduxjs/toolkit'

const initialState = { searchResult: {} }

const searchReducer = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setListSearch(state, { payload }) {
      state.searchResult = payload
    },
  },
})

const { setListSearch } = searchReducer.actions

export { setListSearch }

export default searchReducer.reducer
