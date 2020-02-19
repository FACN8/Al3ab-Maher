const dbConnection = require("../database/db_connection");

const setAllData = cb => {
    setUserTable(cb);
};

const setUserTable = cb => {
    dbConnection.query("INSERT  user_name,user_password,user_score FROM users;", (err, res) => {
        if (err) return cb(err);

        cb(null, res.rows);
    });
};



module.exports = {
    setAllData,
    setUserTable
}