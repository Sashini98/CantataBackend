const ReportedLyrics = require("../model/reportedlyric.model");
const ReportedLyricsModel = require("../model/reportedlyric.model");


exports.getReportCount = (req, res) => {
	// console.log('get replyriccount');
	ReportedLyricsModel.getReportCount((err, reportedlyric) => {
		// console.log("We are here");
		if (err) res.send(err);
        // console.log('rep cont data',reportedlyric);
		res.send(reportedlyric); 
	});
};

exports.getReportLyrics = (req, res)=>{
    console.log('get replyric id');
    ReportedLyricsModel.getReportLyrics(req.params.lyric_id, (err, replyric)=>{
        if(err) res.send(err);		
        console.log('rep data',replyric);
        res.send(replyric);
    })
}

exports.getLyricCount = (req, res) => {
	// console.log('get replyriccount');
	ReportedLyricsModel.getLyricCount((err, reports) => {
		// console.log("We are here");
		if (err) res.send(err);
        // console.log('rep cont data',reportedlyric);
		res.send(reports); 
	});
};

exports.changeStatus = (req, res)=>{
    // console.log('get replyric id');
    ReportedLyricsModel.changeStatus(req.params.lyric_id, (err, replyric)=>{
        if(err) res.send(err);		
        // console.log('rep data',repuser);
        res.send(replyric);
    })
}

