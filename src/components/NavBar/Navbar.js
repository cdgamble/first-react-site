import React, { useState } from 'react';
import logo from './logo.png';
import Link from '../Link/Link'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const MobileMenu = () => setClick(true);

  return (
    <>
      <nav className='navbar'>
        <div className='navContainer'>
          <div name='Home' className='navChoices'>
            <a href='#Home'><img src={logo} className='navLogo' alt='logo'/></a>
          </div>
          <div className='menuIcon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'navMenu active' : 'navMenu'}>
            <li className='navItem'>
              <Link name='Home' className='navLinks' onClick={MobileMenu}>
                Home
              </Link>
            </li>
            <li className='navItem'>
              <Link name='About' className='navLinks' onClick={MobileMenu}>
                About
              </Link>
            </li>
            <li className='navItem'>
              <Link name='Skills' className='navLinks' onClick={MobileMenu}>
                Skills
              </Link>
            </li>
            <li className='navItem'>
              <Link name='Contact' className='navLinks' onClick={MobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        </nav>
      </>
   );
}
export default Navbar;
// Navbar Function
