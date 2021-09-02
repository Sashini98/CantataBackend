const ReportedCovers = require("../model/reportedcover.model");
const ReportedCoversModel = require("../model/reportedcover.model");


exports.getReportCount = (req, res) => {
	// console.log('get replyriccount');
	ReportedCoversModel.getReportCount((err, reportedcover) => {
		// console.log("We are here");
		if (err) res.send(err);
        console.log('rep cont data',reportedcover);
		res.send(reportedcover); 
	});
};

exports.getReportCover = (req, res)=>{
    // console.log('get replyric id');
    ReportedCoversModel.getReportCover(req.params.cover_id, (err, repcover)=>{
        if(err) res.send(err);		
        console.log('rep data',repcover);
        res.send(repcover);
    })
}

exports.getCoverCount = (req, res) => {
	// console.log('get replyriccount');
	ReportedCoversModel.getCoverCount((err, reports) => {
		// console.log("We are here");
		if (err) res.send(err);
        // console.log('rep cont data',reportedlyric);
		res.send(reports); 
	});
};

exports.changeStatus = (req, res)=>{
    // console.log('get replyric id');
    ReportedCoversModel.changeStatus(req.params.cover_id, (err, repcover)=>{
        if(err) res.send(err);		
        // console.log('rep data',repuser);
        res.send(repcover);
    })
}

