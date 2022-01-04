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
// specific user actions delete one user
router.delete("/users/:id", deleteUser);

// specific user actions update one user
router.put("/users/:id", updateUser);

// specific user actions get one user
router.get("/users/:id", (req, res) => {
  console.log(req.params.id);
});

// create new user
router.post("/users", createUser);

// get all users
router.get("/users", getUsers);

// specific user actions = get, update, delete one user
// router.route("/:id").get(getUser).put(updateUser);

// EXPORTS
// exposes internal module for the app
module.exports = router;
