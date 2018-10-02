/**
 * 场景管理器
 */

 ;window.SceneMgr = window.SceneMgr || {
    currentScene : null,
    prevSceneName : "",
    cloudNode : null,
 };

 let _ShowCloud = (isShow, callback) => {
    this.cloudNode.active = true
    this.cloudNode.parent = SceneMgr.currentScene.node;
    this.cloudNode.position = cc.v2(0, 0);
    this.cloudNode.getComponent(GameConst.PREFAB_CTRL_ENUM.CLOUD_NODE_CTRL).showCloud(isShow, () => {
        this.cloudNode.active = false;
        this.cloudNode.parent = null;
        if(callback){
            callback();
        }
    })
 }

 let _LoadScene = (sceneName, callback) => {
    cc.director.loadScene(sceneName, () => {
        cc.log("Scene [ %s ] loaded success", sceneName);
        this.prevSceneName = this.currentScene.sceneName;
        this.currentScene.sceneName = sceneName;
        if(callback){
            callback();
        }
    })
 }

 /**
  * @param {string} sceneName 要进入的场景名称
  * @param {boolean} showCloud 是否显示云动画
  * @param {function} callback 回调函数
  */
SceneMgr.EnterScene = function(sceneName, showCloud, callback){
    if(this.currentScene.sceneName == sceneName){
        cc.log("Scene [ %s ] exist", sceneName);
        return;
    }else{
        if(showCloud){
            if(this.cloudNode == null){
                cc.loader.loadRes(GameConst.PREFAB_ENUM.CLOUD_NODE, cc.Prefab, (errMsg, prefab) => {
                    this.cloudNode = cc.instantiate(prefab)
                    cc.game.addPersistRootNode(this.cloudNode);
                    _ShowCloud(() => {
                        _LoadScene(callback);
                    });
                })
            }
        }else{
            _LoadScene(callback);
        }
    }
}

SceneMgr.GetPrevScene = function(){
    return SceneMgr.prevSceneName;
}