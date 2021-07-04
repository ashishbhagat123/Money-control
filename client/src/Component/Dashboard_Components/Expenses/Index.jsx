import React, { useContext } from "react";
import { AuthContext } from "../../../Context/Auth/Index";
import Table from "../../Table/Index";
import styles from "./Index.module.css";
import Select from "react-select";
import { useState } from "react";

const options = [
    {
        value: "date",
        label: "date",
    },
    { value: "amount", label: "amount" },
];

const Expenses = () => {
    const { data } = useContext(AuthContext);
    const [sortIncome, setSortIncome] = useState("sort by...");
    const [sortExpense, setSortExpense] = useState("sort by..");

    return (
        <div className={styles.main}>
            <h1>
                <span style={{ color: "#1687A7" }}>INCOME </span> AND
                <span style={{ color: "#29BB89" }}> EXPENSES</span>
            </h1>
            <div>
                <div>
                    <h2>Income</h2>
                    <div>
                        <Select
                            placeholder={sortIncome}
                            value={"date"}
                            options={options}
                            onChange={(e) => setSortIncome(e.value)}
                        />
                    </div>
                </div>
                <Table data={data.income} color="#1687A7" sort={sortIncome} />
            </div>
            <div>
                <div>
                    <h2>Expenses</h2>
                    <div>
                        <Select
                            placeholder={sortExpense}
                            value={"date"}
                            options={options}
                            onChange={(e) => setSortExpense(e.value)}
                        />
                    </div>
                </div>
                <Table data={data.expense} color="#29BB89" sort={sortExpense} />
            </div>
        </div>
    );
};

export default Expenses;
