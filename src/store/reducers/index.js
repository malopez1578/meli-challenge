import { combineReducers } from '@reduxjs/toolkit'
import product from './productsReducer'
import search from './searchReducer'

export const reducers = combineReducers({ search, product })
