const express = require('express');
const app = express()
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('./database/dbconnection');
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/collections');
const userRouters=require('./api/routes/users');

app.use('/uploads',express.static(__dirname + '/uploads/images'));


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/collections', orderRoutes);
app.use('/users', userRouters);

app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.status= 404;
    next(error);
    
});

app.use((error, req,res,next) => {

        res.status(error.status || 500);
        res.json({
            error: {
                message: error.message
            }
        });
});
module.exports = app; 