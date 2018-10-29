# mySqlRestApi

	Node + express js application to expose mySql database as rest Api

The app can expose database in 2 ways
First configure your DB connection setting in app.js under 
connection = mysql.createConnection({
		host     : 'localhost',
		port 	 : '3307',
		user     : 'username',
		password : 'password',
		database : 'test'
	});
	
I) Expose data using queries
- Once the DB has been configured in app.js, use npm start
- Send your request through request url, http://localhost:3000/query?requestQuery={yourSqlQuery}
Example: http://localhost:3000/query?requestQuery=select * from item where id=1

II) Expose database data for each table. 
This method will help you expose data in a restricted manner !

- Add new js file for your database table under router folder

Example: routes/shop.js

- Refer the existing js file in routes folder for adjusting your connection query.

Example: connection.query('SELECT * from shop where id='+shopid

- Update app.js, to use your database table's js file and request mapping

Example:
var shopRouter = require('./routes/shop');
app.use('/shop', shopRouter);

