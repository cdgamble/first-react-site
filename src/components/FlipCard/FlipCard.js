import React from 'react'
import './FlipCard.css'

function FlipCard() {
  return (
    <>
    <div className="card">   
      <div className="front"></div> 
        <div className="back">
          <div className="details">
            <p id='myname'>Charles David Gamble</p>
            <p>Web & Mobile</p>
            <p>Developer</p>
            <div className='social-icons'>
              <a className='fab fa-facebook' href='https://www.facebook.com' title='Facebook' target='_blank' rel='noreferrer'> </a>
              <a className='fab fa-youtube' href='https://www.youtube.com' title='Youtube' target='_blank' rel='noreferrer'> </a>
              <a className='fab fa-twitter' href='https://www.twitter.com' title='Twitter' target='_blank' rel='noreferrer'> </a>
              <a className='fab fa-instagram' href='https://www.instagram.com' title='Instagram' target='_blank' rel='noreferrer'> </a>
              <a className='fab fa-linkedin' href='https://www.linkedin.com' title='Linkedin' target='_blank' rel='noreferrer'> </a>
            </div>
          </div>    
        </div>
      </div>  
    </>    
  )
}
export default FlipCard;
// FlipCard Function