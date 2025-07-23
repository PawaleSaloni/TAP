var express =require('express');
var path=require('path');

var app=express();  // get global object  from Framework
                    // global object contains HTTP server
//__dirname ------> virtual path  ---> http://localhost:9000
//          ------->phyiscal path  D:\TAP\WPT\ExpressApp

// for configuration of middleware
// for registration of http requests with thier handlers
var staticMiddleware=express.static(path.join(__dirname, "public"));
// Express Framework Configuration
// configure  static middleware
app.use(staticMiddleware);
// Express Framework setting handlers
// mapping incomming request to callback function
//  three request handlers are  implemented
//   http://localhost:9000/---------callback function
//   http://localhost:9000/hello---callback function
//   http://localhost:9000/flowers---callback function
// HTTP Request Handlers of Type GET Request
// Get function takes two parameters
// first parameter: path
// second parameter: Callback function
// Thre are 4 http handlers

app.get("/",(request, response)=>{
    response.sendFile(__dirname+"/index.html");
});

app.get("/hello",(request, response)=>{
    var flower={ "id":34,
                  "title":"Gerbera",
                  "unitprice":5
    };
    response.send(flower);
});

app.get("/flowers",(request, response)=>{
    //var path=request.url;
    
    var flowers=[{ "id":34,"title":"Gerbera", "unitprice":5 },
                 { "id":34,"title":"Gerbera", "unitprice":5 },
                 { "id":34,"title":"Gerbera", "unitprice":5 }
    ];
    response.send(flowers);
})

app.get("/customers",(request, response)=>{
    var customers=[
        { "id":34,"firstname":"Ravi", "lastname":"Tambade"},
        { "id":34,"firstname":"Saloni", "lastname":"Pawale" }
    ];
    response.send(customers);
})
app.listen(9000);

console.log("Express Web application is listening on port no 9000");

//line 6 is syntax for giving path? we can change folder name?
//and  what express.static mean?