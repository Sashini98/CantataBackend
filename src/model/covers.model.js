var dbConn = require("../../config/db.config");

var Covers = function (covers) {
    this.cover_id = covers.cover_id;
    this.title = covers.title;
    this.description = covers.description;
    this.created_at = covers.created_at;
    this.updated_at = covers.updated_at;
    this.active_status = covers.active_status;
    this.user_id = covers.user_id;
    this.lyric_id = covers.lyric_id;
    this.keyword=covers.keyword;
};

Covers.inputCovers = (data, result) => {
    var currentdate = new Date();
    var datedet = currentdate.getFullYear() + "-" + currentdate.getMonth() + "-" + currentdate.getDay() + " " + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();

    dbConn.query(
        "INSERT INTO cover (Title, Description, CreatedAt, Url, ActiveState, UserId, LyricId) VALUES (?,?,?,?,1,?,?)",
        [
            data.cover_title,
            data.cover_description,
            datedet,
            data.song_url,
            data.author,
            data.lyric,
        ],
        (err, res) => {
            if (err) {
                console.log("Error while inserting cover", err);
                result(null, err);
            } else {
                console.log("Model -> cover inserted successfully");
                result(null, res);
            }
        }
    );
};


Covers.getcover = (result) => {
    dbConn.query(
        "SELECT * FROM cover JOIN user ON cover.UserId=user.UserId WHERE ActiveState=1",
        (err, res) => {
            if (err) {
                console.log("Error while fetching cover", err);
                result(null, err);
            } else {
                console.log("cover fetched succesfully", err);
                result(null, res);
            }
        }
    );
};

Covers.getcoverbyId = (cover_id, result) => {
    dbConn.query(
        "SELECT * FROM cover JOIN user ON cover.UserId=user.UserId WHERE CoverId=? ", cover_id,
        (err, res) => {
            if (err) {
                console.log("Error while fetching cover", err);
                result(null, err);
            } else {
                console.log("cover fetched succesfully", err);
                result(null, res);
            }
        }
    );
};

// cover.getCounts = (result) => {
// 	dbConn.query(
// 		"SELECT (SELECT COUNT(user.UserId) FROM user ) AS usercnt, (SELECT (SELECT COUNT(cover.CoverId) FROM cover)+(SELECT COUNT(cover.LyricId) FROM cover))  AS posts",
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


Covers.inputCoverTags = (data, result) => {

    var cover_id = data.cover_id;
    var keywords = data.keyword.split(',');
    
    var i = 0;

    for (i = 0; i < keywords.length; i++) {
        var sql = "INSERT INTO covertags (CoverId, Tag) VALUES ('" + cover_id + "','" + keywords[i] + "')";
        // console.log(sql);

        dbConn.query(sql, function (err, res) {
            if (err) {
                console.log('Error while inserting cover tags');
                result(null, err);
            } else {
                console.log('cover tags insterted successfully');
                result(null, res)
            }
        })
        }


}
module.exports = Covers;
