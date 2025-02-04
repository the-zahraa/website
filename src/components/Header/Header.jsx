import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./Header.css";

const services = [
  {
    title: "Web Design",
    description: "Crafting stunning, user-friendly designs tailored to your brand.",
    image: "/images/web-design.png",
  },
  {
    title: "Web Development",
    description: "Building robust, scalable websites with cutting-edge technologies.",
    image: "/images/web-development.png",
  },
  {
    title: "Telegram Bots",
    description: "Automating tasks with custom bots for Telegram platforms.",
    image: "/images/telegram-bots.png",
  },
  {
    title: "Mobile Applications",
    description: "Creating high-performance mobile apps for iOS and Android.",
    image: "/images/mobile-apps.png",
  },
  {
    title: "Smart Contracts",
    description: "Developing secure and efficient smart contracts on blockchain.",
    image: "/images/smart-contracts.png",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <header className={`header ${menuOpen ? "menu-open" : ""}`}>
      <div className="logo">Zahraa Naaim</div>

      <nav className="nav">
        {isMobile && (
          <div className={`burger-menu ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen((prev) => !prev)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li
            className="dropdown"
            onMouseEnter={() => !isMobile && setDropdownOpen(true)}
            onMouseLeave={() => !isMobile && setDropdownOpen(false)}
            onClick={() => isMobile && setDropdownOpen((prev) => !prev)}
          >
            <span className="dropdown-title">
              Services <span className={`arrow ${dropdownOpen ? "up" : "down"}`}>▼</span>
            </span>

            {dropdownOpen && (
              <div className="dropdown-menu">
                {services.map((service, index) => (
                  <div className="dropdown-item" key={index}>
                    {/* <img src={service.image} alt={service.title} className="service-image" /> */}
                    <div className="service-text">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </li>

          <li><a href="#projects">Projects</a></li>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#blog">Blog</a></li>
          {isMobile && <li><a href="#contact">Get in touch</a></li>}
        </ul>
      </nav>

      {!isMobile && (
        <div className="contact">
          <a href="mailto:info@zahraa.io">info@zahraa.io</a>
        </div>
      )}
    </header>
  );
};

export default Header;

