import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";



const Dashboard = () => {
    return (<>
        <div className="flex">
            <Sidebar></Sidebar>
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    </>

    );
};

export default Dashboard;