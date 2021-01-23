'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境
const canvas = document.getElementById('canvas'); // 取得畫布
const ctx = canvas.getContext('2d'); // 宣告2D畫布

//單位設定
const scale = window.innerHeight / 360; //設定單位
const ww = 480 * scale; //設定著色區寬度
const wh = 360 * scale; //設定著色區高度
const deviation = (window.innerWidth - ww) / 2 //偏移置中
canvas.width = window.innerWidth; //設定畫布寬度
canvas.height = window.innerHeight; //設定畫布高度
ctx.translate(deviation, 0); //畫布偏移
ctx.fillRect(0, 0, ww, wh); //設定繪圖區域
ctx.globalCompositeOperation = 'source-atop'; //設定圖片合成效果
ctx.textBaseline = 'top' //設定文字呈現方式

let lasers = []; //雷射陣列 儲存雷射
let texts = []; //字元陣列 儲存要顯示的字
let time = 0; //時間紀錄器

//物件參數設定
let laser_speed = 6.5; //雷射移動速度
let laser_frequence = 25; //未完成 雷射頻率
let laser_long = 90; //雷射長度
let player_sizeout = 22; //玩家大圓框半徑及碰撞箱