const sql = require('mssql');
const config = require('../../../config');
 
(async function () {
    try {
        var objConn = config.Connection.mssql;
        sql.connect(objConn).then(() => {
            return sql.query`select * from users`
        }).then(result => {
            console.dir(result)
        }).catch(err => {
            // ... error checks
        })
    } catch (err) {
        // ... error checks
    }
})()
 
sql.on('error', err => {
    // ... error handler
})