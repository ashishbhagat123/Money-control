import React, { useEffect, useState } from "react";
import Expenses from "../../Component/Dashboard_Components/Expenses/Index";
import Landing from "../../Component/Dashboard_Components/Landing/Index";
import styles from "./Index.module.css";

const Dashboard = ({ margin, dashboardPage }) => {
    const [page, setPage] = useState(<Landing />);

    console.log(dashboardPage)
    useEffect(() => {
            switch(dashboardPage){
                case "Home":{
                    setPage(<Landing />) 
                    break;
                }
                case "Expenses": {
                    setPage(<Expenses />)
                    break;
                }
                default: {
                    setPage(<Landing />) 
                }
            }

    }, [dashboardPage])

    
    return (
        <div
            style={
                margin
                    ? { marginLeft: "18%", width: "82%" }
                    : { marginLeft: "5.8%", width: "94.2%" }
            }
            className={styles.main}
        >
           { page }
        </div>
    );
};

export default Dashboard;
