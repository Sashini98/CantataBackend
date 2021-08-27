var dbConn = require("../../config/db.config");

var ReportedCover = function (reportedcover) {
	this.rep_id = reportedcover.rep_id;
	this.reason = reportedcover.reason;
	this.cover_id = reportedcover.cover_id;    
    this.rep_by=reportedcover.rep_by;

};

ReportedCover.getReportCount = (result) => {
	dbConn.query("SELECT user.Email,reportedcover.CoverId,COUNT(reportedcover.CoverId) as Count FROM reportedcover JOIN cover ON reportedcover.CoverId=cover.CoverId JOIN user ON cover.UserId=user.UserId GROUP BY reportedcover.CoverId", (err, res) => {
		if (err) {
			console.log("Error while fetching reported cover", err);
			result(null, err);
		} else {
			console.log("Reported cover fetched succesfully", err);
			result(null, res);
		}
	});
};


ReportedCover.getReportCover = (cover_id,result) => {
	dbConn.query("SELECT ReportedBy,Reason FROM reportedcover WHERE CoverId=?",cover_id, (err, res) => {
		if (err) {
			console.log("Error while fetching reported covers", err);
			result(null, err);
		} else {
			console.log("Reported covers fetched succesfully", err);
			result(null, res);
		}
	});
};


module.exports = ReportedCover;
