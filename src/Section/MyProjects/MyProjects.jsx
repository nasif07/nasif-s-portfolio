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
    live: "https://feedme-meal.vercel.app/",
    client:
      "https://github.com/nasif07/dream-car-shop-client?tab=readme-ov-file",
    server: "https://github.com/nasif07/dream-car-shop-server",
    title: "Feedme",
    description:
      "FeedMe is a Meal Planning & Delivery Web Application that allows users to personalize their meal plans and schedule deliveries based on their dietary preferences. Customers can browse available meal options, select meals based on their preferences, and schedule delivery. Meal providers can manage menus, respond to customer orders, and track deliveries.",
  },
  {
    id: 2,
    image: project2,
    live: "https://knowledge-library-c3978.web.app/",
    client:
      "https://github.com/nasif07/stationary-shop",
    server: "https://github.com/nasif07/stationary-shop",
    title: "Stationary Shop",
    description: "This is a simple MERN stack application for a stationary shop. It allows users to explore and purchase products. Admin & normal user have individual dashboard. The application has RBAC (role based access control) integration for smooth Management.",
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
    <section id="projects" className="bg-[#111111] text-white">
      <Title first="My" last="Projects" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:py-20 md:py-14 py-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-[1.01]">
              <Link to={`/project-details/${project.id}`}>
                <div
                  style={{
                    background: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="h-[260px] md:h-[300px] w-full transition-transform duration-300 hover:scale-105"
                />
              </Link>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a target="_blank" href={project.live}>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#C9F31D] text-black rounded-full hover:bg-lime-400 transition font-semibold shadow">
                      <FaEye /> Live
                    </button>
                  </a>
                  <a target="_blank" href={project.client}>
                    <button className="flex items-center gap-2 px-4 py-2 border border-[#C9F31D] text-[#C9F31D] rounded-full hover:bg-[#C9F31D] hover:text-black transition font-semibold shadow">
                      <FaGithub /> Client
                    </button>
                  </a>
                  <a target="_blank" href={project.server}>
                    <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#C9F31D] text-black rounded-full hover:bg-lime-400 transition font-semibold shadow">
                      <FaGithub /> Server
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MyProjects;
