exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) 
			return next(err);
		connection.query('SELECT stock_item, sum(no_sold) from purchase_table group by stock_item order by sum(no_sold) desc limit 0,1', [], function(err, results) {
        	if (err) return next(err);

    		res.render( 'most_popular_product', {
    			product: results
    		});
      });
	});
};