//Domain: Banking

//Operations: Credit, Debit,
//Business Entity: Account
//Rule: Contstraints, Policy
//Events against Account

//Account:
        //state: Balance
        //operations: withdraw, deposit
        //Rule: Balance threshold
        //Event:underBalance, overBalance
//classical Javascript syntax
//SOC:Seperation of Cocern
//Loosely Coupled , Highly Cohesive
/*-----------------------------------------------*/
/* Step 1: Import Modules */

var handlers=require("./handler"); // custom module
var events=require("events");     // builtin module available in nodejs
var emitter=new events.EventEmitter(); // create emitter object, which lets you trigger event and listen them. 


/* Step 2: Create Account function*/
// It has private functions - getbalance, withdraw, deposit, monitor

var Account=function(amount){
     var balance=amount;
     //Inner function
     var getBalance=function(){
         return balance;
     };

/* Step 3: Event monitor function*/

     var monitor=function(){
        if(balance < 5000){
            emitter.emit("underBalance");
        }
        else if(balance>=250000){
             emitter.emit("overBalance");
        }
     };

     var withdraw=function(amount){
        balance=balance-amount;
        monitor();
     };

     var deposit=function(amount){
        balance=balance+amount;
        monitor();
     }

     //publish inner functions to outside world

     return{
         receiveBalance:getBalance,
         debit:withdraw,
         credit:deposit
     }
}
/* step 4: seperate logic for piplining event handlers for event*/

emitter.on("underBalance",handlers.blockAccount);
emitter.on("underBalance",handlers.sendEmail);
emitter.on("underBalance",handlers.sendSMS);

emitter.on("overBalance",handlers.payServiceTax);

// Create objects
var acct123 = new Account(5500);               
var acct124 = new Account(249000);

// Start invoking their operations
acct123.debit(5200);
acct124.credit (2000);

// Check Balance
var balance1 = acct123.receiveBalance();
console.log("acct123 Balance=" + balance1);

var balance2 = acct124.receiveBalance();
console.log("acct124 Balance=" + balance2);