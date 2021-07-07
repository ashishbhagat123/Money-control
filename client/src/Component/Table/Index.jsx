import React from "react";
import styles from "./Index.module.css";

const Table = ({ data, color, sort, handleEdit }) => {
    const sortData = () => {
        switch (sort) {
            case "date":
                return data.sort((a, b) => {
                    a = new Date(a.date);
                    b = new Date(b.date);
                    if (a > b) {
                        return -1;
                    } else if (a < b) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            case "amount":
                return data.sort((a, b) => b.amount - a.amount);
            default:
                return data;
        }
    };

    return (
        <div>
            <table className={styles.table}>
                <thead style={{ background: color }}>
                    <tr>
                        <th>AMOUNT</th>
                        <th>CATEGORY</th>
                        <th>DATE</th>
                        <th>NOTE</th>
                        {/* <th>ACTION</th> */}
                    </tr>
                </thead>
                <tbody>
                    {sortData().map((e, i) => (
                        <tr key={i}>
                            <td>{e.amount}</td>
                            <td>{e.category}</td>
                            <td>{new Date(e.date).toDateString()}</td>
                            <td>{e.notes || "-"}</td>
                            {/* <td onClick = {() => handleEdit(e)} className = {styles.edit}>Edit</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
