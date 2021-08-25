const express = require("express");
const router = express.Router();

const adminController = require("../controller/admin.controller");
const notificationController = require("../controller/notification.controller");
const reporteduserController = require("../controller/reporteduser.controller");
const reportedlyricController = require("../controller/reportedlyrics.controller");


router.post("/addnotification", notificationController.createNotification);

router.get('/getrepusercount',reporteduserController.getReportCount);
router.get('/getreplyriccount',reportedlyricController.getReportCount);


router.post("/checkadmin", adminController.checkAdmin);
router.get('/getadmin',adminController.getAdmin);

module.exports = router;
