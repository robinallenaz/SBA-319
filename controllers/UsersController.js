let UserModel = require("../models/UserModel.js");

let controls = {
    all: async (req, res) => {
        try {
            let allUsers = await UserModel.find();
            res.json(allUsers);
        }
        catch(err) {
            res.json({
                errors: err
            })
        }
    }
}

create: async (req, res) => {
    try {
        let newUser = new UserModel({
            name: req.body.name,
            age: req.body.age,
            hobby: req.body.hobby
        });
        let savedUser = await newUser.save();
        res.json(savedUser);
    }
    catch(err) {
        res.json({
            errors: err
        })
    }
},
update: async (req, res) => {
    try {
        let foundUser = await UserModel.findOneAndUpdate({name: req.body.name}, req.body);
        res.json(foundUser);
    }
    catch(err) {
        res.json({
            errors: err
        })
    }   
},
delete: async (req, res) => {
    try {
        let deletedUser = await UserModel.findOneAndDelete(req.body.name);
        res.json(deletedUser);
    }
    catch(err) {
        res.json({
            errors: err
        })
    }
}
module.exports = controls;