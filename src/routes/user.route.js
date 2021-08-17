const express = require("express");
const router = express.Router();

const userController = require("../controller/user.controller");

router.get("/active", userController.getActiveUsers);
router.get("/deactive", userController.getDeactiveUsers);
router.post("/checkuser", userController.checkUser);

module.exports = router;
