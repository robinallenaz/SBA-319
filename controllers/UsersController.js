import UserModel from "../models/UserModels.js";

const controls = {
    all: async (req, res) => {
        try {
            const allUsers = await UserModel.find();
            res.json(allUsers);
        } catch (err) {
            res.json({ errors: err });
        }
    },

    create: async (req, res) => {
        try {
            const newUser = new UserModel({
                name: req.body.name,
                age: req.body.age,
                hobby: req.body.hobby
            });
            const savedUser = await newUser.save();
            res.json(savedUser);
        } catch (err) {
            res.json({ errors: err });
        }
    },

    update: async (req, res) => {
        try {
            const foundUser = await UserModel.findOneAndUpdate({ name: req.body.name }, req.body, { new: true });
            res.json(foundUser);
        } catch (err) {
            res.json({ errors: err });
        }
    },

    delete: async (req, res) => {
        try {
            const deletedUser = await UserModel.findOneAndDelete({ name: req.body.name });
            res.json(deletedUser);
        } catch (err) {
            res.json({ errors: err });
        }
    }
};

export default controls;
