//readymade function provided
// in javascript Execution:
// Source code is interpreted by  Node JS Runtime 
// No code is pre compiled:

var company="Transflower Learning Pvt. Ltd";
var count=45.65;
var status=false;

console.log("Hello World");
console.log(company);
console.log(count);
console.log(status);

// JSON
// Javascript Object Notation
var flower={
    id:23,
    title:"Gerbera",
    description:"Wedding Flower",
    available:true,
    unitprice:12,
    quantity:56000,
    likes:12000
};

console.log( flower.title + "  "+ flower.description);
//CRL Shift + C

var flowers=[];  //empty Array
var freshFlower=["Rose", "Gerbera","Jasmine"]; // array with strings
var marks=[23,54,67,23]; //array of numbers

flowers=[
    {id:23, title:"Gerbera",description:"Wedding Flower",available:true,unitprice:12,quantity:56500,likes:12700},
    {id:24, title:"Rose",description:"Valentin e Flower",available:true,unitprice:24,quantity:56000,likes:12000},
    {id:25, title:"Jasmine",description:"Smelling Flower",available:false,unitprice:12,quantity:56000,likes:13000},
    {id:26, title:"Lotus",description:"Worship Flower",available:true,unitprice:12,quantity:56000,likes:22000},
    {id:27, title:"Carnation",description:"Beautiful Flower",available:true,unitprice:12,quantity:566000,likes:800},
    {id:28, title:"Tulip",description:"Decorative Flower",available:false,unitprice:12,quantity:58700,likes:18000},
    {id:29, title:"Marigold",description:"Festival Flower",available:true,unitprice:12,quantity:567800,likes:87000},
    {id:30, title:"Orchid",description:"Delicate Flower",available:true,unitprice:12,quantity:51600,likes:12000}
];
console.log(flowers[0]);
