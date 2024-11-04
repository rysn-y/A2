var express = require('express');
var path = require('path');

var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use(express.static('public'));
module.exports = app;
