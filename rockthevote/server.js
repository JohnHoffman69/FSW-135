const expressJwt = require("express-jwt");
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

// Middleware - A function that fires on the in between for every route
app.use(express.json()); // Looks for a request body, and turns it into "req.body"
app.use(morgan("dev")); // Logs request to the console

//Database
mongoose.connect(
  "mongodb://localhost:27017/voter-list-db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log("Connected to the DB on port 27017")
);

// //Routes
app.use('/auth', require('./routes/authRouter'))
app.use('/api', expressJwt({secret: process.env.SECRET, algorithms: ["HS256"]}))
app.use('/user', require('./routes/userRouter.js'))
app.use('/api/issue', require('./routes/issueRouter.js'))
app.use('/api/comments', require('./routes/commentsRouter.js'))

//Errors
app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "Unauthorized Error") {
    res.status(err.status);
  }
  res.send({ errMsg: err.message });
});

//Port
app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});