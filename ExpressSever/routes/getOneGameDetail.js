var express = require('express');
var fs = require("fs");
const sqlCache = require('../db/sqlCache');
var router = express.Router();
const db = require('../db/sqlmanager');
/* GET home page. */

router.get('/:id', function(req, res, next) {
    console.log("getOneGame");
    var gameId = req.params.id.toString('utf-8');
    var gameFilter = req.query.filter;
    var filterArr = [];

    if(gameFilter != null) {
        filterArr = gameFilter.split(',');
    }

    sqlCache.getOneGameInfor(gameId,(data)=> {
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
