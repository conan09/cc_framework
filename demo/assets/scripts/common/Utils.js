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


Utils.ShowMsgBox = function(msg, warn, callback){
    Utils.LoadRes(GameConst.PREFAB_ENUM.MSG_BOX, cc.Prefab, (err, ret)=>{
        let msgbox = cc.instantiate(ret);
        msgbox.getComponent("MessageBox").SetMsg(msg, warn, callback);
        msgbox.parent = SceneMgr.GetCurrentScene().getChildByName("Canvas");
        msgbox.position = cc.v2(0, 0);
    })
}