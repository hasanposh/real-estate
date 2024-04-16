import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="font-PT_sans">
      
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
