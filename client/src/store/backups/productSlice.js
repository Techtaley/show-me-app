import { createSlice } from '@reduxjs/toolkit'
import { getProductAsync } from './cart-actions';
//import { v4 as uuidv4 } from 'uuid'

const initialState = {  //product
  items: [],
  status: null
  //,
  // totalQuantity: 0,  //quantity of items in the array  
  // changed: false     //only if we add or remove items from cart
}
  
const productSlice = createSlice({ 
  name: 'product',
  initialState,  
    reducers: {},
  // reducers: {  //Sychronous code - data transformations
  //   add: (state, action) => {  
  //     const newItem = {  //this represents item's array []
  //       // id: uuidv4(),
  //       // desc: action.payload.desc,
  //       // price: action.payload.price,
  //       // url: action.payload.url
  //       //quantity: action.payload.quantity, //how many items to add
  //       //totalPrice: action.payload.price
  //       id: 1,
  //       desc: "description",
  //       price: 12.99,
  //       url: "url"

  //     } 
      
  //     state.items.push(newItem)

  //     //const existingItem = state.items.find(item => item.id === newItem.id)

  //     // state.totalQuantity++  //totalQuantity in cart increases 
  //     // state.changed = true
      
  //     // if(!existingItem) {
  //     //   state.items.push(newItem)
  //     // } else {
  //     //   existingItem.quantity++  //add another one
  //     //   existingItem.totalPrice = existingItem.totalPrice + newItem.price
  //     //   //OR? return existingItem.totalPrice + existingItem.price;         
  //     // } 
  //   }
    //,
    // remove: (state, action) => {  //if the id exist delete it
    //   const existingItem = state.items.find(item => item.id === action.payload.id || item.desc === action.payload.desc)
      
    //   //if id/desc already exists (just 1 item) delete it, if more than 1 exists under that id/desc delete excess to just keep 1 item.  Question, how could that happen if id is unique??
    //   state.totalQuantity--  //totalQuantity in cart decreases
    //   state.changed = true
      
    //   if(existingItem.quantity === 1) {
    //     return state.filter(item => item.id !== action.payload.id)
    //   } else {
    //     existingItem.quantity--;
    //     existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
    //     //OR? return existingItem.totalPrice - existingItem.price; 
    //   }      
    // }  
  //},  //ends regular reducer
  //removed 'replace' action and replace with extraReducers
  extraReducers: {
    [getProductAsync.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getProductAsync.fulfilled]: (state, action) => {
      //state.totalQuantity = action.payload.totalQuantity;
      state.status = 'success';
      state.items = action.payload;
    },
    [getProductAsync.rejected]: (state, action) => {
      //state.totalQuantity = action.payload.totalQuantity;
      state.status = 'failed';
    }    
  }  
})

//export const { add, remove } = cartSlice.actions
//export const { add } = productSlice.actions
export default productSlice.reducer