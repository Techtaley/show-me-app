import React from 'react'
import { useDispatch } from 'react-redux'
import { add, remove } from './../store/cartSlice'

//Home: when user clicks on Shopping bag, then:

//cartSlice dispatches to add/remove items to/from cart (firebase BE)  
export default function ShoppingBag({cartitem, totalPrice, totalQuantity}) {
  const dispatch = useDispatch()

  const handleAddToBag = () => {  //adding from store
    dispatch(add(cartitem, totalPrice, totalQuantity))
  }

  const handleRemoveFromBag = () => {  //remove from store
    dispatch(remove(cartitem, totalPrice, totalQuantity))
  }

  return (
    <div className='cart'>

      <div className="cart_items">
        <img className="cart_item_image" src={cartitem.image} alt={cartitem.title}/>
        <div className="cart_item_list">    
          <div className="cart_item item_title">{cartitem.title}</div>
          <div className="cart_item item_price">${cartitem.price} each</div>
          <div className="cart_item item_quantity">{cartitem.totalQuantity} </div>
          <div className="shoppingcart_btn_div">          
            <button className="shoppingcart_btn" onClick={handleRemoveFromBag}>-</button> 
            <span className="shoppingcart_qty">{cartitem.totalQuantity}</span> 
            <button className="shoppingcart_btn" onClick={handleAddToBag}>+</button>            
          </div>
        </div>            
      </div>

      <div className="item_total_price">${cartitem.totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
    </div>
  )
}
