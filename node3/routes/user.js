const express=require('express');

const router=express.Router();

router.get('/user',(req,res)=>{
console.log("get called")
res.send("get api called");
});

router.post('/user',(req,res)=>{
console.log("post called")
const {name}=req.body;
const {email}=req.body;
res.send("Post api called with email"+email);
})
module.exports = router;