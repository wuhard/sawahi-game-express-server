var express = require('express');
const db = require('../db/sqlmanager');
var router = express.Router();
const sqlCache = require('../db/sqlCache');
/* GET home page. */
router.get('/', function(req, res, next) {
       console.log("getTopGame");
       var size = req.query.size;  //aid = 1243
       var gameFilter = req.query.filter;
       var filterArr = [];
       if(size == null) {
              size = -1;
       }
       if(gameFilter != null) {
              filterArr = gameFilter.split(',');
       }
       sqlCache.getTopGameInfor(size,(data)=> {
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

