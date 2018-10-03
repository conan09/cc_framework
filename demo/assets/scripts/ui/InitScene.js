/**
 * 初始化场景 进入游戏的第一个场景
 */

 require("Common");

cc.Class({
    extends: cc.Component,

    properties: {
        img_logo : cc.Sprite,
        prog_bar : cc.ProgressBar,
    },

    // 构造函数
    ctor : function() {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.img_logo.node.opacity = 0;
        this.img_logo.node.scale = 4;
        this.img_logo.node.active = false;

        this.prog_bar.node.active = false;
        this.prog_bar.progress = 0;
        //
        SceneMgr.InitScene(GameConst.SCENE_ENUM.INIT_SCENE);
    },

    start () {
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
        SceneMgr.PreLoadRes((completedCount, totalCount, resList)=>{
            this.prog_bar.progress = completedCount / totalCount;
        }, (err, resList)=>{
            SceneMgr.EnterScene(GameConst.SCENE_ENUM.LOTTERY_MAIN, GameConst.CLOUD_STATUS.CLUSTER);
        })
    },
});
