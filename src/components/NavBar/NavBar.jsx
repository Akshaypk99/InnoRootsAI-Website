import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate()
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
          <li onClick={() => {setMenuOpen(false); navigate('/home')}}>Home</li>
          <li onClick={() => {setMenuOpen(false); navigate('/about-us')}}>About</li>
          <li onClick={() => {setMenuOpen(false); navigate('/courses')}}>Courses</li>
          <li onClick={() => {setMenuOpen(false); navigate('/home')}}>Projects</li>
          <li onClick={() => {setMenuOpen(false); navigate('/home')}}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
