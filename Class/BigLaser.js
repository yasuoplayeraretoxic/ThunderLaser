class BigLaser { // 雷射類別
    constructor(args) {
       let def = {
          length: 90 * scale, // 長度
          lineWidth: 3 * scale, // 高度
          status:false,//虛實狀態
          transformTime: 100, // 倒數轉換時間
          deleteTime:-25,//消失時間
       }
       Object.assign(def, args);
       Object.assign(this, def);
       Object.assign(this, [{ // 隨機定址
          x: [-this.length, ww + this.length][rand(0, 1)],
          y: rand(-this.length, wh + this.length)
       }, {
          x: rand(-this.length, ww + this.length),
          y: [-this.length, wh + this.length][rand(0, 1)]
       }][rand(0, 1)]);
       this.deg = Math.atan2(player.y - this.y, player.x - this.x); // 透過斜率取得朝向角度
       this.m = (player.y - this.y)/(player.x -this.x)
    }
    draw() { // 繪圖動作
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.deg);
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();
        ctx.lineTo(0, 0);
        if(this.status ==true){//實線狀態
            ctx.lineTo(1000*scale, 0);        
        }
        else{//虛線狀態
            for (let i = 0; i < 50; i++) {
               ctx.lineTo(i*20 *scale, 0);   
               ctx.moveTo(i*20*scale+10*scale,0)
            }
      }
      ctx.strokeStyle = nowColor.darkColor;
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
   }
    update() { // 更新倒數轉換時間
      this.transformTime = this.transformTime -1;
      if (this.transformTime == 0){
         this.status = true;
      }
      }
      colliDetect(x, y, r) { // 碰撞檢測
         if (this.status == true){
            let collision = false;
            if (Math.abs((x-this.x) * this.m - (y - this.y))/(Math.sqrt(Math.pow(this.m,2)+1,2)) <= r) {
                  collision = true;
               }
            if (collision === true) { // 如果碰撞到就初始化並且更改旗標
               modeFlag = 'mode5';
               modeConfig[modeFlag]();
         }
      }
   }
}