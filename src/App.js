import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
// App Function
