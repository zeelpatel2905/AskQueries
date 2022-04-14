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
  [check('id', 'Please provide id').isEmpty()],
  async (req, res) => {
    const { id } = req.body;
    Question.find({ _id: id }, (err, Question) => {
      if (err) {
        return res.json({ err: err });
      } else if (Question == null) {
        return res.json({ err: 'No questions available' });
      } else {
        return res.json({ data: Question });
      }
    });
  }
);

module.exports = router;
