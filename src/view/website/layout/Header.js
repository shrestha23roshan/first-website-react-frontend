import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "../../../theme_front/assets/css/styles_front.css";
import Logo from "../../../theme_front/assets/image/logo.png";

export default function Header() {
    const headerStyle ={
        margin: '5px 228px',
    }
  return (
    <div className="front_side">
      <header className="l-header" id="header">
        <nav className="nav">

          {/* <a href="#" className="nav__logo">
            <img src={
              dynamicLogo ? (dynamicLogo) : (StaticLogo)
            }
              alt="Nyatapol Logo" />
            <p>{dynamicSiteName ? (dynamicSiteName) : (staticSiteName)}</p>
          </a> */}
          <a href="/" className="nav__logo">
            <img src={Logo}
              alt="Nyatapol Logo" />
            <p>Nyatapol Technologies</p>
          </a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <NavHashLink
                smooth
                to="#home"
              >
                <li className="nav__item"><a className="nav__link">
                  Home
                </a></li>
              </NavHashLink>
              <NavHashLink
                smooth
                to="#about"
              >
                <li className="nav__item"><a className="nav__link">
                  About Us
                </a></li>
              </NavHashLink>
              <NavHashLink
                smooth
                to="#services"
              >
                <li className="nav__item"><a className="nav__link">
                  Services
                </a></li>
              </NavHashLink>
              <NavHashLink
                smooth
                to="#products"
              >
                <li className="nav__item"><a className="nav__link">
                  Products
                </a></li>
              </NavHashLink>
              <NavHashLink
                smooth
                to="#contact"
                // to="/contact" // redirect to other page eg.read more page or redirect with buffering 
              >
                <li className="nav__item"><a className="nav__link">
                  Contact Us
                </a></li>
              </NavHashLink>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className='bx bx-menu'></i>
          </div>
        </nav>
        {/* {useScript('../theme_web_backup/assets/js/main.js')} */}
      </header>
    </div>
  );
}
