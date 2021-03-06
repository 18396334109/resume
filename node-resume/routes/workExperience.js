var express = require('express');
var info = require('../sql/getInfo.js');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // next();
    // res.send('respond with a resource');
    info.work(req, res);
});

module.exports = router;