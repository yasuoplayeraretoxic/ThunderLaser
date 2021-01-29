'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

function update() { //更新數據
   modeConfig[modeFlag](); //更新modeFlag
   if (++time % 125 === 0) { //每隔一段時間加入一個雷射
      time = 0;
      laserList.push(new Laser(Object.assign(colorConfig[colorFlag], { //新增雷射
         speed: laserSpeed * scale,
         length: laserLength * scale,
      })))
   }; //每隔50單位時間加入一個雷射
   while (laserList.length >= 10) lasers.shift(); //當雷射超過10個移除第一個
   laserTouch(player, laserList); //偵測玩家碰撞
   laserList.forEach(e => e.update()); //更新每個雷射位置
}