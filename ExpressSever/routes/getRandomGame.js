var express = require('express');
const db = require('../db/sqlmanager');
const sqlCache = require('../db/sqlCache');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("getRandomGame");
    var size = req.query.size;  //aid = 1243
    var gameFilter = req.query.filter;
    var filterArr = [];
    if(size == null) {
        size = -1;
    }
    if(gameFilter != null) {
        filterArr = gameFilter.split(',');
    }
    sqlCache.getRandomInfor(size,(data)=> {
        if(filterArr.length != 0) {
            var string  = JSON.stringify(data,filterArr);
            res.json(JSON.parse(string));
        }
        else {
            res.json(data);
        }
    });

});

module.exports = router;

