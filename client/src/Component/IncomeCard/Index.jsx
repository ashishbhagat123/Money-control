import React from 'react'
import styles from "./Index.module.css"

const IncomeCard = ({color, amount, account}) => {
    return (
        <div style = {{background: color}} className = {styles.main}>
            <h1>{amount}Rs</h1>
            <p>{account}</p>
        </div>
    )
}

export default IncomeCard
