const express=require('express');
const router=express.Router();

router.get('/user',(req,res)=>{
    res.send("GET api called");

});

 router.post('/user',(req,res)=>{
    const {name}=req.body;
    const {email}=req.body;
    res.send("POST api called with name:" +name+ " and email:"+email);
});

module.exports=router;