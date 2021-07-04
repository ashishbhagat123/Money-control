import React,{ useContext, useEffect, useState } from "react";
import IncomeCard from "../../IncomeCard/Index";
import { AuthContext } from "../../../Context/Auth/Index"
import ExpensesChart from "../../ExpensesChart/Index";
import styles from "./Index.module.css";

const Landing = () => {
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [highestExp, setHighestExp] = useState(0);

    const { data } = useContext(AuthContext);

    useEffect(() => {
        handleRequest(data);
    }, [data]);

    const handleRequest = (data) => {
        const { expense, income } = data;

        let totalInc = income?.reduce((a, e) => {
            return e.amount + a;
        }, 0);

        let totalExp = expense?.reduce((a, e) => {
            return e.amount + a;
        }, 0);

        setHighestExp(
            expense?.sort((a, b) => b.amount - a.amount)[0]?.amount || 0
        );
        setExpense(totalExp);
        setIncome(totalInc);
    };

    return (
        <>
            <div className={styles.income_grid}>
                <IncomeCard
                    color="#BF1363"
                    amount={income}
                    account="Total Income"
                />
                <IncomeCard
                    color="#29BB89"
                    amount={expense}
                    account="Total Expense"
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
        </>
    );
};

export default Landing;
