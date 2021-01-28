'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

class Button { //文字類別
   constructor(args) {
      let def = {
         display: false,
         x: ww / 2, //X位置
         y: wh / 2, //Y位置
         darkColor: '#FEC508', //字元顏色
         font: `${args.fontSize}px Virgo`, //設定字元大小及字體
         text: '', //輸入文字內容
         modeFlag: 0,
      }
      Object.assign(def, args);
      Object.assign(this, def);

   }
   draw() { //繪圖動作
      if (this.display === true) {

         ctx.font = this.font;
         this.w = ctx.measureText(this.text).width;
         this.h = parseInt(this.font.match(/\d+/));

         this.t1x = this.x;
         this.t1y = this.y;
         this.t2x = this.x + this.w;
         this.t2y = this.y
         this.t3x = this.x + this.w;
         this.t3y = this.y + this.h * 0.8;
         this.t4x = this.x;
         this.t4y = this.y + this.h * 0.8;

         ctx.save();

         ctx.beginPath();
         ctx.strokeStyle = 'red'
         ctx.arc(this.t1x, this.t1y, 50, 0, Math.PI * 2);
         ctx.stroke();
         ctx.closePath();

         ctx.beginPath();
         ctx.strokeStyle = 'blue'
         ctx.arc(this.t2x, this.t2y, 50, 0, Math.PI * 2);
         ctx.stroke();
         ctx.closePath();

         ctx.beginPath();
         ctx.strokeStyle = 'black'
         ctx.arc(this.t3x, this.t3y, 50, 0, Math.PI * 2);
         ctx.stroke();
         ctx.closePath();

         ctx.beginPath();
         ctx.strokeStyle = 'green'
         ctx.arc(this.t4x, this.t4y, 50, 0, Math.PI * 2);
         ctx.stroke();
         ctx.closePath();



         ctx.fillStyle = this.darkColor;
         ctx.font = this.font;
         ctx.fillText(this.text, this.x, this.y);
         ctx.strokeStyle = this.darkColor;
         ctx.strokeRect(this.x, this.y, this.w, this.h * 0.8);

         ctx.restore();
      }
   }
}