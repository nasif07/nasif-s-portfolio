import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import App from "../App";
import Home from "../pages/home/Home";
import ProjectDetails from "../Section/MyProjects/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div>something went wrong</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/project-details/:id",
        element: <ProjectDetails></ProjectDetails>,
      },
    ],
  },
]);

export default router;
