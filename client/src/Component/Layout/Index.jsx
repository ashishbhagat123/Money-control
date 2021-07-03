import React, { useState } from "react";
import Dashboard from "../../Pages/Dashboard/Index";
import LogIn from "../../Pages/Login/Index";
import SignUp from "../../Pages/SignUp/Index";
import Navbar from "./Navbar/Index";
import SideBar from "./SideBar/Index";

const Layout = ({ pageName, header, body, footer, sidebar }) => {
    const [open, setOpen] = useState(false);

    const HandleToggleBar = () => {
        setOpen(!open);
    };

    const getPage = () => {
        // if (body) return body;
        switch (pageName) {
            case "Dashboard": {
                return <Dashboard margin = {open}/>;
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
                <SideBar HandleToggleBar={HandleToggleBar} open={open} />
            )}
            {getPage()}
        </div>
    );
};

export default Layout;
