const router = require('express').Router; 
const {User, validate} = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    try {
        const {error} = validate(req.body);
        if (error) {
            return res.status(400).send({message:error.details[0].message});
        }

        const user = await User.findOne({email:req.body.email});
        if (user) {
            return res.status(409).send({message:error.details[0].message});
        }
    } catch (error) {
        
    }
});

module.exports = router;