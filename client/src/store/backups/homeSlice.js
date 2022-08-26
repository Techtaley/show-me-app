import { createSlice } from '@reduxjs/toolkit'
import { getCartAsync, sendCartAsync } from './cart-actions';  

const initialState = {
    cartIsVisible: false,
    notification: null
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    toggle(state){
      state.cartIsVisible = !state.cartIsVisible; //cartIsVisible: true
    }
  },
  extraReducer: {
    [getCartAsync.rejected]: (state, action) => {
      state.notification = {
        status: 'error', 
        title: 'Error!', 
        message: action.error.message || 'Fetch failed'
      };
    },
    [sendCartAsync.pending]: (state) => {
      state.notification = {
        status: '', 
        title: 'Pending ...', 
        message: 'Sending Products ...'
      };
    },
    [sendCartAsync.fulfilled]: (state) => {
      state.notification = {
        status: 'success', 
        title: 'Success!', 
        message: 'Cart data sent successfully!'
      };
    },
    [sendCartAsync.rejected]: (state, action) => {
      state.notification = {
        status: 'error', 
        title: 'Error!', 
        message: 'Failed to send cart data!'
      };
    }
  }     
});

export const { toggle } = homeSlice.actions

export default homeSlice.reducer