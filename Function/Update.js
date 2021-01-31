function update() { //更新數據
   laserList.forEach(e => e.update()); //更新每個雷射位
   if (laserSwitch === true) {
      textList[19].text = `SCORE：${scoreCount}`; //變更score的分數
      if (++time % laserFrequence === 0) { //每隔一段時間加入一個雷射
         time = 0; //時間重置
         scoreCount = scoreCount + 1; //時間單位加一
         laserList.push(new Laser({ //新增雷射
            speed: laserSpeed * scale,
            length: laserLength * scale,
         }))
      };
   };
   while (laserList.length >= 10) laserList.shift(); //當雷射超過10個移除第一個
   laserList.forEach(e => e.ColliDetect(player.x, player.y, player.r)); //檢查雷射碰撞
}