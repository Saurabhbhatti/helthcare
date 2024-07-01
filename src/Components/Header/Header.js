import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Header/Header.css';
import { OTC_NEW_LOGO } from '../../helper/assets';
import { menuItems } from '../../helper/content';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
    if (showMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showMenu, location.pathname]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = (path) => {
    if (path.startsWith('/blog')) {
      setActiveLink('/blog');
    } else {
      setActiveLink(path);
    }
    setShowMenu(false);
  };

  return (
    <header className='navbar'>
      <div className='logo-container'>
        <Link to='/'>
          <img
            src={OTC_NEW_LOGO}
            alt='logo'
            className='logo'
            width='160'
            height='100'
            loading='lazy'
          />
        </Link>
      </div>
      <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`${item.name === 'blog' ? 'border-none' : ''}`}
          >
            <Link
              to={`/${item.name}`}
              onClick={() => handleLinkClick(`/${item.name}`)}
              className={
                (item.name === 'blog' &&
                  location.pathname.startsWith('/blog')) ||
                activeLink === `/${item.name}`
                  ? 'active'
                  : ''
              }
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className='menu-toggle' onClick={toggleMenu}>
        <div className={`hamburger-icon ${showMenu ? 'open' : ''}`}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
