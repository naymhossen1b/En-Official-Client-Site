import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";


const MainLayout = () => {
    return (
        <div className="w-7/12 mx-auto min-h-screen">
            <Header />
            <Outlet />
        </div>
    );
};

export default MainLayout;