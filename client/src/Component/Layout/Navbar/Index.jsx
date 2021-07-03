import React, { useContext } from 'react'
import { AuthContext } from '../../../Context/Auth/Index'
import styles from "./Index.module.css"

const Navbar = () => {
    const { userDetails } = useContext(AuthContext)

    return (
        <div className = {styles.nav}>
            <h2>Hello! <span>{userDetails.username.toUpperCase()}</span></h2>
        </div>
    )
}

export default Navbar
