import { Outlet } from "react-router";
import NavBar from "../Section/NavBar/NavBar";
import Footer from "../Section/Footer/Footer";
const Main = () => {
  return (
    <div>
      <div >
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
