import { useDispatch } from 'react-redux'
import { toggle } from './../store/homeSlice'
//import { NavLink } from 'react-router-dom'
import Bag from '@mui/icons-material/ShoppingBag';

export default function CartIcon({id, cart, totalPrice, cartIsVisible}) {
  const dispatch = useDispatch()


  //click cart, cart slice dispatches toggle to display the shopping cart
  const handleToggle = () => {
    dispatch(toggle({
      cartIsVisible
    }))
  }

  return (  
    <div className="cart_div">
      <Bag onClick={handleToggle} /> 
      <div className="shopping_bag">{cart.totalQuantity} items</div>     
    </div>
  )
}


