const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Answer = mongoose.model('answer', AnswerSchema);
