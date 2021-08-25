var dbConn = require("../../config/db.config");

var ReportedCover = function (reportedcover) {
	this.rep_id = reportedcover.rep_id;
	this.reason = reportedcover.reason;
	this.cover_id = reportedcover.cover_id;    
    this.rep_by=reportedcover.rep_by;

};

ReportedLyric.getReportCount = (result) => {
	dbConn.query("SELECT user.Email,reportedlyrics.LyricId,COUNT(reportedlyrics.LyricId) as Count FROM reportedlyrics INNER JOIN user ON reportedlyrics.ReportedBy=user.UserId GROUP BY reportedlyrics.LyricId", (err, res) => {
		if (err) {
			console.log("Error while fetching reported lyrics", err);
			result(null, err);
		} else {
			console.log("Reported lyrics fetched succesfully", err);
			result(null, res);
		}
	});
};

module.exports = ReportedCover;
