import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';
import logo from '../../Assets/Image/Icon.jpg';

class NavBar extends React.Component {
  render() {
    return (
      <>
        <p className='disclamer'>
          Telehealth weight loss treatment for a Healthier, Happier You
        </p>
        <header className="navbar">
          <div className="logo-container">
            <img src={logo} alt="Your Logo" className="logo" />
          </div>
          <ul className="nav-links">
            <li><a href="#doctors">Our Doctors</a></li>
            <li><Link to='/howitworks'>How it Works</Link></li>
            <li><Link to="/appointments">Book a Session</Link></li>
          </ul>
        </header>
      </>
    );
  }
}

export default NavBar;
