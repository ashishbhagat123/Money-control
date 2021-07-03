const mongoose = require("mongoose")

const expensesSchema = new mongoose.Schema({
    type: {type: "String", required: true},
    amount : {type: "number", required: true},
    notes: {type: "String"},
    category: {type: "String"},
    date: {type: "date", required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
}, {versionKey: false, timestamps: true})


const Expenses = mongoose.model("expenses", expensesSchema)

module.exports = Expenses