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
 };

 GameConst.PREFAB_CTRL_ENUM = {
     CLOUD_NODE_CTRL: "CloudItem",
     TIPS_NODE_CTRL: "ctrl_tips_node",
     VILLAGE_BUILD_NODE_CTRL: "ctrl_village_build_node"
 }

 GameConst.BGM_ENU = {
    [GameConst.SCENE_ENUM.INIT_SCENE]    : "bgm_mainScene",
    [GameConst.SCENE_ENUM.LOTTERY_MAIN]  : "bgm_mainScene",
    [GameConst.SCENE_ENUM.VILLAGE_MAIN]  : "bgm_mainScene",
    [GameConst.SCENE_ENUM.VILLAGE_BUILD] : "bgm_mainScene",
 }