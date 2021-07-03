const express = require("express")
const app = express()
const cors = require("cors")
const connect = require("./src/config/db")
const userController = require("./src/controller/user.controller")
const loginController = require("./src/controller/login.controller")
const expenseController = require("./src/controller/expenses.controller")
app.use(express.json())
app.use(cors())

app.use("/signup", userController)
app.use("/login", loginController)
app.use("/dashboard", expenseController)

app.listen(8000, async() => {
    await connect()
    console.log("port is running on port 8000")
})