'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

function draw() { //繪圖
   changemode();
   background.draw(); //繪製背景
   insideborder.draw(); //繪製邊界
   lasers.forEach(e => e.draw()); //繪製每個雷射
   textlist.forEach(e => e.draw());
   player.draw(patternconfig[patternflag]); //繪製玩家
   outerborder.draw(); //繪製外邊界
   player.touch(); //偵測玩家碰撞
   requestAnimationFrame(draw); //再次要求重繪
}