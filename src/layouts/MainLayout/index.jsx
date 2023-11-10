import { Outlet } from "react-router-dom";
import Header from "../../shered/Header";

const MainLayout = () => {
    return (
        <div className="h-[100vh] md:overflow-y-hidden">
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;