var dbConn = require("../../config/db.config");

var ReportedUser = function (reporteduser) {
	this.rep_id = reporteduser.rep_id;
	this.reason = reporteduser.reason;
	this.user_id = reporteduser.user_id;    
    this.rep_by=reportedlyric.reporteduser;

};

ReportedUser.getReportCount = (result) => {
	dbConn.query("SELECT user.Email,reportedusers.UserId,COUNT(reportedusers.UserId) as Count FROM reportedusers INNER JOIN user ON reportedusers.UserId=user.UserId WHERE reportedusers.Status=1 GROUP BY reportedusers.UserId", (err, res) => {
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

	dbConn.query('SELECT user.Email,reportedusers.Reason FROM reportedusers JOIN user ON reportedusers.ReportedBy=user.UserId WHERE reportedusers.UserId=?',user_id, (err, res) => {
		if (err) {
			console.log("Error while fetching reported users", err);
			result(null, err);
		} else {
			console.log("Reported users fetched succesfully", err);
			result(null, res);
		}
	});
};

ReportedUser.getRepUserCount = (result) => {
	dbConn.query("SELECT (SELECT COUNT(ReportId) FROM reportedusers)AS Tot, (SELECT COUNT(ReportId) FROM reportedusers WHERE STATUS=1) AS Active, (SELECT COUNT(ReportId) FROM reportedusers WHERE STATUS=0)AS Deactive", (err, res) => {
		if (err) {
			console.log("Error while fetching counts", err);
			result(null, err);
		} else {
			console.log("Done", err);
			result(null, res);
		}
	});
};

// ReportedUser.changeStatus = (user_id, result)=>{

//     dbConn.query('UPDATE reportedusers SET Status=0 WHERE UserId=?', user_id, (err, res)=>{
//         if(err){
//             console.log('Error while changing status ', err);
//             result(null, err);
//         }else{
// 			console.log('Status changed');
//             result(null, res);
//         }
//     })
// }
ReportedUser.changeStatus = (user_id,result) => {
	console.log('id'+user_id);

	dbConn.query('UPDATE reportedusers SET Status=0 WHERE UserId=?',user_id, (err, res) => {
		if (err) {
			console.log("Error while changing status", err);
			result(null, err);
		} else {
			console.log("Status changed", err);
			result(null, res);
		}
	});
};



module.exports = ReportedUser;
