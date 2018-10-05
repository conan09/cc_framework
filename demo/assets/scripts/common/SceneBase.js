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
        sceneName : {
            default : "",
            type : cc.String,
        },
        showCloud : {
            default : false,
            type : cc.Boolean,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.prevSceneName = "";
    },

    start () {

    },

    // update (dt) {},
});
