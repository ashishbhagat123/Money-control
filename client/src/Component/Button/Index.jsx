import React from "react";
import styles from "./Index.module.css";

const Button = ({ name, color, handleButton }) => {
    return (
        <>
            <button
                onClick={handleButton}
                style={{ background: color }}
                className={styles.btn}
            >
                {name}
            </button>
        </>
    );
};

export default Button;
