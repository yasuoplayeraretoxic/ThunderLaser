'use strict';
/** @type {HTMLCanvasElement} */ // 宣告作業環境

// 1.開始頁面
// 2.進入玩選單
// 3.進入外觀設定
// 4.遊戲開始
// 5.遊戲結束並且出現選單及再一次
// 6.圖案選擇介面
// 7.顏色選擇介面
// 8.觀看製作人名單
// 9.詢問是否退出遊戲

let modeflag = 1;

function changemode() {
    switch (modeflag) {
        case 1:
            textlist[0].display = true;
            insideborder.display = false;
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;

        default:
            break;
    }
}