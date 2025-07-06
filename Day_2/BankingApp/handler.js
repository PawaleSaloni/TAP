
//Modularity Event handling Module
//Event Listeners
//Event handler logic
//expose functions to be used outside of Javascript file
// we are publishing functions outside by using exports keyword

exports.payIncomeTax=function(){  
    console.log("25% income tax to be applied against account");
};

exports.payServiceTax=function(){
    console.log("18% Service tax to be applied against account");
};

exports.blockAccount=function(){
    console.log("The Account has been blocked Temp");
};

exports.sendEmail=function(){
    console.log("Email is sent to registered email ID");
};

exports.sendSMS=function(){
    console.log("SMS is sent to registered phone number");
};