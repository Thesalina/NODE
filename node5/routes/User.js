const express=require('express');
const User=require('../models/User');
router=express.Router();

router.use(express.json());

router.post("/users",async(req,res)=>{
  const{name,email,password}=req.body;
    try{ const newuser=  new User({name,email,password});
        await newuser.save();
res.status(201).json({message:"User Registered Successfully", user:newuser});}
    catch(error){
        res.status(500).json(({message:"Error Registering user",error:error.message}));
    }
})

module.exports=router;