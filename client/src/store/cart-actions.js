import { createAsyncThunk } from '@reduxjs/toolkit';

//get products from fakeapi BE and display on FE
export const getProductAsync = createAsyncThunk(
  'product/getProductAsync',  //action type is slice-name/actioncreatormethod-name
  async () => {
    const response = await fetch('http://localhost:4000/products')  //REST API
    if (!response.ok) throw new Error('Unable to fetch product data');
    const data = await response.json();
    console.log(data)
    return data
  }
);

//update cart db from FE to firebase Cart API
export const sendCartAsync = createAsyncThunk(
  'cart/sendCartAsync',
  async (cart) => {
    const config = {
      method: 'PUT',  //the format already exists in firebase as POST
      //body: JSON.stringify(cart)   //another option

      body: JSON.stringify({   //when we send data to firebase so it will accept our format design below
        items: cart.cartitems, 
        totalQuantity: cart.totalQuantity,
        totalPrice: cart.totalPrice.toFixed(2), 
      })
    };
    const response = await fetch('http://localhost:4000/cart', config)  //REST API

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
  }
);

 

