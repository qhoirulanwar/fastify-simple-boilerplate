const env = require("../../env/environment")
const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: env.mainDB.host,
    port: env.mainDB.port,
    user: env.mainDB.user,
    password: env.mainDB.password,
    database: env.mainDB.database,
    connectionLimit: 7
});

// Test MariaDB Connection
// pool.getConnection()
//   .then(conn => {
//     console.log("Databese connected ! connection id is " + conn.threadId);
//     conn.end(); //release to pool
//   })
//   .catch(err => {
//     console.log("not connected due to error: " + err);
//   });

module.exports = pool