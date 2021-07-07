import React, { useContext, useState } from "react";
import Button from "../../Component/Button/Index";
import Input from "../../Component/Input/Index";
import styles from "./Index.module.css";
import axios from "axios";
import { AuthContext } from "../../Context/Auth/Index";
import { useHistory } from "react-router";

const initState = {
    email: "",
    password: "",
};

const LogIn = () => {
    const [userDetails, setUserDetails] = useState(initState);
    const history = useHistory();

    const handleFormData = (data) => {
        const { name, value } = data;
        setUserDetails({ ...userDetails, [name]: value });
    };
    const [err, setErr] = useState({ error: false, msg: "" });
    const { handleAuth } = useContext(AuthContext);

    const handleRequest = (data) => {
        const { error, msg, username, id } = data;
        if (error) {
            setErr({ error: error, msg: msg });
        } else {
            handleAuth({ id, username });
        }
    };

    const postData = () => {
        axios
            .post("http://localhost:8000/login", userDetails)
            .then((res) => handleRequest(res.data))
            .catch((err) => handleRequest(err));
    };

    const redirectToSignUp = () => {
        history.push("/signup");
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
                    <h1>LogIn</h1>
                    <p>Enter your details below to continue</p>
                    <div className={styles.form}>
                        <label>email</label>
                        <Input
                            name="email"
                            inputType="email"
                            handleFormData={handleFormData}
                        />
                        <label>password</label>
                        <Input
                            name="password"
                            inputType="password"
                            handleFormData={handleFormData}
                        />
                        {err.error && <span>{err.msg}</span>}
                        <Button
                            handleButton={postData}
                            name="SUBMIT"
                            color="Cyan"
                        />
                    </div>
                    <p>
                        already have an account?
                        <span
                            onClick={redirectToSignUp}
                            className={styles.logIn_btn}
                        >
                            SignUp
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
