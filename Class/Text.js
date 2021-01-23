'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

class Text { //文字類別
   constructor(args) {
      let def = {
         display: false,
         x: 30 * scale, //X位置
         y: 30 * scale, //Y位置
         darkcolor: '#FEC508', //字元顏色
         font: `${args.fontsize}px Virgo`, //設定字元大小及字體
         text: '', //輸入文字內容
      }
      Object.assign(def, args);
      Object.assign(this, def);
   }
   draw() { //繪圖動作
      if (this.display === true) {
         ctx.fillStyle = this.darkcolor;
         ctx.font = this.font;
         this.w = ctx.measureText(this.text).width; //font已輸入至ctx 以font的相關訊息取得字寬
         this.h = parseInt(this.font.match(/\d+/)); //正規表達式 從font取得字高
         ctx.save();
         ctx.translate(ww / 2, wh / 2);
         ctx.fillText(this.text, this.x - this.w / 2, this.y - this.h / 2 * 0.8);
         ctx.restore();
      }
   }
}