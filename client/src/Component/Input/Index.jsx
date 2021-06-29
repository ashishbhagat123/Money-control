import React from 'react'

const Input = ({type, label, categories}) => {

    const handleChange = (event) => {

    }

    return (
        <div>
            <label>{label}</label>
            <input type="text"  
            onChange = {handleChange}
            />
        </div>
    )
}

export default Input
