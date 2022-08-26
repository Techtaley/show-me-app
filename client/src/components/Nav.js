import { NavHashLink } from 'react-router-hash-link'
import classes from './Nav.module.css'

export default function Nav() {
  return (
    <>
        <NavHashLink activeClassName={classes.active} smooth to='/#wrapper'>home</NavHashLink>
        <NavHashLink activeClassName={classes.active} smooth to='/#about_section'>about</NavHashLink>
        <NavHashLink activeClassName={classes.active} smooth to='/#news_section'>news</NavHashLink>
        <NavHashLink activeClassName={classes.active} smooth to='/#contact_section'>contact</NavHashLink>        
        {/* <button className="logout_button" type="button">logout</button> */}
    </>
  )
}
