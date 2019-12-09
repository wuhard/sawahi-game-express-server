# sawahi-game-express-server
非洲游戏平台服务端
提供接口如下：
获取某个类型的游戏列表：http://www.sawahigame.com/game-category/{category}?size=9&&filter=id,name  
                      size和filter两参数可以省略
获取新游戏列表：http://www.sawahigame.com/game-new?size=9&&filter=id,name  
                      size和filter两参数可以省略   
获取某个游戏详细信息：http://www.sawahigame.com/game-detail/{gameId}?size=9&&filter=id,name  
                      size和filter两参数可以省略    
获取随机游戏列表：http://www.sawahigame.com/game-random?size=9&&filter=id,name  
                      size和filter两参数可以省略   
获取排行榜游戏列表：http://www.sawahigame.com/game-top?size=9&&filter=id,name  
                      size和filter两参数可以省略    
