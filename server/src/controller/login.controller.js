const express = require("express");
const router = express.Router();
const Users = require("../model/user.model");
const Expenses = require("../model/expenses.model");

router.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await Users.findOne({ email: email }).lean().exec();
        if (user) {
            if (password === user.password) {
                const data = await Expenses.find({ user: user._id })
                    .lean()
                    .exec();
                const expense = data.filter((e) => e.type === "expense");
                const income = data.filter((e) => e.type === "income");
                const highestExpense = expense.sort(
                    (a, b) => b.amount - a.amount
                )[0];
                const payload = {
                    username: user.username,
                    id: user._id,
                    income,
                    expense,
                    highestExpense: highestExpense || "0",
                    success: true,
                    error: false,
                    msg: "success",
                };
                res.status(200).send(payload);
            } else {
                console.log(data, "here");
                const payload = {
                    income,
                    expense,
                    highestExpense,
                    success: false,
                    error: true,
                    msg: "password does not match with user id",
                };
                res.status(200).send(payload);
            }
        } else {
            const payload = {
                income,
                expense,
                highestExpense,
                success: false,
                error: true,
                msg: "password does not match",
            };
            res.status(200).send(payload);
        }
    } catch {
        const payload = {
            success: false,
            error: true,
            msg: "wrong user id password",
        };
        res.status(200).send(payload);
    }
});

module.exports = router;
