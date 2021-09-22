const express = require("express");
const router = express.Router();

const lyricController = require("../controller/lyrics.controller");
const coverController = require("../controller/cover.controller");

router.get("/getlyrics", lyricController.getLyrics);
router.get("/getlyricsbyId/:lyric_id", lyricController.getLyricsbyId);
router.get("/getcomments/:lyric_id", lyricController.getComments);
router.post("/like", lyricController.putLike);
router.post("/comment", lyricController.addComment);

router.post("/inputcover", coverController.inputCovers);
router.post("/inputcovertag", coverController.inputCoverTags);
router.get("/getcoverbyId/:cover_id", coverController.getcoverbyId);
router.post("/getcovers", coverController.getCovers);

module.exports = router;
