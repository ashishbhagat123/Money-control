import React from 'react'
import Input from '../Input/Index'
import styles from "./Index.module.css"

const InputForm = ({type= "INCOME"}) => {
    return (
        <div className = {styles.main}>
            <h2>ADD {type}</h2>
            <form>
                <label>Enter your {type}</label>
                <Input />
                <label>Enter your {type}</label>
                <Input />
                <label>Enter your {type}</label>
                <Input />
            </form>
        </div>
    )
}

export default InputForm
