import React from "react";
import ExpensesChart from "../../Component/ExpensesChart/Index";
import IncomeCard from "../../Component/IncomeCard/Index";
import styles from "./Index.module.css";

const Dashboard = ({ margin }) => {
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
                <IncomeCard color="#BF1363" amount="500" account="Total Expense" />
                <IncomeCard color="#29BB89" amount="500" account="Total Income" />
                <IncomeCard color="#1687A7" amount="500" account="Total Balance" />
            </div>
            <div>
                <ExpensesChart income="10000" expense="5000" highest_expense="5000" />
            </div>
        </div>
    );
};

export default Dashboard;
