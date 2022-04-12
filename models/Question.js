const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  body: {
    type: String,
    required: true,
  },
  answerCount: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  tags:{
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Question = mongoose.model('question', QuestionSchema);
