const express = require('express');
const router = express.Router();
 
const userController = require('../controller/user.controller');
router.get('/checkuser/:user_id',userController.checkUser);
 
module.exports = router;