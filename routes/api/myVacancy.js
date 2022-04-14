const express = require('express');
const router = express.Router();
var ObjectID = require('mongodb').ObjectID;
const { check, validationResult } = require('express-validator');
const Job = require('../../models/Job');

// @route POST api/question
// @desc Post Job
// @access Public
router.post(
  '/',
  [check('email', 'Please provide valid email id').isEmail()],
  async (req, res) => {
    const { email } = req.body;
    Job.find({ rid: email }, (err, Job) => {
      if (err) {
        return res.json({ err: err });
      } else if (Job == null) {
        return res.json({ err: 'No jobs available' });
      } else {
        return res.json({ data: Job });
      }
    });
  }
);

module.exports = router;
