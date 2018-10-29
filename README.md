# mySqlRestApi

	Node + express js application to expose mySql tables as rest Api

1) Add new js file for your database table under router folder

Example: routes/shop.js

2) Refer the existing js file in routes folder for adjusting your connection query.

Example: connection.query('SELECT * from shop where id='+shopid

3) Update app.js, to use your database table's js file and request mapping

Example:
var shopRouter = require('./routes/shop');
app.use('/shop', shopRouter);

