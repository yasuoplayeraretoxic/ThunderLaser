function buttonTouch(player, buttonList) {
    //碰撞
    buttonList.forEach(e => {
        if (buttonColliDetect(player.x, player.y, e) === button.modeFlag) {
            return e.modeFlag
        }
    });
}

function buttonColliDetect(x, y, button) {
    let toplineleftright = ((y - button.t1y) * (button.t1x - button.t2x) - (x - button.t1x) * (button.t1y - button.t2y) > 0 ? 1 : -1);
    let rightlineleftright = ((y - button.t2y) * (button.t2x - button.t3x) - (x - button.t2x) * (button.t2y - button.t3y) > 0 ? 1 : -1);
    let botlineleftright = (-(y - button.t3y) * (button.t3x - button.t4x) + (x - button.t3x) * (button.t3y - button.t4y) > 0 ? 1 : -1);
    let leftlineleftright = (-(y - button.t4y) * (button.t4x - button.t1x) + (x - button.t4x) * (button.t4y - button.t1y) > 0 ? 1 : -1);
    if (toplineleftright * botlineleftright === -1 && rightlineleftright * leftlineleftright === -1) {
        console.log(modeFlag);
        return button.modeFlag
    }
    return 'nothing'
}