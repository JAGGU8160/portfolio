import { FaNodeJs, FaBootstrap, FaPython,FaReact } from "react-icons/fa";
import {SiMongodb,SiExpress, SiTailwindcss, SiGithub,SiFlask  } from "react-icons/si";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

const technologies = [
  {
    title: 'React.js',
    description: 'A JavaScript library for building user interfaces.',
    icon: <FaReact className="tech-card-icon" />,
  },
  {
    title: 'MongoDB',
    description: 'NoSQL document database with scalability and flexibility.',
    icon: <SiMongodb className="tech-card-icon" />,
  },
  {
    title: 'Express.js',
    description: 'A minimal and flexible Node.js web framework.',
    icon: <SiExpress className="tech-card-icon" />,
  },
  {
    title: 'Node.js',
    description: 'JavaScript runtime built on Chrome’s V8 engine.',
    icon: <FaNodeJs className="tech-card-icon" />,
  },
  {
    title: "Bootstrap",
    description: "Popular CSS framework for building responsive websites quickly.",
    icon: <FaBootstrap className="tech-card-icon" />,
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for rapidly building custom UI.",
    icon: <SiTailwindcss className="tech-card-icon" />,
  },
  {
    title: "Django",
    description: "High-level Python web framework for clean and rapid development.",
    icon: <FaPython className="tech-card-icon" />,
  },
  {
    title: "Flask",
    description: "Flask is a micro web framework written in Python.",
    icon: <SiFlask  className="tech-card-icon" />,
  },
  {
    title: "GitHub Pages",
    description: "Host your static websites directly from your GitHub repository.",
    icon: <SiGithub className="tech-card-icon" />,
  },
];

function Technologies({ limit }) {
  const displayTechs = limit ? technologies.slice(0, limit) : technologies;

  return (
    <Element className="cmn-sec  tech-section" name="technologies">
      <div className="container">
        <div className="heading-txt">
          <h2 className="section-title">TECHNOLOGIES</h2>
          <h2 className="section-subtitle">The Frameworks and tools that power my development journey, from designing clean interfaces to building robust backends.</h2>
        </div>
        <div className="row tech-cards">
          {displayTechs.map((tech, idx) => (
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12"  key={idx}>
              <div className="tech-card" key={idx}>
                <div className="tech-card-icon-wrapper">{tech.icon}</div>
                <div className="tech-card-body">
                  <h5 className="tech-card-title">{tech.title}</h5>
                  <p className="tech-card-text">{tech.description}</p>
                </div>
                <div className="tech-card-footer">
                  <Link to="<Technologies/>" className="tech-btn">View More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default Technologies;