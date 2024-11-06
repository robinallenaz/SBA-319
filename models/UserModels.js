const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: String,
  age: Number,
  Hobby: String
});

module.exports = mongoose.model("User", UserSchema);


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
