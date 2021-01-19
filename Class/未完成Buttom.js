'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

class Border { //邊界類別
   constructor(args) {
      let def = {
         darkcolor: '#FEC508', //邊界顏色
         lineWidth: 2 * scale, //邊界寬度
         border_left: 30 * scale, //邊界偏移
         w: ww, //寬度
         h: wh //高度
      }
      Object.assign(def, args);
      Object.assign(this, def);
   }
   draw() { //繪圖動作
      ctx.lineWidth = this.lineWidth;
      ctx.strokeStyle = this.darkcolor;
      ctx.strokeRect(this.border_left, this.border_left, this.w - this.border_left * 2, this.h - this.border_left * 2)
   }
}