import { createAsyncThunk } from '@reduxjs/toolkit';
//import uiSlice from './uiSlice';
//import axios from 'axios'

//get products from fakeapi BE and display on FE
export const getProductAsync = createAsyncThunk(
  'product/getProductAsync',  //action type is slice-name/actioncreatormethod-name
  async () => {
    //const response = await axios.get('http://localhost:4000/products')
    const response = await fetch('http://localhost:4000/products')  //REST API
    //const response = await fetch('http://localhost:4000/products?_limit=5')  //REST API
    if (!response.ok) throw new Error('Unable to fetch product data');
    const data = await response.json();
    console.log(data)
    return data
    //console.log(data.slice(0, 10))
    //return data.slice(0, 10)
    // return {
    //   items: data?.slice().items || [],
    //   status: data?.status || null
    // };
  }
);

//update cart db from FE to firebase Cart API
export const sendCartAsync = createAsyncThunk(
  'cart/sendCartAsync',
  async (cart) => {
    const config = {
      method: 'PUT',  //the format already exists in firebase as POST
      //body: JSON.stringify(cart)   //when we send data to firebase so it will accept our format design below

      body: JSON.stringify({   //when we send data to firebase so it will accept our format design below
        items: cart.cartitems, 
        totalQuantity: cart.totalQuantity,
        //totalPrice: cart.totalPrice.toLocalString(), 
        totalPrice: cart.totalPrice.toFixed(2), 
        //totalPrice: cart.totalPrice.toFixed(2).toLocalString("en-US").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
      })
    };
    //const response = await axios.put('http://localhost:4000/products', config)  //REST API
    const response = await fetch('http://localhost:4000/cart', config)  //REST API
    //const response = await fetch('https://redux-project-ee9d9-default-rtdb.firebaseio.com/cart.json', config)  //REST API

    //const response = await fetch(`${firebaseUrl}/cart.json`, config);  //another option
    if (!response.ok) throw new Error("Error sending data.");
  }
);

//cart data coming from firebase - from Cart Api
export const getCartAsync = createAsyncThunk(
  'cart/getCartAsync',
  async () => {
    const response = await fetch('http://localhost:4000/cart')  //REST API
    if (!response.ok) throw new Error("Unable to fetch data!");
    const data = await response.json();
    return data.slice(0, 10)  //returns a new array from cart with elements 0 through 9
    // return {
    //   items: data?.items || [],
    //   totalQuantity: data?.totalQuantity || 0
    // };
  }
);

 

