import React from "react";
import Partner1 from "../../../theme_front/assets/image/partner-geotrust.jpg";
import Partner2 from "../../../theme_front/assets/image/partner-symantec.jpg";
import Partner3 from "../../../theme_front/assets/image/partner-thawte.jpg";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div className="front_side">
      <div className="web_footer">
        <footer className="footer section bd-container">
          <div className="footer__container bd-grid">
            <div className="footer__content">
              <a href="#" className="footer__logo">
                Nyatapol
              </a>
              <span className="footer__description">Technologies</span>
              <div>
                <a href="#" className="footer__social" target="_blank">
                  <SocialIcon url="" />
                </a>
                <a href="#" className="footer__social" target="_blank">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="#" className="footer__social" target="_blank">
                  <SocialIcon url="https://linkedin.com/in/jaketrent" />
                </a>
              </div>
            </div>

            <div className="footer__content">
              <h3 className="footer__title">Company</h3>
              <ul>
                <li>
                  <a href="#about" className="footer__link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    What We Do
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    How We Do
                  </a>
                </li>
                <li>
                  <a href="#contact" className="footer__link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__content">
              <h3 className="footer__title">Services</h3>
              <ul>
                <li>
                  <a href="#services" className="footer__link">
                    Software Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="footer__link">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="footer__link">
                    Network Consultancy
                  </a>
                </li>
                <li>
                  <a href="#services" className="footer__link">
                    Biometrics Solution
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__content ">
              <h3 className="footer__title partners">Partners</h3>
              <ul className="partners__list">
                <li className="partner__img">
                  <img src={Partner1} href="#" className="partners__img" />
                </li>
                <li>
                  <img src={Partner2} href="#" className="partners__img" />
                </li>
                <li>
                  <img src={Partner3} href="#" className="partners__img" />
                </li>
              </ul>
            </div>
          </div>

          <p className="footer__copy">
            &#169; {new Date().getFullYear()} Nyatapol Technologies Limited. All
            right reserved
          </p>
        </footer>
        {/* {useScript('../theme_web/assets/js/main.js')} */}
      </div>
    </div>
  );
}
