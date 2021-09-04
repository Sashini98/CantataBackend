var dbConn = require("../../config/db.config");

var ReportedLyric = function (reportedlyric) {
	this.rep_id = reportedlyric.rep_id;
	this.reason = reportedlyric.reason;
	this.lyric_id = reportedlyric.lyric_id;
    this.rep_by=reportedlyric.rep_by;

};

ReportedLyric.getReportCount = (result) => {
	dbConn.query("SELECT user.Email,reportedlyrics.LyricId,lyrics.Title,COUNT(reportedlyrics.LyricId) as Count FROM reportedlyrics JOIN lyrics ON reportedlyrics.LyricId=lyrics.LyricId JOIN user ON lyrics.UserId=user.UserId WHERE reportedlyrics.Status=1 GROUP BY reportedlyrics.LyricId", (err, res) => {
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
	dbConn.query("SELECT user.Email,reportedlyrics.Reason FROM reportedlyrics JOIN user ON reportedlyrics.ReportedBy=user.UserId WHERE LyricId=?",lyric_id, (err, res) => {
		if (err) {
			console.log("Error while fetching reported lyrics", err);
			result(null, err);
		} else {
			console.log("Reported lyrics fetched succesfully",lyric_id, err);
			result(null, res);
		}
	});
};

ReportedLyric.getLyricCount = (result) => {
	dbConn.query("SELECT (SELECT COUNT(ReportId) FROM reportedlyrics)AS Tot, (SELECT COUNT(ReportId) FROM reportedlyrics WHERE STATUS=1) AS Active, (SELECT COUNT(ReportId) FROM reportedlyrics WHERE STATUS=0)AS Deactive", (err, res) => {
		if (err) {
			console.log("Error while fetching counts", err);
			result(null, err);
		} else {
			console.log("Done", err);
			result(null, res);
		}
	});
};

ReportedLyric.changeStatus = (lyric_id,result) => {

	dbConn.query('UPDATE reportedlyrics SET Status=0 WHERE LyricId=?',lyric_id, (err, res) => {
		if (err) {
			console.log("Error while changing status", err);
			result(null, err);
		} else {
			console.log("Status changed", err);
			result(null, res);
		}
	});
};


module.exports = ReportedLyric;
