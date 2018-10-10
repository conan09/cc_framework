/**
 * 初始化场景 进入游戏的第一个场景
 */

 require("../common/UserGlobal");

 let tSceneEnum = cc.Enum({
     None : 0,
     InitScene : 1,
     LotteryScene : 2,
 })

 let SceneName = [
     "None",
     "InitScene",
     "lottery_main",
 ]

cc.Class({
    extends: SceneBase,

    properties: {
        img_logo : cc.Sprite,
        prog_bar : cc.ProgressBar,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        SceneBase.prototype.onLoad.call(this);

        this.img_logo.node.opacity = 0;
        this.img_logo.node.scale = 4;
        this.img_logo.node.active = false;

        this.prog_bar.node.active = false;
        this.prog_bar.progress = 0;
    },

    start () {
        SceneBase.prototype.start.call(this);

        this.img_logo.node.active = true;
        this.img_logo.node.runAction(
            cc.spawn(
                cc.sequence(
                    cc.scaleTo(0.3, 0.7),
                    cc.scaleTo(0.3, 1.6),
                    cc.scaleTo(0.15, 1)
                ),
                cc.sequence(
                    cc.fadeIn(0.3),
                    cc.delayTime(0.5),
                    cc.callFunc(() => {
                        this.startLogin();
                    })
                )
            )
        )
    },

    startLogin : function(){
        this.prog_bar.node.active = true;
        this.prog_bar.progress = 0;
        //
        UIKit.PreLoadRes(UserConst.PRELOADLIST[UserConst.SCENE_ENUM.INIT_SCENE], (completedCount, totalCount, resList)=>{
            this.prog_bar.progress = completedCount / totalCount;
        }, (err, resList)=>{
            this.GotoScene("", SceneName[this.nextSceneName]);
        })
    },
});
