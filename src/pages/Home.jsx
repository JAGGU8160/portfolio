import Navbar from "../components/navbar";
import PortfolioHome from "../components/homePage";
import Technologies from "../components/technologies";
import Resume from "../components/resume";
import ProjectsSlider from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <PortfolioHome />
      <Technologies limit={2} />
      <Resume />
      <ProjectsSlider />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
