var dbConn = require("../../config/db.config");
const bcrypt = require("bcrypt");
const saltRounds = 10;

var User = function (user) {
	this.user_id = user.user_id;
	this.email = user.email;
	this.name = user.name;
	this.password = user.password;
	this.active_status = user.active_status;
	this.create = user.image;
	this.emp_image = user.create;
	this.update = user.update;
	this.gid = user.gid;
	this.rem_token = user.rem_token;
};

// get user by id and password
User.validate = (data, result) => {
	dbConn.query(
		"SELECT * FROM user WHERE email= ? AND password= ?",
		[data.email, data.password],
		(err, res) => {
			if (err) {
				console.log("User not found");
				result(err, null);
			} else {
				result(null, res);
			}
		}
	);
};

User.checkUser = (user_id, result) => {
	dbConn.query(
		"SELECT * FROM user WHERE UserId LIKE ?",
		user_id + "%",
		(err, res) => {
			if (err) {
				console.log("Error while fetching user by id", err);
				result(null, err);
			} else {
				result(null, res);
			}
		}
	);
};

// get all active users
User.getActiveUsers = (result) => {
	dbConn.query("SELECT * FROM user WHERE ActiveStatus LIKE 1", (err, res) => {
		if (err) {
			console.log("Error while fetching users", err);
			result(null, err);
		} else {
			console.log("Active users fetched succesfully", err);
			result(null, res);
		}
	});
};

// get all deactive users
User.getDeactiveUsers = (result) => {
	dbConn.query("SELECT * FROM user WHERE ActiveStatus LIKE 0", (err, res) => {
		if (err) {
			console.log("Error while fetching users", err);
			result(null, err);
		} else {
			console.log("Deactive users fetched succesfully", err);
			result(null, res);
		}
	});
};

User.getUserByEmail = (email, result) => {
	dbConn.query("SELECT * FROM user WHERE Email=?", email, (err, res) => {
		if (err) {
			console.log("Error while fetching user by email", err);
			result(null, err);
		} else {
			console.log("User earch is succesful");
			result(null, res);
		}
	});
};

// User.getUserById = (user_id, result) => {
// 	dbConn.query("SELECT * FROM user WHERE UserId=?", user_id, (err, res) => {
// 		if (err) {
// 			console.log("Error while fetching user by id", err);
// 			result(null, err);
// 		} else {
// 			console.log("User search is succesful");
// 			result(null, res);
// 		}
// 	});
// };

User.getUserById = (user_id,result) => {
	dbConn.query(
		"SELECT * FROM user WHERE UserId=? ",user_id,
		(err, res) => {
			if (err) {
				console.log("Error while fetching user", err);
				result(null, err);
			} else {
				console.log("user fetched succesfully", err);
				result(null, res);
			}
		}
	);
};

User.getUserCount = (result) => {
	dbConn.query(
		"SELECT (SELECT COUNT(user.UserId) FROM user ) AS Users, (SELECT (SELECT COUNT(user.UserId) FROM user WHERE ActiveStatus=1)) AS Active, (SELECT (SELECT COUNT(user.UserId) FROM user WHERE ActiveStatus=0)) AS Deactive",
		(err, res) => {
			if (err) {
				console.log("Error while fetching user count", err);
				result(null, err);
			} else {
				console.log("User count fetched succesfully", err);
				result(null, res);
			}
		}
	);
};

User.activateUser = (email, result) => {
	dbConn.query(
		"Update user SET ActiveStatus=1 WHERE Email=?",
		email,
		(err, res) => {
			if (err) {
				console.log("Error while activating user ", err);
				result(null, err);
			} else {
				console.log("User activated");
				result(null, res);
			}
		}
	);
};

User.deactivateUser = (email, result) => {
	dbConn.query(
		"Update user SET ActiveStatus=0 WHERE Email=?",
		email,
		(err, res) => {
			if (err) {
				console.log("Error while deactivating user ", err);
				result(null, err);
			} else {
				console.log("User deactivated");
				result(null, res);
			}
		}
	);
};

//Bhagya

//Validates user login >> Selects user with matching email and password
User.validate = (data, result) => {
	dbConn.query(
		"SELECT * FROM user WHERE email= ?",
		[data.email],
		(err, res) => {
			if (err) {
				console.log("Login query error");
				result(err, null);
			} else {
				console.log("Login query successfull");
				// console.log(res[0].Password);
				result(null, res);
			}
		}
	);
};

//Register new user details >> Have to add more info to the table such as first name, etc.
User.register = (data, result) => {
	bcrypt.hash(data.new_password, saltRounds, (err, hash) => {
		if (err) {
			console.log(err);
		}

		dbConn.query(
			"INSERT INTO user (email, password, fname, lname, CreatedAt) VALUES (?,?,?,?, now())",
			[data.new_email, hash, data.fname, data.lname],
			(err, res) => {
				if (err) {
					console.log("Error while registering", err);
					result(null, err);
				} else {
					console.log("Model -> Registered Successfully");
					result(null, res);
				}
			}
		);
	});
};

User.inputLyrics = (data, result) => {
	var currentdate = new Date();
    var datedet = currentdate.getFullYear() + "-" + currentdate.getMonth() + "-" + currentdate.getDay() + " " + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();

	dbConn.query(
		"INSERT INTO lyrics (Title, Preview, Lyrics, Description, CreatedAt, ActiveState, UserId) VALUES (?,?,?,?,?,1,?)",
		[
			data.song_title,
			data.preview,
			data.song_lyrics,
			data.song_description,
			datedet,
			data.author,
		],
		(err, res) => {
			if (err) {
				console.log("Error while inserting lyrics", err);
				result(null, err);
			} else {
				console.log("Model -> Lyrics inserted successfully");
				result(null, res);
			}
		}
	);
};

User.getLyrics = (result) => {
	dbConn.query("SELECT * FROM lyrics", (err, res) => {
		if (err) {
			console.log("Error while getting lyric posts", err);
			result(null, err);
		} else {
			console.log("Model -> Lyric posts retrieved");
			result(null, res);
		}
	});
};

module.exports = User;
