'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

// pattern1 = 圓形
// pattern2 = 星星
// pattern3 = 愛心
// pattern4 = 六角形
let patternconfig = {
   pattern1: function pattern1(Player) {
      ctx.beginPath();
      ctx.arc(Player.x, Player.y, Player.size_out * 13 / 22, 0, Math.PI * 2);
      ctx.stroke();
      ctx.closePath();
   },
   pattern2: function pattern2(Player) {
      ctx.save();

      ctx.translate(Player.x, Player.y)
      ctx.lineWidth = Player.linewidth;
      ctx.beginPath();
      for (let i = 1; i <= 5; i++) {
         ctx.lineTo(Math.cos((18 + 72 * i) / 180 * Math.PI) * (Player.size_out * 18 / 22), -Math.sin((18 + 72 * i) / 180 * Math.PI) * (Player.size_out * 18 / 22));
         ctx.lineTo(Math.cos((54 + 72 * i) / 180 * Math.PI) * (Player.size_out * 18 / 22) / 2, -Math.sin((54 + 72 * i) / 180 * Math.PI) * (Player.size_out * 18 / 22) / 2);

      }
      ctx.closePath();
      ctx.stroke();

      ctx.restore();
   },
   pattern3: function pattern3(Player) {
      ctx.save();

      ctx.translate(Player.x,Player.y- 6 *scale)
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(0, -5, -5, -20, -25, -20);
      ctx.bezierCurveTo(-55, -15, -63, 35, 0, 65);
      ctx.bezierCurveTo(63, 35, 55, -15, 25, -20);
      ctx.bezierCurveTo(5, -20, 0, -5, 0, -5);
      ctx.stroke();

      ctx.restore();
   },
   pattern4: function pattern4(Player) {
      ctx.save();

      ctx.translate(Player.x, Player.y)
      ctx.lineWidth = Player.linewidth;
      ctx.moveTo(0, 0);
      ctx.beginPath();
      for (let i = 1; i <= 6; i++) {
         ctx.lineTo(Math.cos((60 * i) / 180 * Math.PI) * (Player.size_out * 18 / 22), -Math.sin((60 * i) / 180 * Math.PI) * (Player.size_out * 18 / 22));
      }
      ctx.closePath();
      ctx.stroke();

      ctx.restore();
   },

}