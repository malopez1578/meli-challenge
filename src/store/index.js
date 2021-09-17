import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './reducers'

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMIddleware) =>
    getDefaultMIddleware({
      serializableCheck: false,
    }),
})

export { store }
