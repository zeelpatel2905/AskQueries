const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  pinCode: {
    type: String,
  },
  about: {
    type: String,
  },
  companyName: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});
module.exports = User = mongoose.model('user', UserSchema);
