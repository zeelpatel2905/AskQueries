const mongoose = require('mongoose');

const ApplicantSchema = new mongoose.Schema({
  cid: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  education10th: {
    type: String,
  },
  education12th: {
    type: String,
  },
  educationCollege: {
    type: String,
  },
  experience: {
    type: String,
  },
  otherInfo: {
    type: String,
  },
  position: {
    type: String,
  },
  technology: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Applicant = mongoose.model('applicant', ApplicantSchema);
