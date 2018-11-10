var express = require('express');
var User = require('../../model/user');
var router = express.Router();

router.post('/', function (req, res, next) {
  function validateData(d) {
    if (d.pwd !== d['pwd-repeat']) {
      throw new Error('Passwords mismatchs.');
    }
    if (d.pwd.length < 6) {
      throw new Error('Passwords is too short(please greater or equal to 6).');
    }
  }

  const body = req.body;
  try {
    validateData(body);
    let newUser = User({
      username: body.username,
      password: body.pwd
    });

    // save the user
    newUser.save(function (e) {
      if (e) {
        console.log(e.code);
        if (e.code === 11000) {
          e.message = "Username has been taken."
        }
        res.send({
          status: false,
          message: e.message
        });
      } else {
        res.send({
          status: true,
          message: 'User created successfully'
        });
      }
    });
  } catch (e) {
    res.send({
      status: false,
      message: e.message
    });
  }
});

module.exports = router;
