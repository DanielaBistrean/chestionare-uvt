var mongoose = require('mongoose');
var schema = require('./schema.js');

mongoose.connect('mongodb://admin:proiectcolectiv@ds047114.mlab.com:47114/chestionare-uvt');

var db = mongoose.connection;
db.on('error', function (err) {
	console.log(err);
});

db.once('open', function () {
	console.log('Connected to the database!');
});