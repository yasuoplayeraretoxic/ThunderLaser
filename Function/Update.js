function update() { //更新數據
   modeConfig[modeFlag]; //更新modeFlag
   if (++time % 125 === 0) { //每隔一段時間加入一個雷射
      time = 0;
      laserList.push(new Laser(Object.assign(colorConfig[colorFlag], { //新增雷射
         speed: laserSpeed * scale,
         length: laserLength * scale,
      })))
   }; //每隔50單位時間加入一個雷射
   while (laserList.length >= 10) laserList.shift(); //當雷射超過10個移除第一個
   laserList.forEach(e => { //雷射碰撞
      if (e.ColliDetect(player.x, player.y, player.sizeOut) === true) { //如果有碰撞則初始化
         init();
      }
   });
   laserList.forEach(e => e.update()); //更新每個雷射位置
}