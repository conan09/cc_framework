/**
 * 基础场景类
 * 设计游戏内场景层次为2层
 * GotoScene/BackScene为用户交互方法，如按钮跳转
 * ShowCloudIn/Out为场景切入切出动画
 */

;window.SceneBase = cc.Class({
    extends: cc.Component,

    properties: {
        bgm : {
            default : null,
            type : cc.AudioClip,
        },
        prevSceneName : "",
        nextSceneName : "",
        isCloudIn : false,
        isCloudOff : false,
        cloudPrefab : cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.cloudNode = cc.instantiate(this.cloudPrefab);
        //
        if(this.bgm){
            AudioMgr.PlayMusic(this.bgm)
        }
        this.ShowCloudOut();
    },

    start () {},

    update (dt) {},

    GotoScene : function(event, sceneName){
        sceneName = sceneName || this.nextSceneName;
        this.ShowCloudIn(()=>{
            cc.director.loadScene(sceneName, () => {
                cc.log("Scene [ %s ] loaded success", sceneName);
                // this.currentSceneName = sceneName;
            })
        })
    },

    BackScene : function(){
        if(this.prevSceneName){
            let prevSceneName = this.prevSceneName;
            cc.director.loadScene(this.prevSceneName, () => {
                cc.log("Scene [ %s ] loaded success", sceneName);
                // this.currentSceneName = prevSceneName;
            })            
        }
    },

    ShowCloudIn : function(callback){
        if(this.isCloudIn){            
            this.cloudNode.active = true
            this.cloudNode.parent = cc.director.getScene().getChildByName('Canvas');
            this.cloudNode.position = cc.v2(-VISIBLE_SIZE.width/2, -VISIBLE_SIZE.height/2);
            this.cloudNode.getComponent(UserConst.PREFAB_CTRL_ENUM.CLOUD_NODE_CTRL).showCloud(UserConst.CLOUD_STATUS.CLUSTER, () => {
                this.cloudNode.active = false;
                this.cloudNode.parent = null;
                if(callback){
                    callback();
                }
            })
        }
    },

    ShowCloudOut : function(callback){
        if(this.isCloudOut){            
            this.cloudNode.active = true
            this.cloudNode.parent = cc.director.getScene().getChildByName('Canvas');
            this.cloudNode.position = cc.v2(-VISIBLE_SIZE.width/2, -VISIBLE_SIZE.height/2);
            this.cloudNode.getComponent(UserConst.PREFAB_CTRL_ENUM.CLOUD_NODE_CTRL).showCloud(UserConst.CLOUD_STATUS.SPREAD, () => {
                this.cloudNode.active = false;
                this.cloudNode.parent = null;
                if(callback){
                    callback();
                }
            })
        }
    },
});
