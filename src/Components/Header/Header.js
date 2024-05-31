import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";
import logo from "../../Assets/Image/Icon.jpg";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showMenu]);

  return (
    <>
      <p className="disclaimer">
        Telehealth weight loss treatment for a Healthier, Happier You
      </p>
      <header className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="logo"
              width="160"
              height="100"
              loading="lazy"
            />
          </Link>
        </div>
        <ul className={`nav-links ${showMenu ? "show" : ""}`}>
          {[
            "home",
            "appointments",
            "otc-team",
            "how-it-works",
            "refills",
            "pricing",
            "blog",
          ].map((link) => (
            <li key={link}>
              <Link to={`/${link}`} onClick={toggleMenu}>
                {link.charAt(0).toUpperCase() + link.slice(1).replace("-", " ")}
              </Link>
            </li>
          ))}
        </ul>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger-icon ${showMenu ? "open" : ""}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
