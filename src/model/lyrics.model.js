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
	dbConn.query(
		"UPDATE lyrics SET likes=(?) WHERE LyricId=(?); INSERT INTO lyricrating (Likes, LyricId) VALUES (1,?)",
		[data.number_of_likes, data.liked_post_id, data.liked_post_id],
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

module.exports = Lyrics;
