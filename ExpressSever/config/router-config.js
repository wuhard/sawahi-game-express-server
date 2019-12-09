const SERVER_API_URL = "http://www.sawahigame.com"
const DETAIL_API_URI = "/game-detail"     //某个游戏信息
const CATEGORY_API_URI = "/game-category"  //某类游戏列表
const HOTPOT_API_URI = "/game-hotpot"
const PROMOTE_API_URI = "/game-promote" //推荐游戏
const NEW_API_URI = "/game-new"  //新游戏
const RANDOM_API_URI = "/game-random"  //随机游戏
const TOP_API_URI = "/game-top"  //top游戏



exports.SERVER_API_URL = SERVER_API_URL;
exports.DETAIL_API_URI = DETAIL_API_URI;
exports.CATEGORY_API_URI = CATEGORY_API_URI;
exports.HOTPOT_API_URI = HOTPOT_API_URI;
exports.PROMOTE_API_URI = PROMOTE_API_URI;
exports.NEW_API_URI = NEW_API_URI;
exports.RANDOM_API_URI = RANDOM_API_URI;
exports.TOP_API_URI = TOP_API_URI;

/*
get => game-detail/{id}?filter=id,name,rate => json 
    'game': {
        'id': Random.integer(1, 1000),
        'name': Random.string(10, 20),
        'intro': Random.string(25, 45),
        'howto': Random.string(100, 225),
        'rate': Random.float(1.0, 5.0),
        'iconUrl': Random.image('72x72', Random.color(), Random.color(), 'png', Random.string(10)),
        'imageUrl': Random.image('320x120', Random.color(), Random.color(), 'png', Random.string(10)),
        'gameUrl': "https://cdn.ludigames.com/h5ads/paperFlightFree/?utm_source=gameloft&utm_medium=bookmark&utm_campaign=PH67&hippooid=889"
    }

get => game-category/{category}?size=9&&filter=id,name,intro => json array
'games|9': [
        {
            'id': Random.integer(1, 1000),
            'name': Random.string(10, 20),
            'intro': Random.string(15, 45),
            'howto': Random.string(100, 225),
            'rate': Random.float(1.0, 5.0),
            'iconUrl': Random.image('72x72', Random.color(), Random.color(), 'png', Random.string(10)),
            'imageUrl': Random.image('320x120', Random.color(), Random.color(), 'png', Random.string(10)),
            'gameUrl': "https://cdn.ludigames.com/h5ads/paperFlightFree/?utm_source=gameloft&utm_medium=bookmark&utm_campaign=PH67&hippooid=889"
        }
    ]
 */