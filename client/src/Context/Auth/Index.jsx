import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userDetails, setUserdetails] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [data, setData] = useState([]);

    const history = useHistory();

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("user"));
        if (data) {
            setUserdetails(data);
            setIsAuthenticated(true);
            handleData(data);
        }
    }, []);

    const handleData = () => {
        let data = JSON.parse(localStorage.getItem("user"));
        console.log(data);
        const { id } = data;
        axios
            .post("http://localhost:8000/dashboard", { id: id })
            .then((res) => {
                setData(res.data);
            });
    };

    const handleAuth = (data) => {
        setIsAuthenticated(true);
        setUserdetails(data);
        localStorage.setItem("user", JSON.stringify(data));
        history.push("/");
    };

    const value = {
        isAuthenticated,
        userDetails,
        handleAuth,
        handleData,
        data,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
