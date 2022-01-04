// IMPORTS
// import express lib
const express = require("express");
// imports router
const router = express.Router();
// imports mongoDB driver
const mongoose = require("mongoose");
// imports dotenv in order to acess config file information
require("dotenv").config();

// APP SETUP
// create app with express
const app = express();

// MIDDLEWARE SETUPS
// import middleware responsible for json parsing
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

// import middleware responsible for registering routes in console log history
app.use(logger);

// middleware responsible for registering routes in console log history
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

// import all router modules
const homeRouter = require("./routes/home.route.js");
const userRouter = require("./routes/users.routes.js");
const projectsRouter = require("./routes/projects.js");

// set beginning route of all routers
app.use("/projects", projectsRouter);
app.use("/users", userRouter);
app.use("/", homeRouter);

// RUN SERVER
// set app port
const port = 3000;

// run the server on specified port
mongoose.connect(process.env.MONGO_URI).then((result) =>
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })
);
//.catch((err) => console.log(Error))

// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

// https://youtu.be/SccSCuHhOw0

// https://youtu.be/BN_8bCfVp88

// https://dev.to/ericchapman/nodejs-express-part-6-mongodb-database-3gb2

// https://mongoosejs.com/docs/

///// ########### RUN WITH >>>>>>>>>>>> npm run devStart
