'use strict';

var express = require('express'),
	exphbs = require('express-handlebars'),
	mysql = require('mysql'),
	myConnection = require('express-myconnection'),
	bodyParser = require('body-parser'),
	Mpro = require('./routes/product'),
	Lpro = require('./routes/Lproduct'),
	Mpc = require('./routes/MPcat'),
	LPc = require('./routes/LPcat');

var app = express();

var dbOptions = {
	host: 'localhost',
	user: 'root',
	password: 'trevor332',
	port: 3306,
	database: 'spaza'

};

//setup template handlebars as the template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//setup the handlers
app.get('/most_popular_product', Mpro.show);
app.get('/product', Mpro.show);

app.get('/least_popular_product', Lpro.show);
app.get('/Lproduct', Lpro.show);

app.get('/most_popular_catergory', Mpc.show);
app.get('/MPcat', Mpc.show);

app.get('/least_popular_catergory', LPc.show);
app.get('/LPcat', LPc.show);

app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});


