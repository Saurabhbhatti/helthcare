import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';
import logo from '../../Assets/Image/Icon.jpg';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState((prevState) => ({
      showMenu: !prevState.showMenu,
    }));
  }

  render() {
  const { showMenu } = this.state;

  return (
    <>
      <p className='disclaimer'>
        Telehealth weight loss treatment for a Healthier, Happier You
      </p>
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Your Logo" className="logo" width="160" height="100px"/>
        </div>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
          <li><Link to='/home' onClick={this.toggleMenu}>Home</Link></li>
          <li><Link to='/howitworks' onClick={this.toggleMenu}>How it Works</Link></li>
          <li><Link to="/appointments" onClick={this.toggleMenu}>Book a Session</Link></li>
          <li><Link to="/otcteam" onClick={this.toggleMenu}>OTC Team</Link></li>
          <li><Link to="/refills" onClick={this.toggleMenu}>Refills</Link></li>
          <li><Link to="/pricing" onClick={this.toggleMenu}>Pricing</Link></li>
        </ul>
        <div className="menu-toggle" onClick={this.toggleMenu}>
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
}

export default NavBar;
