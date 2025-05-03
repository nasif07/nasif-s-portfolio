import Banner from "../../Section/Banner/Banner";
import AboutMe from "../../Section/AboutMe/AboutMe";
import MySkills from "../../Section/MySkills/MySkills";
import ExperienceEducation from "../../Section/experienceEducation/ExperienceEducation";
import MyProjects from "../../Section/MyProjects/MyProjects";
import Blog from "../../Section/Blog/Blog";
import ContactMe from "../../Section/ContactMe/ContactMe";
import Footer from "../../Section/Footer/Footer";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <MySkills></MySkills>
      <ExperienceEducation></ExperienceEducation>
      <MyProjects></MyProjects>
      <Blog></Blog>
      <ContactMe></ContactMe>
    </>
  );
};

export default Home;
