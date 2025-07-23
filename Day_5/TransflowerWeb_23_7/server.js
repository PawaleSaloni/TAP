const { urlencoded } = require('body-parser');
var express=require('express');
var path=require('path');

const app=express();
// configuring middleware

app.use(urlencoded({extended:true}));
app.use(express.json());

//Configure public folder as static folder  to express module

var staticMiddleware=express.static(path.join(__dirname,"public"));
app.use(staticMiddleware);

// 3 HTTP Request Handlers

// how many get handlers  : 1
// how many many post handlers: 2

//Server Side

//Logic for sending default html file to browser

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
});

//Logic for Login form posted Data

app.post("/login",(request, response)=>{
   console.log( request.body);
   var user=request.body;
   //User Credential logic
   if(user.email=="ravi.tambade@transflower.in" && 
      user.password=="seed"){
          console.log("valid user");
          response.send("Valid user");
      }
      else
      {
         console.log("Invalid User");
         response.send("InValid user");
      }
    console.log("Login form is posted by  browser is received at server");
});

//Logic for  Register form posted Data

app.post("/register",(request, response)=>{
    console.log( request.body);
    console.log("REgister  form is posted by  browser is received at server");
});

app.listen(9000);
console.log("Website is being hosted on port no 9000");