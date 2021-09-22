const Lyrics = require("../model/lyrics.model");
const LyricsModel = require("../model/lyrics.model");

exports.getLyrics = (req, res) => {
	// console.log('get replyriccount');
	LyricsModel.getLyrics((err, lyric) => {
		// console.log("We are here");
		if (err) res.send(err);
		// console.log("lyric data", lyric);
		res.send(lyric);
	});
};

exports.getLyricsbyId = (req, res) => {
	// console.log('get replyriccount');
	LyricsModel.getLyricsbyId(req.params.lyric_id, (err, lyric) => {
		// console.log("We are here");
		if (err) res.send(err);
		// console.log("lyric data", lyric);
		res.send(lyric);
	});
};

// exports.putLike = (req, res) => {
// 	LyricsModel.putLike((err, lyric) => {
// 		if (err) res.send(err);
// 		console.log("lyric data", lyric);
// 		res.send(lyric);
// 	});
// };

//Insert like
exports.putLike = (req, res) => {
	console.log("We are at the controller");
	LyricsModel.putLike(req.body, (err, user) => {
		if (err) res.send(err);
		res.status(200).send({ message: "Liked Successfully" });
	});
};

exports.addComment = (req, res) => {
	// console.log("We are at the controller");
	LyricsModel.addComment(req.body, (err, comment) => {
		if (err) res.send(err);
		res.status(200).send({ message: "Commented Successfully" });
	});
};

exports.getComments = (req, res) => {
	// console.log('get replyriccount');
	LyricsModel.getComments(req.params.lyric_id, (err, lyric) => {
		// console.log("We are here");
		if (err) res.send(err);
		// console.log("lyric data", lyric);
		res.send(lyric);
	});
};
