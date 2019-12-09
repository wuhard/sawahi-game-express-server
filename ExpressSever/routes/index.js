var express = require('express');
var router = express.Router();
const db = require('../db/sqlmanager');
/* GET home page. */
router.get('/', function(req, res, next) {
   console.log("select");
   res.end();
});

module.exports = router;
