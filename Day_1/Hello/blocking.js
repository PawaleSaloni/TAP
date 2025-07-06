// set of functions 
// is a javascript library cosist of reusable functions

function show(){
    var count=67;
    //count=count +1;
    count++;
    console.log(count);
};

function display(company){
    console.log( "Company name = " + company);
};

function addition(num1, num2){
    var result=num1 +num2;
    return result;
};

//Nested function
//Blocking call 

function main(){
    show();  //invoking javascript function
    var provider="Transflower Learning Pvt. Ltd.";
    var hostCompany="Seed Infotech Ltd."
    display(hostCompany);

    var number1=898;
    var number2=764;
    var total=addition(87,79);
    console.log("Final output = " + total);
}

main();
//show();
console.log("last statement execution");

