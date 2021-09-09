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
    dbConn.query("SELECT * FROM lyrics WHERE ActiveState=1", (err, res) => {
        if (err) {
            console.log("Error while fetching lyrics", err);
            result(null, err);
        } else {
            console.log("Lyrics fetched succesfully", err);
            result(null, res);
        }
    });
};

module.exports = Lyrics;