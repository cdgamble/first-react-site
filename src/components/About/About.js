
import React from 'react';
import './About.css';
import AboutInfo from './AboutInfo'

function About() {
  return (
    <>
    <div id='About' className='aboutContainer'>
      <h1 className='title'>About</h1>
      <div className='aboutInfo'>
        <AboutInfo />
      </div>     
    </div> 
    </>
   );
}
export default About;
// About Function
