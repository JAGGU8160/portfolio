import { useState, useEffect, useCallback, memo } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";

const NAV_LINKS = [
  { to: "home", label: "Home" },
  { to: "technologies", label: "Technologies" },
  { to: "resume", label: "Resume" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

const Navbar = memo(() => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // RAF-throttled scroll handler — no vibration
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span className="brand-first">Mishra </span>
            <span className="brand-last">Jagmohan</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="toggle-btn">
              {menuOpen ? <IoClose /> : <IoMenu />}
            </span>
          </button>

          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="main-navbar"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {NAV_LINKS.map((link) => (
                <li className="nav-item" key={link.to}>
                  <ScrollLink
                    className={`nav-link ${activeLink === link.to ? "nav-active" : ""}`}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-72}
                    spy={true}
                    onSetActive={() => setActiveLink(link.to)}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                    <span className="nav-link-underline" />
                  </ScrollLink>
                </li>
              ))}
            </ul>
            <ScrollLink
              className="nav-cta"
              to="contact"
              smooth={true}
              duration={500}
              offset={-72}
              onClick={() => setMenuOpen(false)}
            >
              Let's Talk
            </ScrollLink>
          </div>
        </div>
      </nav>
    </header>
  );
});

Navbar.displayName = "Navbar";
export { Navbar };
export default Navbar;
