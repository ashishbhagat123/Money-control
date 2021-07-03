import React, { useState } from "react";
import Button from "../../Component/Button/Index";
import Input from "../../Component/Input/Index";
import styles from "./Index.module.css";
import axios from "axios";
import { useHistory } from "react-router";

const initState = {
    username: "",
    email: "",
    password: "",
};

const SignUp = () => {
    const [userDetails, setUserDetails] = useState(initState);
    const [error, setError] = useState({ error: false, msg: "" });
    const history = useHistory();

    const handleRequest = (data) => {
        const { error, success, msg } = data;
        if (success) {
            history.push("/login");
        } else {
            setError({
                error: error,
                msg: msg,
            });
        }
    };

    const handleFormData = (data) => {
        const { name, value } = data;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const postData = () => {
        if (userDetails.password === userDetails.confirmPassword) {
            axios
                .post("http://localhost:8000/signup", userDetails)
                .then((res) => handleRequest(res.data))
                .catch((err) => handleRequest());
        } else {
            alert("password mismatch");
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.signUp_form}>
                <div>
                    <img
                        src="https://www.wraltechwire.com/wp-content/uploads/2017/11/NewsletterSignup-Background.jpg"
                        alt="signUp"
                    />
                </div>
                <div className={styles.heading}>
                    <h1>SignUp</h1>
                    <p>Enter your details below to continue</p>
                    <div className={styles.form}>
                        <label>username:</label>
                        <Input
                            inputType="text"
                            name="username"
                            handleFormData={handleFormData}
                        />
                        <label>email:</label>
                        <Input
                            name="email"
                            inputType="email"
                            handleFormData={handleFormData}
                        />
                        <label>password:</label>
                        <Input
                            name="password"
                            inputType="password"
                            handleFormData={handleFormData}
                        />
                        <label>confirm password:</label>
                        <Input
                            name="confirmPassword"
                            inputType="password"
                            handleFormData={handleFormData}
                        />
                        {error.error && <span>{error.msg}</span>}
                        <Button
                            handleButton={postData}
                            name="SUBMIT"
                            color="#053742"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
