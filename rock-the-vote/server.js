const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/auth', require('./routes/authRouter.js'));

// Database
mongoose.connect('mongodb://localhost:27017/voteIssuesDB',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('Connected to the DB on port 27017')
);

// Error Handling
app.use((err, req, res, next) => {
    return res.send({errMsg: err.message});
});

// Listen to port 5500
app.listen(5500, () => {
    console.log('Server listening to port 5500');
});