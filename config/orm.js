// // Import MySQL connection.
// var connection = require("../config/connection.js");



// // Object for all our SQL statement functions.
// var orm = {

//   all: function(tableInput, cb) {
//     var queryString = "SELECT * FROM " + tableInput + ";";
    
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });

//   },

//   create: function(table, cols, vals, cb) {
//     var queryString = "INSERT INTO " + table;

//         queryString += " (";
//         queryString += cols.toString();  //valA,valB
//         queryString += ") ";
//         queryString += "VALUES (";
//         queryString += printQuestionMarks(vals.length);
//         queryString += ") ";

//         //console.log(queryString);  
//         // Will create this string:
//         // INSERT INTO cats (burger_name, consumed) VALUES ('McChicken', true);

//     connection.query(queryString, vals, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },

//   update: function(table, status, condition, cb) {
    
//     //UPDATE burgers SET consumed = 1 WHERE id = "23";
    
//     var queryString = "UPDATE " + table;

//         queryString += " SET consumed = ";
//         queryString += status.toString();
//         queryString += " WHERE ";
//         queryString += condition;

//     console.log(queryString);
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         console.log(" Error is : " + err);
//         throw err;
//       }
//       console.log('no error is' + err);
//       cb(result);
//     });
//   }
  
// };

// // Export the orm object for the model (models/burger.js).
// module.exports = orm;



