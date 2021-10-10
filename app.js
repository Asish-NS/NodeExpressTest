const { application } = require('express')
var firstdependency=require('express')
var exp=firstdependency()
exp.get('/',(req,res)=>{
    res.send("Login page")
})
exp.get('/home',(req,res)=>{
    res.send("Home Page")
        
    });
exp.listen(3000,()=>{
    console.log("Server Started at 3000...")
})