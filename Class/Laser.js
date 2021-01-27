'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

class Laser { //雷射類別
   constructor(args) {
      let def = {
         darkcolor: '#FEC400', //線顏色
         length: 90 * scale, //長度
         linewidth: 2.5 * scale, //高度
         speed: 6.5, //移動係數
      }
      Object.assign(def, args);
      Object.assign(this, def);
      Object.assign(this, [{ //隨機定址
         t1x: [-this.length, ww + this.length][rand(0, 1)],
         t1y: rand(-this.length, wh + this.length)
      }, {
         t1x: rand(-this.length, ww + this.length),
         t1y: [-this.length, wh + this.length][rand(0, 1)]
      }][rand(0, 1)]);
      //x,y = t1
      this.t2x = this.t1x + Math.cos(this.deg) * this.length; //設定t2點
      this.t2y = this.t1y + Math.sin(this.deg) * this.length; //設定t2點

      this.deg = Math.atan2(player.y - this.t1y, player.x - this.t1x); //透過斜率取得朝向角度
      this.vx = Math.cos(this.deg); //設定單位向量
      this.vy = Math.sin(this.deg); //設定單位向量
   }
   draw() { //繪圖動作
      ctx.save();

      ctx.translate(this.t1x, this.t1y);
      ctx.rotate(this.deg);

      ctx.lineWidth = this.linewidth;
      ctx.beginPath();
      ctx.lineTo(0, 0);
      ctx.lineTo(this.length, 0);
      ctx.strokeStyle = this.darkcolor;
      ctx.stroke();
      ctx.closePath();

      if (patternflag === 'pattern3' && colorflag === 'color2') {
         ctx.lineWidth = this.linewidth * 2;
         ctx.beginPath();
         ctx.moveTo(0, 0);
         ctx.lineTo(-this.length / 15, this.linewidth);
         ctx.lineTo(this.length / 4, this.linewidth);
         ctx.lineTo(this.length / 3.5, 0);
         ctx.lineTo(this.length / 4, -this.linewidth);
         ctx.lineTo(-this.length / 15, -this.linewidth);
         ctx.fillStyle = this.darkcolor;
         ctx.fill();
         ctx.closePath();

         ctx.beginPath();
         ctx.lineTo(this.length * 1.1, 0);
         ctx.lineTo(this.length * 0.96, this.linewidth * 2);
         ctx.lineTo(this.length * 0.96, -this.linewidth * 2);
         ctx.fillStyle = this.darkcolor;
         ctx.fill();
         ctx.closePath();

      };

      ctx.restore();
   }
   update() { //更新位置
      this.t1x += this.vx * this.speed; //單位向量乘上移動係數
      this.t1y += this.vy * this.speed; //單位向量乘上移動係數
      this.t2x = this.t1x + Math.cos(this.deg) * this.length;
      this.t2y = this.t1y + Math.sin(this.deg) * this.length;
   }
   colliDetect(x, y, r) { //碰撞檢測
      let t1leftright = 0; //偵測t1左右
      let t2leftright = 0; //偵測t2左右
      if ((y - this.t1y) * (this.t1y - this.t2y) - (x - this.t1x) * (this.t2x - this.t1x) > 0) {
         t1leftright = 1;
      } else {
         t1leftright = -1;
      }
      if ((y - this.t2y) * (this.t1y - this.t2y) - (x - this.t2x) * (this.t2x - this.t1x) > 0) {
         t2leftright = 1;
      } else {
         t2leftright = -1;
      }
      let linebetween = false; //偵測是否在t1t2之間
      if (t1leftright * t2leftright === -1) {
         linebetween = true;
      }
      let collision = false;
      if (linebetween === true) {
         if (Math.abs((y - this.t1y) * (this.t1x - this.t2x) - (x - this.t1x) * (this.t1y - this.t2y)) / Math.sqrt(Math.pow(this.t1x - this.t2x, 2) + Math.pow(this.t1y - this.t2y, 2)) <= r) {
            collision = true;
         }
      } else {
         if (Math.sqrt(Math.pow(x - this.t1x, 2) + Math.pow(y - this.t1y, 2)) <= r || Math.sqrt(Math.pow(x - this.t2x, 2) + Math.pow(y - this.t2y, 2)) <= r) {
            collision = true;
         }
      }
      console.log(linebetween)
      return collision //回傳是否碰撞到
   }
}