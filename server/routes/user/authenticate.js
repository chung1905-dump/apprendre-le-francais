var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var keys = require('../../config/keys');

router.post('/', function (req, res) {
  try {
    const body = req.body;
    if (!body.token) {
      throw new Error('Did not signed in');
    }
    jwt.verify(body.token, keys.secretKey, (err, decoded) => {
      if (err) {
        throw new Error('Invalid token');
      } else {
        if (Date.now() < decoded.exp * 1000) {
          return res.json({
            success: true,
            username: decoded.name
          });
        } else {
          throw new Error('Token expired');
        }
      }
    });
  } catch (e) {
    return res.send({
      success: false,
      message: e.message
    });
  }
});

module.exports = router;
