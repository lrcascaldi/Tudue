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

// create new users
router.post("/new", createUser);

console.log("ANTES");
router.get("/:id", (req, res) => {
  console.log(req.params.id);
});
console.log("DEPOIS");

// specific user actions delete one user

router.delete("/:id", deleteUser);

router.put("/:id", updateUser);

// get all users
router.get("/", getUsers);

// specific user actions = get, update, delete one user
// router.route("/:id").get(getUser).put(updateUser);

// EXPORTS
// exposes internal module for the app
module.exports = router;
