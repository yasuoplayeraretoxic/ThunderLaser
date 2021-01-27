'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

class Player { //玩家標點物件
    constructor(args) {
        let def = {
            sizeOut: 22 * scale, //大圓
            //小圓 = size_out * 13 / 21
            limitMode: 1, //1 內框 2 外框

            x: ww / 2, //初始點為中心
            y: wh / 2, //初始點為中心
            originX: ww / 2, //向量計算 計算原本位置
            originY: wh / 2, //向量計算 計算原本位置

            lightColor: '#FDE17C', //背景顏色
            darkColor: '#FEC400', //框線顏色
            lineWidth: 2 * scale, //線寬

            leftLimit: 28 * scale, //設定左右限制
            topLimit: 28 * scale, //設定上下限制
        }
        Object.assign(def, args);
        Object.assign(this, def);
        this.topLimitMove = this.topLimit + this.sizeOut + this.lineWidth; //設定移動限制範圍
        this.leftLimitMove = this.leftLimit + this.sizeOut + this.lineWidth; //設定移動限制範圍
    }
    draw(patternMode) { //繪圖動作
        ctx.lineWidth = this.lineWidth;

        ctx.fillStyle = this.lightColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.sizeOut, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.strokeStyle = this.darkColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.sizeOut, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();

        patternMode(this);
    }
    move() { //修正及移動座標
        if (this.limitMode === 1) {
            this.x = Math.min(Math.max(this.x, this.leftMimitMove), ww - this.leftLimitMove); //修正X
            this.y = Math.min(Math.max(this.y, this.topLimitMove), wh - this.topLimitMove); //修正Y
        } else {
            this.x = Math.min(Math.max(this.x, 0), ww); //修正X
            this.y = Math.min(Math.max(this.y, 0), wh); //修正Y
        }
    }
    touch() { //碰撞
        lasers.forEach(e => {
            if (e.colliDetect(this.x, this.y, this.size_out) === true) {
                init();
            }
        });
    }
}