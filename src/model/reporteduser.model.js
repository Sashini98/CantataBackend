var dbConn = require("../../config/db.config");

var ReportedUser = function (reporteduser) {
	this.rep_id = reporteduser.rep_id;
	this.reason = reporteduser.reason;
	this.user_id = reporteduser.user_id;    
    this.rep_by=reportedlyric.reporteduser;

};

ReportedUser.getReportCount = (result) => {
	dbConn.query("SELECT user.Email,reportedusers.UserId,COUNT(reportedusers.UserId) as Count FROM reportedusers INNER JOIN user ON reportedusers.UserId=user.UserId GROUP BY reportedusers.UserId", (err, res) => {
		if (err) {
			console.log("Error while fetching users", err);
			result(null, err);
		} else {
			console.log("Reported user count fetched succesfully", err);
			result(null, res);
		}
	});
};

ReportedUser.getReports = (user_id,result) => {
	dbConn.query('SELECT ReportedBy,Reason FROM reportedusers WHERE UserId=?',user_id, (err, res) => {
		if (err) {
			console.log("Error while fetching reported users", err);
			result(null, err);
		} else {
			console.log("Reported users fetched succesfully", err);
			result(null, res);
		}
	});
};


module.exports = ReportedUser;
