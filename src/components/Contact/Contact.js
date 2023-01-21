import React from "react";
import { withPrefix } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import phpFormScript from "../../components/Contact/send_form_email.php";

//IMAGE IMPORTS
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import contact_envelope from "../../images/svgicons/envelope.svg";
//CSS
import ContactCSS from "../Contact/ContactCSS.css";
const Contact = () => ( 
<>
<a href="/" id="contact" className="hidden_A_link" aria-hidden="true"></a>
    <div className="divider">
        <h2 className="divider_heading">CONTACT</h2>
    </div>
    <div className="contact_background_wrapper">
        <div className="contact_text_wrapper">
    <h2 id="contact_text_headline">Let's chat!</h2>
             <h2 id="contact_text_main">Why don't you drop me a line?<br></br>I am always open to discussing new projects, creative ideas and opportunities to bring them to life.<br></br></h2>
            <FontAwesomeIcon icon={faLeaf} className="fa-leaf"></FontAwesomeIcon>
        </div>
        <div id="formContainer">
            <img src={contact_envelope} alt="Envelope Icon" id="form_email_svg_icon"></img>
            <form method="post" action="https://formspree.io/xvoaveko" id="my_form">
                <input className="form_input" name="name" type="text" maxLength="255" placeholder="name"></input>
                <input className="form_input" name="_replyto" type="email" maxLength="255" placeholder="email"></input>
                <textarea id="text_area" name="message" placeholder="enter your message here.."></textarea>
                <input id="submit_button" type="submit" value="Send"></input>
                <div class="g-recaptcha" data-sitekey="6Lew1dcUAAAAAA0v7TY9rjGvyVQA5AZiHhAce9hO"></div>
            </form>
        </div>
        {/* <!--end of contact form container--> */}
    </div>
</>
)

export default Contact
