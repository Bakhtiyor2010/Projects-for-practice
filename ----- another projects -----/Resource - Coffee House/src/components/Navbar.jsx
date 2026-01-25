import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import cup from "../assets/coffee-cup.png";
import openBtnImg from "../assets/open-button.png";
import closeBtnImg from "../assets/close-button.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <div>
      <nav>
        <a href="/">
          <img className="nav-logo" src={logo} alt="logo" />
        </a>

        <ul className="desk">
          <li>
            <a href="#favorite-coffee">Favorite coffee</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#mobile-app">Mobile app</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>

        <a href="#" className="menu desk">
          Menu
          <img src={cup} alt="cup" />
        </a>

        {/* Open button */}
        {!isOpen && (
          <button className="nav-btn open-btn" onClick={() => setIsOpen(true)}>
            <img src={openBtnImg} alt="Open Menu" />
          </button>
        )}

        {/* Close button */}
        {isOpen && (
          <button
            className="nav-btn close-btn"
            onClick={() => setIsOpen(false)}
          >
            <img src={closeBtnImg} alt="Close Menu" />
          </button>
        )}
      </nav>

      {/* Responsive Navbar */}
      <nav
        className="responsive-nav"
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <ul>
          <li>
            <a href="#favorite-coffee">Favorite coffee</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#mobile-app">Mobile app</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>

        <a href="#" className="menu">
          Menu
          <img src={cup} alt="cup" />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;