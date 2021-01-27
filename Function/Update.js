'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

function update() { //更新數據
   if (++time % 125 === 0) {
      time = 0;
      lasers.push(new Laser(Object.assign(colorConfig[colorFlag], {
         speed: laserSpeed * scale,
         length: laserLength * scale,
      })))
   }; //每隔50單位時間加入一個雷射
   while (lasers.length >= 10) lasers.shift(); //當雷射超過10個移除第一個
   lasers.forEach(e => e.update()); //更新每個雷射位置
}