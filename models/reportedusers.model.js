module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
        adminid: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        fname: {
            type: Sequelize.STRING
        },
        lname: {
            type: Sequelize.STRING
        },
        
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
         });

    return Admin;
};