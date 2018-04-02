var mongoose = require('mongoose');
var mongoHost = '127.0.0.1:27017/blogs';

mongoose.connect('mongodb://' + mongoHost);
var db = mongoose.connection;
db.once('open', function() { console.log('Mongodb connection at %s successful', mongoHost) });
db.on('error', function() { console.error('Mongodb connection at %s failed', mongoHost) });

var articleSchema = new mongoose.Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	source: { type: String, required: true },
	author: { type: String, required: true },
	date: { type: Date, default: Date.now }
});

const ArticleModel = mongoose.model('article', articleSchema);

// auth can be added with https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1
var userSchema = new mongoose.Schema({
	login: { type: String, required: true, index: { unique: true } },
	password: { type: String, required: true }
});

const UserModel = mongoose.model('user', userSchema);

module.exports.ArticleModel = ArticleModel;
module.exports.UserModel = UserModel;