const User = require('../model/user.model');
const UserModel = require('../model/user.model');

  
// // get user by id and password
// exports.checkUser = (req, res)=>{
//         UserModel.checkUser(req.params.user_id, (err, employee)=>{
//         if(err)
//         res.send(err);
//         console.log('user exist',user);
//         res.send(user);
//     })
// }

exports.checkUser = (req, res)=>{
    //console.log('get emp by id');
    UserModel.checkUser(req.params.user_id, (err, user)=>{
        if(err)
        res.send(err);
        console.log('single user data',user);
        res.send(user);
    })
}

