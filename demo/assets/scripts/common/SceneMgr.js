/**
 * 场景管理器
 */

 ;window.SceneMgr = window.SceneMgr || {
    currentScene : null,
    prevSceneName : "",
    cloudNode : null,
 };

 SceneMgr._ShowCloud = function(isShow, callback){
    this.cloudNode.active = true
    this.cloudNode.parent = SceneMgr.currentScene.getChildByName('Canvas');
    this.cloudNode.position = cc.v2(-375, -667);
    this.cloudNode.getComponent(GameConst.PREFAB_CTRL_ENUM.CLOUD_NODE_CTRL).showCloud(isShow, () => {
        this.cloudNode.active = false;
        this.cloudNode.parent = null;
        if(callback){
            callback();
        }
    })
 }

 SceneMgr._LoadScene = function(sceneName, callback){
    cc.director.loadScene(sceneName, () => {
        cc.log("Scene [ %s ] loaded success", sceneName);
        this.prevSceneName = this.currentScene.sceneName;
        this.InitScene(sceneName);
        AudioMgr.PlayMusic(GameConst.BGM_ENU[sceneName]);
        if(callback){
            callback();
        }
    })
 }

 SceneMgr.InitScene = function(sceneName){
     this.currentScene = cc.director.getScene();
     this.currentScene.sceneName = sceneName;
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
        if(showCloud == GameConst.CLOUD_STATUS.SPREAD || showCloud == GameConst.CLOUD_STATUS.CLUSTER){
            if(this.cloudNode == null){
                cc.loader.loadRes(GameConst.PREFAB_ENUM.CLOUD_NODE, cc.Prefab, (errMsg, prefab) => {
                    this.cloudNode = cc.instantiate(prefab)
                    cc.game.addPersistRootNode(this.cloudNode);
                    SceneMgr._ShowCloud(showCloud, () => {
                        SceneMgr._LoadScene(sceneName, callback);
                    });
                })
            }else{
                SceneMgr._ShowCloud(showCloud, () => {
                    SceneMgr._LoadScene(sceneName, callback);
                });
            }
        }else{
            SceneMgr._LoadScene(sceneName, callback);
        }
    }
}

/**
 * @param {function} prodFunc 当前完成的进度
 * @param {function} completeFunc 预加载结束回调
 */
SceneMgr.PreLoadRes = function(prodFunc, completeFunc){
    let list = GameConst.PRELOADLIST[this.currentScene.sceneName];
    cc.loader.loadResArray(list, (completedCount, totalCount, resList) => {
       if(prodFunc){
           prodFunc(completedCount, totalCount, resList);
       }
    }, (err, resList) => {
       if(completeFunc){
           completeFunc(err, resList);
       }
    })
}

SceneMgr.GetCurrentScene = function(){
    return SceneMgr.currentScene;
}

SceneMgr.GetPrevSceneName = function(){
    return SceneMgr.prevSceneName;
}