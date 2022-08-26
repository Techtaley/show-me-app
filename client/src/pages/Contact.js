import React from 'react'

export default function Contact() {
  return (
    <>
        <h2 id="contact-title">Contact</h2>


        <div class="address">
            <p>
                9800 Woodhaven Boulvard<br />
                Rego Park, NY 11374
            </p>
        </div>    

        <form class="contact_form" id="contact_form" action="mailto:taloveous@expansivedesigns.com" method="post" enctype="text/plain">
            <input
                class="contact_name"
                type="text"
                name="name"
                placeholder="Your full name"
                id="contact_name"
                maxlength="30"
            />
                                    
            <input
                class="contact_email"
                type="text"
                name="email"
                placeholder="Your email address"
                maxlength="40"
            />

            <div id="contact_captcha_form">
                <label id="contact_captcha_entry"></label>		

                <input type="text" 
                    id="contact_spam" 
                    name="spam" 
                    placeholder="Type captcha." 
                    size="30" 
                    tabindex="213"
                    maxlength="6" required />
            </div>

            <input
                class="button contact_button"
                type="submit"
                value="Submit"
                id="contact"
            />
            <div class="prompts">	
                <label id="contactNamePrompt" class="textPromptMsg"></label>
                <label id="contactEmailPrompt" class="textPromptMsg"></label>
                <label id="contactEmailFormatPrompt" class="textPromptMsg"></label>
                <label id="contact_commentSpamPrompt" class="textPromptMsg"></label>
            </div>															
        </form>
        <br /><br />

        <div id="thankyou_contact">
            Thank you for contacting us!
        </div>	
    </>							
  )
}
