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
    default: '',
  },
  city: {
    type: String,
    default: '',
  },
  state: {
    type: String,
    default: '',
  },
  pinCode: {
    type: String,
    default: '',
  },
  about: {
    type: String,
    default: '',
  },
  tags: {
    type: String,
  },
  type: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});
module.exports = User = mongoose.model('user', UserSchema);
