const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');

/**
 * Routes
 */
const allRequest = require('./routes/router')

app.use(morgan('dev'));

//json parser
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//http header
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

/**
 * Request Router
 */
app.use('/api', allRequest);


/**
 * Not Found
 */
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})


/**
 * Error Response
 */
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error,
        }
    })
})

module.exports = app;