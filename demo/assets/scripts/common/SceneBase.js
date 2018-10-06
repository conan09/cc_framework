/**
 * 基础场景类
 */

;window.SceneBase = cc.Class({
    extends: cc.Component,

    properties: {
        /**
         * 场景背景音乐
         */
        bgm : cc.AudioClip,
        /**
         * 场景名
         */
        sceneName : "",
        /**
         * 云prefab
         */
        cloudPrefab : cc.Prefab,
        /**
         * 是否播放云动画
         */
        isCloudIn : false,
        isCloudOut : false,
    },

    // LIFE-CYCLE CALLBACKS:

    ctor () {
        this.cloudNode = null;
    },

    onLoad () {
        SceneMgr.InitScene(this.sceneName);
        if(this.isCloudIn){
            if(this.cloudNode == null){
                this.cloudNode = cc.instantiate(this.cloudPrefab);
                cc.game.addPersistRootNode(this.cloudNode);
            }
            this.cloudNode.parent = this.node.getChildByName('Canvas');
            this.cloudNode.position = cc.v2(-375, -667);
            this.cloudNode.getComponent(GameConst.PREFAB_CTRL_ENUM.CLOUD_NODE_CTRL).showCloud(isShow, () => {
                this.cloudNode.active = false;
                this.cloudNode.parent = null;
                if(callback){
                    callback();
                }
            })
        }
        AudioMgr.PlayMusic(this.bgm);
    },

    onDestroy() {
    },

    start () {
    },

    update (dt) {},
});
