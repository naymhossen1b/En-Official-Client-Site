import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="mx-auto w-11/12">
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
