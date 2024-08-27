import Footer from "@/pages/Shared/Footer";
import Navbar from "@/pages/Shared/Navbar";

import { Outlet } from "react-router-dom";

const MainLayOut = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayOut;
