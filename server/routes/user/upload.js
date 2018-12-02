var express = require('express');
var router = express.Router();
var multer = require('multer');

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
    console.log(req.body);
    console.log(req.file);
    res.send({
      message: 'a'
    });
  } catch (e) {
    res.send({
      status: false,
      message: e.message
    });
  }
});

module.exports = router;
