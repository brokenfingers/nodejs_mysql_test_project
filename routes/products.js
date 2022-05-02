let express = require('express');
let router = express.Router();
let databaseConnection = require('../lib/database')


router.get('/products', (req, res, next) => {
    databaseConnection.query('SELECT * FROM products', (err, rows) => {
        if (err) {
            req.flash('err', err);
            res.render('products', { data: '' })
        } else {
            res.render('products', { data: rows })
        }
    })
})

module.exports = router;