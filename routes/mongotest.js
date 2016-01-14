var express = require('express');
//var app = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
	res.render('mongotest', { title: 'Mongo test!' });
});


/*
router.get('/userlist', (req, res) => {
	var db = MongoClient.db;
	var collection = db.get( 'usercollection' );
	collection.find( {}, {}, (e,docs) => {
		res.render('userlist', {
			"userlist" : docs
		});
	});
});
*/

module.exports = router;
