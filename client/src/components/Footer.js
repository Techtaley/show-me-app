import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';

import { NavHashLink } from 'react-router-hash-link'
import classes from './Nav.module.css'

export default function Footer({logo, social}) {
  return (
    <>
    <div id="footer_primary">
        <div class="footer_logo">
            <img
                class="footer_logo_image"
                src={logo.url2}
                alt="footer pic"
            />
            <h1 class="footer_logo_text">Show Me</h1>


            <div className="footer_links">
                <NavHashLink activeClassName={classes.active} smooth to='/#wrapper'>home</NavHashLink>
                <NavHashLink activeClassName={classes.active} smooth to='/#about_section'>about</NavHashLink>
                <NavHashLink activeClassName={classes.active} smooth to='/#news_section'>news</NavHashLink>
                <NavHashLink activeClassName={classes.active} smooth to='/#contact_section'>contact</NavHashLink>
            </div>
        </div>

        <div class="footer_subscribe">
            <h2>Subscribe</h2>
            <p class="footer_paragraph">
                We'll email you about new items!
            </p>

            <form 
                class="subscribe_form" 
                id="subscribe_form" 
                action="mailto:taloveous@expansivedesigns.com" 
                method="post" 
                enctype="text/plain"
            >
                <input
                    class="subscribe_email"
                    type="text"
                    name="subscribe"
                    placeholder="Your email address"
                    maxlength="40"
                />
                <div id="subscribe_captcha_form">
                    <label id="subscribe_captcha_entry"></label>
                    <input type="text" 
                        id="subscribe_spam" 
                        name="spam" 
                        placeholder="Type captcha." 
                        size="30"
                        maxlength="6" 
                        />
                </div>	

                <input
                    class="button subscribe_button"
                    type="submit"
                    value="Submit"
                    id="subscribe"
                />
                <div class="prompts">	
                    <label id="subscribeEmailPrompt" class="textPromptMsg"></label>	
                    <label id="subscribeEmailFormatPrompt" class="textPromptMsg"></label>
                    <label id="subscribe_commentSpamPrompt" class="textPromptMsg"></label>								
                </div>

            </form>

            <div id="thankyou_subscribe">
                Thank you for subscribing!
            </div>

        </div>

        <div class="footer_social">
            <h2>Let's Connect!</h2>

            <div class="footer_social_images">
                <a href={social.fb} target="_blank" rel="noreferrer noopener"> 
                    <Facebook className="material-icons" style={{ color: "#333"}} to={social.fb}/>
                </a>

                <a href={social.tw} target="_blank" rel="noreferrer noopener"> 
                    <Twitter className="material-icons" style={{ color: "#333"}}/>
                </a>
            
                <a href={social.li} target="_blank" rel="noreferrer noopener"> 
                    <LinkedIn className="material-icons" style={{ color: "#333"}}/>
                </a>    
            </div>
        </div>

    </div>	        

    <div id="footer_secondary">
        <p>
            Copyright&copy; Legendary Gemstone LLC dba Expansive
            Designs &nbsp; &bullet; &nbsp; Woodhaven, NY 11421
        </p>
    </div>
    </>

  )
}
