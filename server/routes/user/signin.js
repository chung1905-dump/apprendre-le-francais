var express = require('express');
var User = require('../../model/user');
var router = express.Router();
var jwt = require('jsonwebtoken');
var keys = require('../../config/keys');

router.post('/', function (req, res, next) {
  const body = req.body;
  const username = body.username;
  const password = body.password;
  const errors = {};
  try {
    if (req.loggedUser) {
      throw new Error('User Logged In.');
    }
    // validateData(body);
    User.findOne({username})
      .then(user => {
        if (!user) {
          errors.message = "Username not found";
          res.status(404).send({
            message: errors.message
          });
        } else if (password !== user.password) {
          errors.message = "Password incorrect";
          res.status(400).send({
            message: errors.message
          });
        } else {
          const payload = {
            name: user.username
          };

          jwt.sign(payload, keys.secretKey, {expiresIn: 60 * 60 * 24}, (err, token) => {
            res.json({
              success: true,
              token: token
            });
          })
        }
      })

  } catch (e) {
    res.send({
      status: false,
      message: e.message
    });
  }
});

module.exports = router;
