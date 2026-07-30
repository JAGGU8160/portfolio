import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import techStack from "../data/techStack";

const EASE = [0.16, 1, 0.3, 1];

const TechnologiesPage = memo(() => {
  const prefersReduced = useReducedMotion();

  return (
    <>
      <Navbar />
      <main className="tech-page">
        <div className="container">
          {/* Breadcrumb */}
          <div className="tech-page-breadcrumb">
            <Link to="/" className="tech-back-link">
              <HiArrowLeft />
              Back to Home
            </Link>
          </div>

          {/* Page header */}
          <motion.div
            className="tech-page-header"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className="tech-label">Tech Stack</span>
            <h1 className="tech-page-title">
              Everything I build with
            </h1>
            <p className="tech-page-desc">
              A detailed breakdown of the technologies, frameworks, and tools
              I use across frontend, backend, AI, and DevOps — with real
              context on how each one fits into my workflow.
            </p>
          </motion.div>

          {/* All categories with detailed cards */}
          {techStack.map((cat, catIdx) => (
            <motion.section
              className="tech-page-category"
              key={cat.category}
              initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.05, ease: EASE }}
            >
              <div className="tech-page-cat-header">
                <h2 className="tech-page-cat-title">{cat.category}</h2>
                <span className="tech-page-cat-count">
                  {cat.items.length} tools
                </span>
              </div>

              <div className="tech-page-grid">
                {cat.items.map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      className="tech-page-card"
                      key={tech.title}
                      initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
                      whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{
                        duration: 0.35,
                        delay: idx * 0.06,
                        ease: EASE,
                      }}
                    >
                      <div className="tpc-top">
                        <div className="tpc-icon">
                          <Icon />
                        </div>
                        <h3 className="tpc-name">{tech.title}</h3>
                      </div>
                      <p className="tpc-usage">{tech.usage}</p>
                      {tech.projects.length > 0 && (
                        <div className="tpc-projects">
                          <span className="tpc-projects-label">Used in:</span>
                          <div className="tpc-tags">
                            {tech.projects.map((p) => (
                              <span className="tc-project-tag" key={p}>
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
});

TechnologiesPage.displayName = "TechnologiesPage";
export default TechnologiesPage;
