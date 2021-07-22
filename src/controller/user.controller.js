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
		if (err) res.send(err);
		res.status(200).send({ user });
	});
};

exports.getActiveUsers = (req, res) => {
	//console.log('here all employees list');
	UserModel.getActiveUsers((err, users) => {
		console.log("We are here");
		if (err) res.send(err);
		console.log("Users", users);
		res.status(200).send({ users }); //did some changes here
	});
};
