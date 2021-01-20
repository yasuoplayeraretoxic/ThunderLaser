'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

//創建背景
let background = new Background(colorconfig[colorflag]);
//創建視窗外框
let outerborder = new Border(Object.assign(colorconfig[colorflag], {
   border_left: 0,
   border_top: 0,
   linewidth: 4 * scale,
}));
//創建邊界
let border = new Border(colorconfig[colorflag]);
//創建玩家
let player = new Player(Object.assign(colorconfig[colorflag], {
   size_out: player_sizeout * scale,
}));

init(); //初始化
requestAnimationFrame(draw); //重繪畫布
setInterval(update, 1000 / 120); //更新物件數據