const express = require("express");
const router = express.Router();

const userController = require("../controller/user.controller");

router.get("/active", userController.getActiveUsers);
router.post("/checkuser", userController.checkUser);

module.exports = router;
