const express = require("express");
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');



//Middleware ( for every request)//
app.use(express.json());
app.use(morgan('dev'))

//Routes//

app.use('/inventory', require('./routes/inventoryRouter.js'));

//Database
mongoose.connect('mongodb://localhost:27017/storedb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("Connected to the DB")
);



//Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
});

app.listen(3000, () => {
    console.log ("The app is listening on port 3000.")

});