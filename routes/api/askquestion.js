const express = require('express');
const router = express.Router();
const { check,validationResult}=require('express-validator');
const Question=require('../../models/Question');

// @route POST api/question
// @desc Post Question
// @access Public
router.post('/',[
    check('title','Title is required').not().isEmpty(),
    check('body','Body is required').not().isEmpty(),
    check('tags','Tags are required').not().isEmpty(),
],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {uid,title,body,tags} =req.body;
    try {
        let question=await Question.findOne({title});
        if(question){
            return res.status(400).json({errors:[{msg:'Question already exists!'}]});
        }
        question = new Question({uid,title,body,tags});
        await question.save();
        res.status(200).send('Question posted successfully!')
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports=router;