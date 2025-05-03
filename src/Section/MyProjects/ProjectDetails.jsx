import { useParams } from "react-router-dom";
import project1 from "../../assets/car-shop-project.png";
import project2 from "../../assets/lobrary-project.png";
import project3 from "../../assets/pet-adoption-project.png";

const projectData = {
  1: {
    title: "Dream Car Shop",
    description:
      "A full-featured car marketplace with admin and user dashboard.",
    image: project1,
  },
  2: {
    title: "Knowledge Library",
    description: "An online library system to share and read books.",
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
