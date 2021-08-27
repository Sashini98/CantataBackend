var dbConn = require("../../config/db.config");

var Notification = function (notification) {
	this.notification_id = notification.notification_id;
    this.title=notification.title;
	this.message = notification.message;
	this.admin_id = notification.admin_id;
    this.datetime=notification.datetime;

};



Notification.createNotification= (data, result) =>{
    var title=data.title;
    var message=data.message;
    var admin_id=1;

    var sql="INSERT INTO notification (Title, Message, AdminId) VALUES ('"+title+"', '"+message+"' , '"+admin_id+"')";
    dbConn.query(sql, function(err,res){
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
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
 
module.exports = Notification;