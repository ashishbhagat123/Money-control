import React, { useState } from "react";
import InputForm from "../InputForm/Index";
import styles from "./Index.module.css";

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

const ExpensesChart = ({ income, expense, highest_expense }) => {
    const [openForm, setOpenForm] = useState(false);
    const [formInput, setFormInput] = useState({});

    const handleForm = (input) => {
        if (!openForm) {
            setFormInput(input);
        } 
        setOpenForm(!openForm)
    };

    console.log(formInput);

    return (
        <div className={styles.main}>
            <div>
                <h3>EXPENSES IN CHART</h3>
            </div>
            <div className={styles.flex_container}>
                <div>
                    <h2>TO ADD EXPENSE/INCOME CLICK BELOW</h2>
                    <div>
                        {openForm && (
                            <InputForm
                                categories={formInput.categories}
                                type={formInput.type}
                                closeForm={handleForm}
                            />
                        )}
                        <img
                            onClick={() => handleForm(formData.income)}
                            src="https://img.icons8.com/office/150/000000/plus.png"
                            alt="plus"
                        />
                        <img
                            onClick={() => handleForm(formData.expense)}
                            src="https://img.icons8.com/office/150/000000/minus.png"
                            alt="minus"
                        />
                    </div>
                </div>
                <div className={styles.monthly_budget}>
                    <div>
                        <div>
                            <img
                                src="https://img.icons8.com/fluent/96/000000/receive-euro.png"
                                alt="income"
                            />
                            <p>Monthly Income</p>
                        </div>
                        <h1>{income} Rs</h1>
                    </div>
                    <div>
                        <div>
                            <img
                                src="https://img.icons8.com/fluent/96/000000/money-bag.png"
                                alt="income"
                            />
                            <p>Monthly Expense</p>
                        </div>
                        <h1>{expense} Rs</h1>
                    </div>
                    <div>
                        <div>
                            <img
                                src="https://img.icons8.com/officel/96/000000/card-in-use.png"
                                alt="highest"
                            />
                            <p>Highest Expense</p>
                        </div>
                        <h1>{highest_expense} Rs</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpensesChart;
