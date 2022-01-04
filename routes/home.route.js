// IMPORTS
// imports express
const express = require("express");

// imports router
const router = express.Router();

// imports internal controllers modules
// NONE HERE

// ROUTES
// example get
router.get("/", (req, res) => {
  res.send("Hello world!!");
});

// EXPORTS
// exposes internal module for the app
module.exports = router;
