const express = require("express");
const router = express.Router();
const Expenses = require("../model/expenses.model");

router.post("/", async (req, res) => {
    try {
        const data = await Expenses.find({ user: req.body.id }).lean().exec();
        if (data.length) {
            const expense = data.filter((e) => e.type === "expense");
            const income = data.filter((e) => e.type === "income");
            const highestExpense = expense.sort(
                (a, b) => b.amount - a.amount
            )[0];
            const payload = {
                income,
                expense,
                highestExpense,
                success: true,
                error: false,
                msg: "success",
            };
            res.status(201).send(payload);
        } else {
            const payload = {
                income,
                expense,
                highestExpense,
                success: false,
                error: true,
                msg: "Data not available at this moment",
            };
            res.status(204).send(payload);
        }
    } catch {
        const payload = {
            income,
            expense,
            highestExpense,
            success: false,
            error: true,
            msg: "Error while fetching the data, Please try again later",
        };
        res.status(500).send(payload);
    }
});

router.post("/expenses", async(req,res) => {
    try{
        const data = await Expenses.create(req.body)
        const payload = {
            success: true,
            error: false,
            msg: "success"
        }
        res.status(200).send(payload)
    }
    catch(err){
        const payload = {
            success: false,
            error: true,
            msg: "error while submitting the form"
        }
        res.status(200).send(payload)
    }
})



module.exports = router