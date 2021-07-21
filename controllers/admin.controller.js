const db = require("../models");
const Admin = db.Admin;
const Op = db.Sequelize.Op;
const AuthToken = db.validations;
const randomString = require('random-string');
const { Base64 } = require('js-base64');
const BASE_URL = "localhost:5000/api/login/validate/";
const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey('');


// Create and Save a new user
exports.create = (req, res) => {
    // Validate request
    if (!req.body.adminid || !req.body.email) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a user
    const user = {
        adminid: req.body.adminid,
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password
    };
};

// Find a single User with an id
exports.findOne = (req, res) => {
    console.log(req.body)
    const id = req.params.adminid;

    Admin.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Admin with this ID=" + id
            });
        });
};

exports.findAll = (req, res) => {
    console.log(req.body);
    // const id = req.params.adminid;

    Admin.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Admin with this ID=" + id
            });
        });
};


// Update a User by the id in the request
exports.update = (req, res) => {
    const un = req.params.adminid;

    Admin.update(req.body, {
        where: { adminid: un }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Admin details was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update admin with ID=${un}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating admin with ID=" + adminid
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const un = req.params.adminid;

    Admin.destroy({
        where: { adminid: un }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Admin was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete admin with ID=${un}. Maybe admin was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete admin with ID=" + un
            });
        });
};

