const dbConnection = require('../database/db_connection.js');

module.exports.setUser = (username, password, cb) => {
    dbConnection.query(`INSERT INTO users (user_name,user_password,user_score) VALUES ('${username}','${password}',0);`, (error, result) => {
        if (error) return cb(error);

        cb(null, result.rows);
    });
};
