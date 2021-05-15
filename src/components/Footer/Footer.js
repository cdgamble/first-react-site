import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footerContainer'>
      <div id='footerLeft'>
        <div className='footerSocialIcons'>
                <a className='fab fa-facebook fa-3x' href='https://www.facebook.com' title='Facebook' target='_blank' rel='noreferrer'> </a>
                <a className='fab fa-youtube fa-3x' href='https://www.youtube.com' title='Youtube' target='_blank' rel='noreferrer'> </a>
                <a className='fab fa-twitter fa-3x' href='https://www.twitter.com' title='Twitter' target='_blank' rel='noreferrer'> </a>
                <a className='fab fa-instagram fa-3x' href='https://www.instagram.com' title='Instagram' target='_blank' rel='noreferrer'> </a>
                <a className='fab fa-linkedin fa-3x' href='https://www.linkedin.com' title='Linkedin' target='_blank' rel='noreferrer'> </a>
        </div>
      </div>
      <div id='footRight'>
        <div className='footerInfo'>
          <p>Phone : 1-519-854-0227</p>
          <p>Address : London, Ontario, Canada</p>
          <p>Email : charlesgamble@execulink.com</p>
          <p>Copyright © {new Date().getFullYear()} Charles David Gamble</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
// Footer Function