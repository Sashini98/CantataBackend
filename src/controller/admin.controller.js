const Admin = require("../model/admin.model");
const AdminModel = require("../model/admin.model");

// // get user by id and password
// exports.checkUser = (req, res)=>{
//         UserModel.checkUser(req.params.user_id, (err, employee)=>{
//         if(err)
//         res.send(err);
//         console.log('user exist',user);
//         res.send(user);
//     })
// }

exports.checkAdmin = (req, res) => {
	//console.log('get emp by id');
	console.log(req.body);
	AdminModel.validate(req.body, (err, admin) => {
		// if (err) res.send(err);
		// console.log("single user data", user);
		if (err) {
			res.status(404).send({ message: "failed", data: null });
			return;
		} else {
			if (admin) {
				res.status(200).send({ message: "success", data: admin[0] });
			} else {
				res.status(404).send({ message: "failed", data: null });
			}
		}
	});
};

exports.getAdmin= (req, res)=>{
    //console.log('get emp by id');
    AdminModel.getAdmin(req.params.admin_id, (err, admin)=>{
        if(err)
        res.send(err);
        // console.log('single admin data',admin);
        res.send(admin);
    })
}

exports.getCounts = (req, res) => {
	//console.log('here all employees list');
	AdminModel.getCounts((err, cnt) => {
		// console.log("We are here");
		if (err) res.send(err);
        console.log('counts',cnt);
		res.send(cnt); //did some changes here
	});
};

