import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import styles from "./Index.module.css";

const SideBar = ({ HandleToggleBar, open, handleDashboardPages, active }) => {
    return (
        <div className={styles.main}>
            <span onClick={HandleToggleBar}>
                <GiHamburgerMenu />
            </span>
            <div
                style={
                    open
                        ? { transform: "translateX(0)" }
                        : {
                              transform: `translateX(${
                                  window.innerWidth >= 1024 ? "-68%" : "-100%"
                              })`,
                          }
                }
                className={styles.SideBar}
            >
                <ul>
                    <li
                        onClick={() => handleDashboardPages("Home")}
                        style={
                            (open
                                ? { flexDirection: "row" }
                                : { flexDirection: "row-reverse" },
                            active === "Home"
                                ? { background: "cornflowerblue" }
                                : null)
                        }
                    >
                        <span>
                            <MdDashboard />
                        </span>
                        <p>DashBoard</p>
                    </li>
                    <li
                        onClick={() => handleDashboardPages("Expenses")}
                        style={
                            (open
                                ? { flexDirection: "row" }
                                : { flexDirection: "row-reverse" },
                            active === "Expenses"
                                ? { background: "cornflowerblue" }
                                : null)
                        }
                    >
                        <span>
                            <GiReceiveMoney />
                        </span>
                        <p>Expenses</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
