import React from 'react'
import  Navbar  from '../components/navbar';
import  PortfolioHome from '../components/homePage';
import  Technologies from '../components/technologies';
import  Resume from '../components/resume';
import  ProjectsSlider from '../components/projects';
import  Contact from '../components/contact';
import  Footer from '../components/footer';
import { Link } from "react-router-dom";
import { GoProjectSymlink } from "react-icons/go";



const Home = () => {
  return (
    <>
      <Navbar/>
      <PortfolioHome/>
      <div>
        <Technologies limit={4} />
        <div className='tech-view-btn-div'>
          <Link to="/technologies" className="comman-btn">
            View More<GoProjectSymlink className="cmn-icons"/>
          </Link>
        </div>
      </div>
      <Resume/>
      <ProjectsSlider/>
      <Contact/>
      <Footer/>
    </>
   
  )
}

export default Home;
