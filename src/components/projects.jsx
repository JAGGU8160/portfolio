import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Element } from "react-scroll";
import { HiArrowUpRight } from "react-icons/hi2";

const EASE = [0.16, 1, 0.3, 1];

const PROJECTS = [
  {
    title: "SciLab Analytics",
    image: "lab.png",
    description:
      "Data visualization dashboard for a laboratory management system — interactive charts, real-time metric tracking, and filterable reports for research teams.",
    tech: ["React", "Chart.js", "REST API", "Tailwind CSS"],
    liveUrl: "https://jaggu8160.github.io/Lab-Static-Page/",
    cta: "Live Demo",
  },
  {
    title: "NexaAgency",
    image: "agency.png",
    description:
      "Full-service digital agency landing page with service showcases, client testimonials, and a contact pipeline — built for lead generation and conversion.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://jaggu8160.github.io/Agency-Stactic-Page/",
    cta: "Live Demo",
  },
  {
    title: "FinEdge CA Portal",
    image: "ca.png",
    description:
      "Professional portal for a chartered accountancy firm — service breakdowns, document request flows, and client onboarding with responsive mobile-first design.",
    tech: ["Next.js", "Framer Motion", "CSS Modules"],
    liveUrl: "http://jaggu8160.github.io/CA-Static-Page/",
    cta: "Live Demo",
  },
];

const ProjectsSection = memo(() => {
  const prefersReduced = useReducedMotion();

  const anim = (delay = 0) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: { duration: 0.45, delay, ease: EASE },
        };

  return (
    <Element name="projects">
      <section className="projects-section">
        <div className="container">
          {/* Header */}
          <motion.div className="projects-header" {...anim(0)}>
            <span className="projects-label">Projects</span>
            <h2 className="projects-title">Things I've built</h2>
            <p className="projects-subtitle">
              Production apps and client projects — not tutorials or
              assignments. Each one solved a real problem.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="projects-grid">
            {PROJECTS.map((proj, i) => (
              <motion.a
                key={proj.title}
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                {...anim(i * 0.08)}
              >
                {/* Image */}
                <div className="pc-image-wrap">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="pc-image"
                    loading="lazy"
                  />
                  <span className="pc-overlay-cta">
                    {proj.cta} <HiArrowUpRight />
                  </span>
                </div>

                {/* Content */}
                <div className="pc-body">
                  <h3 className="pc-title">{proj.title}</h3>
                  <p className="pc-desc">{proj.description}</p>
                  <div className="pc-tech">
                    {proj.tech.map((t) => (
                      <span className="pc-tech-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
});

ProjectsSection.displayName = "ProjectsSection";
export default ProjectsSection;
