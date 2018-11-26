var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
  try {
    //@todo: Parse token here
    res.json({
      success: true,
      username: 'Test'
    })
  } catch (e) {
    res.send({
      status: false,
      message: e.message
    });
  }
});

module.exports = router;
