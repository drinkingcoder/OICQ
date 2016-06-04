var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/OICQ');

var schema = mongoose.Schema;
var userschema = new schema({
    name:String,
    password:String,
    email:String,
    verified:String,
    verificationCode:String,
    online:String
});
var messageschema = new schema({
    sender:String,
    receiver:String,
    content:String
});
var groupschema = new schema({
    owener:String,
    name:String,
    member:String
});
var user = mongoose.model('user',userschema);
var message = mongoose.model('message',messageschema);
var group = mongoose.model('group',groupschema);

exports.userschema = userschema;
exports.messageschema = messageschema;
exports.groupschema = groupschema;

exports.user = user;
exports.message = message;
exports.group = group;