let config = {
    server: 'localhost',
    authentication: {
        type: 'default',
        options: {
            userName: 'sa', // update me
            password: 'dell' // update me
        }
    },
    options: {
        database: 'EmployeeDB',
        validateBulkLoadParameters: true,
        encrypt: false,
    }
}







module.exports = config;