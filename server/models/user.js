var mongoose = require('mongoose');
var Shema = mongoose.Schema;
var UserShema = new Shema({
    email: String,
    password: String
});

module.exports = mongoose.model('User', UserShema);