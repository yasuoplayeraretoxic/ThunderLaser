let buttonList = []

buttonList.push(
    play = new Button(Object.assign({}, colorConfig[colorFlag], {
        display: true,
        text: 'PLAY',
        chageFlag: 'mode',
        modeFlag: 'mode2',
        fontSize: 30 * scale
    })),
    easy = new Button(Object.assign({}, colorConfig[colorFlag], {
        display: true,
        text: 'EASY',
        chageFlag: 'mode',
        modeFlag: 'mode4',
        fontSize: 30 * scale,
        x: -10,
        y: -10
    })),
    normal = new Button(Object.assign({}, colorConfig[colorFlag], {
        display: true,
        text: 'NORMAL',
        chageFlag: 'mode',
        modeFlag: 'mode4',
        fontSize: 30 * scale,
        x: -10,
        y: -10
    })),
    difficult = new Button(Object.assign({}, colorConfig[colorFlag], {
        display: true,
        text: 'DIFFICULT',
        chageFlag: 'mode',
        modeFlag: 'mode4',
        fontSize: 30 * scale,
        x: -10,
        y: -10
    })),
)