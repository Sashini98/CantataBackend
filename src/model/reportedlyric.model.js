var dbConn = require("../../config/db.config");

var ReportedLyric = function (reportedlyric) {
	this.rep_id = reportedlyric.rep_id;
	this.reason = reportedlyric.reason;
	this.lyric_id = reportedlyric.lyric_id;
    this.rep_by=reportedlyric.rep_by;

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


module.exports = ReportedLyric;
