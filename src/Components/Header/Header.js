import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';
import logo from '../../Assets/Image/Icon.jpg';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <p className='disclaimer'>
        Telehealth weight loss treatment for a Healthier, Happier You
      </p>
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="logo.jpg" className="logo" width="160" height="100" />
        </div>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
          <li><Link to='/home' onClick={toggleMenu}>Home</Link></li>
          <li><Link to='/howitworks' onClick={toggleMenu}>How it Works</Link></li>
          <li><Link to="/appointments" onClick={toggleMenu}>Book a Session</Link></li>
          <li><Link to="/otcteam" onClick={toggleMenu}>OTC Team</Link></li>
          <li><Link to="/refills" onClick={toggleMenu}>Refills</Link></li>
          <li><Link to="/pricing" onClick={toggleMenu}>Pricing</Link></li>
        </ul>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger-icon ${showMenu ? 'open' : ''}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
