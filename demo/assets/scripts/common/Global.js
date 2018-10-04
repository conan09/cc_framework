;window.Global = window.Global || {};

//按钮全局添加音效事件
(function(){
    cc.Component.EventHandler._emitEvents = cc.Component.EventHandler.emitEvents;
    cc.Component.EventHandler.emitEvents = function (clickEvents, event) {

        if (event instanceof cc.Event.EventTouch) {
            if (event.type == "touchend") {
                AudioMgr.PlaySound("ding");
            }
        }
        cc.Component.EventHandler._emitEvents.apply(this, arguments);
    };    
}());