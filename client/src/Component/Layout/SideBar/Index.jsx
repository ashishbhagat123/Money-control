import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import styles from "./Index.module.css";

const SideBar = ({HandleToggleBar, open}) => {



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
                        style={
                            open
                                ? { flexDirection: "row" }
                                : { flexDirection: "row-reverse" }
                        }
                    >
                        <span>
                            <MdDashboard />
                        </span>
                        <p>DashBoard</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
