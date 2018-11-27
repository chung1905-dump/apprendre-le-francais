var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var signupRouter = require('./routes/user/signup');
var loginRouter = require('./routes/user/signin');
var authRouter = require('./routes/user/authenticate');

var app = express();
mongoose.connect('mongodb://localhost/alf', {
  useCreateIndex: true,
  useNewUrlParser: true
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/authenticate', authRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
});

module.exports = app;
