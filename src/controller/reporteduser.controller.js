const ReportedUser = require("../model/reporteduser.model");
const ReportedUserModel = require("../model/reporteduser.model");


exports.getReportCount = (req, res) => {
	console.log('get repusercount');
	ReportedUserModel.getReportCount((err, reporteduser) => {
		// console.log("We are here");
		if (err) res.send(err);
        console.log('rep cont data',reporteduser);
		res.send(reporteduser); 
	});
};