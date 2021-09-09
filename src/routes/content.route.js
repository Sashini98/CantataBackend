const express = require("express");
const router = express.Router();

const lyricController = require("../controller/lyrics.controller");

router.get("/getlyrics", lyricController.getLyrics);

module.exports = router;