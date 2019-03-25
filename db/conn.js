var mysql = require('mysql');

var conn = mysql.createConnection({
    // host: '10.10.18.199',
    host: 'localhost',
    // user: 'digital_lending',
    user:'root',
    // password: 'digitallending',
    password: '',
    database: 'lending'
});

conn.connect(function(err){
    if(err) throw err;
});

module.exports = conn;