var jwt = require('jsonwebtoken');
var appSecret = require('../config').appSecret;

function authenticate(req, res, next){
    var token = req.headers['x-access-token'];
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, appSecret, function(err, decoded) {
            if (err) {
                return res.status(403).send();
            } else {
                // if everything is good, save to request for use in other routes
                req.user = decoded;
                next();
            }
        });
    } else {
        // if there is no token return an error
        return res.status(403).send();
    }
}

module.exports = authenticate;