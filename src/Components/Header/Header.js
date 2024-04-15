import React from 'react';
import '../Header/Header.css';

class NavBar extends React.Component {
  render() {
    return (
      <header className="navbar">
        <ul className="nav-links">
          <li><a href="#">Our Doctors</a></li>
          <li><a href="#">How it Works</a></li>
          <li><a href="#">Book a Session</a></li>
        </ul>
        <div>
          <button className='login-button'>Login</button>
          <button className='signin-button'>Sign In</button>  
        </div>
      </header>
    );
  }
}

export default NavBar;
