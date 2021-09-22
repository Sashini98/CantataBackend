const mysql = require("mysql");
// create here mysql connection
const dbConn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "1234",
	database: "cantata",
	multipleStatements: true,
});
dbConn.connect(function (error) {
	if (error) throw error;
	console.log("Database Connected Successfully!!!");
});
module.exports = dbConn;

//Legend
// max: maximum number of connection in pool
// min: minimum number of connection in pool
// idle: maximum time, in milliseconds, that a connection can be idle before being released
// acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error
