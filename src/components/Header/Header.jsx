import React from "react";
import "./Header.css";


const Header=() =>{
    return(

        <header className = "header">
            <nav className="nav">
                <ul className="nav-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about-me">About Me</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>

            </nav>
        </header>

        
    );
}

export default Header;