var dbConn = require("../../config/db.config");

var Admin = function (admin) {
	this.admin_id = admin.admin_id;
	this.email = admin.email;
	this.fname = admin.fname;    
	this.lname = admin.lname;
	this.password = admin.password;
};

// get user by id and password
Admin.validate = (data, result) => {
	dbConn.query(
		"SELECT * FROM admin WHERE email= ? AND password= ?",
		[data.email, data.password],
		(err, res) => {
			if (err) {
				console.log("Admin not found");
				result(err, null);
			} else {
				result(null, res);
			}
		}
	);
};

Admin.checkAdmin= (user_id, result) => {
	dbConn.query(
		"SELECT * FROM admin WHERE AdminId LIKE ?",
		user_id + "%",
		(err, res) => {
			if (err) {
				console.log("Error while fetching admin by id", err);
				result(null, err);
			} else {
				result(null, res);
			}
		}
	);
};
Admin.getAdmin = (admin_id, result)=>{
    dbConn.query('SELECT * FROM admin WHERE AdminId=1', admin_id, (err, res)=>{
        if(err){
            console.log('Error while fetching admin by id', err);
            result(null, err);
        }else{
			console.log('Admin fetch is succesful');
            result(null, res);
        }
    })
}

module.exports = Admin;
