import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';
import logo from '../../Assets/Image/Icon.jpg';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      showModal: false 
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleModal = this.toggleModal.bind(this); 
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { showMenu, showModal } = this.state;

    return (
      <>
        <p className='disclaimer'>
          Telehealth weight loss treatment for a Healthier, Happier You
        </p>
        <header className="navbar">
          <div className="logo-container">
            <img src={logo} alt="Your Logo" className="logo" />
          </div>
          <ul className={`nav-links ${showMenu && !showModal ? 'show' : ''}`}>
            <li><Link to='/howitworks'>How it Works</Link></li>
            <li><Link to="/appointments">Book a Session</Link></li>
            <li><Link to="/otcteam">OTC Team</Link></li>
            <li><Link to="/appointments-refills">Refills</Link></li>
          </ul>
          <div className="menu-toggle" onClick={this.toggleMenu}>
            <div className={`bar ${showMenu ? 'change' : ''}`}></div>
            <div className={`bar ${showMenu ? 'change' : ''}`}></div>
            <div className={`bar ${showMenu ? 'change' : ''}`}></div>
            <div className={`bar ${showMenu ? 'change' : ''}`}></div>
          </div>
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={this.toggleModal}>&times;</span>
                <ul className="modal-links">
                  <li><Link to='/howitworks'>How it Works</Link></li>
                  <li><Link to="/appointments">Book a Session</Link></li>
                  <li><Link to="/otcteam">OTC Team</Link></li>
                  <li><Link to="/appointments-refills">Refills</Link></li>
                </ul>
              </div>
            </div>
          )}
        </header>
      </>
    );
  }
}

export default NavBar;
