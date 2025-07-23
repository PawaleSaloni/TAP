var express=require('express');
var path=require('path');
var app=express(); // 

//configuration
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",function(req, res){
    res.sendFile("index.html");
});

app.get("/api/login",(req,res)=>{
    //server side users credentials are verified
    var claim=req.body;
    if(claim.username =="ravi" && claim.password =="seed"){
        console.log("valid user");
    }
    else
    {
        console.log("invalid user");
    }
    console.log(claim);
    res.send("success");
})

app.post("/api/register",(req,res)=>{
    //server side  will add new customer to customers collection
    var newCustomer=req.body;
    console.log(newCustomer);
})
app.listen(9898);
console.log("Server is listening on port 9898");
