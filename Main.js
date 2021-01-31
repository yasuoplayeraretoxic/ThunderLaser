let nowColor = colorConfig[colorFlag];

//創建背景
let backGround = new Background();
//創建視窗外框
let outerBorder = new Border({
   borderLeft: 0,
   borderTop: 0,
   lineWidth: 6 * scale,
   display: true
});
//創建邊界
let insideBorder = new Border({
   display: true
});
//創建玩家
let player = new Player({
   r: playerR * scale,
   limitMode: 'outside'
});

modeConfig[modeFlag](); //初始化
requestAnimationFrame(draw); //重繪畫布
setInterval(update, 0); //更新物件數據