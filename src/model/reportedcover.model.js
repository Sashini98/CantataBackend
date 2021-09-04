var dbConn = require("../../config/db.config");

var ReportedCover = function (reportedcover) {
	this.rep_id = reportedcover.rep_id;
	this.reason = reportedcover.reason;
	this.cover_id = reportedcover.cover_id;    
    this.rep_by=reportedcover.rep_by;

};

ReportedCover.getReportCount = (result) => {
	dbConn.query("SELECT user.Email,reportedcover.CoverId,cover.Title,COUNT(reportedcover.CoverId) as Count FROM reportedcover JOIN cover ON reportedcover.CoverId=cover.CoverId JOIN user ON cover.UserId=user.UserId WHERE reportedcover.Status=1 GROUP BY reportedcover.CoverId", (err, res) => {
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
	dbConn.query("SELECT user.Email,reportedcover.Reason FROM reportedcover JOIN user ON reportedcover.ReportedBy=user.UserId WHERE CoverId?",cover_id, (err, res) => {
		if (err) {
			console.log("Error while fetching reported covers", err);
			result(null, err);
		} else {
			console.log("Reported covers fetched succesfully", err);
			result(null, res);
		}
	});
};

ReportedCover.getCoverCount = (result) => {
	dbConn.query("SELECT (SELECT COUNT(ReportId) FROM reportedcover)AS Tot, (SELECT COUNT(ReportId) FROM reportedcover WHERE STATUS=1) AS Active, (SELECT COUNT(ReportId) FROM reportedcover WHERE STATUS=0)AS Deactive", (err, res) => {
		if (err) {
			console.log("Error while fetching counts", err);
			result(null, err);
		} else {
			console.log("Done", err);
			result(null, res);
		}
	});
};

ReportedCover.changeStatus = (cover_id,result) => {

	dbConn.query('UPDATE reportedcover SET Status=0 WHERE CoverId=?',cover_id, (err, res) => {
		if (err) {
			console.log("Error while changing status", err);
			result(null, err);
		} else {
			console.log("Status changed", err);
			result(null, res);
		}
	});
};



module.exports = ReportedCover;
