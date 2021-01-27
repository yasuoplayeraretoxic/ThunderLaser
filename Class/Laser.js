'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

class Laser { //雷射類別
   constructor(args) {
      let def = {
         darkColor: '#FEC400', //線顏色
         length: 90 * scale, //長度
         lineWidth: 2.5 * scale, //高度
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

      ctx.lineWidth = this.lineWidth;
      ctx.beginPath();
      ctx.lineTo(0, 0);
      ctx.lineTo(this.length, 0);
      ctx.strokeStyle = this.darkColor;
      ctx.stroke();
      ctx.closePath();

      if (patternFlag === 'pattern3' && colorFlag === 'color2') {
         ctx.lineWidth = this.lineWidth * 2;
         ctx.beginPath();
         ctx.moveTo(0, 0);
         ctx.lineTo(-this.length / 15, this.lineWidth);
         ctx.lineTo(this.length / 4, this.lineWidth);
         ctx.lineTo(this.length / 3.5, 0);
         ctx.lineTo(this.length / 4, -this.lineWidth);
         ctx.lineTo(-this.length / 15, -this.lineWidth);
         ctx.fillStyle = this.darkColor;
         ctx.fill();
         ctx.closePath();

         ctx.beginPath();
         ctx.lineTo(this.length * 1.1, 0);
         ctx.lineTo(this.length * 0.96, this.lineWidth * 2);
         ctx.lineTo(this.length * 0.96, -this.lineWidth * 2);
         ctx.fillStyle = this.darkColor;
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
      let t1LeftRight = ((y - this.t1y) * (this.t1y - this.t2y) - (x - this.t1x) * (this.t2x - this.t1x) > 0 ? 1 : -1); //偵測t1左右
      let t2LeftRight = ((y - this.t2y) * (this.t1y - this.t2y) - (x - this.t2x) * (this.t2x - this.t1x) > 0 ? 1 : -1); //偵測t2左右
      let lineBetween = t1LeftRight * t2LeftRight === -1; //偵測是否在t1t2之間
      let collision = false;
      if (lineBetween) {
         if (Math.abs((y - this.t1y) * (this.t1x - this.t2x) - (x - this.t1x) * (this.t1y - this.t2y)) / Math.sqrt(Math.pow(this.t1x - this.t2x, 2) + Math.pow(this.t1y - this.t2y, 2)) <= r) {
            collision = true;
         }
      } else {
         if (Math.sqrt(Math.pow(x - this.t1x, 2) + Math.pow(y - this.t1y, 2)) <= r || Math.sqrt(Math.pow(x - this.t2x, 2) + Math.pow(y - this.t2y, 2)) <= r) {
            collision = true;
         }
      }
      return collision; //回傳是否碰撞到
   }
}