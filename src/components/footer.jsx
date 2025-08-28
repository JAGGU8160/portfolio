import React from 'react';
import { Link as ScrollLink} from "react-scroll";
import { Element } from "react-scroll";
import { IoIosMail } from "react-icons/io";
import { FaPhone ,FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <Element className="cmn-sec  portfolio-footer" name="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h5 className="footer-logo">Mishra Jagmohan</h5>
            <p className="footer-desc">© {new Date().getFullYear()} Mishra Jagmohan. All rights reserved.</p>
            <p className="text-muted">Passionate developer creating web solutions with modern technologies.</p>
          </div>

          <div className="col-md-3">
            <h5 className="footer-head">Quick Links</h5>
            <ul className="list-unstyled ">
              <li><ScrollLink className="footer-link" to="home" smooth={true} duration={500} offset={-56}>Home</ScrollLink></li>
              <li><ScrollLink className="footer-link"  to="technologies" smooth={true} duration={500} offset={-56}>Technologies</ScrollLink></li>
              <li><ScrollLink className="footer-link"  to="resume" smooth={true} duration={500} offset={-56}>Resume</ScrollLink></li>
              <li><ScrollLink className="footer-link"  to="projects" smooth={true} duration={500} offset={-56}>Projects</ScrollLink></li>
              <li><ScrollLink className="footer-link"  to="contact" smooth={true} duration={500} offset={-56}>Contact Me</ScrollLink></li>
            </ul>
          </div>

          <div className="col-md-4 ">
            <h5 className="footer-head">Contact</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:mishrajagmohan0@gmail.com" className="footer-link d-flex align-items-center">
                  <span className="me-2"><IoIosMail /></span> mishrajagmohan0@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918160810690" className="footer-link d-flex align-items-center">
                  <span className="me-2"><FaPhone /></span> +91 8160810690
                </a>
              </li>
              <li className="d-flex align-items-center">
                <span className="me-2"><FaLocationDot /></span> Shahibaugh, Ahmedabad
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Footer;
