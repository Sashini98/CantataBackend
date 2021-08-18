const express = require("express");
const router = express.Router();

const notificationController = require("../controller/notification.controller");

router.post("/addnotification", notificationController.createNotification);

module.exports = router;
