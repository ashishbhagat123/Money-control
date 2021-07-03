import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userDetails, setUserdetails] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [update, setUpdate] = useState(false);
    const history = useHistory()

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("user"))
        if(data){
            setUserdetails(data)
            setIsAuthenticated(true)
        }
    }, [])

    const handleAuth = (data) => {
        setIsAuthenticated(true)
        setUserdetails(data)
        localStorage.setItem("user", JSON.stringify(data))
        history.push("/")
    }

    const updateDashboard = (status) => {
        setUpdate(status)
    }

    const value = {
        isAuthenticated,
        userDetails,
        handleAuth,
        updateDashboard,
        update
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
