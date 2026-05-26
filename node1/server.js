const express=require('express');
const app=express();


PORT=3000;
app.get('/api/hello',(req,res)=>{
    res.send("hello friends")

})

app.listen(PORT,()=>{console.log('serveris listening on port:'+PORT)})








// app.get('/api/namaste',(req,res)=>{
//     res.send("Namaste Nepali didibaini tatha dhajuvaiharu");
//     res.send("haha heehhehe eehfjdffsjdkfsf");
// });


app.get('/api/namaste',(req,res)=>{
    res.write("Namaste Nepali didibaini tatha dhajuvaiharu");
    res.write("haha heehhehe eehfjdffsjdkfsf");
    res.end();
});


app.get('/api/',(req,res)=>
    res.json({
        message:"Namaste Nepali didibaini tatha dhajuvaiharu",
        message2:"haha heehhehe eehfjdffsjdkfsf"    

    })
);
