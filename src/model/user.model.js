var dbConn = require('../../config/db.config');

var User = function (user) {
    this.user_id = user.user_id;
    this.email = user.email;
    this.name = user.name;
    this.password = user.password;
    this.active_status = user.active_status;
    this.create = user.image;
    this.emp_image = user.create;
    this.update = user.update;
    this.gid = user.gid;
    this.rem_token = user.rem_token;
}

// get user by id and password

User.checkUser = (user_id, result)=>{
    dbConn.query('SELECT * FROM user WHERE UserId LIKE ?', user_id+'%', (err, res)=>{
        if(err){
            console.log('Error while fetching user by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

module.exports = User;