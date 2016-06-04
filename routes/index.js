var express = require('express');
var router = express.Router();
var login = require('./login');
var register = require('./register');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/login', login );
router.post('/register', register);

module.exports = router;
