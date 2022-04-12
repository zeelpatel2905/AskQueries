const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
  tagName: {
    type: String,
    required: true,
    unique: true,
  },
  usageGuide: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Tag = mongoose.model('tag', TagSchema);
