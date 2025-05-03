import { useParams } from "react-router-dom";
import project1 from "../../assets/car-shop-project.png";
import project2 from "../../assets/lobrary-project.png";
import project3 from "../../assets/pet-adoption-project.png";

const projectData = {
  1: {
    title: "Feedme",
    description:
      "FeedMe is a Meal Planning & Delivery Web Application that allows users to personalize their meal plans and schedule deliveries based on their dietary preferences. Customers can browse available meal options, select meals based on their preferences, and schedule delivery. Meal providers can manage menus, respond to customer orders, and track deliveries..",
    image: project1,
  },
  2: {
    title: "Stationary Shop",
    description: "This is a simple MERN stack application for a stationary shop. It allows users to explore and purchase products. Admin & normal user have individual dashboard. The application has RBAC (role based access control) integration for smooth Management.",
    image: project2,
  },
  3: {
    title: "Paw Vista",
    description: "A pet adoption platform connecting owners and adopters.",
    image: project3,
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <div className="text-white p-10">Project Not Found</div>;

  return (
    <div className="text-white p-10 bg-[#111111] min-h-screen">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="mb-6 rounded w-full max-w-xl"
      />
      <p className="text-lg">{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
