import React from 'react';
import { Element } from "react-scroll";
import { FaDownload } from "react-icons/fa";

function Resume() {
  return (
    <Element className="cmn-sec  resumeSection" name='resume'>
      <div className="container">
        <div className="heading-txt">
          <h2 className="section-title">RESUME</h2>
          <h2 className="section-subtitle">Passionate about building scalable applications and delivering high-quality, user-focused digital products.</h2>
        </div>

        <div className="row">
          <div className="col-md-4">
            
            <div className="row-md-4">
              <h3 className="sectionTitle">Skills</h3>
              <p className="languages-list">MERN | Javascript | Python (Django)</p>
            </div>

            <div className="row-md-4">
              <div className="lang-div">
                <h3 className="sectionTitle">Languages</h3>
                <p className="languages-list">English, Hindi, Gujarati</p>
              </div>
            </div>
          
            <div className="row-md-4">
              <h3 className="sectionTitle" >Education</h3>
              <div className="educationItem">
                <div className="educationDegree">B.tech. in Computer Engineering</div>
                <div className="educationInstitution">Silver Oak University</div>
                <div className="educationYear">2022 - 2026</div>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <h3 className="sectionTitle">Experience</h3>
            <div className="experienceItem">
              <div className="experienceTitle">MERN Stack Internship </div>
              <div className="experienceCompany">CreArt Solutions Ltd | 15 Days</div>
              <div className="experienceDescription">
                Develop a scalable Website using React, Node.js,MongoDb and Express.js.
              </div>
            </div>

            <div className="experienceItem">
              <div className="experienceTitle">Frontend Developer</div>
              <div className="experienceCompany">WildTigers Technologies | 7 Month (2025)</div>
              <div className="experienceDescription">
                Built responsive web applications focusing on user-friendly UI and performance.
              </div>
            </div>
        </div>

        </div>
        <div className="download-btn">
          <a href="/resume.pdf" className="comman-btn" download="John_Doe_Resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume <FaDownload className='cmn-icons' /></a>
        </div>
      </div>
    </Element>
  );
}

export default Resume;
