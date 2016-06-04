/**
 * Created by drinkingcoder on 16/6/3.
 */
var db = require("./db");


module.exports = function (req,res,next) {
    var users;
    db.user.findOne({name:req.body.user}, function (err,doc) {
        if(err) {
            res.end('find user err');
            return;
        }
        console.log(doc);
        users = doc;
        if(req.url!='/login') return next();
        if(users == null || req.body.password != users.password ) {
            res.render('index',{message:"Wrong password!", login_page:"true"});
        } else if(users.verified == 'false' ) {
            res.render('index',{message:"Please veriy your identification first!", login_page:"true"})
        } else {
                req.session.logged_in = true;
                req.session.name = users.name;
                res.end("Authenticated");
        }
    });
}