import React, { useState } from "react";
import Dashboard from "../../Pages/Dashboard/Index";
import LogIn from "../../Pages/Login/Index";
import SignUp from "../../Pages/SignUp/Index";
import Navbar from "./Navbar/Index";
import SideBar from "./SideBar/Index";

const Layout = ({ pageName, header, body, footer, sidebar }) => {
    const [open, setOpen] = useState(false);
    const [dashboardPage, setDashboardPage] = useState("home");
    const [active, setActive] = useState("Home");

    const HandleToggleBar = () => {
        setOpen(!open);
    };

    const handleDashboardPages = (page) => {
        setDashboardPage(page);
        setActive(page)
        setOpen(false);
    };

    const getPage = () => {
        switch (pageName) {
            case "Dashboard": {
                return (
                    <Dashboard margin={open} dashboardPage={dashboardPage} />
                );
            }
            case "LogIn": {
                return <LogIn />;
            }
            case "SignUp": {
                return <SignUp />;
            }
            default: {
                return <SignUp />;
            }
        }
    };

    return (
        <div>
            {header && <Navbar />}
            {sidebar && (
                <SideBar
                    HandleToggleBar={HandleToggleBar}
                    handleDashboardPages={handleDashboardPages}
                    open={open}
                    active = {active}
                />
            )}
            {getPage()}
        </div>
    );
};

export default Layout;
