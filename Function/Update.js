function update() { // 更新數據
   if (modeFlag=="mode4") { //如果處於遊戲中
      laserList.forEach(e => e.update()); // 更新每個雷射位
      bigLaserList.forEach(e => e.update()); // 更新每個雷射位
      gamingScoreCounter.text = `SCORE：${scoreCount}`; // 變更score的分數
      menuOrAgainScoreCounter.text = `SCORE：${scoreCount}`; //變更score的分數
      if (++laserTime % laserFrequence === 0) { // 每隔一段時間加入一個雷射
         scoreCount += 1; //分數+1
         laserTime = 0; // 雷射計時器間重置
         laserList.push(new Laser({ // 新增雷射
            speed: laserSpeed * scale,
            length: laserLength * scale,
         }));
      };
      if (++bigLaserTime % bigLaserFrequence === 0) { // 每隔一段時間加入一個大雷射
         scoreCount += 1; //分數+1
         bigLaserTime = 0; // 雷射計時器間重置
         bigLaserList.push(new BigLaser()); // 新增雷射        
      };
      laserOutScreenFilter(); // 刪除超出螢幕的雷射
      bigLaserTimeUpFilter(); //刪除時間到期的大雷射
      laserList.forEach(e => e.colliDetect(player.x, player.y, player.r)); // 檢查雷射碰撞
      bigLaserList.forEach(e => e.colliDetect(player.x, player.y, player.r)); // 檢查雷射碰撞
   };
}