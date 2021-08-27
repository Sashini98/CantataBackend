const User = require("../model/user.model");
const UserModel = require("../model/user.model");

// // get user by id and password
// exports.checkUser = (req, res)=>{
//         UserModel.checkUser(req.params.user_id, (err, employee)=>{
//         if(err)
//         res.send(err);
//         console.log('user exist',user);
//         res.send(user);
//     })
// }

exports.checkUser = (req, res) => {
	//console.log('get emp by id');
	console.log(req.body);
	UserModel.validate(req.body, (err, user) => {
		// if (err) res.send(err);
		// console.log("single user data", user);
		if (err) {
			res.status(404).send({ message: "failed", data: null });
			return;
		} else {
			if (user) {
				res.status(200).send({ message: "success", data: user[0] });
			} else {
				res.status(404).send({ message: "failed", data: null });
			}
		}
	});
};

exports.getActiveUsers = (req, res) => {
	//console.log('here all employees list');
	UserModel.getActiveUsers((err, users) => {
		// console.log("We are here");
		if (err) res.send(err);
		res.send(users); //did some changes here
	});
};

exports.getDeactiveUsers = (req, res) => {
	//console.log('here all employees list');
	UserModel.getDeactiveUsers((err, users) => {
		// console.log("We are here");
		if (err) res.send(err);
		res.send(users); //did some changes here
	});
};

exports.getUserByEmail = (req, res)=>{
    //console.log('get emp by id');
    UserModel.getUserByEmail(req.params.email, (err, user)=>{
        if(err)
        res.send(err);
        res.send(user);
    })
}

exports.getUserCount = (req, res) => {
	//console.log('here all employees list');
	UserModel.getUserCount((err, usercnt) => {
		// console.log("We are here");
		if (err) res.send(err);
        console.log('counts',usercnt);
		res.send(usercnt); //did some changes here
	});
};
