var express = require('express');
var router = express.Router();
var Lesson = require('../model/lesson');

router.get('/:id', function (req, res, next) {
  Lesson.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.status(404).json({ message: "No audio found" }))
});

module.exports = router;
