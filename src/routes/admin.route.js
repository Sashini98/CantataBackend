const express = require("express");
const router = express.Router();

const adminController = require("../controller/admin.controller");
const notificationController = require("../controller/notification.controller");
const reporteduserController = require("../controller/reporteduser.controller");

router.post("/addnotification", notificationController.createNotification);

router.get('/getrepusercount',reporteduserController.getReportCount);



router.post("/checkadmin", adminController.checkAdmin);
router.get('/getadmin',adminController.getAdmin);

module.exports = router;
