'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

class Button { //文字類別
   constructor(args) {
      let def = {
         display: false, //顯示開關
         x: ww / 2, //X位置
         y: wh / 2, //Y位置
         darkColor: '#FEC508', //字元顏色
         font: `${args.fontSize}px Virgo`, //設定字元大小及字體
         text: '', //輸入文字內容
         changeFlag: 'mode', //選擇更改的Flag種類 1 color 2 pattern 3 mode
         colorFlag: 'color1', //回應的顏色旗標
         patternFlag: 'pattern1', //回應的圖案旗標
         modeFlag: 'mode1', //回應的模式旗標
      }
      Object.assign(def, args);
      Object.assign(this, def);
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
   }
   draw() { //繪圖動作
      if (this.display === true) {

         ctx.save();

         ctx.fillStyle = this.darkColor;
         ctx.font = this.font;
         ctx.fillText(this.text, this.x, this.y);

         ctx.restore();
      }
   }
   ColliDetect(x, y) { //線性規劃檢查
      let topLineLeftRight = ((y - this.t1y) * (this.t1x - this.t2x) - (x - this.t1x) * (this.t1y - this.t2y) > 0 ? 1 : -1);
      let rightLineLeftRight = ((y - this.t2y) * (this.t2x - this.t3x) - (x - this.t2x) * (this.t2y - this.t3y) > 0 ? 1 : -1);
      let botLineLeftRight = (-(y - this.t3y) * (this.t3x - this.t4x) + (x - this.t3x) * (this.t3y - this.t4y) > 0 ? 1 : -1);
      let leftLineLeftRight = (-(y - this.t4y) * (this.t4x - this.t1x) + (x - this.t4x) * (this.t4y - this.t1y) > 0 ? 1 : -1);
      if (topLineLeftRight * botLineLeftRight === -1 && rightLineLeftRight * leftLineLeftRight === -1) { //如果有碰撞到按鈕回傳Flag
         switch (this.changeFlag) {
            case 'color':
               colorFlag = this.colorFlag;
               break;
            case 'pattern':
               patternFlag = this.patternFlag;
               break;
            case 'mode':
               modeFlag = this.modeFlag;

               break;
         }
      }
   }
}