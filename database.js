const mysql_pkg = require ("mysql");

var properties = {
    host: "34.126.172.116",
    user: "root",
    password: "fintechsglab",
    port: "3306",
    database: "market"
};

var connection = mysql_pkg.createConnection(properties);

//takes a callback and passes error into callback if connection fails
connection.connect((error)=>{
    if (error){
        console.log(error);
    } else{
        console.log("Conection successful");
    }
});

module.exports = {connection};