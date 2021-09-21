import { createSlice } from '@reduxjs/toolkit'

const initialState = { product: {}, loading: 'idle', error: {} }

const searchReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductById(state, { payload }) {
      state.product = payload
    },
    setLoading(state, { payload }) {
      state.loading = payload
    },
    setError(state, { payload }) {
      state.error = payload
    },
  },
})

const { setProductById, setLoading, setError } = searchReducer.actions

export { setProductById, setLoading, setError }

export default searchReducer.reducer
