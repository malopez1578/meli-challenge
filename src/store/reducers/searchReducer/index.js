import { createSlice } from '@reduxjs/toolkit'

const initialState = { searchResult: {}, loading: 'idle', error: false }

const searchReducer = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setListSearch(state, { payload }) {
      state.searchResult = payload
    },
    setLoading(state, { payload }) {
      state.loading = payload
    },
    setError(state, { payload }) {
      state.error = payload
    },
  },
})

const { setListSearch, setLoading, setError } = searchReducer.actions

export { setListSearch, setLoading, setError }

export default searchReducer.reducer
