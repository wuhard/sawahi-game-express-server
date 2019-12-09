var express = require('express');
const db = require('../db/sqlmanager');
const sqlCache = require('../db/sqlCache');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    var gameSize = req.query.size;  //aid = 1243
    var gameFilter = req.query.filter;
    var filterArr = [];

    if(gameSize == null) {
        gameSize = -1;
    }

    if(gameFilter != null) {
        filterArr = gameFilter.split(',');
    }

    sqlCache.getNewGameInfor(gameSize,(jsonData)=> {
        if(filterArr.length != 0) {
            var string  = JSON.stringify(jsonData,filterArr);
            res.json(JSON.parse(string));
        }
        else {
            res.json(jsonData);
        }
    });
});

module.exports = router;

