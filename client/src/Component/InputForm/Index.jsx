import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/Auth/Index";
import Button from "../Button/Index";
import Input from "../Input/Index";
import styles from "./Index.module.css";

const initState = {
    type: "",
    amount: "",
    notes: "",
    category: "",
    date: "",
};

const InputForm = ({ type, categories, closeForm }) => {
    const [formData, setFormData] = useState({ ...initState, type: type });
    const { userDetails, handleData } = useContext(AuthContext)

    const handleFormData = (data) => {
        const { name, value } = data;
        setFormData({ ...formData, [name]: value });
    };

    const submitIncomeForm = () => {
        const payload = {
            ...formData,
            type: formData.type.toLowerCase(),
            user: userDetails.id
        }
        axios.post("http://localhost:8000/dashboard/expenses", payload)
        .then(handleData())
        closeForm()
    }

    return (
        <div className={styles.main}>
            <div>
                <span onClick={closeForm}>+</span>
                <h2>ADD {type.toUpperCase()}</h2>

                <div className = {styles.form}>
                    <label>Enter your {type}:</label>
                    <Input
                        inputType="number"
                        name="amount"
                        handleFormData={handleFormData}
                    />
                    <label>Write notes:</label>
                    <Input
                        inputType="textArea"
                        name="notes"
                        handleFormData={handleFormData}
                    />
                    <label>Select Category:</label>
                    <Input
                        inputType="select"
                        name="category"
                        categories={categories}
                        handleFormData={handleFormData}
                    />
                    <label>Select Date:</label>
                    <Input
                        inputType="date"
                        name="date"
                        handleFormData={handleFormData}
                    />
                    <div>
                        <Button handleButton = {submitIncomeForm}  color="green" name="SUBMIT" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputForm;
