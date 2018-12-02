// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var lessonSchema = new Schema({
  title: {type: String, required: true},
  level: {type: String, required: true},
  script: {type: String, required: true},
  user: {type: String, required: true},
  audio_path: {type: String, required: true}
});

// the schema is useless so far
// we need to create a model using it
var Lesson = mongoose.model('Lesson', lessonSchema);

// make this available to our users in our Node applications
module.exports = Lesson;
