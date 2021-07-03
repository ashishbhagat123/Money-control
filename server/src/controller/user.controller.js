const express = require("express");
const router = express.Router();
const Users = require("../model/user.model");

router.post("/", async (req, res) => {
    const { username, email, password } = req.body;
    let response = {
        error: false,
        success: false,
        msg: "",
    };

    try {
        let user = await Users.findOne({ email: email }).lean().exec();
        if (user) {
            response.error = true;
            response.msg = "Email Id is already registered with us";
            console.log(response);
            res.status(200).send(response);
        } else {
            (response.success = true),
                (response.msg = "success creating account");
            let user = await Users.create(req.body);
            console.log(response);
            res.status(200).send(response);
        }
    } catch {
        (response.error = true),
            (response.msg =
                "opps somthing is not right. please try again later");
        res.status(200).send(response);
    }
});

module.exports = router;
