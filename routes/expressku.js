// var conn = require('express-myconnection');
// var mysql = require('mysql');

// let connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '',
//     port: 3306,
//     database: 'ecommerce',
//     multipleStatements: true
// })


// exports.home = function (req, res) {
//     req.getConnection(function (err, connect) {
//         var sql = 'SELECT * FROM products;SELECT COUNT(*) FROM products';
//         //var sql = 'SELECT * FROM investors;';
//         connection.query(sql, [1, 2], function(err, results, fields){
//         if (!err) {

//             res.send(JSON.stringify(results[0]) + JSON.stringify(results[1]));

//             console.log('hey');
//             //console.log(results);
//             console.log(results[0]);
//             console.log(results[1]);
//             res.render('home', {
// //                 page_tittle: "Express News",
// //                 data: rows
// //             });

//         }   else{
//             console.log('Error while performing query.');
//             console.log(err);
//         }
//     });
//     connection.end();
//     });
// }

// exports.home = function (req, res) {
//     req.getConnection(function (err, connect) {
//         var query = connect.query('SELECT COUNT(id_product) FROM products', function (err, results) {
//             if (err) {
//                 console.log('Error massage: %', err);
//             }

//             res.render('home', {
//                 page_tittle: "Express News",
//                 data: results
//             });
//         });
//     });
// }

exports.home = function (req, res) {
    req.getConnection(function (err, connect) {
     

        var query = connect.query('SELECT * FROM products', function (err, results) {
            if (err) {
                console.log('Error massage: %', err);
            }

            res.render('home', {
                page_tittle: "Express News",
                data: results,
            });
        });
    });
}

// exports.detail = function (req, res) {
//     var id_product = req.params.id_product;
//     console.log(id_product);
//     req.getConnection(function(err, connect) {
//         var sql = "SELECT * FROM products WHERE id_product=?";

//         var query = connect.query(sql, id_product, function(err, rows) {
//             if (err) {
//                 console.log('Error show product: %s', err);
//             }
//         });
//     });
//     res.render('detail', {
//         page_tittle: "Express News Detail",
//         data: rows
//     });
// }

exports.detail = function (req, res) {
    var id_product = req.params.id_product;
    req.getConnection(function (err, connect) {
        var query = connect.query('SELECT * FROM products WHERE id_product=?', id_product, function (err, rows) {
            if (err) {
                console.log('Error massage: %', err);
            }

            res.render('detail', {
                page_tittle: "Express News - News Detail",
                data: rows
            });
        });
    });
}