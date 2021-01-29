//創建背景
let backGround = new Background(colorConfig[colorFlag]);
//創建視窗外框
let outerBorder = new Border(Object.assign({}, colorConfig[colorFlag], {
   borderLeft: 0,
   borderTop: 0,
   lineWidth: 4 * scale,
   display: true
}));
//創建邊界
let insideBorder = new Border(Object.assign({}, colorConfig[colorFlag], {
   display: true
}));
//創建玩家
let player = new Player(Object.assign({}, colorConfig[colorFlag], {
   sizeOut: playerSizeOut * scale,
   limitMode: 'outside'
}));

init(); //初始化
requestAnimationFrame(draw); //重繪畫布
setInterval(update, 0); //更新物件數據