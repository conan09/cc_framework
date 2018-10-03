;window.EventMgr = window.EventMgr || {};

let nameHandlerMap = {}

let _getHandlerMap = function(eventName){
    let list = nameHandlerMap[eventName];
    if(list){
        list = {};
        nameHandlerMap[eventName] = list;
    }
    return list;
}

EventMgr.HasListener = function(eventName, handler){
    return _getHandlerMap(eventName)[handler];
}

EventMgr.AddListener = function(eventName, handler, self){
    _getHandlerMap(eventName)[handler] = self || true;
}

EventMgr.RemoveListener = function(eventName, handler){
    _getHandlerMap(eventName)[handler] = null
}