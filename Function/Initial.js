function init() { // 初始化
   laserTime = 0; // 雷射時間重置
   bigLaserTime = 0; //大雷射時間重置
   laserList = []; // 清空雷射陣列
   bigLaserList = []//清空大雷射陣列
   player.limitMode = 'outside'; // 玩家移動模式改為外框
   insideBorder.display = false; // 隱藏內框
   colorTicketList.forEach(e => e.display = false); // 隱藏所有色票
}