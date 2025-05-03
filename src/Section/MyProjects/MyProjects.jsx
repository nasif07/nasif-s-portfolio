import { Link } from "react-router-dom";
import project1 from "../../assets/car-shop-project.png";
import project2 from "../../assets/lobrary-project.png";
import project3 from "../../assets/pet-adoption-project.png";
import Title from "../../components/Title";
import Container from "../../components/Container";
import { FaEye, FaGithub } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    image: project1,
    live: "https://dream-car-shop.web.app/",
    client: "https://github.com/nasif07/dream-car-shop-client?tab=readme-ov-file",
    server: "https://github.com/nasif07/dream-car-shop-server",
    title: "Dream Car Shop",
    description: "A full-featured car marketplace with admin and user dashboard.",
  },
  {
    id: 2,
    image: project2,
    live: "https://knowledge-library-c3978.web.app/",
    client: "https://github.com/nasif07/knowledge-library-client?tab=readme-ov-file",
    server: "https://github.com/nasif07/knowledge-library-server",
    title: "Knowledge Library",
    description: "An online library system to share and read books.",
  },
  {
    id: 3,
    image: project3,
    live: "https://paw-vista.web.app/",
    client: "https://github.com/nasif07/paw-vista-pet-adoption-client",
    server: "https://github.com/nasif07/paw-vista-pet-adoption-server",
    title: "Paw Vista",
    description: "A pet adoption platform connecting owners and adopters.",
  },
];

const MyProjects = () => {
  return (
    <section id="projects" className="bg-[#111111] ">
      <Title first="My" last="Projects" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto lg:py-20 md:py-14 py-6">
          {projects.map((project) => (
            <div key={project.id}>
              <Link to={`/project-details/${project.id}`}>
                <div
                  style={{
                    background: `url(${project.image})`,
                    backgroundSize: "cover",
                  }}
                  className="cursor-pointer w-[280px] h-[260px] md:w-[480px] md:h-[400px]"
                />
              </Link>
              <div className="flex justify-around md:px-12 my-12">
                <a target="_blank" href={project.live}>
                  <button className="btn bg-[#C9F31D] border-0">
                    <FaEye /> Live Link
                  </button>
                </a>
                <a target="_blank" href={project.client}>
                  <button className="btn bg-[#070707] text-white border-[#C9F31D] border-1">
                    <FaGithub /> Client Code
                  </button>
                </a>
                <a target="_blank" href={project.server}>
                  <button className="btn hidden md:flex bg-[#C9F31D] border-0">
                    <FaGithub /> Server Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MyProjects;
