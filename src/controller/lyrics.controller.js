const Lyrics = require("../model/lyrics.model");
const LyricsModel = require("../model/lyrics.model");


exports.getLyrics = (req, res) => {
    // console.log('get replyriccount');
    LyricsModel.getLyrics((err, lyric) => {
        // console.log("We are here");
        if (err) res.send(err);
        console.log('lyric data', lyric);
        res.send(lyric);
    });
};
