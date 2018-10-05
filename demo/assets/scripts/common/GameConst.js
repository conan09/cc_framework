/**
 * 游戏中用到的常量
 */

 ;window.GameConst = window.GameConst || {};

 GameConst.SCENE_ENUM = {
     INIT_SCENE     : "InitScene",
     LOTTERY_MAIN   : "lottery_main",
     VILLAGE_MAIN   : "village_main",
     VILLAGE_BUILD  : "village_build",
 };

 GameConst.PREFAB_ENUM = {
     CLOUD_NODE         : "prefabs/pre_cloud_node",
     TIPS_NODE          : "prefabs/pre_tips_node",
     VILLAGE_BUILD_NODE : "prefabs/pre_village_build",
     MSG_BOX            : "prefabs/messageBox",
 };

 GameConst.PREFAB_CTRL_ENUM = {
     CLOUD_NODE_CTRL: "CloudItem",
     TIPS_NODE_CTRL: "ctrl_tips_node",
     VILLAGE_BUILD_NODE_CTRL: "ctrl_village_build_node"
 }

 GameConst.BGM_ENUM = {
    [GameConst.SCENE_ENUM.INIT_SCENE]    : "bgm_mainScene",
    [GameConst.SCENE_ENUM.LOTTERY_MAIN]  : "bgm_mainScene",
    [GameConst.SCENE_ENUM.VILLAGE_MAIN]  : "bgm_mainScene",
    [GameConst.SCENE_ENUM.VILLAGE_BUILD] : "bgm_mainScene",
 }

 /////////////////////////////////////////////////////////////////////////////////

 GameConst.CLOUD_STATUS = {
     CLUSTER : 0,   // 云聚集
     SPREAD  : 1,   // 云散开
 }

 GameConst.DESIGN_SIZE = cc.size(750, 1134)


 // ui音效
 GameConst.UISOUND = {
     TOUCH_SFX = "ding",
 }

 /////////////////////////////////////////////////////////////////////////////////

 GameConst.PRELOADLIST = {};
 GameConst.PRELOADLIST[GameConst.SCENE_ENUM.INIT_SCENE] = [
    GameConst.PREFAB_ENUM.CLOUD_NODE,
    GameConst.PREFAB_ENUM.TIPS_NODE,
    GameConst.PREFAB_ENUM.VILLAGE_BUILD_NODE,

    //scene
    // GameConst.SCENE_TYPE.LOGO_SHOW,
    GameConst.SCENE_ENUM.LOTTERY_MAIN,
    GameConst.SCENE_ENUM.VILLAGE_MAIN,
 ];

 GameConst.PRELOADLIST[GameConst.SCENE_ENUM.LOTTERY_MAIN] = [
 ];

 GameConst.PRELOADLIST[GameConst.SCENE_ENUM.VILLAGE_MAIN] = [
 ];