;window.Global = window.Global || {};

//按钮全局添加音效事件
(function(){
    cc.Component.EventHandler._emitEvents = cc.Component.EventHandler.emitEvents;
    cc.Component.EventHandler.emitEvents = function (clickEvents, event) {

        if (event instanceof cc.Event.EventTouch) {
            if (event.type == "touchend") {
                AudioMgr.PlaySound(GameConst.UISOUND.TOUCH_SFX);
            }
        }
        cc.Component.EventHandler._emitEvents.apply(this, arguments);
    };    
}());

/**
 * 设计尺寸
 */
Global.DESIGN_SIZE = cc.view.getDesignResolutionSize();

/**
 * 可视区域尺寸
 */
Global.VISIBLE_SIZE = cc.view.getVisibleSize();