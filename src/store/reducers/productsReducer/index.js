import { createSlice } from '@reduxjs/toolkit'

const initialState = { product: {} }

const searchReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductById(state, { payload }) {
      state.product = payload
    },
  },
})

const { setProductById } = searchReducer.actions

export { setProductById }

export default searchReducer.reducer
