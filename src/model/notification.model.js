var dbConn = require("../../config/db.config");

var Notification = function (notification) {
    this.notification_id = notification.notification_id;
    this.title = notification.title;
    this.message = notification.message;
    this.admin_id = notification.admin_id;
    this.datetime = notification.datetime;
    this.email = notification.email;

};



Notification.createNotification = (data, result) => {
    var title = data.title;
    var message = data.message;
    var admin_id = 1;

    var currentdate = new Date();
    var datedet = currentdate.getFullYear() + "-" + currentdate.getMonth() + "-" + currentdate.getDay() + " " + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();


    var sql = "INSERT INTO notification (Title, Message, AdminId, DateTime) VALUES ('" + title + "', '" + message + "' , '" + admin_id + "', '" + datedet + "')";
    dbConn.query(sql, function (err, res) {
        if (err) {
            console.log('Error while inserting data');
            result(null, err);
        } else {
            console.log('Notification insterted successfully');
            result(null, res)
        }
    })
    // dbConn.query("INSERT INTO notification (Title, Message, AdminId) SET ? ", [data.title, data.message,'1'], (err, res)=>{
    //     if(err){
    //         console.log('Error while inserting data');
    //         result(null, err);
    //     }else{
    //         console.log('Notification insterted successfully');
    //         result(null, res)
    //     }
    // })
}

Notification.createUserNotification = (data, result) => {
    var notification_id = data.notification_id;

    if (data.email === '') {
        var sql = "INSERT INTO user_has_notification (NotificationId) VALUES ('" + notification_id + "')";
        console.log(sql);
        dbConn.query(sql, function (err, res) {
        if (err) {
            console.log('Error while inserting data');
            result(null, err);
        } else {
            console.log('Notification insterted successfully');
            result(null, res)
        }
    })

    }

    else {
        var users = data.email.split(',');
        var i = 0;

        for (i = 0; i < users.length; i++) {
            var sql1 = "SELECT UserId FROM user WHERE Email=('" + users[i] + "')";

            dbConn.query(sql1, function (err, res) {
                if (err) {
                    console.log('Error while inserting data');
                    result(null, err);
                } else {
                    let user;
                    user = res[0].UserId;
                    var sql = "INSERT INTO user_has_notification (UserId, NotificationId) VALUES ('" + user + "','" + notification_id + "')";

                    dbConn.query(sql, function (err, res) {
                        if (err) {
                            console.log('Error while inserting data');
                            result(null, err);
                        } else {
                            console.log('Notification insterted successfully');
                            result(null, res)
                        }
                    })

                }

            })



        }


    }


    // var sql = "INSERT INTO notification (Title, Message, AdminId, DateTime) VALUES ('" + title + "', '" + message + "' , '" + admin_id + "', '" + datedet + "')";
    // dbConn.query(sql, function (err, res) {
    //     if (err) {
    //         console.log('Error while inserting data');
    //         result(null, err);
    //     } else {
    //         console.log('Notification insterted successfully');
    //         result(null, res)
    //     }
    // })
    // dbConn.query("INSERT INTO notification (Title, Message, AdminId) SET ? ", [data.title, data.message,'1'], (err, res)=>{
    //     if(err){
    //         console.log('Error while inserting data');
    //         result(null, err);
    //     }else{
    //         console.log('Notification insterted successfully');
    //         result(null, res)
    //     }
    // })
}

module.exports = Notification;