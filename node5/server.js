const express=require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();

PORT=process.env.PORT;
app.use(express.json());


const userRouter = require('./routes/user')  // import router
app.use('/api', userRouter)                  // connect it
mongoose.connect(process.env.MONGODB_URI,{
    
}).then(()=>
    console.log('connected to MongoDB')).catch((error)=>{
    console.error('Error connecting to MongoDB:', error);   
})

app.listen(PORT,()=>{
    console.log('server listening on port:',PORT);
});