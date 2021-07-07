import React, { useContext } from "react";
import { AuthContext } from "../../../Context/Auth/Index";
import Table from "../../Table/Index";
import styles from "./Index.module.css";
import Select from "react-select";
import { useState } from "react";
import InputForm from "../../InputForm/Index";

const options = [
    {
        value: "date",
        label: "date",
    },
    { value: "amount", label: "amount" },
];

const dates = [
    {
        value: "all",
        label: "All Dates",
    },
    {
        value: "current month",
        label: "current month",
    },
    {
        value: "last month",
        label: "last month",
    },
    {
        value: "last year",
        label: "last year",
    },
];

const formData = {
    income: {
        type: "Income",
        categories: ["Deposits", "Salary", "Savings"],
    },
    expense: {
        type: "Expense",
        categories: ["Bills", "entertainment", "food"],
    },
};

const Expenses = () => {
    const { data } = useContext(AuthContext);
    const [expenses, setExpenses] = useState(data.expense);
    const [income, setIncome] = useState(data.income);
    const [sortIncome, setSortIncome] = useState("sort by...");
    const [sortExpense, setSortExpense] = useState("sort by..");

    const handleExpenseDates = (sortBy, type) => {
        let date = new Date();
        let month = date.getMonth();
        let year = date.getFullYear();

        if (sortBy === "last month") {
            setExpenses(
                data.expense.filter((e) => {
                    let currentDate = new Date(e.date);
                    let currentMonth = currentDate.getMonth();
                    return month - 1 === currentMonth;
                })
            );
        } else if (sortBy === "current month") {
            setExpenses(
                data.expense.filter((e) => {
                    let currentDate = new Date(e.date);
                    let currentMonth = currentDate.getMonth();
                    return month === currentMonth;
                })
            );
        } else if (sortBy === "last year") {
            setExpenses(
                data.expense.filter((e) => {
                    let currentDate = new Date(e.date);
                    let currentYear = currentDate.getFullYear();
                    return year - 1 === currentYear;
                })
            );
        } else {
            setExpenses(data.expense);
        }
    };

    const handleIncomeDates = (sortBy) => {
        let date = new Date();
        let month = date.getMonth();
        let year = date.getFullYear();

        if (sortBy === "last month") {
            setIncome(
                data.income.filter((e) => {
                    let currentDate = new Date(e.date);
                    let currentMonth = currentDate.getMonth();
                    return month - 1 === currentMonth;
                })
            );
        } else if (sortBy === "current month") {
            setIncome(
                data.income.filter((e) => {
                    let currentDate = new Date(e.date);
                    let currentMonth = currentDate.getMonth();
                    return month === currentMonth;
                })
            );
        } else if (sortBy === "last year") {
            setIncome(
                data.income.filter((e) => {
                    let currentDate = new Date(e.date);
                    let currentYear = currentDate.getFullYear();
                    return year - 1 === currentYear;
                })
            );
        } else {
            setIncome(data.income);
        }
    };

    const handleEdit = (id) => {

    };

    console.log(expenses);
    return (
        <div className={styles.main}>
            <h1>
                <span style={{ color: "#1687A7" }}>INCOME </span> AND
                <span style={{ color: "#29BB89" }}> EXPENSES</span>
            </h1>
            <div>
                <div>
                    <h2>Income</h2>
                    <div className={styles.filter_tag}>
                        <Select
                            placeholder={"filter by dates"}
                            options={dates}
                            onChange={(e) => handleIncomeDates(e.value)}
                        />
                        <Select
                            placeholder={sortIncome}
                            value={"date"}
                            options={options}
                            onChange={(e) => setSortIncome(e.value)}
                        />
                    </div>
                </div>
                <Table
                    data={income}
                    color="#1687A7"
                    sort={sortIncome}
                    handleEdit={handleEdit}
                />
            </div>
            <div>
                <div>
                    <h2>Expenses</h2>
                    <div className={styles.filter_tag}>
                        <Select
                            placeholder={"filter by dates"}
                            options={dates}
                            onChange={(e) => handleExpenseDates(e.value)}
                        />
                        <Select
                            placeholder={sortExpense}
                            value={"date"}
                            options={options}
                            onChange={(e) => setSortExpense(e.value)}
                        />
                    </div>
                </div>
                <Table
                    data={expenses}
                    color="#29BB89"
                    sort={sortExpense}
                    handleEdit={handleEdit}
                />
            </div>
        </div>
    );
};

export default Expenses;
