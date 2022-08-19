var express= require('express');
var app = express();
var multer = require('multer');
var bodyParser = require('body-parser');
var path = require ('path');
const { getBaseUrl } = require("get-base-url")

var conn = require('express-myconnection');
var mysql = require('mysql');

var expressku = require('./routes/expressku');

app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, 'public')));





app.use(
    conn(mysql, {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        port: 3306,
        database: 'ecommerce',


    },)
);


app.get('/home', expressku.home);

app.get('/product/detail/:id_product', expressku.detail);


// basic route
app.get('/', (req, res) => {
    res.send('Hello World');
});
 
// listen on port
app.listen(4000, () => console.log('Server Running at http://localhost:4000'));