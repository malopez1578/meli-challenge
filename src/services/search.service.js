import { createAsyncThunk } from '@reduxjs/toolkit'
import { get } from '.'
import { schemaSearchProducts } from '../schemas/schemaSearchProducts'
import {
  setError,
  setListSearch,
  setLoading,
} from '../store/reducers/searchReducer'

const searchProducts = createAsyncThunk(
  'search/products',
  async (product, { dispatch }) => {
    dispatch(setLoading('loading'))

    try {
      const { data } = await get(`/sites/MLA/search?q=${product}`)

      const categories = data.available_filters.filter(
        (filter) => filter.id === 'category'
      )[0]

      const items = data.results.slice(0, 4)

      let response = schemaSearchProducts({
        items,
        categories: categories?.values,
      })
      dispatch(setLoading('idle'))
      dispatch(setListSearch(response))
    } catch (error) {
      dispatch(setLoading('idle'))
      dispatch(setError(true))
    }
  }
)

export { searchProducts }
