var express = require('express');
var router = express.Router();
var Lesson = require('../model/lesson');

router.get('/', function (req, res, next) {
  Lesson.find()
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => res.status(404).json({message: "Level not found"}))
});

module.exports = router;
