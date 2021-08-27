const express = require("express");
const router = express.Router();

const adminController = require("../controller/admin.controller");
const notificationController = require("../controller/notification.controller");
const reporteduserController = require("../controller/reporteduser.controller");
const reportedlyricController = require("../controller/reportedlyrics.controller");
const reportedcoverController = require("../controller/reportedcover.controller");



router.post("/addnotification", notificationController.createNotification);

router.get('/getreplyriccount',reportedlyricController.getReportCount);
router.get('/getlyriccounts',reportedlyricController.getLyricCount);
router.get('/getreplyric/:lyric_id',reportedlyricController.getReportLyrics);

router.get('/getrepuser/:user_id',reporteduserController.getReports);
router.get('/getrepusercount',reporteduserController.getReportCount);
router.get('/getusercounts',reporteduserController.getRepUserCount);


router.get('/getrepcovercount',reportedcoverController.getReportCount);
router.get('/getrepcover/:cover_id',reportedcoverController.getReportCover);
router.get('/getcovercounts',reportedcoverController.getCoverCount);


router.post("/checkadmin", adminController.checkAdmin);
router.get('/getadmin',adminController.getAdmin);
router.get('/gettot',adminController.getCounts);


module.exports = router;
