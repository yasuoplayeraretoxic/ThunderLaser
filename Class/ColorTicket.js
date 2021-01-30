/** @type {HTMLCanvasElement} */ // 宣告作業環境

class ColorTicket { //背景類別
    constructor(args) {
        let def = {
            display: false,
            x: 0,
            y: 0,
            r: 15 * scale,
            colorFlag: 'color1'
        }
        Object.assign(def, args);
        Object.assign(this, def);
    }
    draw() { //繪圖動作
        console.log(this.display);
        if (this.display === true) {
            ctx.save();

            ctx.fillStyle = colorConfig[this.colorFlag].lightColor;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, Math.PI * 1.5, Math.PI * 0.5)
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = colorConfig[this.colorFlag].darkColor;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, Math.PI * 0.5, Math.PI * 1.5)
            ctx.closePath();
            ctx.fill();

            ctx.restore();
        }
    }
    ColliDetect(x, y) { //線性規劃檢查
        if (this.display === true) {
            if (Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2)) < this.r) {
                nowColor = colorConfig[this.colorFlag];
            }
        }
    }
}