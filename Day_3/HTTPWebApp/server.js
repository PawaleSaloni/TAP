
// Custom HTTP Web server using Node JS

var http=require('http');

// This is a rule for web programming

// To define first parameter always as request object
//           second prameter always as  response object

//One JSON object 
var person={
        'firstname':'Saloni',
        'lastname':'Pawale',
        'email':'salonipawale@gmail.com',
        'contactnumber':'9881735800'
};


//Array of JSON objects
var people=[
    {'firstname':'Ravi','lastname':'Tambade','email':'ravi.tambade@transflower.in','contactnumber':'9881735801'},
    {'firstname':'Sachin','lastname':'Barman','email':'ravi.tambade@transflower.in','contactnumber':'9881735801'},
    {'firstname':'Suresh','lastname':'Jadhav','email':'ravi.tambade@transflower.in','contactnumber':'9881735801'},
    {'firstname':'Ramesh','lastname':'Verma','email':'ravi.tambade@transflower.in','contactnumber':'9881735801'},
    {'firstname':'Shilpa','lastname':'Kulkarni','email':'ravi.tambade@transflower.in','contactnumber':'9881735801'},
    {'firstname':'Sujata','lastname':'Sharma','email':'ravi.tambade@transflower.in','contactnumber':'9881735801'},
    {'firstname':'Manohar','lastname':'Nene','email':'ravi.tambade@transflower.in','contactnumber':'9881735801'},    
];

var data="Transflower Learning Pvt. Ltd.";

// custom (Programmer Defined Function)
// HTTP Request Handler function

var onRequestHandler=function(request, response){
  console.log("Request is received.....");  //inbuit functions

  //This code will send JSON data as a response to Client 
  //response.writeHead(200,{'Content-Type':"text/json"});
  // Serialization --Deserialization
  // response.write(JSON.stringify(people));

  //This code will send HTML data  as  a response to Client 
  response.writeHead(200,{'Content-Type':"text/html"});
  response.write("<h1>Welcome to the real programming world</h1>");
  response.end();
};

var server=http.createServer(onRequestHandler);  // inbuilt function
server.listen(9999);  //0 to 1024 port number    // inbuilt function
console.log("Server is listening on Port no. 9999");

//Serialization (Encoding)
// convert json object into string
//DeSerailization (Decoding)
//convert string into json object