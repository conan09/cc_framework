/**
 * 通用切换场景云动画
 */

;cc.Class({
    extends: cc.Component,

    properties: {
        img_cloud_up: cc.Sprite,
        img_cloud_down: cc.Sprite,
        img_cloud_left: cc.Sprite,
        img_cloud_right: cc.Sprite,

        btn_in: cc.Button,
        btn_out: cc.Button,
    },

    ctor () {
        this.status = null;
        this.callback = null;
    },

    onLoad () {
        this.animDurration = 0.5;
        this.node.getComponent(cc.Animation).on('finished', this.onFinished, this);
    },

    onDestroy () {
        this.node.getComponent(cc.Animation).off('finished', this.onFinished, this);
    },

    onFinished () {
        if(this.callback){
            this.callback();
        }
    },

    /**
     * @param {Number} status =CLUSTER，云切入，=SPREAD，云切出
     * @param {function} callback 动画结束后的回调
     */
    showCloud: function(status, callback){
        // let anim_time = this.animDurration;
        this.callback = callback;
        if(UserConst.CLOUD_STATUS.SPREAD == status){
            this.node.getComponent(cc.Animation).play("CloudOut");
        } else {
            this.node.getComponent(cc.Animation).play("CloudIn");
        }
    },
});
