import React from 'react';
import ContactInfo from './ContactInfo';
import './Contact.css';
import Footer from '../Footer/Footer'

function Contact() {
  return (
    <>  
    <div id='Contact' className='contactContainer'>     
      <h1 className='contactTitle'>Contact</h1>
    </div>
    <div className='contactInfo'>
      <ContactInfo />
    </div>
    <div className='footer'>
      <Footer />
    </div>
    </>
  );
}
export default Contact;
// Contact Function