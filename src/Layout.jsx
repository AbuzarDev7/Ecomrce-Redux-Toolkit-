import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "80vh" }}>
        <Outlet />  {/* yahi page ka content load hoga */}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
