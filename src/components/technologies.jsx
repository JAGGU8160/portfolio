import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import techStack from "../data/techStack";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Homepage tech section — shows a curated preview (2 categories max)
 * with a CTA to the full /technologies page.
 */
const Technologies = memo(({ limit }) => {
  const prefersReduced = useReducedMotion();

  // On homepage: show first 2 categories. On full page: show all.
  const categories = limit ? techStack.slice(0, 2) : techStack;

  return (
    <Element className="tech-section" name="technologies">
      <div className="container">
        {/* Section header */}
        <div className="tech-header">
          <motion.span
            className="tech-label"
            initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            Tech Stack
          </motion.span>
          <motion.h2
            className="tech-title"
            initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
          >
            Tools I use to ship real products
          </motion.h2>
          <motion.p
            className="tech-subtitle"
            initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          >
            Not just frameworks I've heard of — these are technologies I use
            daily to build AI-powered apps and automation workflows.
          </motion.p>
        </div>

        {/* Category groups */}
        {categories.map((cat, catIdx) => (
          <div className="tech-category" key={cat.category}>
            <motion.h3
              className="tech-category-title"
              initial={prefersReduced ? {} : { opacity: 0, x: -12 }}
              whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: catIdx * 0.05, ease: EASE }}
            >
              {cat.category}
            </motion.h3>

            <div className="tech-grid">
              {cat.items.map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    className="tech-card-v2"
                    key={tech.title}
                    initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
                    whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.08,
                      ease: EASE,
                    }}
                  >
                    <div className="tc-icon">
                      <Icon />
                    </div>
                    <div className="tc-content">
                      <h4 className="tc-name">{tech.title}</h4>
                      <p className="tc-usage">{tech.usage}</p>
                      {tech.projects.length > 0 && (
                        <div className="tc-projects">
                          {tech.projects.map((p) => (
                            <span className="tc-project-tag" key={p}>
                              {p}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}

        {/* CTA to full page — only on homepage */}
        {limit && (
          <motion.div
            className="tech-cta-row"
            initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
          >
            <Link to="/technologies" className="tech-cta-btn">
              View Full Stack
              <HiArrowRight />
            </Link>
          </motion.div>
        )}
      </div>
    </Element>
  );
});

Technologies.displayName = "Technologies";
export default Technologies;
