// 玩家可自訂之參數
let laserSpeed = 0; //雷射移動速度
let laserFrequence = 0; // 雷射頻率
let bigLaserFrequence = 0; //大雷射頻率
let laserLength = 120; // 雷射長度
let playerR = 22; // 玩家大圓半徑

let modeFlag = 'mode1'; // 模式旗標
let patternFlag = localStorage.getItem('patternFlag') ? localStorage.getItem('patternFlag') : 'round'; // 玩家圖標參數

// 紀錄器及開關
let laserList = []; // 雷射陣列 儲存雷射
let bigLaserList = []// 大雷射陣列 儲存雷射
let modeStack = ['mode9'] // 模式旗標堆疊
let laserTime = 0; // 小雷射時間紀錄器
let bigLaserTime=0;//大雷射時間記錄器
let scoreCount = 0; // 分數紀錄器
let nowColor = colorConfig[localStorage.getItem('colorFlag') ? localStorage.getItem('colorFlag') : 'blue']; // 顏色紀錄器
let difficulty = ''; //難度紀錄器

// 聲音
let BGM = new Audio('Audio/BGM.mp3'); // 背景音樂
BGM.loop = true; //開啟循環
BGM.volume = 0.3; //音量調整

let shootSoundEffect = new Audio('Audio/ThunderLaser.ogg'); // 發出雷射
let clickButtonSoundEffect = new Audio('Audio/TouchButton.ogg'); // 玩家覆蓋按鈕
shootSoundEffect.volume = 0; //音量調整
clickButtonSoundEffect.volume = 0.6; //音量調整