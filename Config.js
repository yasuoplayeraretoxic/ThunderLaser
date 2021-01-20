'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境
const canvas = document.getElementById('canvas'); // 取得畫布
const ctx = canvas.getContext('2d'); // 宣告2D畫布

//單位設定
let scale = window.innerHeight / 360; //設定單位
let ww = 480 * scale; //設定著色區寬度
let wh = 360 * scale; //設定著色區高度
let deviation = (window.innerWidth - ww) / 2 //偏移置中
canvas.width = window.innerWidth; //設定畫布寬度
canvas.height = window.innerHeight; //設定畫布高度
ctx.translate(deviation, 0); //畫布偏移
ctx.fillRect(0, 0, ww, wh); //設定繪圖區域
ctx.globalCompositeOperation = 'source-atop'; //設定圖片合成效果

let lasers = []; //雷射陣列 儲存雷射
let texts = []; //字元陣列 儲存要顯示的字
let time = 0; //時間紀錄器

//物件參數設定
let colorflag = 'color1'; // 顏色設定
let patternflag = 'pattern1'; //玩家圖標選擇設定
let modeflag = 2; // 初始進入頁面
let laser_speed = 6.5; //雷射移動速度
let laser_frequence = 25; //未完成  雷射頻率
let laser_long = 90; //雷射長度
let player_sizeout = 22; //玩家大圓框半徑及碰撞箱
