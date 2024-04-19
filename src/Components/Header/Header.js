import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import '../Header/Header.css';

class NavBar extends React.Component {
  render() {
    return (
      <>
      <p className='disclamer'>
      Telehealth weight loss treatment for a Healthier, Happier You
      </p>
      <header className="navbar">
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
