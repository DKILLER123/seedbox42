var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var User = require('../models/User.js');

router.post('/', function(req, res, next) {
	console.log("authenticate::body:: ", req.body);
	User.findOne({ login: req.body.login }, function(err, user) {
		if (err)
			return next(err);
		if (!user)
		{
			res.json({ success: false, message: 'Authentification failed, user not found' });
		}
		else if (user)
		{
			bcrypt.compare(req.body.password, user.password, function(err, result) {
				if (err)
					res.json({ success: false, message: 'An error occured while comparing hash'});
				else if (result == false)
					res.json({ success: false, message: 'Authentification failed, wrong password' });
				else
				{
					user.password = "";
					var token = jwt.sign(user.toObject(), req.app.locals.ttConfig.secret, {
						expiresIn: 86400 //1 day
					});
					res.json({
						success: true,
						data: user,
						message: 'enjoy your token !',
						token: token
					});
				}
			});
		}
	});
});

module.exports = router;
