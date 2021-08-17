const express = require("express");
const router = express.Router();

const userController = require("../controller/user.controller");

router.get("/active", userController.getActiveUsers);
router.get("/deactive", userController.getDeactiveUsers);
router.post("/checkuser", userController.checkUser);
router.get('/searchUser/:email',userController.getUserByEmail);

module.exports = router;
