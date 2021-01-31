function init() { //初始化
   scoreCount = 100; //分數重置
   time = 0; //時間重置
   laserSwitch = false; //關閉雷射
   laserList = []; //清空雷射陣列
   player.limitMode = 'outside'; //玩家移動模式改為外框
   insideBorder.display = false; //隱藏內框
   textList.forEach(e => e.display = false); //隱藏所有文字
   buttonList.forEach(e => e.display = false); //隱藏所有按鈕
   colorTicketList.forEach(e => e.display = false); //隱藏所有色票
}