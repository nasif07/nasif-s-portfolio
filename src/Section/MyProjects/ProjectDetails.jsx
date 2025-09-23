import { useNavigate, useParams } from "react-router-dom";
import project1 from "../../assets/feedme.png";
import project2 from "../../assets/stationary-shop.png";
// import project3 from "../../assets/pet-adoption-project.png";
import Title from "../../components/Title";
import Container from "../../components/Container";

const projectData = {
  1: {
    title: "Feedme",
    description:
      "FeedMe is a Meal Planning & Delivery Web Application that allows users to personalize their meal plans and schedule deliveries based on their dietary preferences. Customers can browse available meal options, select meals based on their preferences, and schedule delivery. Meal providers can manage menus, respond to customer orders, and track deliveries..",
    image: project1,
  },
  2: {
    title: "Stationary Shop",
    description:
      "This is a simple MERN stack application for a stationary shop. It allows users to explore and purchase products. Admin & normal user have individual dashboard. The application has RBAC (role based access control) integration for smooth Management.",
    image: project2,
  },
  // 3: {
  //   title: "Paw Vista",
  //   description: "A pet adoption platform connecting owners and adopters.",
  //   image: project3,
  // },
};

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <div className="text-white p-10">Project Not Found</div>;

  return (
    //
    <section id="projects" className="bg-[#111111] text-white pt-5 ">
      <Title first="Project" last="Details" />
      <Container>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-[#C9F31D] rounded">
          ← Back
        </button>
        <div className="text-white p-5 md:p-10 bg-[#111111] min-h-screen flex flex-col md:flex-row">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
            <img
              src={project.image}
              alt={project.title}
              className="mb-6 rounded w-full max-w-xl"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg flex-1 md:pt-20">{project.description}</p>
            {project.title === "Feedme" && (
              <div className="mt-10 text-white space-y-4 text-base md:text-lg">
                <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>User Authentication:</strong> Secure login using
                    email or phone number and password, JWT authentication, and
                    bcrypt-hashed passwords.
                  </li>
                  <li>
                    <strong>Customer Dashboard:</strong> Browse meals by
                    preferences, track orders and deliveries, and manage dietary
                    settings.
                  </li>
                  <li>
                    <strong>Meal Provider Dashboard:</strong> Create and manage
                    menus, and handle customer orders.
                  </li>
                  <li>
                    <strong>Meal Selection & Customization:</strong>{" "}
                    Personalized meals with control over ingredients, portions,
                    and pricing.
                  </li>
                  <li>
                    <strong>Search and Match:</strong> Search meals by cuisine,
                    diet, ratings, and availability; providers match with
                    customer needs.
                  </li>
                  <li>
                    <strong>Role-Based Access Control:</strong> Separate
                    dashboards for customers, providers, and admin.
                  </li>
                  <li>
                    <strong>Email Notifications:</strong> Alerts for meal
                    preparation, deliveries, and new orders.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectDetails;
