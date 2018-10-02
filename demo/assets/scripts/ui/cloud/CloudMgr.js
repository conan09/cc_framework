/**
 * 云prefab管理
 */

 ;window.CloudMgr = window.CloudMgr || {
    cloudNode : null,
    animDuration : 0.5,
    STATUS : {CLUSTER : 0, SPREAD : 1},
 };


 CloudMgr.ShowCloud = function(status, callback){
    if(this.cloudNode == null){
        cc.loader.loadRes(GameConst.PREFAB_ENUM.CLOUD_NODE, cc.Prefab, (errMsg, loadRes) => {
            this.cloudNode = cc.instantiate(loadRes);
            cc.game.addPersistRootNode(this.cloudNode);
            return this.cloudNode;
        })
    }else{
       return this.cloudNode;
    }
 }

 CloudMgr.AddChild = function(parent){
    if(this.cloudNode){
        this.cloudNode.parent = parent;
    }
 }

 CloudMgr.SetPosition = function(){
    if(this.cloudNode){
        if(arguments.length == 2){
            this.cloudNode.x = arguments[0];
            this.cloudNode.y = arguments[0];
        }else if(arguments.length == 1){        
            this.cloudNode.position = arguments[0];
        }
    }
 }