const mongoose = require("mongoose")

const connect = () => {
    return mongoose.connect("mongodb+srv://ashishbhagat_Beetlenut:919FDfeOKFwlrQK3@beetlenut.cymh0.mongodb.net/BeetleNut?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
}

module.exports = connect