var http=require('http');   //Step 1
var fs =require('fs');      //Step 2

var onRequestHandler=function(request, response){    //Step 4
    var pathname="./"+request.url;

    console.log(pathname);
    fs.readFile(pathname,(err,data)=>{              //Step 5
        if(err){
            console.log("Something has gone wrong");
            console.log(err);
            response.writeHead(404,{'Content-Type':'text/html'});
        }
        else{
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data.toString());
        }
        response.end();
    });
};
var server=http.createServer(onRequestHandler);   //Step 3
server.listen(9898); //avoid port no. 0 to 1024   //Step 6


console.log("HTTP Server is listening on port number 9898");