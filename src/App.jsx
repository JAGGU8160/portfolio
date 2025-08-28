import React from 'react'
import "./App.css";
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import TechnologiesPage from './pages/technologiesPage.jsx'
import NotFound from './pages/NotFound.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Resume from './components/resume.jsx';
import ProjectsSlider from './components/projects.jsx';
import Contact from './components/contact.jsx';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<ProjectsSlider />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;