var dbConn = require("../../config/db.config");

var Notification = function (notification) {
	this.notification_id = notification.notification_id;
	this.message = notification.message;
	this.admin_id = notification.admin_id;
    this.datetime=notification.datetime;

};

Notification.createNotification= (notificationReqData, result) =>{
    dbConn.query('INSERT INTO notification SET ?', notificationReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Notification insterted successfully');
            result(null, res)
        }
    })
}
 
module.exports = Notification;