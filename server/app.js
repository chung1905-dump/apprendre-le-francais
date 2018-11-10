var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user/signup');

var app = express();
mongoose.connect('mongodb://localhost/alf', {
  useCreateIndex: true,
  useNewUrlParser: true
});
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
});

module.exports = app;
