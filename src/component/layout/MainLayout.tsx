import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-14 md:pt-[68px] ">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
