
//Client Side Javascript

//Reusable Javascript Block 
//External Javascript file

var count=23;
count++;
console.log("this code is from app.js");
console.log("Count= "+ count);

var result=76;
if(result <=100){
    console.log("value is less than 100");
}
else{
    console.log("value is greater than 100");
}
console.log("internal Javascript Code");

//user defined functions

var onButtonClick=function(){
     alert("Here Button is Clicked.....");
};

var onWelcomeClick=function(){
    alert("Welcome to Client Side EVent handling.....");
}