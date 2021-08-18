var dbConn = require("../../config/db.config");

var ReportedLyric = function (reportedlyric) {
	this.rep_id = reportedlyric.rep_id;
	this.reason = reportedlyric.reason;
	this.lyric_id = reportedlyric.lyric_id;
    this.rep_by=reportedlyric.rep_by;

};

module.exports = ReportedLyric;
