const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');

// @route GET api/profile
// @desc Test route
// @access Public
router.post(
  '/',
  [check('email', 'Please provide valid email id').isEmail()],
  async (req, res) => {
    const { email } = req.body;
    User.find({ email: email }, (err, User) => {
      if (err) {
        return res.json({ err: err });
      } else if (User == null) {
        return res.json({ err: 'No user available' });
      } else {
        return res.json({ data: User });
      }
    });
  }
);

router.patch(
  '/',
  [check('email', 'Please provide valid email id').isEmail()],
  async (req, res) => {
    const { email } = req.body;
    let profile1 = {};
    console.log('In patch');
    console.log('Email ' + email);
    User.findOne({ email: email }, (err, profile) => {
      if (err) {
        profile1 = {};
      } else if (profile1 == null) {
        profile1 = {};
      } else {
        profile1 = profile;
      }
    });
    const salt = await bcrypt.genSalt(10);
    // @ts-ignore
    User.findOneAndUpdate(
      // @ts-ignore
      { email: email },
      {
        $set: {
          name: req.body.name ? req.body.name : profile1.name,
          contactNo: req.body.contactNo
            ? req.body.contactNo
            : profile1.contactNo,
          address: req.body.address ? req.body.address : profile1.address,
          city: req.body.city ? req.body.city : profile1.city,
          state: req.body.state ? req.body.state : profile1.state,
          pinCode: req.body.pinCode ? req.body.pinCode : profile1.pinCode,
          about: req.body.about ? req.body.about : profile1.about,
          tags: req.body.tags ? req.body.tags : profile1.tags,
        },
      },
      { new: true },
      (err, profile) => {
        if (err) {
          return res.json({ err: err });
        } else {
          return res.json({ data: profile });
        }
      }
    );
  }
);
module.exports = router;
