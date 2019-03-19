var mysql = require('mysql');

var conn = mysql.createConnection({
    host: '10.10.18.199',
    // host: 'localhost',
    user: 'digital_lending',
    password: 'digitallending',
    database: 'lending'
});

conn.connect(function(err){
    if(err) throw err;
});

module.exports = conn;