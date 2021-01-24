'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境
const canvas_touch = document.getElementById('canvas_touch');
const laser_touch = canvas_touch.getContext('2d');
laser_touch.globalCompositeOperation = 'destination-out'; //選擇合成方式
canvas_touch.width = ww;
canvas_touch.height = wh;
laser_touch.fillStyle = 'red';
laser_touch.fillRect(0,0,ww,wh);

class Player { //玩家標點物件
    constructor(args) {
        let def = {
            size_out: 22 * scale, //大圓
            //小圓 = size_out * 13 / 21
            limitmode: 1, //1 內框 2 外框

            x: ww / 2, //初始點為中心
            y: wh / 2, //初始點為中心
            originX: ww / 2, //向量計算 計算原本位置
            originY: wh / 2, //向量計算 計算原本位置

            lightcolor: '#FDE17C', //背景顏色
            darkcolor: '#FEC400', //框線顏色
            linewidth: 2 * scale, //線寬

            left_limit: 28 * scale, //設定左右限制
            top_limit: 28 * scale, //設定上下限制
        }
        Object.assign(def, args);
        Object.assign(this, def);
        this.top_limit_move = this.top_limit + this.size_out + this.linewidth; //設定移動限制範圍
        this.left_limit_move = this.left_limit + this.size_out + this.linewidth; //設定移動限制範圍
    }
    draw(patternmode) { //繪圖動作
        ctx.lineWidth = this.linewidth;

        ctx.fillStyle = this.lightcolor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size_out, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.strokeStyle = this.darkcolor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size_out, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();

        patternmode(this);


        //以目前的座標為圓心繪製玩家的碰撞箱
        laser_touch.fillStyle = 'black';
        laser_touch.beginPath();
        laser_touch.arc(this.x, this.y, this.size_out, 0, Math.PI * 2);
        laser_touch.stroke();
        laser_touch.closePath();
        this.ans = laser_touch.getImageData(this.x - this.size_out, this.y - this.size_out, this.size_out * 2, this.size_out * 2).data.filter((e, i) => e !== 0 && i % 4 === 3).length;
    }
    move() { //修正及移動座標
        if (this.limitmode === 1) {
            this.x = Math.min(Math.max(this.x, this.left_limit_move), ww - this.left_limit_move); //修正X
            this.y = Math.min(Math.max(this.y, this.top_limit_move), wh - this.top_limit_move); //修正Y
        } else {
            this.x = Math.min(Math.max(this.x, 0), ww); //修正X
            this.y = Math.min(Math.max(this.y, 0), wh); //修正Y
        }
    }
    touch() { //碰撞


        //偵測是否有碰撞

        //取得透明度為0的長度

        if (this.ans !== laser_touch.getImageData(this.x - this.size_out, this.y - this.size_out, this.size_out * 2, this.size_out * 2).data.filter((e, i) => e !== 0 && i % 4 === 3).length) {
            init();

        } //是就初始化

    }
}