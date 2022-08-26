import { createSlice } from '@reduxjs/toolkit'
import { getProductAsync } from './cart-actions';

const initialState = {  //get products from fakeapi
  items: [],
  status: null
}
  
const productSlice = createSlice({ 
  name: 'product',
  initialState,  
    reducers: {},
  extraReducers: {
    [getProductAsync.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getProductAsync.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
    [getProductAsync.rejected]: (state, action) => {
      state.status = 'failed';
    }    
  }  
})

export default productSlice.reducer