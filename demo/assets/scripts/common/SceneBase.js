/**
 * 基础场景类
 */

;window.SceneBase = cc.Class({
    extends: cc.Component,

    properties: {
        bgm : cc.AudioClip,
        sceneName : "",
        isCloudIn : false,
        isCloudOut : false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.prevSceneName = "";
        SceneMgr.InitScene(this.sceneName);
    },

    start () {

    },

    update (dt) {},
});
