import { createAsyncThunk } from '@reduxjs/toolkit'
import { get } from '.'
import { schemaProductDetails } from '../schemas/schemaProductDetails'
import { setProductById } from '../store/reducers/productsReducer'

const getProductsById = createAsyncThunk(
  'product/byId',
  async (idProduct, { dispatch }) => {
    try {
      const { data: product } = await get(`/items/${idProduct}`)
      const { data: description } = await get(`/items/${idProduct}/description`)
      const response = schemaProductDetails(product, description)
      dispatch(setProductById(response))
    } catch (error) {
      console.error('search/products', error)
    }
  }
)

export { getProductsById }
