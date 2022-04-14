const express = require('express');
const router = express.Router();
const Job = require('../../models/Job');

// @route GET api/company
// @desc Test route
// @access Public
router.get('/', async (req, res) => {
  Job.find((err, Job) => {
    if (err) {
      return res.json({ err: err });
    } else if (Job == null) {
      return res.json({ err: 'No tags available' });
    } else {
      return res.json({ data: Job });
    }
  });
});

module.exports = router;
