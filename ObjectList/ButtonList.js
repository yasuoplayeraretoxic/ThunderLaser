let buttonList = [] //按鈕陣列

buttonList.push(
    play = new Button({ //0
        text: 'PLAY',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: -10 * scale,
        instruction: function () {
            modeFlag = 'mode2';
            modeConfig[modeFlag]();
        }
    }),
    appearanceSetting = new Button({ //1
        text: 'APPEARANCE SETTING',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 50 * scale,
        instruction: function () {
            modeFlag = 'mode3';
            modeConfig[modeFlag]();
        }
    }),
    producerList = new Button({ //2
        text: 'PRODUCER LIST',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 110 * scale,
        instruction: function () {
            modeFlag = 'mode8';
            modeConfig[modeFlag]();
        }
    }),
    easy = new Button({ //3
        text: 'EASY',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 10 * scale,
        instruction: function () {
            modeFlag = 'mode4';
            modeConfig[modeFlag]();
            laserSpeed = 1.6;
            laserFrequence = 160
        }
    }),
    normal = new Button({ //4
        text: 'NORMAL',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 60 * scale,
        instruction: function () {
            modeFlag = 'mode4';
            modeConfig[modeFlag]();
            laserSpeed = 1.8;
            laserFrequence = 145
        }
    }),
    difficult = new Button({ //5
        text: 'DIFFICULT',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 110 * scale,
        instruction: function () {
            modeFlag = 'mode4';
            modeConfig[modeFlag]();
            laserSpeed = 2.2;
            laserFrequence = 130
        }
    }),
    colorSetting = new Button({ //6
        text: 'COLOR SETTING',
        fontSize: 30 * scale,
        x: 0 * scale,
        y: -20 * scale,
        instruction: function () {
            modeFlag = 'mode7';
            modeConfig[modeFlag]();
        }
    }),
    patternSetting = new Button({ //7
        text: 'PATTERN SETTING',
        fontSize: 30 * scale,
        x: 0 * scale,
        y: 50 * scale,
        instruction: function () {
            modeFlag = 'mode6';
            modeConfig[modeFlag]();
        }
    }),
    round = new Button({ //8
        text: 'ROUND',
        fontSize: 21 * scale,
        x: -80 * scale,
        y: 35 * scale,
        instruction: function () {
            patternFlag = 'round'
        }
    }),
    heart = new Button({ //9
        text: 'HEART',
        fontSize: 21 * scale,
        x: -80 * scale,
        y: 95 * scale,
        instruction: function () {
            patternFlag = 'heart'
        }
    }),
    star = new Button({ //10
        text: 'STAR',
        fontSize: 21 * scale,
        x: 80 * scale,
        y: 35 * scale,
        instruction: function () {
            patternFlag = 'star'
        }
    }),
    hexagon = new Button({ //11
        text: 'HEXAGON',
        fontSize: 21 * scale,
        x: 80 * scale,
        y: 95 * scale,
        instruction: function () {
            patternFlag = 'hexagon'
        }
    }),
    menu = new Button({ //12
        text: 'MENU',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 105 * scale,
        instruction: function () {
            modeFlag = 'mode1';
            modeConfig[modeFlag]();
        }
    }),
    again = new Button({ //13
        text: 'AGAIN',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 65 * scale,
        instruction: function () {
            modeFlag = 'mode4';
            modeConfig[modeFlag]();
        }
    }),
    yes = new Button({ //14
        text: 'YES',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 25 * scale,
        instruction: function () {
            modeFlag = 'mode4';
            modeConfig[modeFlag]();
        }
    }),
    no = new Button({ //15
        text: 'NO',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 25 * scale,
        instruction: function () {
            modeFlag = 'mode1';
            modeConfig[modeFlag]();
        }
    }),
    exit = new Button({ //16
        text: 'EXIT',
        fontSize: 21 * scale,
        x: 0 * scale,
        y: 25 * scale,
        instruction: function () {
            modeFlag = 'mode4';
            modeConfig[modeFlag]();
        }
    }),

)