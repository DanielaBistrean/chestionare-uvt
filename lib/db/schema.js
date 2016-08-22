var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	username: String,
	password: String,
	usertype: {
		type: String,
		enum: ['student', 'academic', 'secretary', 'admin'],
		default: 'student'
	}
});

var User = mongoose.model('User', userSchema);

module.exports = {
	User: User
};