import React, { useState } from "react";
import Dashboard from "../../Pages/Dashboard/Index";
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
            default: {
                return <Dashboard />;
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
