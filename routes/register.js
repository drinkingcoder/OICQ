var sendmail = require('./sendMail');
var db = require("./db");

var moment = require("moment");
var uuid = require("node-uuid");

module.exports = function (req,res,next) {
    var users;
    db.user.findOne({name:req.body.user}, function (err,doc) {
        if(err) {
            res.end('find user err');
            return;
        }
        users = doc;
        if(users!=null) {
            res.render('index',{message:"User name existed!",register_page:"true"});
        } else {
            var name = req.body.user;
            var email = req.body.email;
            //   var nowTime = new moment;
            var password = req.body.password;
            var verified = 'false';
            var verificationcode = uuid.v1();
            var online = 'false';
            var userentity = new db.user({
                name: name,
                email: email,
                password:password,
                verificationCode:verificationcode,
                online:online,
                verified:verified
            });
            userentity.save( function(err) {
                console.log(err);
                res.end("Err!");
                return;
            })
            sendmail(email,"<a href='http://localhost:3000/activation?name="+name+"&verificationcode="+verificationcode+ "'>go activation</a>");
            res.end("msg sent");
        }
    });
}