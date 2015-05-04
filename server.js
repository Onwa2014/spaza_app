var express = require('express');
var exphbs = require('express-handlebars');

   var app = express();

   
   app.engine('handlebars', exphbs({defaultLayout:'main'}));
   app.set('view engine','handlebars');
var fs = require('fs');
 var Products = require("./products");

var products = new Products();

var productList = products.readProductsFromFile('Nelisa Sales History.csv');

var productGroup = products.groupByItemsSold(productList);

var mostPop = products.mostPopularPrd(productGroup);
var leastPop = products.leastPopularPrd(productGroup);

//console.log(mostPop);

var leastPopCat = products.leastPopularCat(productGroup);
var mostPopCat = products.mostPopularCat(productGroup);

app.use(express.static('Public'));

//console.log(leastPop);

   app.get('/', function (req, res) {
    res.render('home');
   // create a route
   //app.get('/hello', function (req, res) {
    // res.send('Hello Code X!');
   //});
    //app.get('/bye', function (req, res) {
     //res.send('bye Code X!');
  // });
    //app.get('/pretty', function (req, res) {
    // res.send('bye pretty!');
   });
   app.get('/most_popular_product', function (req, res) {
    res.render('most_popular_product', {
      mostPopular: mostPop
     
    } );
   });
   app.get('/least_popular_product', function (req, res) {
    res.render('least_popular_product', {
      leastPopular: leastPop
     
    } );
   });
   app.get('/most_popular_catergory', function (req, res) {
    res.render('most_popular_catergory', {
      mostPopularCat: mostPopCat
     
    } );
   });
   app.get('/least_popular_catergory', function (req, res) {
    res.render('least_popular_catergory', {
      leastPopularCat: leastPopCat
     
    } );
   });

   app.get('/onwaba', function (req, res) {
    res.render('my_son', {
        son : "Mila", 
        color : "red", 
        favDishes : ["chicken", "pasta", "pap"], 
        address : {streetName : "Olga Ncivata", postalCode : "7455"} 
      } );
   });

   app.get('/pretty', function (req, res) {
    res.render('my_son', {son : "Kamva", color : "purple", favDishes : ["pizza", "samp", "pork"],address : {streetName : "Ndabeni Street=", postalCode : "7455"} });
   });

   app.get('/codeX', function (req, res){
    res.render('codeX')
 })
   app.listen(3000);

/*
   //start the server
   var server = app.listen(3000, function () {

     var host = server.address().address;
     var port = server.address().port;

     console.log('Example app listening at http://%s:%s', host, port);

   });
   app.use(express.static('Public'));
*/
