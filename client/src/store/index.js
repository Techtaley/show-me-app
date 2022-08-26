import cartSlice from './cartSlice'
import productSlice from './productSlice'
import homeSlice from './homeSlice'
//import userSlice from './userSlice'

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    home: homeSlice
  }
})

export default store;