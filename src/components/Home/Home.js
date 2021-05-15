import React from 'react';
import Header from '../Header/Header'
import Videoback from '../../videos/homepage.mp4';
import './Home.css';

function Home() {
  return (    
    <div id='Home' className='homeContainer'>
      <video src={Videoback} autoPlay loop muted />
      <Header />
      <h1 id='name'>Charles David Gamble</h1>
      <h2 id='dev'>Web and Mobile Developer</h2>
      <h2 id='site'>Your Website Awaits</h2>
      <div className='waiting'>
        <p>What are you waiting for?</p>
      </div>
      <div className='building'>  
        <p>Lets start building</p>
      </div>
      <p className='rollingTextBox'>
        <span className='rollingText'>YOUR DREAM SITE</span>
      </p>
      <div className='btnGetStarted'>
         <a className='contactLink' href='#Contact'>Get Started</a>
      </div>
    </div>
  );
}
export default Home;
// Home Function