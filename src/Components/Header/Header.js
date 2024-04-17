import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import '../Header/Header.css';

class NavBar extends React.Component {
  render() {
    return (
      <>
      <p className='disclaimer'>
      Telehealth weight loss treatment for a Healthier, Happier You
      </p>
      <header className="navbar">
        <ul className="nav-links">
          <li><a href="#">Our Doctors</a></li>
          <li><a href="#">How it Works</a></li>
          <li><Link to="/appointments">Book a Session</Link></li>
        </ul>
      </header>
      </>
    );
  }
}

export default NavBar;
