// IMPORTS
// imports mongoDB driver
const mongoose = require("mongoose");

// MODELS
// user model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  }, // Convert `name` to lowercase before saving
  email: {
    type: String,
    required: true,
    unique: true, // `email` must be unique in database
    lowercase: true,
  }, // Convert `email` to lowercase before saving
  password: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean, // Sets if user is deleted in database. Defaults to false
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

// EXPORTS
// exposes internal module for the app
module.exports = User;
