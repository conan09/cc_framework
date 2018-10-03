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

    onLoad () {
        this.animDurration = 0.5;
    },

    /**
     * @param {Number} status =CLUSTER，云切入，=SPREAD，云切出
     * @param {function} callBack 动画结束后的回调
     */
    showCloud: function(status, callBack){
        let anim_time = this.animDurration;
        if(GameConst.CLOUD_STATUS.SPREAD == status){
            this.img_cloud_up.node.position = cc.v2(this.img_cloud_up.node.x, GameConst.DESIGN_SIZE.height - this.img_cloud_up.node.height);
            this.img_cloud_down.node.position =cc.v2(this.img_cloud_down.node.x, this.img_cloud_down.node.height);
            this.img_cloud_left.node.position = cc.v2(this.img_cloud_left.node.height, this.img_cloud_left.node.y);
            this.img_cloud_right.node.position = cc.v2(GameConst.DESIGN_SIZE.width - this.img_cloud_right.node.height, this.img_cloud_right.node.y);

            this.img_cloud_up.node.runAction(cc.moveTo(anim_time, this.img_cloud_up.node.x, GameConst.DESIGN_SIZE.height));
            this.img_cloud_down.node.runAction(cc.moveTo(anim_time, this.img_cloud_down.node.x, 0));
            this.img_cloud_left.node.runAction(cc.moveTo(anim_time, 0, this.img_cloud_left.node.y));
            this.img_cloud_right.node.runAction(cc.sequence(
                cc.moveTo(anim_time, GameConst.DESIGN_SIZE.width, this.img_cloud_right.node.y),
                cc.callFunc(()=>{
                    if (callBack) {
                        callBack();
                    }
                }),
            ));   
        } else {
            this.img_cloud_up.node.position = cc.v2(this.img_cloud_up.node.x, GameConst.DESIGN_SIZE.height);
            this.img_cloud_down.node.position = cc.v2(this.img_cloud_down.node.x, 0);
            this.img_cloud_left.node.position = cc.v2(0, this.img_cloud_left.node.y);
            this.img_cloud_right.node.position = cc.v2(GameConst.DESIGN_SIZE.width, this.img_cloud_right.node.y);

            this.img_cloud_up.node.runAction(cc.moveTo(anim_time, this.img_cloud_up.node.x, GameConst.DESIGN_SIZE.height - this.img_cloud_up.node.height));
            this.img_cloud_down.node.runAction(cc.moveTo(anim_time, this.img_cloud_down.node.x, this.img_cloud_down.node.height));
            this.img_cloud_left.node.runAction(cc.moveTo(anim_time, this.img_cloud_left.node.height, this.img_cloud_left.node.y));
            this.img_cloud_right.node.runAction(cc.sequence(
                cc.moveTo(anim_time, GameConst.DESIGN_SIZE.width - this.img_cloud_right.node.height, this.img_cloud_right.node.y),
                cc.callFunc(()=>{
                    if (callBack) {
                        callBack();
                    }
                }),
            )); 
        }
    },
});
