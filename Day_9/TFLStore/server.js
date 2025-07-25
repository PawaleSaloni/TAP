const { response } = require('express');
var express= require('express');
var path=require('path');
var fs=require('fs');

var sql=require('./mysqlconnect');

var credentials=require("./data/credentials.json");
var flowers=require("./data/flowers.json");
var customers=require("./data/customers.json");
var fileName="./data/flowers.json";
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
    //Every time reading data from file
    //initializing flowers array after reading data
    //sending flowers as response to any calling client application
        var onFileRead=function(err, data){
        if(err){
          throw err;
        }
        console.log("Data from File available");
        var strFlowers=data.toString();
        flowers =JSON.parse(strFlowers); 
        response.send(flowers); 
    };
    fs.readFile(fileName,onFileRead); 
});

app.get("/api/flowers/:id", (request, response)=>{
    let id =request.params.id;
    let flower=flowers.find(product=>product.id==id); 
    response.send(flower);
});

//Server Side POST operation for incomming HTTP POST request
app.post("/api/flowers", (request, response)=>{
    let newFlower=request.body;
    // just pushing data into array
    flowers.push(newFlower);

    var onFileWrite=function(err){
        if(err){
            throw err;
        }
        console.log("Contnet has been successfully written into file");
    };

    //file IO write 
    fs.writeFile(fileName,JSON.stringify(flowers),onFileWrite);
    response.send("New Flower is inserted to collection");
});

app.put("/api/flowers/:id", function(req, res){
    let id = req.params.id;
    for (var i = 0; i < flowers.length; i++)
    {
        if (flowers[i].id == id)
        //update existing json object by new json object
        //received from request body
        flowers[i] = req.body;
    }
    var onFileWrite=function(err){
        if(err){
            throw err;
        }
        console.log("Contnet has been successfully written into file");
    };
    //file IO write 
    fs.writeFile(fileName,JSON.stringify(flowers),onFileWrite);
    console.log(req.body);
    res.send(req.body);
});

//Server Side Delete operation for incomming HTTP Delete Request
app.delete("/api/flowers/:id",(request, response)=>{
    let id=request.params.id;

    //get all json object apart from id mentioned inside 
    //request.params.id

    let remainingFlowers=flowers.filter(f=>f.id!=id);
    //replace flowers by filtered json array sent by filter function

    flowers=remainingFlowers;
    var onFileWrite=function(err){
        if(err){
            throw err;
        }
        console.log("Contnet has been successfully written into file");
    };
    //file IO write 
    fs.writeFile(fileName,JSON.stringify(flowers),onFileWrite);
    response.send("flower is removed from collection");
});

//******************************************************************* */

//HTTP CRUD Operations for Flowers

app.get("/api/tasks",
        (request,response)=>{
                            var selectAllQuery="select * from tasks ";
                             sql.query(selectAllQuery,function(err, data){
                            if(err){
                                console.log("error : "+err);
                            }
                            else
                            {
                                response.send(data);
                            }
        });
    //response.send(data);
});

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