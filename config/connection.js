// var mysql = require("mysql");
// var connection;

// if(process.env.JAWSDB_URL){
//   connection =  mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "password",
//     database: "burgers_DB"
//   });
// }

// connection.connect(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });

// module.exports = connection;


// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");


if(process.env.JAWSDB_URL){
  
  var burger_DB2 = new Sequelize(process.env.JAWSDB_URL);

} else {
  // Creates mySQL connection using Sequelize
  var burger_DB2 = new Sequelize("burger_DB2", "root", "password", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
}

// Exports the connection for other files to use
module.exports = burger_DB2;
