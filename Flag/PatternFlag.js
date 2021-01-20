'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

// pattern1 = 圓形
// pattern2 = 菱形
// pattern3 = 六角形
// pattern4 = 星型
let patternconfig = {
   pattern1: function pattern1(Player) {
      let size_in = Player.size_out * 13 / 21
      ctx.beginPath();
      ctx.arc(Player.x, Player.y, size_in, 0, Math.PI * 2);
      ctx.stroke();
      ctx.closePath();
   },
   pattern2: function pattern2(Player) {

   },

}