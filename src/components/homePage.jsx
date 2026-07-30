import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Element } from "react-scroll";
import { HiArrowRight } from "react-icons/hi2";
import { HiDownload } from "react-icons/hi";
import myImage from "../assets/profile.jpg";

// Animation presets
const EASE = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: EASE },
});

const PortfolioHome = memo(() => {
  const prefersReduced = useReducedMotion();

  const anim = (delay) =>
    prefersReduced
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : fadeUp(delay);

  return (
    <Element name="home">
      <section className="hero-section">
        <div className="hero-gradient-orb" aria-hidden="true" />

        <div className="container">
          <div className="hero-content-wrapper">
            {/* Text Column */}
            <div className="hero-text">
              <motion.div {...anim(0)}>
                <span className="hero-badge">
                  AI Automation &middot; Full Stack Developer
                </span>
              </motion.div>

              <motion.h1 className="hero-headline" {...anim(0.1)}>
                I build{" "}
                <span className="hero-headline-accent">
                  AI-powered apps
                </span>{" "}
                and automate what others do manually.
              </motion.h1>

              <motion.p className="hero-description" {...anim(0.2)}>
                AI Automation Intern specializing in chatbots, voice agents,
                and workflow automations with n8n. I build production-grade
                applications using the MERN stack, Next.js, and Python AI
                tools — turning complex problems into clean, scalable
                solutions.
              </motion.p>

              <motion.div className="hero-cta-row" {...anim(0.3)}>
                <ScrollLink
                  className="hero-btn-primary"
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-72}
                >
                  View Projects
                  <HiArrowRight />
                </ScrollLink>
                <ScrollLink
                  className="hero-btn-secondary"
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-72}
                >
                  Get in Touch
                </ScrollLink>
              </motion.div>
            </div>

            {/* Image Column */}
            <motion.div
              className="hero-image-col"
              initial={prefersReduced ? {} : { opacity: 0, scale: 0.92 }}
              animate={prefersReduced ? {} : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            >
              <div className="hero-image-arrow hero-image-arrow-left" aria-hidden="true" />
              <div className="hero-image-arrow hero-image-arrow-right" aria-hidden="true" />
              <div className="hero-image-glow" aria-hidden="true" />
              <div className="hero-image-ring hero-image-ring-outer" aria-hidden="true" />
              <div className="hero-image-ring hero-image-ring-mid" aria-hidden="true" />
              <div className="hero-img-border">
                <img
                  className="hero-profile-img"
                  src={myImage}
                  alt="Mishra Jagmohan — AI Automation & Full Stack Developer"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Element>
  );
});

PortfolioHome.displayName = "PortfolioHome";
export default PortfolioHome;
