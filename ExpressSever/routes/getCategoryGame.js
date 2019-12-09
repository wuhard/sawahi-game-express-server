var express = require('express');
const sqlCache = require('../db/sqlCache');

var router = express.Router();
/* GET home page. */
router.get('/:category', function(req, res, next) {
    console.log("getCategoryGame");

    var category = req.params.category.toString('utf-8');
    var gameSize = req.query.size;  //aid = 1243
    var gameFilter = req.query.filter;
    var filterArr = [];

    if(gameSize == null) {
        gameSize = -1;
    }

    if(gameFilter != null) {
        filterArr = gameFilter.split(',');
    }

    sqlCache.getCategoryGame(category,gameSize,(jsonData)=> {
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

