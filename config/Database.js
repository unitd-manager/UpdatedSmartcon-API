var mysql = require('mysql');
// var db = mysql.createConnection({
//     host: 'localhost',
//     user: 'smart',
//     password: 'yNNbZXYBxCdnwPG6',
//     database: 'smart'
// });
var db = mysql.createConnection({
    host: 'localhost',
    user: 'newsmartcon',
    password: 'HDf6W2fBcYd3LckF',
    database: 'newsmartcon'
});
db.connect(); 
module.exports = db;