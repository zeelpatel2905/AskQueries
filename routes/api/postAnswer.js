const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Answer = require('../../models/Answer');

router.post(
  '/',
  [
    check('uid', 'Uid is required').not().isEmpty(),
    check('qid', 'Qid is required').not().isEmpty(),
    check('body', 'Body is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { qid, uid, body, answerCount } = req.body;
    try {
      let answer = await Answer.findOne({ qid });
      if (answer) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Answer already exists!' }] });
      }
      answer = new Answer({ qid, uid, body });
      await answer.save();
      res.status(200).send('Answer posted successfully!');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
