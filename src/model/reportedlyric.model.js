var dbConn = require("../../config/db.config");

var ReportedLyric = function (reportedlyric) {
	this.rep_id = reportedlyric.rep_id;
	this.reason = reportedlyric.reason;
	this.lyric_id = reportedlyric.lyric_id;
    this.rep_by=reportedlyric.rep_by;

};

ReportedLyric.getReportCount = (result) => {
	dbConn.query("SELECT user.Email,reportedlyrics.LyricId,COUNT(reportedlyrics.LyricId) as Count FROM reportedlyrics JOIN lyrics ON reportedlyrics.LyricId=lyrics.LyricId JOIN user ON lyrics.UserId=user.UserId GROUP BY reportedlyrics.LyricId", (err, res) => {
		if (err) {
			console.log("Error while fetching reported lyrics", err);
			result(null, err);
		} else {
			console.log("Done", err);
			result(null, res);
		}
	});
};

ReportedLyric.getReportLyrics = (lyric_id,result) => {
	dbConn.query("SELECT ReportedBy,Reason FROM reportedlyrics WHERE LyricId=?",lyric_id, (err, res) => {
		if (err) {
			console.log("Error while fetching reported lyrics", err);
			result(null, err);
		} else {
			console.log("Reported lyrics fetched succesfully",lyric_id, err);
			result(null, res);
		}
	});
};




module.exports = ReportedLyric;
