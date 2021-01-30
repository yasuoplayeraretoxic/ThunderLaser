// mode1 = 開始頁面
// mode2 = 進入玩選單
// mode3 = 進入外觀設定
// mode4 = 開始遊戲
// mode5 = 遊戲結束並且出現選單及再一次
// mode6 = 圖案選擇介面
// mode7 = 顏色選擇介面
// mode8 = 觀看製作人名單
// mode9 = 詢問是否退出遊戲

let modeFlag = 'mode7';

let modeConfig = {
    mode1: function mode1() {
        init();
        textList[0].display = true;
        buttonList[0].display = true;

    },
    mode2: function mode2() {
        init();
        buttonList[1].display = true;
        buttonList[2].display = true;
        buttonList[3].display = true;
    },
    mode3: function mode3() {
        init();
        buttonList[1].display = true;
        buttonList[2].display = true;
        buttonList[3].display = true;
    },
    mode4: function mode4() {
        init();
        laserSwitch = true;
        player.limitMode = 'inside';
    },
    mode5: function mode5() {
        init();
        laserSwitch = true;
        player.limitMode = 'inside';
    },

    mode6: function mode6() {
        init();
        laserSwitch = true;
        player.limitMode = 'inside';
    },

    mode7: function mode7() {
        init();
        colorTicketList.forEach(e => e.display = true)
    },
    mode8: function mode8() {
        init();
        colorTicketList.forEach(e => e.display = true)
    },
    mode9: function mode9() {
        init();
        colorTicketList.forEach(e => e.display = true)
    },

}