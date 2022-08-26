import Cart from '../components/Cart'
import { useSelector } from 'react-redux'
import Nav from '../components/Nav'

export default function Header({logo}) {

  const cart = useSelector(state => state.cart)

  return (
    <header id="header">
    <section id="logo" >
        
        <h1 class="title center">
            <img class="showme_img" src={logo.url2} alt={logo.alt} />
        </h1>
        <span class="subLogo"> Show off your work</span>
    </section>


    <section id="cart">
          <Cart 
            cart={cart}
          />        
    </section>

    <nav id="navMenu">
        <Nav />
    </nav>
</header>
  )
}
