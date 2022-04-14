const express = require('express');
const router = express.Router();
const { check,validationResult}=require('express-validator');
const Job=require('../../models/Job');

router.post('/',[],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {rid,companyName,jobTitle,jobDesc,expMin,location} =req.body;
    try {
        let job=await Job.findOne({jobTitle});
        if(job){
            return res.status(400).json({errors:[{msg:'Job already exists!'}]});
        }
        job = new Job({rid,companyName,jobTitle,jobDesc,expMin,location});
        await job.save();
        res.status(200).send('Vacancy posted successfully!')
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports=router;