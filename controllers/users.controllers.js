// IMPORTS
// imports internal models modules
const UserModel = require("../models/users.model.js");
// imports MongoDB ObjectID type
const ObjectId = require("mongodb").ObjectId;

// CONTROLLERS
// get all users
const getUsers = (req, res) => {
  UserModel.find({})
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: "No users were found" }));
};

// create new users
const createUser = (req, res) => {
  UserModel.create(req.body)
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

// specific user actions = get one user
const getUser = (req, res) => {
  const userID = req.params.id; // convert to ObjectId
  UserModel.findOne({ _id: userID })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "User not found" }));
};

// specific user actions = get one user
//const getUser = (req, res) => {
//  const userID = ObjectId(req.params.id); // convert to ObjectId
//  console.log(userID);
//  const AllUsers = UserModel.find({});
//  const FindOne = AllUsers.filter((user) => {
//    console.log("UMMM", user.id);
//    console.log("DOISSS", UserID);
//    user.id === userID;
//  });
//  console.log("ALUUUUUUUU: ", FindOne);
//  if (FindOne) {
//    res.status(200).json({ FindOne });
//  } else {
//    res.status(404).json({ msg: "User not found" });
//  }
//};

// specific user actions = update one user
const updateUser = (req, res) => {
  const userID = ObjectId(req.params.id); // convert to ObjectId
  UserModel.findOneAndUpdate({ _id: userID }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "User not found" }));
};

// specific user actions = delete one user
const deleteUser = (req, res) => {
  const userID = ObjectId(req.params.id); // convert to ObjectId
  UserModel.findOneAndDelete({ _id: userID })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "User not found" }));
};

// const logicallyDeleteUser = ((req, res) => {
//    UserModel.findOneAndReplace({ _id: req.params.userID }, req.body(isDeleted = true))
//    .then(result => res.status(200).json({ result }))
//    .catch(error => res.status(404).json({msg: 'User not found'}))
//})

// EXPORTS
// exposes internal module for the app
module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
