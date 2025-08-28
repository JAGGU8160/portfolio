import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Element } from "react-scroll";
import { Navigation, Pagination, A11y ,Autoplay } from 'swiper/modules';

const projects = [
  {
    title: 'Lab Static Page',
    image: 'lab.png', 
    description: 'A modern dashboard app built with React and Redux.',
    tech: 'React, Redux, Chart.js',
    liveUrl: 'https://jaggu8160.github.io/Lab-Static-Page/ ',
  },
  {
    title: 'Agency Static Page',
    image: 'agency.png',
    description: 'E-commerce site with payment integration and user profiles.',
    tech: 'Node.js, Express, MongoDB',
    liveUrl: 'https://jaggu8160.github.io/Agency-Stactic-Page/ ',
  },
  {
    title: 'CA Static Page',
    image: 'ca.png',
    description: 'Mobile-first portfolio with responsive design and animations.',
    tech: 'Next.js, CSS Modules, Framer Motion',
    liveUrl: 'http://jaggu8160.github.io/CA-Static-Page/ ',
  },
  {
    title: 'Project Delta',
    image: 'ca.png',
    description: 'Real-time chat application with WebSocket support.',
    tech: 'Socket.IO, React, Node.js',
    liveUrl: 'https://jaggu8160.github.io/Lab-Static-Page/ ',
  },
];

function ProjectsSlider() {
  return (
    <Element className="cmn-sec projectsSection" name='projects'>
      <div className="heading-txt">
        <h2 className="section-title">PROJECTS</h2>
        <h2 className="section-subtitle">Here are some of the projects that showcase my skills and experience.</h2>
      </div>
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="projectsSwiper">
            <div className="row">
            {projects.map((proj, index) => (
              <div className="col-md-4">
                <SwiperSlide key={index} className="projectCard">
                  <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <img src={proj.image} alt={proj.title} className="projectImage" />
                    <h3 className="projectTitle">{proj.title}</h3>
                    <p className="projectDescription">{proj.description}</p>
                    <p className="projectTech">{proj.tech}</p>
                    <span className="projectVisitBtn">Visit &#8599;</span>
                  </a>
                </SwiperSlide>
              </div>
            ))}
            </div>
        </Swiper>
      </div>

    </Element>
  );
}

export default ProjectsSlider;
