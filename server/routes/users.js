var express = require('express');
var User = require('../model/user');
var router = express.Router();

router.post('/', function (req, res, next) {
  const body = req.body;
  var newUser = User({
    username: body.username,
    password: body.pwd
  });

// save the user
  newUser.save(function (err) {
    if (err) throw err;
    console.log('User created!');
  });
  res.send('User created');
});

module.exports = router;
