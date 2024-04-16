import React from 'react';
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
          <li><a href="#">Our Doctors</a></li>
          <li><a href="#">How it Works</a></li>
          <li><a href="/appointments">Book a Session</a></li>
        </ul>
      </header>
      </>
    );
  }
}

export default NavBar;
