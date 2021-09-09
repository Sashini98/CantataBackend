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
	console.log(req.body);
	AdminModel.validate(req.body, (err, admin) => {
		if (err) {
			res.status(200).send({ message: "failed", data: null });
			console.log("oops");
		} else {
			if (admin.length > 0) {
				res.status(200).send({ message: "success", data: admin[0] });
			} else {
				res.send({ message: "wrong", data: null });
				console.log("Wrong combination");
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

exports.editDetails = (req, res) =>{
    const adminReqData = new AdminModel(req.body);
    console.log('notificationReqData', adminReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        AdminModel.editDetails(adminReqData, (err, admin)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Notification Created Successfully', data: admin})
        })
    }
}

// exports.changePassword = (req, res) =>{
//     const adminReqData = new AdminModel(req.body);
//     console.log('notificationReqData', adminReqData);
//     // check null
//     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//         res.send(400).send({success: false, message: 'Please fill all fields'});
//     }else{
//         AdminModel.changePassword(adminReqData, (err, admin)=>{
//             if(err)
//             res.send(err);
//             res.json({status: true, message: 'Password Changed Successfully', data: admin})
//         })
//     }
// // }

// exports.changePassword = (req, res) => {
// 	//console.log('get emp by id');
// 	console.log(req.body);
// 	AdminModel.changePassword(req.body, (err, admin) => {
// 		// if (err) res.send(err);
// 		// console.log("single user data", user);
// 		if (err) {
// 			res.status(404).send({ message: "failed", data: null });
// 			return;
// 		} else {
// 			if (admin) {
// 				res.status(200).send({ message: "success", data: admin[0] });
// 			} else {
// 				res.status(404).send({ message: "failed", data: null });
// 			}
// 		}
// 	});
// };
 
exports.changePassword = (req, res)=>{
    //console.log('get emp by id');
    AdminModel.changePassword(req.body, (err, admin)=>{
		if(err)
		res.send(err);
		res.json({status: true, message: 'Password Changed Successfully', data: admin})
    })
}

exports.getuserStats = (req, res) => {
	//console.log('here all employees list');
	AdminModel.getuserStats((err, stat) => {
		// console.log("We are here");
		if (err) res.send(err);
        console.log('stats',stat);
		res.send(stat); //did some changes here
		
	});
};

exports.getcoverStats = (req, res) => {
	//console.log('here all employees list');
	AdminModel.getcoverStats((err, stat) => {
		// console.log("We are here");
		if (err) res.send(err);
        console.log('stats',stat);
		res.send(stat); //did some changes here
	});
};

exports.getlyricStats = (req, res) => {
	//console.log('here all employees list');
	AdminModel.getlyricStats((err, stat) => {
		// console.log("We are here");
		if (err) res.send(err);
        console.log('stats',stat);
		res.send(stat); //did some changes here
	});
};

