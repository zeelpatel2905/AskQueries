const express = require('express');
const router = express.Router();
const Question = require('../../models/Question');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');

// @route POST api/question
// @desc Post Question
// @access Public
router.post(
  '/',
  [check('email', 'Please provide valid email id').isEmail()],
  async (req, res) => {
    const { email } = req.body;
    let user = await User.findOne({ email: email });
    let uname = user.name;
    Question.find({ uid: { $ne: email } }, (err, Question) => {
      if (err) {
        return res.json({ err: err });
      } else if (Question == null) {
        return res.json({ err: 'No questions available' });
      } else {
        return res.json( {data: Question});
      }
    });
  }
);

module.exports = router;
