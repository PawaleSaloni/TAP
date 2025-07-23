const { response } = require('express');
var express= require('express');
var path=require('path');

var credentials=require("./data/credentials.json");
var flowers=require("./data/flowers.json");
var customers=require("./data/customers.json");
const { request } = require('http');
var app=express(); 

//Middlware configuration:
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",function(req, res){
    res.sendFile("index.html");
});

//****************************************** */
//HTTP CRUD Operations for  Login and Register

app.post("/api/login",(request,response)=>{
    console.log("Login post is invoked....");
    var user=request.body;
    let theUser=credentials.find(credential=>credential.username==user.username && credential.password==user.password );
    let message="Invalid User";
    if(theUser !==undefined)
    {
        message="Valid User"
    }
    response.send(message);
});

app.post("/api/register",(request,response)=>{
  console.log("POST register is invoked...")
  var newCustomer=request.body;
  customers.push(newCustomer);
  response.send("Customer Registration Successful");
});

//*************************************************************************
//HTTP CRUD Operations for Flowers

app.get("/api/flowers",(request, response)=>{
    response.send(flowers);
});

app.get("/api/flowers/:id", (request, response)=>{
    let id =request.params.id;
    let flower=flowers.find(product=>product.id==id); 
    response.send(flower);
});

//Server Side POST operation for incomming HTTP POST request
app.post("/api/flowers", (request, response)=>{
    let newFlower=request.body;
    flowers.push(newFlower);
    response.send("New Flower is inserted to collection");
});

app.put("/api/flowers/:id", function(req, res){
    let id = req.params.id;
    for (var i = 0; i < flowers.length; i++)
    {
        if (flowers[i].id == id)
        flowers[i] = req.body;
    }
    console.log(req.body);
    res.send(req.body);
});

//Server Side Delete operation for incomming HTTP Delete Request
app.delete("/api/flowers/:id",(request, response)=>{
    let id=request.params.id;
    let remainingFlowers=flowers.filter(f=>f.id!=id);
    flowers=remainingFlowers;
    response.send("flower is removed from collection");
});

//******************************************************************* */

//HTTP CRUD Operations for Flowers

app.get("/api/customers",(request, response)=>{
    response.send(customers);
});

app.get("/api/customers/:id", (request, response)=>{
    let customerId=request.params.id;
    let theCustomer=customers.find(cust=>cust.id==customerId);
    response.send(theCustomer);
});

//Server Side Update Operation for incomming HTTP PUT Request

app.post("/api/customers",(request, response)=>{
    var newCustomer=request.body;
    console.log("data to be updated at customers  @server");
    customers.push(newCustomer);
    response.send("Customer data updated.");
});

app.put("/api/customers/:id",(request, response)=>{
    var customerTobeUpdated=request.body;
    let id = req.params.id;

    for (var i = 0; i < flowers.length; i++)
    {
        if (customers[i].id == id)
        customers[i] = customerTobeUpdated;
    }
    res.send(req.body);
});


app.delete("/api/customers/:id",(request, response)=>{
    let id=request.params.id;
    let remainingCustomers=customers.filter(f=>f.id!=id);
    customers=remainingCustomers;
    response.send("Customer is removed from collection");
});

app.listen(9898);
console.log("Server is listening on port 9898");