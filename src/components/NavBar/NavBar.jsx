import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import logo from "../../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        {/* <img className='' src={logo} /> */}
      </div>

      {/* Hamburger Menu Button */}
      <button className={`header-burger-btn burger ${menuOpen && 'burger--active'}`} data-test="header-burger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ?
          <span className="js-header-burger-close-title visually-hidden" hidden="">Close Menu</span>
          :
          <span className="js-header-burger-open-title visually-hidden">Open Menu</span>
        }
        <div className="burger-box">
          <div className="burger-inner header-menu-icon-tripleLineHamburger">
            <div className="top-bun"></div>
            <div className="patty"></div>
            <div className="bottom-bun"></div>
          </div>
        </div>
      </button>

      {/* Nav Links */}
      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => setMenuOpen(false)}>Home</li>
          <li onClick={() => setMenuOpen(false)}>About</li>
          <li onClick={() => setMenuOpen(false)}>Courses</li>
          <li onClick={() => setMenuOpen(false)}>Projects</li>
          <li onClick={() => setMenuOpen(false)}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
