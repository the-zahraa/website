import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <header className={`header ${menuOpen ? "menu-open" : ""}`}>
      {/* Logo on the left */}
      <div className="logo">Zahraa Naaim</div>

      <nav className="nav">
        {/* Burger Menu for smaller screens */}
        {isMobile && (
          <div
            className={`burger-menu ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          {isMobile && (
            <li>
              <a href="#Get in touch">Get in touch</a>
            </li>
          )}
        </ul>
      </nav>

      {/* Email stays on the right for larger screens */}
      {!isMobile && (
        <div className="contact">
          <a href="mailto:info@zahraa.io">info@zahraa.io</a>
        </div>
      )}
    </header>
  );
};

export default Header;
