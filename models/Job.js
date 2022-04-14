const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  rid:{
    type:String,
    required:true,
  },
  companyName:{
    type:String,
    required:true,
  },
  jobTitle: {
    type: String,
    required: true,
    unique: true,
  },
  jobDesc: {
    type: String,
  },
  expMin: {
    type: String,
    default: '-',
  },
  location:{
    type:String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Job = mongoose.model('job', JobSchema);
