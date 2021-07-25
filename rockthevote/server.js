const expressJwt = require("express-jwt");
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();


const PORT = 5000;

app.use(express.json()); 
app.use(morgan("dev")); 

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
app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms: ['HS256']}))
app.use("/api/user", require("./routes/userRouter.js"))
app.use("/auth", require("./routes/authRouter.js"))
app.use("/api/issues", require('./routes/issueRouter.js'))
app.use("/api/comments", require("./routes/commentRouter.js"))

//Errors
app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "401 Unauthorized Error") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

//Port
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
});