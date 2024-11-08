import mongoose from 'mongoose';

let Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        return /^[a-zA-Z0-9]+$/.test(value);
      },
      message: 'Username must be alphanumeric',
    },
    index: true;
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      },
      message: 'Email must be valid',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 50,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  hobby: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
});

export default mongoose.model("User", UserSchema);


// const express = require("express");
// const router = express.Router();
// const users = require("./UserModels.js");
// const error = require("../myapp/middleware.js");

// BASE PATH FOR THIS ROUTER IS: /api/users

// Creating a simple GET route for individual users

// router.get("/", (req, res) => {
//   const links = [
//     {
//       href: "users/:id",
//       rel: ":id",
//       type: "GET",
//     },
//   ];

//   res.json({ users, links });
// });

// Creating a simple GET route for individual users,
// using a route parameter for the unique id.

// router.get("/:id", (req, res, next) => {
//   const user = users.find((u) => u.id == req.params.id);
//   const links = [
//     {
//       href: `/${req.params.id}`,
//       rel: "",
//       type: "PATCH",
//     },
//     {
//       href: `/${req.params.id}`,
//       rel: "",
//       type: "DELETE",
//     },
//   ];
