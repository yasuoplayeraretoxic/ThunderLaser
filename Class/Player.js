'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境
const canvas_touch = document.createElement('canvas');
const laser_touch = canvas_touch.getContext('2d');

class Player { //玩家標點物件
    constructor(args) {
        let def = {
            size_out: 22 * scale, //大圓
            //小圓 = size_out * 13 / 21

            x: ww / 2, //初始點為中心
            y: wh / 2, //初始點為中心
            originX: ww / 2,//向量計算 計算原本位置
            originY: wh / 2,//向量計算 計算原本位置

            lightcolor: '#FDE17C', //背景顏色
            darkcolor: '#FEC400', //框線顏色
            linewidth: 2 * scale, //線寬

            left_limit: 28 * scale, //設定左右限制
            top_limit: 28 * scale, //設定上下限制
        }
        Object.assign(def, args);
        Object.assign(this, def);
    }
    draw(patternmode) { //繪圖動作
        ctx.fillStyle = this.lightcolor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size_out, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.strokeStyle = this.darkcolor;
        ctx.lineWidth = this.linewidth;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size_out, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();

        patternmode(this);

    }
    move() { //修正及移動座標
        let top_limit_move = this.top_limit + this.size_out + this.linewidth; //設定移動限制範圍
        let left_limit_move = this.left_limit + this.size_out + this.linewidth; //設定移動限制範圍
        this.x = Math.min(Math.max(this.x, left_limit_move), ww - left_limit_move); //修正X
        this.y = Math.min(Math.max(this.y, top_limit_move), wh - top_limit_move); //修正Y
    }
    touch() { //碰撞
        canvas_touch.width = this.size_out * 2; //設定碰撞箱寬度
        canvas_touch.height = this.size_out * 2; //設定碰撞箱高度
        //以目前的座標為圓心繪製玩家的碰撞箱
        laser_touch.beginPath();
        laser_touch.arc(this.size_out, this.size_out, this.size_out, 0, Math.PI * 2);
        laser_touch.stroke();
        laser_touch.closePath();

        //偵測是否有碰撞

        //取得透明度為0的長度
        let ans = laser_touch.getImageData(0, 0, canvas_touch.width, canvas_touch.height).data.filter((e, i) => e !== 0 && i % 4 === 3).length;
        laser_touch.globalCompositeOperation = 'destination-out'; //選擇合成方式
        for (let index = 0; index < lasers.length; index++) { //測試雷射陣列中的每一個雷射
            let e = lasers[index]; //取得雷射
            if (Math.sqrt(Math.pow(this.x - e.x - e.hitboxW / 2, 2) + Math.pow(this.y - e.y - e.hitboxH / 2, 2)) <= this.size_out + e.w / 2) {
                //繪製碰撞箱
                laser_touch.translate(e.x - this.x + this.size_out, e.y - this.y + this.size_out); //移動標點
                laser_touch.rotate(e.deg); //轉向
                laser_touch.fillRect(0, 0, e.w, e.h); //繪製碰撞箱

                // 偵測碰撞集
                //如果碰撞了回傳true
                if (ans !== laser_touch.getImageData(0, 0, canvas_touch.width, canvas_touch.height).data.filter((e, i) => e !== 0 && i % 4 === 3).length) {
                    init();
                    break;
                } //是就初始化
            }

        }
    }
}