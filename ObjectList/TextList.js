let textList = [];
let TXT = {
    TLTitle: new Text({
        x: 0 * scale,
        y: -90 * scale,
        text: 'THUNDER LASER',
        fontSize: 35 * scale
    }),
    howToPlay: new Text({
        x: 0 * scale,
        y: -170 * scale,
        text: 'HOW TO PLAY：MOVE YOUR MOUSE AND TRY TO AVOID ALL SHOTS',
        fontSize: 10 * scale
    }),
    chooseMod: new Text({
        x: 0 * scale,
        y: -70 * scale,
        text: 'CHOOSE THE MODE YOU WANT',
        fontSize: 25 * scale
    }),
    choosePattern: new Text({
        x: 0 * scale,
        y: -85 * scale,
        text: 'CHOOSE THE PATTERN\nYOU WANT',
        fontSize: 30 * scale
    }),
    chooseColorComb: new Text({
        x: 0 * scale,
        y: -105 * scale,
        text: 'CHOOSE THE COLOR\nCOMBINATION YOU WANT',
        fontSize: 30 * scale
    }),
    yellow: new Text({
        x: -140 * scale,
        y: -15 * scale,
        text: 'YELLOW',
        fontSize: 21 * scale
    }),
    pink: new Text({
        x: 0 * scale,
        y: -15 * scale,
        text: 'PINK',
        fontSize: 21 * scale
    }),
    blue: new Text({
        x: 140 * scale,
        y: -15 * scale,
        text: 'BLUE',
        fontSize: 21 * scale
    }),
    cyan: new Text({
        x: -140 * scale,
        y: 45 * scale,
        text: 'CYAN',
        fontSize: 21 * scale
    }),
    purple: new Text({
        x: 0 * scale,
        y: 45 * scale,
        text: 'PURPLE',
        fontSize: 21 * scale
    }),
    gray: new Text({
        x: 140 * scale,
        y: 45 * scale,
        text: 'GRAY',
        fontSize: 21 * scale
    }),
    castella: new Text({
        x: 0 * scale,
        y: 105 * scale,
        text: 'CASTELLA',
        fontSize: 21 * scale
    }),
    scoreCounter: new Text({
        x: 70 * scale,
        y: -162.5 * scale,
        text: 'SCORE：0',
        fontSize: 15 * scale,
        show() {
            Object.assign(this, {
                x: 0 * scale,
                y: -15 * scale,
                font: 40 * scale + 'px Virgo'
            })
        },
        unshow() {
            Object.assign(this, {
                x: 70 * scale,
                y: -162.5 * scale,
                font: 15 * scale + 'px Virgo',
            })
        }
    }),
    MVP: new Text({
        x: -70 * scale,
        y: -162.5 * scale,
        text: 'MVP：0',
        fontSize: 15 * scale,
        show() {
            Object.assign(this, {
                x: 0 * scale,
                y: -70 * scale,
                font: 50 * scale + 'px Virgo'
            })
        },
        unshow() {
            Object.assign(this, {
                x: -70 * scale,
                y: -162.5 * scale,
                font: 15 * scale + 'px Virgo',
            })
        }
    }),
    easterEgg: new Text({
        x: 0 * scale,
        y: -170 * scale,
        text: 'ji3vu3cj0 su3 xji6m/3vm0',
        fontSize: 10 * scale
    }),
    quitGame: new Text({
        x: 0 * scale,
        y: -10 * scale,
        text: 'ARE YOU SURE TO\nQUIT THE GAME',
        fontSize: 30 * scale
    }),
    producer: new Text({
        x: 0 * scale,
        y: -120 * scale,
        text: 'CODE\n\nBEENYAN\nJTT.YANG\n\nART\n\nY.DOOOG\nJTT.YANG',
        fontSize: 30 * scale
    }),
    difficulty: new Text({
        x: 0 * scale,
        y: 166 * scale,
        text: 'difficulty：',
        fontSize: 15 * scale
    }),
}