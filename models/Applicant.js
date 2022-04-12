const mongoose = require('mongoose');

const ApplicantSchema = new mongoose.Schema({
  rid: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
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
