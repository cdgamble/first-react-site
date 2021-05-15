import React from 'react'
import './ContactInfo.css'
import contactImg from '../../images/contactImg.png';

function ContactInfo() {
  return (
    <>
    <div className='contactInfo'>
      <div id='contactImg'>
        <img src={contactImg} width='300px' height='100px' alt='Contact Me' />        
      </div>
      <div id='feedbackContainer'>          
        <form id='feedbackForm'>
          <input id='userName' type='text' placeholder='your name' />
          <input id='subject' type='text' placeholder='subject' />
          <input id='emailAddress' type='email' placeholder='your email' />
          <textarea id='message' placeholder='type message here...' rows='20' cols='80'></textarea>
          <input id='sendMsg' type='submit' value='Send Message' />
        </form>
      </div>
    </div>
    </>  
  )
}
export default ContactInfo;
// Contact Info Function
