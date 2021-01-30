function init() { //初始化
   laserSwitch = false;
   player.limitMode = 'outside';
   insideBorder.display = false;
   textList.forEach(e => e.display = false);
   buttonList.forEach(e => e.display = false);
}