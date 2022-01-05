// IMPORTS
// imports express
const express = require("express");

// imports router
const router = express.Router();

// imports internal controllers modules
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controllers.js");

// ROUTES
// get all users
router.get("/users", getUsers);

// create new user
router.post("/users", createUser);

// specific user actions = get, update, delete one user
//router.route("/users").get(getUsers).post(createUser);

// specific user actions get one user
router.get("/users/:id", getUser);

// specific user actions update one user
router.put("/users/:id", updateUser);

// specific user actions delete one user
router.delete("/users/:id", deleteUser);

// EXPORTS
// exposes internal module for the app
module.exports = router;
