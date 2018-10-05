/**
 * 消息提示框
 */
cc.Class({
    extends: cc.Component,

    properties: {
        lbl_msg : {
            default : null,
            type : cc.Label,
        },
        lbl_warn : {
            default : null,
            type : cc.Label,
        },
        btn_close : {
            default : null,
            type : cc.Button,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.getComponent(cc.Animation).play("UIShow");
    },

    start () {

    },

    onDestroy() {
    },

    SetMsg : function(msg, warn){
        this.lbl_msg.string = msg;
        this.lbl_warn.string = warn || "";
    },

    CloseMsgBox : function(){
        this.node.getComponent(cc.Animation).play("UIHide");
    },

    OnAnimCompleted : function(){
        this.node.destroy();
    },
});
