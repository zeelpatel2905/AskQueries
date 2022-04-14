const express = require('express');
const router = express.Router();
const Answer = require('../../models/Answer');
const { check, validationResult } = require('express-validator');

// @route POST api/question
// @desc Post Question
// @access Public
router.post(
  '/',
  [check('id', 'Please provide id').isEmpty()],
  async (req, res) => {
    const { id } = req.body;
    Answer.find({ qid: id }, (err, Answer) => {
      if (err) {
        return res.json({ err: err });
      } else if (Answer == null) {
        return res.json({ err: 'No answers available' });
      } else {
        return res.json({ data: Answer });
      }
    });
  }
);

module.exports = router;
