module.exports = adminRoutes => {
    const admin = require("../controllers/admin.controller");

    var router = require("express").Router();

    // Retrieve a single user with username
    router.get("/:adminid", admin.findOne);

    // Update a user with username
    router.post("/update/:adminid", admin.update);

    // Delete a user with username
    router.post("/delete/:adminid", admin.delete);

    adminRoutes.use('/api/admin', router);
};