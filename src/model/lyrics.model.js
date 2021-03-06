var dbConn = require("../../config/db.config");

var Lyrics = function (lyrics) {
	this.lyric_id = lyrics.lyric_id;
	this.title = lyrics.title;
	this.description = lyrics.description;
	this.created_at = lyrics.created_at;
	this.updated_at = lyrics.updated_at;
	this.active_status = lyrics.active_status;
	this.user_id = lyrics.user_id;
};

Lyrics.getLyrics = (result) => {
	dbConn.query(
		"SELECT * FROM lyrics JOIN user ON lyrics.UserId=user.UserId WHERE ActiveState=1",
		(err, res) => {
			if (err) {
				console.log("Error while fetching lyrics", err);
				result(null, err);
			} else {
				console.log("Lyrics fetched succesfully", err);
				result(null, res);
			}
		}
	);
};

Lyrics.getLyricsbyId = (lyric_id, result) => {
	dbConn.query(
		"SELECT * FROM lyrics JOIN user ON lyrics.UserId=user.UserId WHERE LyricId=? ",
		lyric_id,
		(err, res) => {
			if (err) {
				console.log("Error while fetching lyrics", err);
				result(null, err);
			} else {
				console.log("Lyrics fetched succesfully", err);
				result(null, res);
			}
		}
	);
};

Lyrics.putLike = (data, result) => {
	console.log(data);
	dbConn.query(
		"UPDATE lyrics SET likes=(?) WHERE LyricId=(?); INSERT INTO lyricrating (Liked, LyricId, UserId) VALUES (1,?,?)",
		[data.number_of_likes, data.liked_post_id, data.liked_post_id, data.UserId],
		(err, res) => {
			if (err) {
				console.log("Error while liking", err);
				result(null, err);
			} else {
				console.log("Model -> Like Success");
				result(null, res);
			}
		}
	);
};

// Lyrics.getCounts = (result) => {
// 	dbConn.query(
// 		"SELECT (SELECT COUNT(user.UserId) FROM user ) AS usercnt, (SELECT (SELECT COUNT(cover.CoverId) FROM cover)+(SELECT COUNT(lyrics.LyricId) FROM lyrics))  AS posts",
// 		(err, res) => {
// 			if (err) {
// 				console.log("Error while fetching counts", err);
// 				result(null, err);
// 			} else {
// 				console.log("Counts fetched succesfully", err);
// 				result(null, res);
// 			}
// 		}
// 	);
// };

Lyrics.addComment = (data, result) => {
	var currentdate = new Date();
	var datedet =
		currentdate.getFullYear() +
		"-" +
		currentdate.getMonth() +
		"-" +
		currentdate.getDay() +
		" " +
		currentdate.getHours() +
		":" +
		currentdate.getMinutes() +
		":" +
		currentdate.getSeconds();

	dbConn.query(
		"INSERT INTO lyriccomment (Comment, LyricId, CommentDate, UserId) VALUES (?,?,?,?)",
		[data.comment, data.lyric_id, datedet, data.user],
		(err, res) => {
			if (err) {
				console.log("Error while adding comment", err);
				result(null, err);
			} else {
				console.log("Comment");
				result(null, res);
			}
		}
	);
};

Lyrics.getComments = (lyric_id, result) => {
	dbConn.query(
		"SELECT * FROM lyriccomment JOIN user ON lyriccomment.UserId=user.UserId WHERE LyricId=? ",
		lyric_id,
		(err, res) => {
			if (err) {
				console.log("Error while fetching comments", err);
				result(null, err);
			} else {
				console.log("Comments fetched succesfully", err);
				result(null, res);
			}
		}
	);
};

module.exports = Lyrics;
