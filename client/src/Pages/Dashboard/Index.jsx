import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ExpensesChart from "../../Component/ExpensesChart/Index";
import IncomeCard from "../../Component/IncomeCard/Index";
import { AuthContext } from "../../Context/Auth/Index";
import styles from "./Index.module.css";

const Dashboard = ({ margin }) => {
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [highestExp, setHighestExp] = useState(0);

    const { userDetails, update, updateDashboard } = useContext(AuthContext);

    const handleRequest = (data) => {
        const { expense, income } = data;

        let totalInc = income?.reduce((a, e) => {
            return e.amount + a;
        }, 0);

        let totalExp = expense?.reduce((a, e) => {
            return e.amount + a;
        }, 0);

        setHighestExp(
            expense.sort((a, b) => b.amount - a.amount)[0]?.amount || 0
        );
        setExpense(totalExp);
        setIncome(totalInc);
        updateDashboard(false);
    };

    useEffect(() => {
        const { id } = userDetails;
        axios
            .post("http://localhost:8000/dashboard", { id: id })
            .then((res) => handleRequest(res.data));
    }, [userDetails]);

    useEffect(() => {
        const { id } = userDetails;
        if (update) {
            axios
                .post("http://localhost:8000/dashboard", { id: id })
                .then((res) => handleRequest(res.data));
        }
    }, [update]);

    return (
        <div
            style={
                margin
                    ? { marginLeft: "18%", width: "82%" }
                    : { marginLeft: "5.8%", width: "94.2%" }
            }
            className={styles.main}
        >
            <div className={styles.income_grid}>
                <IncomeCard
                    color="#BF1363"
                    amount={income}
                    account="Total Expense"
                />
                <IncomeCard
                    color="#29BB89"
                    amount={expense}
                    account="Total Income"
                />
                <IncomeCard
                    color="#1687A7"
                    amount={income - expense}
                    account="Total Balance"
                />
            </div>
            <div>
                <ExpensesChart
                    income={income}
                    expense={expense}
                    highest_expense={highestExp}
                />
            </div>
        </div>
    );
};

export default Dashboard;
