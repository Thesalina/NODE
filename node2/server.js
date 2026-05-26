const express=require('express');
const app=express();
PORT=4000;

app.use(express.json());


app.get('/api/hello',(req,res)=>{
    res.send("hello friends from node2")        
});

app.post('/api/echo',(req,res)=>{
    const {username}=req.body;
    const{useremail}=req.body;
    res.json({
        message:`Hello ${username} with email ${useremail}`
    })
    
});



app.listen(PORT,()=>{console.log('serveris listening on port:'+PORT)})  
