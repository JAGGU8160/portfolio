import { memo } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const NAV = [
  { to: "home", label: "Home" },
  { to: "technologies", label: "Technologies" },
  { to: "projects", label: "Projects" },
  { to: "resume", label: "Resume" },
  { to: "contact", label: "Contact" },
];

const SOCIALS = [
  {
    href: "https://github.com/JAGGU8160",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://in.linkedin.com/in/mishra-jagmohan",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "mailto:mishrajagmohan0@gmail.com",
    icon: HiMail,
    label: "Email",
  },
];

const Footer = memo(() => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top row */}
        <div className="footer-top">
          {/* Identity */}
          <div className="footer-brand">
            <p className="footer-name">Mishra Jagmohan</p>
            <p className="footer-tagline">
              AI Automation &amp; Full Stack Developer
            </p>
          </div>

          {/* Nav links */}
          <nav className="footer-nav" aria-label="Footer navigation">
            {NAV.map((link) => (
              <ScrollLink
                key={link.to}
                className="footer-nav-link"
                to={link.to}
                smooth={true}
                duration={500}
                offset={-72}
              >
                {link.label}
              </ScrollLink>
            ))}
          </nav>

          {/* Social icons */}
          <div className="footer-socials">
            {SOCIALS.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom row */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {year} Mishra Jagmohan. All rights reserved.
          </p>
          <p className="footer-built">
            Built with React &amp; shipped from Ahmedabad.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;
