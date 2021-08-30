var config = require('./dbconfig');
const sql = require('mssql');


async function getEmployee() {
    try {
        let pool = await sql.connect(config);
        let Employee = await pool.request().query("SELECT * from Employee");
        return Employee.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = {
    getEmployee: getEmployee
}