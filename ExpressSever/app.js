var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var  routerPath = require('./config/router-config');
var sqlCache = require('./db/sqlCache');

var indexRouter = require('./routes/index');
var getRandomGameRouter = require('./routes/getRandomGame');
var getOneGameRouter  =  require('./routes/getOneGameDetail');
var getGameInforByMethodRouter  =  require('./routes/getCategoryGame');
var getNewGameRouter  =  require('./routes/getNewGame');
var getTopGameRouter =  require('./routes/getTopGame');
var app = express();

/*// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');*/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

sqlCache.getSqlCacheData();

app.use('/', indexRouter);
app.use(routerPath.RANDOM_API_URI, getRandomGameRouter);
app.use(routerPath.DETAIL_API_URI,getOneGameRouter);
app.use(routerPath.NEW_API_URI,getNewGameRouter);
app.use(routerPath.CATEGORY_API_URI,getGameInforByMethodRouter);
app.use(routerPath.TOP_API_URI,getTopGameRouter);

/*// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next)
{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log("error 404");
});*/

module.exports = app;
