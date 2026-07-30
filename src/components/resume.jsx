import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Element } from "react-scroll";
import { HiDownload } from "react-icons/hi";
import {
  HiBriefcase,
  HiAcademicCap,
  HiCommandLine,
  HiLanguage,
} from "react-icons/hi2";

const EASE = [0.16, 1, 0.3, 1];

const SKILLS = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Python",
  "n8n",
  "OpenAI API",
  "LangChain",
  "Figma",
  "Tailwind CSS",
  "Docker",
  "Git",
];

const EXPERIENCE = [
  {
    role: "AI Automation Intern",
    company: "Current Role",
    period: "March 2026 — Present",
    bullets: [
      "Architected and deployed production AI chatbots using OpenAI APIs with custom prompt chains, function calling, and RAG pipelines — handling 500+ user interactions daily with <2s average response time.",
      "Built voice agent systems integrating speech-to-text, LLM processing, and text-to-speech pipelines, automating 80% of inbound support queries and reducing manual response handling by 3x.",
      "Designed 15+ end-to-end workflow automations in n8n — connecting CRMs, email services, Slack, and webhook triggers to eliminate ~20 hours/week of repetitive manual data entry for the ops team.",
      "Developed a full-stack admin dashboard for monitoring chatbot analytics, conversation logs, and automation run histories — used daily by the internal team to track system health.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "WildTigers Technologies",
    period: "2025 · 7 months",
    bullets: [
      "Led frontend development on a production-grade printing industry web application — built order management, invoicing, and real-time job tracking modules serving 200+ active users.",
      "Designed and shipped an admin dashboard with role-based access control, data tables, and analytics charts — reducing internal ops response time by 40%.",
      "Translated complex Figma designs into pixel-perfect, responsive React components with Tailwind CSS, maintaining design-to-code accuracy across 30+ screens.",
      "Integrated REST APIs with optimistic UI updates and client-side caching, achieving sub-2s page loads and smooth real-time data synchronization.",
    ],
  },
];

const EDUCATION = {
  degree: "B.Tech in Computer Engineering",
  institution: "Silver Oak University, Ahmedabad",
  period: "2022 — 2026",
};

const LANGUAGES = ["English", "Hindi", "Gujarati"];

const Resume = memo(() => {
  const prefersReduced = useReducedMotion();

  const anim = (delay = 0) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: { duration: 0.45, delay, ease: EASE },
        };

  return (
    <Element name="resume">
      <section className="resume-section">
        <div className="container">
          {/* Header */}
          <motion.div className="resume-header" {...anim(0)}>
            <span className="resume-label">Resume</span>
            <h2 className="resume-title">Experience & Background</h2>
            <p className="resume-summary">
              AI Automation Intern building production chatbots, voice agents,
              and n8n workflow systems that handle real users daily. I ship
              full-stack applications across React, Next.js, Node.js, and
              Python — focused on turning AI into tools that save teams hours,
              not demos that collect dust.
            </p>
          </motion.div>

          <div className="resume-grid">
            {/* ── Left Column ── */}
            <div className="resume-sidebar">
              {/* Skills */}
              <motion.div className="resume-block" {...anim(0.05)}>
                <div className="rb-header">
                  <HiCommandLine className="rb-icon" />
                  <h3 className="rb-title">Skills</h3>
                </div>
                <div className="resume-skill-tags">
                  {SKILLS.map((skill) => (
                    <span className="resume-skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div className="resume-block" {...anim(0.1)}>
                <div className="rb-header">
                  <HiAcademicCap className="rb-icon" />
                  <h3 className="rb-title">Education</h3>
                </div>
                <div className="resume-edu">
                  <p className="resume-edu-degree">{EDUCATION.degree}</p>
                  <p className="resume-edu-inst">{EDUCATION.institution}</p>
                  <p className="resume-edu-period">{EDUCATION.period}</p>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div className="resume-block" {...anim(0.15)}>
                <div className="rb-header">
                  <HiLanguage className="rb-icon" />
                  <h3 className="rb-title">Languages</h3>
                </div>
                <div className="resume-lang-list">
                  {LANGUAGES.map((lang) => (
                    <span className="resume-lang" key={lang}>
                      {lang}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── Right Column: Experience ── */}
            <div className="resume-main">
              <div className="rb-header rb-header-exp">
                <HiBriefcase className="rb-icon" />
                <h3 className="rb-title">Experience</h3>
              </div>

              <div className="resume-timeline">
                {EXPERIENCE.map((exp, i) => (
                  <motion.div className="resume-exp" key={exp.role} {...anim(i * 0.08)}>
                    <div className="resume-exp-dot" />
                    <div className="resume-exp-content">
                      <div className="resume-exp-header">
                        <h4 className="resume-exp-role">{exp.role}</h4>
                        <span className="resume-exp-period">{exp.period}</span>
                      </div>
                      <p className="resume-exp-company">{exp.company}</p>
                      <ul className="resume-exp-bullets">
                        {exp.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Download CTA */}
          <motion.div className="resume-download" {...anim(0.1)}>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              className="resume-download-btn"
              download="Mishra_Jagmohan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiDownload />
              Download Resume
            </a>
          </motion.div>
        </div>
      </section>
    </Element>
  );
});

Resume.displayName = "Resume";
export default Resume;
