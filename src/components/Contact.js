import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

export default function ContactUs() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm(process.env.REACT_APP_EMAILJS_KEY, process.env.REACT_APP_EMAILJS_TEMPLATE_KEY, e.target, process.env.REACT_APP_EMAILJS_USER_ID)
        .then((result) => {
            alert("Your Email was sent! Thank you!");
        }, (error) => {
            console.log(error.text);
        });
    }
  
    return (
        <div class="contact-form">
        <h2 id="title">Contact Me</h2>
      <form class="contact-form" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" class="name" />
        <input type="email" name="email" placeholder="Your Email" class="email"/>
        <textarea name="message" placeholder="Leave a message! I will get back to you ASAP!" class="textarea" rows="10"/>
        <div class="btn-container">
        <input type="reset" value="Reset Form" class='reset'/>
        <input type="submit" value="Send" class='submit'/>
        </div>
      </form>
      </div>
    );
  }