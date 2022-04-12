const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

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

module.exports=router;  