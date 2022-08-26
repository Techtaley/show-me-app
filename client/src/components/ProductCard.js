import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendCartAsync } from '../store/cart-actions'
import { add } from './../store/cartSlice'

//Home:  ProductCard displays a list of products on FE and when clicked adds them to the cart.

export default function ProductCard({product}){  //pass entire {object} or pass object's props { id, title, price, image }  

  const dispatch = useDispatch();  //invokes the hook
  //const navigate = useNavigate();  //invokes the hook

  //1. cartSlice dispatches to add product to cart (firebase BE)  
  const handleAddToCart = ()=> {
    dispatch(add(product))  //passing object or pass object's props { id, image, title, price } 
    //navigate("/cart")  //then navitate to the cart
  }
  
//2. get cart data from cartSlice 
const cart = useSelector(state => state.cart)  //will not work in firebase adding the items [] array 

//3. homeSlice dispatches sendCartAsync to make API call to send cart data to BE (firebase)
useEffect(() => {
  dispatch(sendCartAsync(cart))  //passing cart object, optionally pass object's props { id, image, title, price, etc. }
}, [cart, dispatch])

  return (
    <div className="gallery_items"> 
      <img className="image" src={product.image} alt="product pic"  />
      <div className="gallery_items_text">{product.title}
      <span>${product.price}</span>
      <button onClick={handleAddToCart}>Add to Cart</button>
      </div> 
    </div>
  )
}
