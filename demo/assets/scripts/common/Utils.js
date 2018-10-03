;window.Utils = window.Utils || {};

Utils.LoadRes = function(url, type, callback){
    cc.loader.loadRes(url, type, function(err, ret){
        if(err){
            cc.log("load --[[ %s ]]-- fail -- [[ %s ]]--", url, err);
        }else{
            if(callback){
                callback(err, ret);
            }
        }
    })
}