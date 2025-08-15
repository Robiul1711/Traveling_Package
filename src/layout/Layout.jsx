import Footer from "@/shared/footer/Footer";
import MobileNavbar from "@/shared/navbar/MobileNavbar";
import Navbar from "@/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="sticky top-0 left-0 w-full z-50 hidden lg:block">
        <Navbar />
      </div>
      <div className="sticky top-0 left-0 w-full  z-50 shadow-xl lg:hidden">
        <MobileNavbar />
      </div>

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
