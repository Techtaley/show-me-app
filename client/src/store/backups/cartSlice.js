import { createSlice } from '@reduxjs/toolkit'
import { getCartAsync } from './cart-actions';
//import { v4 as uuidv4 } from 'uuid'

//if cart items already in LS pull from LS rather than api call to db - persists state - reduces processing - 
const initialState = {  
  cartitems: localStorage.getItem("cartitems") ? JSON.parse(localStorage.getItem("cartitems")) : [],
  //items: [],  //optional  
  totalQuantity: localStorage.getItem("totalQuantity") ? JSON.parse(localStorage.getItem("totalQuantity")) : 0,  //total quantity of All items in the items array 
  totalPrice: localStorage.getItem("totalPrice") ? JSON.parse(localStorage.getItem("totalPrice")) : 0,  //total price of All items added to quart
  changed: false,     //only if we add or remove items from cart
  //status: null  
}
  
const cartSlice = createSlice({ 
  name: 'cart',
  initialState,  
  reducers: {  //Sychronous code - data transformations
    add: (state, action) => {  //Action Creator to Add to Cart (*Products populate home from API)
      // const newItem = {  //optionally, select specific properties from payload not everything
      //   //id: uuidv4(),
      //   id: action.payload.id,
      //   title: action.payload.title,
      //   price: action.payload.price,
      //   image: action.payload.image,
      //   totalQuantity: 1, //double job - total qty for each item and for total cart qty
      //   totalPrice: action.payload.price  //double job - total price for each item and for total cart price
      // }          

      //const existingItem = state.items.find(item => item.id === newItem.id) //optional

      const existingItem = state.cartitems.find(item => item.id === action.payload.id) //optionally, gets entire action.payload.id
      //const itemIndex = state.items.findIndex(item => item.id===newItem.id) //using findIndex
      
      //updates totals for each individual item - qtn and price
      state.totalQuantity++
      state.totalPrice = state.totalPrice + action.payload.price 
      state.changed = true

      //if index doesn't already exists add it
      if(!existingItem) {
        //state.items.push(newItem ) //optional way to update state
        state.cartitems.push({
          ...action.payload, 
          totalQuantity: 1, 
          totalPrice: action.payload.price
        })  //another way - use  everything from payload  
      } else {  // if index exists
      //} else if(state.cartitems.totalQuantity < 3){  // if index exists
        //updates overall totals outside items: []
        existingItem.totalQuantity++  //if adding another of the same item
        //existingItem.totalPrice = existingItem.totalPrice + newItem.price  //option 1 - if adding another of the same item
        existingItem.totalPrice = existingItem.totalPrice + action.payload.price  //another way 
      }
      
      //using localStorage to persist data in state for a better use experience - adding dupes without API call
      localStorage.setItem("cartitems", JSON.stringify(state.cartitems))
      localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity))
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice))      
    },
    remove: (state, action) => {  //if the id exist delete it
      const existingItem = state.cartitems.find(item => item.id === action.payload.id)

      //updates totals for each individual item - qtn and price
      state.totalQuantity--
      state.totalPrice = state.totalPrice - action.payload.price 
      state.changed = true

      if(existingItem.quantity === 1) {
        return state.filter(item => item.id !== action.payload.id)  //return all except action.payload.id
      } else {  
      //} else if(cartitems.totalQuantity > 1){
        existingItem.totalQuantity--  //if removing another of the same item
        //existingItem.totalPrice = existingItem.totalPrice - newItem.price  //option 1 - if adding another of the same item
        existingItem.totalPrice = existingItem.totalPrice - action.payload.price  //another way 
      }      
    },
    clear: (state, action) => {
      state.cartitems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      state.changed = true;
    } 
  },  //ends regular reducer
  //removed 'replace' action and replace with extraReducers
  extraReducers: {
    [getCartAsync.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getCartAsync.fulfilled]: (state, action) => {
      state.totalQuantity = action.payload.totalQuantity;
      state.cartitems = action.payload.cartitems;
      state.status = 'success';      
    },        
    [getCartAsync.rejected]: (state, action) => {
      state.status = 'failed';      
    }
  }  
})

export const { add, remove, clear } = cartSlice.actions

export default cartSlice.reducer