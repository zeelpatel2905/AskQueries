const express = require('express');
const router = express.Router();
const { check,validationResult}=require('express-validator');
const Tag=require('../../models/Tag');

// @route POST api/tag
// @desc Add Tag
// @access Public
router.get(
    '/',
    async (req, res) => {
      Tag.find((err, Tag) => {
        if (err) {
          return res.json({ err: err });
        } else if (Tag == null) {
          return res.json({ err: 'No tags available' });
        } else {
          return res.json( {data: Tag});
        }
      });
    }
  );

router.post('/',[
    check('tagName','Tag Name is required').not().isEmpty(),
    check('usageGuide','Usage Guide is required').not().isEmpty(),
    check('summary','Summary is required').not().isEmpty()
],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {tagName,usageGuide,summary} =req.body;
    try {
        let tag=await Tag.findOne({tagName});
        if(tag){
            return res.status(400).json({errors:[{msg:'Tag already exists!'}]});
        }
        tag = new Tag({tagName,usageGuide,summary});
        await tag.save();
        res.status(200).send('Tag added successfully!')
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports=router;