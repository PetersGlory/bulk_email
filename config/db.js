const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'send_mail',
    multipleStatements: true,
})

connection.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});


module.exports = connection;