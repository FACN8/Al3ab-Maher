const setData = require('../queries/set_data.js');
const getData = require('../queries/get_data.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.get = (req, res) => {
    res.render('authenticate', {
        signed_in: req.cookies.signed_in,
        title: 'Authentication'
    });
};

module.exports.login = (req, res) => {

    getData.getUser(req.body.username, (error, userData) => {
        if (error) {
            res.status(401);
            res.send();
        }

        bcrypt.compare(req.body.password, userData.user_password, (err, same) => {

            if (err || !same) {
                console.log('AUTH FAILED, SAME: ' + same);
                res.status(401);
                res.send();
            }

            jwt.sign(req.body.username, process.env.JWT_SECRET, (err, token) => {
                if (err) {
                    console.log(err);
                    res.error('Signing failed!');
                    return;
                }

                res.cookie('access_token', token, { httpOnly: true });
                res.cookie('signed_in', true, { httpOnly: true });
                res.status(200);
                res.send();
            });
        });
    });
};

module.exports.register = (req, res) => {
    bcrypt.hash(req.body.password, 10, (error, hashed) => {

        setData.setUser(req.body.username, hashed, (error, result) => {
            if (error) {
                res.status(401);
                res.send();
            }

            res.status(200);
            res.send();
        })
    });
};

module.exports.logout = (req, res) => {
    res.clearCookie('signed_in');
    res.clearCookie('access_token');
    res.redirect('/authenticate');
};