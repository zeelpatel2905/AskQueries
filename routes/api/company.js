const express = require('express');
const router = express.Router();

// @route GET api/company
// @desc Test route
// @access Public
router.get('/',(req,res)=>res.send('Company route'));

module.exports=router;  