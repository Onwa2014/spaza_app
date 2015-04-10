var fs = require('fs');

module.exports = function(){

	//read the files and create a list of objects
	this.readProductsFromFile = function(filePath){

		var linesInfile = fs.readFileSync(filePath, "utf-8");
 		//console.log("====>" + fs.readFileSync('Nelisa Sales History.csv', 'utf8'));

 		var rows = linesInfile.split("\n");
 		
 		var listOfProducts = [];
 		
 		// think about creating a list of objects from the csv
 		rows.forEach(function(row){
 			var columns = row.split(';');
 			var currentItem = columns[2]; // this is the Product Name e.g Milk
 			var numberSold = columns[3]; // number of the product sold for that day on my list

 			var salesObj = {
 				itemName: columns[2],
 				soldItems: Number(columns[3])
 			};
 			listOfProducts.push(salesObj);
 		});

 		return listOfProducts;
 	}

		//takes a list of products and return total sold
	this.groupByItemsSold = function(products){

			var itemMap = {};

 		// think about creating a list of objects from the csv
 		//
 		products.forEach(function(product){
 				var currentItem = product.itemName; // this is the products Name e.g Milk
 				var numberSold = product.soldItems; // number of the product sold for that day on my list

 				if(itemMap[currentItem] === undefined){
 					//listOfProducts.push(currentItem);
 					itemMap[currentItem] = 0;
 				}

 				itemMap[currentItem] = itemMap[currentItem] + Number(numberSold);

 			});

 		return itemMap;

 		//create a function that find the most popular, put it in a module and write a unit test for it 

 		//create another function for least popular
 		//callback(null, itemMap);
 		//console.log(mostPopularProduct);

 	};


 	this.mostPopularPrd = function(itemMap){
 		var mostPopularProduct = {};
 		var max = 0;
 		for(var prop in itemMap) {
 			var value = itemMap[prop];
 			if(itemMap[prop] > max){
 				max = itemMap[prop];
 				mostPopularProduct = {
 					name: prop,
 					amt: max
 				}
 			}
 		}

 		return mostPopularProduct;
 	};

 	this.leastPopularPrd = function(itemMap){
 		var leastPopularProduct = {};
 		var min = 172;
 		for(var prop in itemMap) {
 			var value = itemMap[prop];
 			if(itemMap[prop] < min){
 				min = itemMap[prop];
 				leastPopularProduct = {
 					name: prop,
 					amt: min
 				}
 			}
 		}

 		return leastPopularProduct;
 	};

 	this.mostPopularCat = function(productMap){

 		var productCategories = {
 			'Milk 1l': 'Dairy Products',
 			'Imasi': 'Dairy Products',
 			'Bread': 'Bakery',
 			'Chakalaka Can': 'Canned Food',
 			'Gold Dish Vegetable Curry Can': 'Canned Food',
 			'Fanta 500ml': 'Cold Beverages',
 			'Coke 500ml': 'Cold Beverages',
 			'Cream Soda 500ml': 'Cold Beverages',
 			'Iwisa Pap 5kg': 'Bulk',
 			'Top Class Soy Mince': 'Soup',
 			'Shampoo 1 litre': 'Cosmetics',
 			'Soap Bar': 'Cosmetics',
 			'Bananas - loose': 'Fruit',
 			'Apples - loose': 'Fruit',
 			'Mixed Sweets 5s': 'Confectionery',
 			'Heart Chocolates': 'Confectionery',
 			'Rose (plastic)': 'Valentines Goodies',
 			'Valentine Cards': 'Valentines Goodies'
 		}

 		var catMap = {};

 		//var val = Map[key];
 		//var key = productMap[key];

 		for (var product in productMap){

 			//get the category for the current product!!!!!!
 			var category = productCategories[product];

 			if (catMap[category] === undefined){
 				catMap[category] = 0;
 			}
 			// get the quantity for the current product
 			var prodQty = productMap[product];
 			//add the qty to the correct category 
 			catMap[category] = catMap[category] + prodQty; 
 		}

 		console.log(catMap);

 		var mostPopularCategory = {};
 		var max = 0;

 		for(var cat in catMap) {
 			var value = catMap[cat];
 			if(catMap[cat] > max){
 				max = catMap[cat];
 				mostPopularCategory = {
 					name: cat,
 					amt: max
 				}
 			}
 		}
 		return mostPopularCategory;
 	}	


 	this.leastPopularCat = function(productMap){

 		var productCategories = {
 			'Milk 1l': 'Dairy Products',
 			'Imasi': 'Dairy Products',
 			'Bread': 'Bakery',
 			'Chakalaka Can': 'Canned Food',
 			'Gold Dish Vegetable Curry Can': 'Canned Food',
 			'Fanta 500ml': 'Cold Beverages',
 			'Coke 500ml': 'Cold Beverages',
 			'Cream Soda 500ml': 'Cold Beverages',
 			'Iwisa Pap 5kg': 'Bulk',
 			'Top Class Soy Mince': 'Soup',
 			'Shampoo 1 litre': 'Cosmetics',
 			'Soap Bar': 'Cosmetics',
 			'Bananas - loose': 'Fruit',
 			'Apples - loose': 'Fruit',
 			'Mixed Sweets 5s': 'Confectionery',
 			'Heart Chocolates': 'Confectionery',
 			'Rose (plastic)': 'Valentines Goodies',
 			'Valentine Cards': 'Valentines Goodies'
 		}

 		var catMap = {};

 		//var val = Map[key];
 		//var key = productMap[key];

 		for (var product in productMap){

 			//get the category for the current product!!!!!!
 			var category = productCategories[product];

 			if (catMap[category] === undefined){
 				catMap[category] = 0;
 			}
 			// get the quantity for the current product
 			var prodQty = productMap[product];
 			//add the qty to the correct category 
 			catMap[category] = catMap[category] + prodQty; 
 		}

 		console.log(catMap);

 		var leastPopularCategory = {};
 		var min = 328;

 		for(var cat in catMap) {
 			var value = catMap[cat];
 			if(catMap[cat] < min){
 				min = catMap[cat];
 				leastPopularCategory = {
 					name: cat,
 					amt: min
 				}
 			}
 		}
 		return leastPopularCategory;
 	}	
 };

//};*/