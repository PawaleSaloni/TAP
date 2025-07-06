
var fs=require('fs');
var fileName="./data/transflower.txt";

//callback function
var onFileRead=function(err, data){
    if(err){
      throw err;
    }
    console.log("Data from File available");
    console.log(data.toString());
};

fs.readFile(fileName,onFileRead);     //Non Blocking call

console.log("Terminating Node JS Application");
console.log("Terminating Node JS Application");
console.log("Terminating Node JS Application");
console.log("Terminating Node JS Application");
