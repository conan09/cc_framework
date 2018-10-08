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
        isCloudOn : false,
        isCloudOff : false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.prevSceneName = "";
        this.currentSceneName = "";
        this.currentScene  = this;
    },

    start () {},

    update (dt) {},
});
