var dbConn = require("../../config/db.config");

var ReportedCover = function (reportedcover) {
	this.rep_id = reportedcover.rep_id;
	this.reason = reportedcover.reason;
	this.cover_id = reportedcover.cover_id;    
    this.rep_by=reportedcover.rep_by;

};

module.exports = ReportedCover;
