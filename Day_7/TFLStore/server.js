const { response } = require('express');
var express= require('express');
var path=require('path');

var credentials=require("./data/credentials.json");
var flowers=require("./data/flowers.json");
var customers=require("./data/customers.json");

var app=express(); 

//Middlware configuration:
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//HTTP Reuquest Handlers Mapping

//Node JS Aplication consist of  5 HTTP handlers
//Node JS Application consist of 4 REST API Handlers

app.get("/",function(req, res){
    res.sendFile("index.html");
});

//When Client Application invoke  web api  and received json data as response
//it is called as REST API
//it is called as Web API
//it is called as web service
//callback function mappe to each HTTPWebRequest is called as HTTPHandler

// web query: http://localhost/api/flowers
// sql Query: SELECT * FROM FLOWERS

app.get("/api/flowers",(request, response)=>{
      // Web Query Processing logic
    response.send(flowers);
});

// web query is sent to web server :Web API         : http://localhost/api/flowers/23
// sql Query is sent to database server     :SELECT * FROM FLOWERS WHERE ID=23
//Web API Handler mapped with  Web Query

app.get("/api/flowers/:id", (request, response)=>{
    //scope varible
    // Web Query Processing logic
    let id =request.params.id;
    let flower=flowers.find(product=>product.id==id); // where block: Query
    response.send(flower);
});

app.get("/api/customers",(request, response)=>{
      // Web Query Processing logic
    response.send(customers);
});

app.get("/api/customers/:id", (request, response)=>{
      // Web Query Processing logic
    let customerId=request.params.id;
    let theCustomer=customers.find(cust=>cust.id==customerId);
    response.send(theCustomer);
});

// HTTP POST Handlers
app.post("/api/login",(request,response)=>{
    console.log("Login post is invoked....");
    var user=request.body;
    /* if(user.username=="ravi" && user.password=="seed"){
        response.send("Valid User");
    }
    else{
        response.send("InValid User");
    } 
    */
    let theUser=credentials.find(credential=>credential.username==user.username && credential.password==user.password );
    let message="Invalid User";
    if(theUser !==undefined)
    {
        message="Valid User"
    }
    response.send(message);
      /*
        Check crednetials agains MySQL Datbase 
        and send proper response back to calling Client Application
    */
});

app.post("/api/register",(request,response)=>{
    console.log("POST register is invoked...")
  var newCustomer=request.body;
  customers.push(newCustomer);
  response.send("Customer Registration Successful");
  /*
    Insert newly created customers details to mySQL Database customers table
  */
});

app.post("/api/flowers", (request, response)=>{
    let newFlower=request.body;
    flowers.push(newFlower);
    //Insert new flower into flowers table in mysql database
    response.send("New Flower is inserted to collection");
});

app.delete("/api/flowers/:id",(request, response)=>{
    let id=request.params.id;
    let remainingFlowers=flowers.filter(f=>f.id!=id);
    flowers=remainingFlowers;
    /*
     Delete data from mysql database  
    */
    response.send("flower is removed from collection");
});

app.listen(9898);
console.log("Server is listening on port 9898");