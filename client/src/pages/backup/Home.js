import { useEffect, useState} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Nav from '../components/Nav'
import ProductCard from '../components/ProductCard'
import About from './About'
import Contact from './Contact'
import News from './News'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
//import { useNavigate } from 'react-router-dom'

import { getProductAsync } from './../store/cart-actions'

import ShoppingBag from '../components/ShoppingBag'
import { clear } from './../store/cartSlice'


const linkdata = [
    {
        logo: {
            url1: "https://cdn.pixabay.com/photo/2014/04/03/10/38/trinity-310931_1280.png",
            url2: "https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_960_720.png",
            alt: "Show Me Logo",
            title: "Show Me",
        },
        news: {
            url: "https://images.pexels.com/photos/5699062/pexels-photo-5699062.jpeg?cs=srgb&dl=pexels-rodnae-productions-5699062.jpg&fm=jpg"
        },
        social: {
            fb: "https://www.facebook.com/expansivedesigns/?ref=hl",
            ig: "https://www.instagram.com/expansivedesigns/",
            tw: "https://twitter.com/expansivedesign",
            li: "https://www.linkedin.com/company/expansive-designs?trk=public_profile_topcard-current-company"
        }    
    }
]

export default function Home() {
  const dispatch = useDispatch()
  const [links, setLinks] = useState(linkdata);

  //const { cartIsVisible, notification } = useSelector(state => state.home)
  const { cartIsVisible } = useSelector(state => state.home)

  /* MENU */
  const menu = [  //these are all the possible FE selections based on categories stored in db
        {
            id: "women's clothing",
            title: "women's clothing"
        },
        {
            id: "men's clothing",
            title: "men's clothing"
        },                        
        {
            id: "electronics",
            title: "electronics"
        },
        {
            id: "jewelery",
            title: "jewelry"
        }   
    ]

  const  { items } = useSelector(state => state.product)  //menu items from the store
  const { cartitems, totalPrice, totalQuantity } = useSelector(state => state.cart)
  const [products, setProducts] = useState([])  //used to set FE products 
  const [selected, setSelected] = useState("")  //used to set menu  select

  useEffect(() => {
    if(!selected) {  
        setProducts(items.filter(p => p.category))  //from BE
     } else {
        setProducts(items.filter(p => p.category === selected))
     }

    setLinks(linkdata)
    //console.log(links)

  }, [items, selected])


  //we can fetch() data and utilize useEffect() to trigger a side effect like fetching data or loading with data for the first time 
  //firebase (noSQL db) builds and maintains data

  //api call to get products from rest api onload and update whenever state changes 
  useEffect(()=> { 
    dispatch(getProductAsync())

  }, [dispatch])

    const handleClearBag = () => {
        dispatch(clear(cartitems, totalPrice, totalQuantity))
    }

  return (
    <>
        <div id="wrapper">
            {links.map(link => 
                <Header 
                    logo={link.logo}
                />
            )} 

            { cartIsVisible && 

                <section id="gallery_cart">
                <h1>Shopping Bag</h1>

                    <div className="gallery_cart_div">
                        <button className="empty_button" onClick={handleClearBag}>Empty Bag</button>
                    </div>
                
                    {cartitems.map(cartitem => 
                        <ShoppingBag 
                            key={cartitem.id}
                            id={cartitem.id}                        
                            cartitem={cartitem}
                            totalQuantity={totalQuantity}
                            totalPrice={totalPrice}
                        />                                
                    )}

                <div className="cart_totals">
                    <span>{totalQuantity} Items</span>
                    <span>Total Cost: &nbsp; &nbsp; ${totalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>                    
                    
                </section>    
            }         
           
            <main id="main">
            <h1>Products</h1> 
                <section id="gallery_section">
                    <aside id="gallery_menu">

                    <div className="project_menu">
                        {menu.map(item =>  //map through all menuItems above and get categories
                            <Menu 
                                id={item.id}                    
                                title={item.title}
                                active={selected === item.id}
                                setSelected={setSelected}
                            />
                        )}  
                                              
                    </div>

                    </aside>

                    {/* <hr class="gallery_menu_hr"></hr> */}

                    <section id="gallery_main">
                        { products.map(product =>                    
                            <ProductCard   
                                product={product} 
                            />        
                        )}                    
                    </section>    

                </section>
                
                <section id="middleMenu">
                    <Nav/>
                </section> 

                <section id="about_section">				
                    <About />
                </section> 

                <section id="news_section">	
                    {links.map(link =>                     
                        <News 
                            news={link.news}
                        />
                    )}			
                </section>                

                <section id="contact_section">
                    <Contact />
                </section>
            </main>

        </div>  
        <footer id="footer"> 
        {links.map(link => 
            <Footer 
                logo={link.logo}
                social={link.social}
            />        
        )}           
        </footer>         
    </>
  )
}
