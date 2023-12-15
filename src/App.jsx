

// import Banner from './Section/Banner/Banner'
import AboutMe from './Section/AboutMe/AboutMe'
import Banner from './Section/Banner/Banner'
import ContactMe from './Section/ContactMe/ContactMe'
import Footer from './Section/Footer/Footer'
import MyProjects from './Section/MyProjects/MyProjects'
import MySkills from './Section/MySkills/MySkills'
import NavBar from './Section/NavBar/NavBar'
import ExperienceEducation from './Section/experienceEducation/ExperienceEducation'

function App() {

  return (
    <>
     <NavBar></NavBar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <MySkills></MySkills>
      <ExperienceEducation></ExperienceEducation>
      <MyProjects></MyProjects>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </>
  )
}

export default App
