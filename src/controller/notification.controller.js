const Notification = require("../model/notification.model");
const NotificationModel = require("../model/notification.model");

exports.createNotification = (req, res) =>{
    const notificationReqData = new NotificationModel(req.body);
    console.log('notificationReqData', notificationReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        NotificationModel.createNotification(notificationReqData, (err, notification)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Notification Created Successfully', data: notification.insertId})
        })
    }
}
 
exports.createUserNotification = (req, res) =>{
    const notificationReqData = new NotificationModel(req.body);
    console.log('notificationReqData', notificationReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        NotificationModel.createUserNotification(notificationReqData, (err, notification)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Notification Created Successfully', data: notification.insertId})
        })
    }
}