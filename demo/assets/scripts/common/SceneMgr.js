/**
 * 场景管理器
 */

 ;window.SceneMgr = window.SceneMgr || {
    currentScene : null,
    prevSceneName : "",
 };

SceneMgr.ShowScene = function(sceneName, callback){
    if(this.currentScene.sceneName == sceneName){
        cc.log("Scene [ %s ] exist", sceneName);
        return;
    }else{
        cc.director.loadScene(sceneName, () => {
            cc.log("Scene [ %s ] loaded success", sceneName);
            this.prevSceneName = this.currentScene.sceneName;
            this.currentScene.sceneName = sceneName;
        })
    }
}