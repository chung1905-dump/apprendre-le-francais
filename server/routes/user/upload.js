var express = require('express');
var router = express.Router();
var multer = require('multer');

var Lesson = require('../../model/lesson');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../view/public/storage/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.mp3');
  }
});

var upload = multer({
  storage: storage,
});

router.post('/', upload.single('customFile'), function (req, res, next) {
  try {
    let user = checkToken(req.body.token);
    if (!req.file) {
      throw new Error('No file');
    }
    if (user === false) {
      throw new Error('Not logged in');
    }

    let newLesson = Lesson(Object.assign({
      user: user,
      audio_path: req.file.filename
    }, req.body));

    newLesson.save(function (e) {
      if (e) {
        console.log(e.code);
        res.send({
          status: false,
          message: e.message
        });
      } else {
        console.log('ok');
        res.send({
          status: true,
          message: 'OK'
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
