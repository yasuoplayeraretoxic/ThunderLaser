'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

class Border { //邊界類別
   constructor(args) {
      let def = {
         display: false,
         darkColor: '#FEC508', //邊界顏色
         lineWidth: 2 * scale, //邊界寬度
         borderLeft: 30 * scale, //左右邊界偏移
         borderTop: 30 * scale, //上下邊界偏移
         w: ww, //寬度
         h: wh //高度
      }
      Object.assign(this, def);
      Object.assign(this, args);
   }
   draw() { //繪圖動作
      if (this.display === true) {
         ctx.save();

         ctx.lineWidth = this.lineWidth;
         ctx.strokeStyle = this.darkColor;
         ctx.strokeRect(this.borderLeft, this.borderLeft, this.w - this.borderLeft * 2, this.h - this.borderTop * 2)

         ctx.restore();
      }
   }
}