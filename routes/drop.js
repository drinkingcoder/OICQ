var mongoose = require('mongoose');
/* Connect to the DB */
mongoose.connect('mongodb://localhost/OICQ',function(){
		mongoose.connection.db.dropDatabase();
		});
