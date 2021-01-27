'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

class Background { //背景類別
   constructor(args) {
      let def = {
         lightColor: '#FDE17C', //背景顏色
      }
      Object.assign(def, args);
      Object.assign(this, def);
   }
   draw() { //繪圖動作
      ctx.fillStyle = this.lightColor;
      ctx.fillRect(0, 0, ww, wh);
   }
}