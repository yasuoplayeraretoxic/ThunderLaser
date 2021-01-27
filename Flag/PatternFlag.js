'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

// pattern1 = 圓形
// pattern2 = 星星
// pattern3 = 愛心
// pattern4 = 六角形

let patternFlag = 'pattern3'; //玩家圖標選擇設定

let patternConfig = {
   pattern1: function pattern1(Player) {
      ctx.beginPath();
      ctx.arc(Player.x, Player.y, Player.sizeOut * 13 / 22, 0, Math.PI * 2);
      ctx.stroke();
      ctx.closePath();
   },
   pattern2: function pattern2(Player) {
      ctx.save();

      ctx.translate(Player.x, Player.y);
      ctx.lineWidth = Player.lineWidth;
      ctx.beginPath();
      for (let i = 1; i <= 5; i++) {
         ctx.lineTo(Math.cos((18 + 72 * i) / 180 * Math.PI) * (Player.sizeOut * 18 / 22), -Math.sin((18 + 72 * i) / 180 * Math.PI) * (Player.sizeOut * 18 / 22));
         ctx.lineTo(Math.cos((54 + 72 * i) / 180 * Math.PI) * (Player.sizeOut * 18 / 22) / 2, -Math.sin((54 + 72 * i) / 180 * Math.PI) * (Player.sizeOut * 18 / 22) / 2);

      }
      ctx.closePath();
      ctx.stroke();

      ctx.restore();
   },
   pattern3: function pattern3(Player) {
      ctx.save();

      ctx.translate(Player.x, Player.y - 5.5 * scale)
      ctx.moveTo(0, 0);
      let tempScale = scale * 0.4 ;
      ctx.bezierCurveTo(0 * tempScale, -4.5 * tempScale, -4.5 * tempScale, -18 * tempScale, -22.5 * tempScale, -18 * tempScale);
      ctx.bezierCurveTo(-49.5 * tempScale, -13.5 * tempScale, -56.5 * tempScale, 31.5 * tempScale, 0 * tempScale, 58.5 * tempScale);
      ctx.bezierCurveTo(56.5 * tempScale, 31.5 * tempScale, 49.5 * tempScale, -13.5 * tempScale, 22.5 * tempScale, -18 * tempScale);
      ctx.bezierCurveTo(5 * tempScale, -18 * tempScale, 0 * tempScale, -4.5 * tempScale, 0 * tempScale, -4.5 * tempScale);
      ctx.stroke();

      ctx.restore();
   },
   pattern4: function pattern4(Player) {
      ctx.save();

      ctx.translate(Player.x, Player.y)
      ctx.lineWidth = Player.lineWidth;
      ctx.moveTo(0, 0);
      ctx.beginPath();
      for (let i = 1; i <= 6; i++) {
         ctx.lineTo(Math.cos((60 * i) / 180 * Math.PI) * (Player.sizeOut * 18 / 22), -Math.sin((60 * i) / 180 * Math.PI) * (Player.sizeOut * 18 / 22));
      }
      ctx.closePath();
      ctx.stroke();

      ctx.restore();
   },
}