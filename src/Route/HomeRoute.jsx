import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const HomeRoute = () => {
  return (
    <div>
      {/* nav bar  */}
      <div>
        <Navbar />
      </div>
      {/* Outlet  */}
      <div className="mt-20 min-h-[70vh]">
        <Outlet />
      </div>
      {/* footer  */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeRoute;
