/**
 * 基础场景类
 */

cc.Class({
    extends: cc.Component,

    properties: {
        bgm : {
            default : null,
            type : cc.AudioClip,
        },
        currentSceneName : "",
        nextSceneName : "",
        isCloudIn : false,
        isCloudOff : false,
        cloudPrefab : cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.prevSceneName = "";
        this.currentScene  = cc.director.getScene();
        this.cloudNode = cc.instantiate(this.cloudPrefab);
    },

    start () {},

    update (dt) {},

    ShowCloudIn : function(callback){
        if(this.isCloudIn){            
            this.cloudNode.active = true
            this.cloudNode.parent = this.currentScene.getChildByName('Canvas');
            this.cloudNode.position = cc.v2(-Global.VISIBLE_SIZE.width/2, -Global.VISIBLE_SIZE.height/2);
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
            this.cloudNode.parent = this.currentScene.getChildByName('Canvas');
            this.cloudNode.position = cc.v2(-Global.VISIBLE_SIZE.width/2, -Global.VISIBLE_SIZE.height/2);
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
