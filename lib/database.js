let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'classicmodels'
})
connection.connect(err => {
    if (err) {
        return console.log(err)
    } else {
        console.log('prisijungimas ivyko sekmingai')
    }
})

module.exports = connection;
