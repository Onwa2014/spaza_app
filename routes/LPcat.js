exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) 
			return next(err);
		connection.query('SELECT categories_table.name, sum(sales.no_sold) FROM sales INNER JOIN products_table ON sales.product_id = products_table.id inner join categories_table on products_table.cat_id = categories_table.id group by categories_table.name order by  sum(sales.no_sold) asc limit 0,1', [], function(err, results) {
        	if (err) return next(err);

    		res.render( 'least_popular_catergory', {
    			LPcat: results
    		});
      });
	});
};