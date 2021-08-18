var dbConn = require("../../config/db.config");

var ReportedUser = function (reporteduser) {
	this.rep_id = reporteduser.rep_id;
	this.reason = reporteduser.reason;
	this.user_id = reporteduser.user_id;    
    this.rep_by=reportedlyric.reporteduser;

};

module.exports = ReportedUser;
