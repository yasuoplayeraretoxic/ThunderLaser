// mode1 = 開始頁面
// mode2 = 進入玩選單
// mode3 = 進入外觀設定
// mode4 = 開始遊戲
// mode5 = 遊戲結束並且出現選單及再一次
// mode6 = 圖案選擇介面
// mode7 = 顏色選擇介面
// mode8 = 觀看製作人名單
// mode9 = 詢問是否退出遊戲

let modeConfig = {
    mode1: function mode1() {
        init();
        textList[0].display = true;
        buttonList[0].display = true;
        buttonList[1].display = true;
        buttonList[2].display = true;
    },
    mode2: function mode2() {
        init();
        textList[1].display = true;
        textList[7].display = true;
        buttonList[3].display = true;
        buttonList[4].display = true;
        buttonList[5].display = true;
    },
    mode3: function mode3() {
        init();
        buttonList[6].display = true;
        buttonList[7].display = true;
    },
    mode4: function mode4() {
        init();
        textList[19].x= 0 * scale;
        textList[19].y= -162.5 * scale;
        textList[19].font = 15 * scale + 'px Virgo';
        textList[19].display = true;
        insideBorder.display = true;
        laserSwitch = true;
        player.limitMode = 'inside';
    },
    mode5: function mode5() {
        init();
        textList[19].y = -15 * scale;
        textList[19].font = 40 * scale + 'px Virgo';
        textList[19].display = true;
        buttonList[12].display = true;
        buttonList[13].display = true;
    },
    mode6: function mode6() {
        init();
        textList[8].display = true;
        textList[9].display = true;
        buttonList[8].display = true;
        buttonList[9].display = true;
        buttonList[10].display = true;
        buttonList[11].display = true;
    },
    mode7: function mode7() {
        init();
        for (let i = 10; i <= 18; i++) {
            textList[i].display = true
        }
        colorTicketList.forEach(e => e.display = true)
    },
    mode8: function mode8() {
        init();

    },
    mode9: function mode9() {
        init();

    },

}