'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境
let text = new Text(merger(colorconfig[colorflag], {
   text: "monster",
   x: 30 * scale,
   y: 30 * scale
}));
//創建背景
let background = new Background(colorconfig[colorflag]);
//創建視窗外框
let outerborder = new Border(merger(colorconfig[colorflag], {
   border_left: scale,
   border_top: scale,
}));
//創建邊界
let border = new Border(merger(colorconfig[colorflag], {
   border_left: border_left * scale,
   border_top: border_top * scale,
}));
//創建玩家
let player = new Player(merger(colorconfig[colorflag], {
   left_limit: border_left * scale,
   top_limit: border_left * scale,
   size_out: player_sizeout * scale
}));

init(); //初始化
requestAnimationFrame(draw); //重繪畫布
setInterval(update, 1000 / 120); //更新物件數據