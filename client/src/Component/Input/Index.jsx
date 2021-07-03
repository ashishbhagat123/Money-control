import React from "react";
import styles from "./Index.module.css";

const Input = ({ inputType, name, handleFormData, categories }) => {
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (value.length) {
            handleFormData({ name, value });
        }
    };

    return (
        <div className={styles.main}>
            {inputType === "select" ? (
                <select name={name} onChange={handleChange}>
                    {categories.map((e, i) => (
                        <option value={e} key={i}>
                            {e}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    autoComplete="off"
                    name={name}
                    type={inputType}
                    onChange={handleChange}
                />
            )}
        </div>
    );
};

export default Input;
