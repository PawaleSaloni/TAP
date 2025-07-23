
// Implementation for MySQL Database Connectivity
// mysql module to be imported
// Database Connectivity
//Step 1: Create Connection
//step 2: Connect to database connection
//step 3: Define SQL Query
//step 4: Send SQL Query to MySQL
//step 5: OnReceive Result collect data and display data

var mysql=require('mysql');
var dbServer={
    host:'localhost',
    user:'root',
    password:'',
    database:'actsdb'
};

var connection=mysql.createConnection(dbServer);

//will establish TCP connection with MySQL

connection.connect(function(err){
    console.log(err);  
});

var insert=function(){  
    var insertQuery="INSERT INTO tasks  set  ?";
    connection.query(insertQuery,function(err, data){
        if(err){
            console.log("error : "+err);
        }
        else
        {
            console.log(data);
        }
    });
};

var update=function(){  
    var updateQuery="UPDATE FROM tasks task =? WHERE id=11";
    connection.query(updateQuery,function(err, data){
        if(err){
            console.log("error : "+err);
        }
        else
        {
            console.log(data);
        }
    });
};

var remove=function(){
     var deleteQuery="DELETE FROM tasks WHERE id=2"; 
     connection.query(deleteQuery,function(err, data){
        if(err){
            console.log("error : "+err);
        }
        else
        {
            console.log(data);
        }
    });
};

var getAll=function(){
    var selectAllQuery="select * from tasks ";
    connection.query(selectAllQuery,function(err, data){
        if(err){
            console.log("error : "+err);
        }
        else
        {
            console.log(data);
        }
    });
}

var getById=function(id){
    var selectByIdQuery="select * from tasks where id="+id;
    connection.query(selectByIdQuery,function(err, data){
        if(err){
            console.log("error : "+err);
        }
        else
        {
            console.log(data);
        }
    });
}

//getAll();
getById(4);