
//Callback fn1
//NonBlocking function
function processJob1(){
    console.log("Processing  request by Handler 3");
    console.log("Performing task 3");
    console.log("Generating Response 3");
    console.log("Sending Response 3");
};

//NonBlocking function
function processJob2(){
    console.log("Processing  request by Handler 2");
    console.log("Performing task 2");
    console.log("Generating Response 2");
    console.log("Sending Response 2");
};

//Callback fn2
//Nonblocking function
function processJob3(){
    console.log("Processing  request by Handler 1");
    console.log("Performing task 1");
    console.log("Generating Response 1");
    console.log("Sending Response 1 ");
}
 //processRequest();

//register callback function as first paramemter
//set time interval for automatic function call 

// setInterval is a  direct call
// but processRequest is indirectr call

setInterval(processJob1,5000);
setInterval(processJob2,1000);
setInterval(processJob3,10000);

//Multitasking is happening using asynchronous way

console.log("Stopping main timer.js execution..........");