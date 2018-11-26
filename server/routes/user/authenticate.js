var express = require('express');
var router = express.Router();
var jwtDecode = require('jwt-decode')

router.post('/', function (req, res, next) {
  try {
    //@todo: Parse token here
    const body = req.body;
    if (body.token) {
      res.json({
        success: true,
        username: 'Test'
      })
    } else res.redirect('/login');
  } catch (e) {
    res.send({
      status: false,
      message: e.message
    });
  }
});

module.exports = router;
