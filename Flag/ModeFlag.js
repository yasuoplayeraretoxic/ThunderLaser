// 1.開始頁面
// 2.進入玩選單
// 3.進入外觀設定
// 4.遊戲開始
// 5.遊戲結束並且出現選單及再一次
// 6.圖案選擇介面
// 7.顏色選擇介面
// 8.觀看製作人名單
// 9.詢問是否退出遊戲

let modeFlag = 'mode1';

let modeConfig = {
    mode1: function mode1() {
        textList[0].display = false;
        insideBorder.display = true;
        player.limitMode = 1;
    },
    mode2: function mode2() {

    }
}