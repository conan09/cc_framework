

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

        btn_village : cc.Button,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    onBtnClickVillage : function(event, param){
        cc.log("btn click -------------->");
        // Utils.ShowMsgBox("this is test");
        this.BackScene();
    }
});
