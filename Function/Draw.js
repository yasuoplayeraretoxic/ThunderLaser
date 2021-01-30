function draw() { //繪圖
   backGround.draw(); //繪製背景
   insideBorder.draw(); //繪製邊界
   laserList.forEach(e => e.draw()); //繪製每個雷射
   textList.forEach(e => e.draw()); //繪製每個文字
   buttonList.forEach(e => e.draw()); //繪製每個按鈕
   colorTicketList.forEach(e => e.draw()); //繪製每個色票
   player.draw(patternConfig[patternFlag]); //繪製玩家
   outerBorder.draw(); //繪製外邊界
   requestAnimationFrame(draw); //再次要求重繪
}