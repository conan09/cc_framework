
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
        Utils.ShowMsgBox("this is test");
    }
});
