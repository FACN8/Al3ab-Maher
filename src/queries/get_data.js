const dbConnection = require("../database/db_connection.js");

module.exports.getAllData = cb => {
    getUserTable(cb);
};

module.exports.getUserTable = cb => {
    dbConnection.query(`SELECT * FROM users;`, (err, res) => {
        if (err) return cb(err);

        cb(null, res.rows);
    });
};

module.exports.getUser = (username, cb) => {
    dbConnection.query(`SELECT * FROM users WHERE user_name='${username}';`, (error, result) => {
        if (error) return cb(error);

        cb(null, result.rows[0]);
    });
};
