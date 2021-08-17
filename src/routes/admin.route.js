const express = require("express");
const router = express.Router();

const adminController = require("../controller/admin.controller");

router.post("/checkadmin", adminController.checkAdmin);
router.get('/getadmin',adminController.getAdmin);

module.exports = router;
