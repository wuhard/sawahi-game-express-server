var express = require('express');
var mysql = require('mysql');
const models = require('../config/database');
const db = require('../db/sqlmanager');
const dbSql = require('../config/sql-sentence-config');


var allGameInforArr = [];

///热门游戏
var topGameInforArr = [];

var newGameInforArr = [];

//获取数据库数据所有游戏，top游戏，最新游戏
function  getSqlCacheData() {
    getAllGameInfor();
    getAllTopGameInfor();
    getAllNewGameInfor();
}



function getAllTopGameInfor() {
    db.selectAll(dbSql.TOP_GAME_SQL, (e, jsonData) => {
        if (e) {
            console.log("get data error");
        }
        topGameInforArr = jsonData;
    });
}

function getAllNewGameInfor() {
    db.selectAll(dbSql.NEW_GAME_SQL, (e, jsonData) => {
        if (e) {
            console.log("get data error");
        }
        newGameInforArr = jsonData;
    });
}


///获取所有游戏信息
function getAllGameInfor() {
    db.selectAll(dbSql.All_GAME_SQL, (e, jsonData) => {
        if (e) {
            console.log("get data error");
        }
        allGameInforArr = jsonData;
    });
}

//获取一个游戏信息
function getOneGameInfor(id,callback) {

    for(var i = 0; i < allGameInforArr.length; i++)
    {
        if(allGameInforArr[i].id == id)
        {
            if(callback != null)
            callback(allGameInforArr[i]);
            return;
        }
    }
    callback("");
}

///获取新游戏列表
function getNewGameInfor(size,callback) {
    var gameInfor = [];

    if(size < 0) {
        callback(newGameInforArr);
        return;
    }

    for(var i = 0; i < size; i++) {
        gameInfor.push(newGameInforArr[i]);
    }

    if(callback != null)
        callback(gameInfor);
}





///获取随机游戏
function getRandomInfor(size,callback) {
     var randomGameInfor = [];

    if(size < 0) {
        callback(allGameInforArr);
        return;
    }
    var arr = [];
    for(var i=0;i<allGameInforArr.length;i++){
        arr.push(i);
    }

     for(var i = 0; i < size; i++) {
         var randomNum =   parseInt(Math.random()*(0-arr.length)+arr.length);
         randomGameInfor.push(allGameInforArr[arr[randomNum]]);
         delete (arr[randomNum]);
     }

     if(callback != null)
     callback(randomGameInfor);
}

///获取指定类型的游戏
function getCategoryGame(category,size,callback) {
    var categoryGame = [];
    var sizeGategoryGame = [];

    for(var i = 0; i < allGameInforArr.length; i++) {
        console.log(allGameInforArr[i].category );
         if(allGameInforArr[i].category == category) {
             categoryGame.push(allGameInforArr[i]);
         }
    }

    if(size < 0) {
        var string = JSON.stringify(categoryGame);
        var data = JSON.parse(string);
        callback(data);
        return;
    }

    for(var i = 0; i < size; i++) {
        if(i < categoryGame.length) {
            sizeGategoryGame.push(categoryGame[i]);
        }
    }

    if(callback != null)
         callback(sizeGategoryGame);
}

//获取top游戏
function getTopGameInfor(size,callback) {
    var topGameInfor = [];
    if(size < 0) {
        if(callback != null)
        callback(topGameInforArr);
        return;
    }

    for(var i = 0; i < size; i++) {
       topGameInfor.push(topGameInforArr[i]);

    }
    if(callback != null)
    callback(topGameInfor);

}

module.exports = {getSqlCacheData,getCategoryGame,getRandomInfor,getNewGameInfor,getOneGameInfor,getTopGameInfor};

