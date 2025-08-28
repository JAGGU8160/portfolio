import React, { useState, useEffect } from "react";
import { FaLinkedinIn, FaInstagram, FaPhone } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { MdMailOutline,MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Link as ScrollLink} from "react-scroll";


export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="container">
        <div className={`header-top ${scrolled ? "hidden" : ""}`}>
          <div className="logo-div">
            <a href="https://in.linkedin.com/in/mishra-jagmohan"className="apps-log"target="_blank"aria-label="LinkedIn"><FaLinkedinIn className="apps-logo" /></a>
            <a href="https://github.com/JAGGU8160"className="apps-log"target="_blank"rel="noopener noreferrer"aria-label="GitHub"><VscGithub className="apps-logo" /></a>
            <a href="https://www.instagram.com/mishra_jagmohan_/"className="apps-log"target="_blank"rel="noopener noreferrer"aria-label="Instagram"><FaInstagram className="apps-logo" /></a>
          </div>
 
          <div className="contact-div">
            <a className="contact-div-childs" href="tel:8160810690">
              <MdOutlineLocalPhone className="contact-icons" />
              <span className="contact-txt">+91 8160810690</span>
            </a>
            <a className="contact-div-childs" href="mailto:mishrajagmohan0@gmail.com">
              <MdMailOutline className="contact-icons" />
              <span className="contact-txt">mishrajagmohan0@gmail.com</span>
            </a>
            <a className="contact-div-childs" href="#">
              <IoLocationOutline className="contact-icons" />
              <span className="contact-txt">Shahibaugh</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="/">Mishra Jagmohan</a>
          

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar" aria-controls="main-navbar"aria-expanded="false"aria-label="Toggle navigation">
            <span className="toggle-btn"><IoMenu /></span>
          </button>

          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <ScrollLink  className="nav-link" to="home" smooth={true} duration={500} offset={-56}>Home</ScrollLink >
              </li>
              <li className="nav-item">
                <ScrollLink   className="nav-link"  to="technologies" smooth={true} duration={500} offset={-56}>Technologies</ScrollLink  >
              </li>
              <li className="nav-item">
                <ScrollLink  className="nav-link"  to="resume" smooth={true} duration={500} offset={-56}>Resume</ScrollLink >
              </li>
              <li className="nav-item">
                <ScrollLink  className="nav-link"  to="projects" smooth={true} duration={500} offset={-56}>Projects</ScrollLink >
              </li>
              <li className="nav-item">
                <ScrollLink  className="nav-link"  to="contact" smooth={true} duration={500} offset={-56}>Contact Me</ScrollLink >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
