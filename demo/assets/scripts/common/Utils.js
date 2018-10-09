;window.Utils = window.Utils || {};

Utils.ShowMsgBox = function(msg, warn, callback){
    UIKit.LoadRes("prefabs/messageBox", cc.Prefab, (err, prefab)=>{
        let msgBox = cc.instantiate(prefab);
        msgBox.getComponent("MessageBox").SetMsg(msg, warn, callback);
    });
}