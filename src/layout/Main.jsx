import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="text-white relative"
        style={{
          backgroundImage:
            "radial-gradient(circle farthest-corner at 7.5% 54.1%, rgba(0,0,0,1) 0%, rgba(39,0,89,1) 74.9%)",
        }}
      >
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;
