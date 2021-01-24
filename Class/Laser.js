'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

class Laser { //雷射類別
   constructor(args) {
      let def = {
         darkcolor: '#FEC400', //線顏色
         w: 90 * scale, //長度
         h: 2.5 * scale, //高度
         speed: 6.5, //移動係數
         hitboxH: 0, //碰撞箱高度
         hitboxW: 0, //碰撞箱寬度
      }
      Object.assign(def, args);
      Object.assign(this, def);
      Object.assign(this, [{ //隨機定址
         x: [-this.w, ww + this.w][rand(0, 1)],
         y: rand(-this.w, wh + this.w)
      }, {
         x: rand(-this.w, ww + this.w),
         y: [-this.w, wh + this.w][rand(0, 1)]
      }][rand(0, 1)]);
      this.deg = Math.atan2(player.y - this.y, player.x - this.x); //透過斜率取得朝向角度
      this.vx = Math.cos(this.deg); //設定單位向量
      this.vy = Math.sin(this.deg); //設定單位向量
      this.hitboxH = this.w * Math.sin(this.deg); //取得碰撞箱高度
      this.hitboxW = this.w * Math.cos(this.deg); //取得碰撞箱寬度
   }
   draw() { //繪圖動作
      laser_touch.save();

      laser_touch.translate(this.x, this.y); //移動標點
      laser_touch.rotate(this.deg); //轉向
      laser_touch.strokeRect(0, 0, this.w, this.h); //繪製碰撞箱

      laser_touch.restore();

      ctx.save();

      ctx.beginPath();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.deg);
      ctx.fillStyle = this.darkcolor;
      ctx.fillRect(0, 0, this.w, this.h);
      ctx.closePath();

      ctx.restore();
   }
   update() { //更新位置
      this.x += this.vx * this.speed; //單位向量乘上移動係數
      this.y += this.vy * this.speed; //單位向量乘上移動係數
   }
}