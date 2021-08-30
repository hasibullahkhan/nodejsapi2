var Db = require('./dboperations');
var Employee = require('./Employee');
const dboperations = require('./dboperations');

dboperations.getEmployee().then(result => {
    console.log(result);
})

// var express = require('express');
// var bodyParser = require('body-parser');
// var cors = require('cors');
// var app = express();
// var router = express.Router();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors());
// app.use('/api', router);