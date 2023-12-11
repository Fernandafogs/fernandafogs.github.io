import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";
import Linkedin from "../../assets/linkedin_logo.png"
import GitHub from "../../assets/icon_github.png"
import Twitter from "../../assets/twitter_logo.png"

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j59nq3p','template_ae9ubjl', form.current, '4iwdjwLIkQn_40rLX')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert("Email sent successfully");
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
    <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input className="name" type="text" placeholder="Your Name" name="from_name"/>
                <input className="email" type="email" placeholder="Your Email" name="from_email" />
                <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
                <div className="links">
                    <a href="https://www.linkedin.com/in/fernanda-ramos-fogaca/" target="_blank">
                        <img src={Linkedin} alt="Linkedin" className="link" />
                    </a>
                    <a href="https://github.com/Fernandafogs" target="_blank">
                        <img src={GitHub} alt="GitHub" className="link" />
                    </a>
                    <a href="https://twitter.com/fernandafogaca" target="_blank">
                        <img src={Twitter} alt="Twitter" className="link" />
                    </a>
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact;