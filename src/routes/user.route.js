const express = require("express");
const router = express.Router();

const userController = require("../controller/user.controller");

router.get("/active", userController.getActiveUsers);
router.get("/deactive", userController.getDeactiveUsers);
router.post("/checkuser", userController.checkUser);
router.get("/usercount", userController.getUserCount);
router.get("/searchUser/:email", userController.getUserByEmail);
router.get("/activateUser/:email", userController.activateUser);
router.get("/deactivateUser/:email", userController.deactivateUser);

//Bhagya >>>>

router.get("/getlyrics", userController.getLyrics);
router.post("/checkuser", userController.checkUser);
router.post("/registeruser", userController.registerUser);
router.post("/inputlyrics", userController.inputLyrics);

module.exports = router;
