const express=require('express');
const app=express();
const user=require("./routes/user");
const PORT=5000;
app.use(express.json());
app.use('/api',user);

app.listen(PORT,()=>{
    console.log("listening on :"+PORT);
})