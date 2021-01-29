function buttonTouch() {
    //碰撞
    let returnflag = 0
    buttonList.forEach(e => {
        if (e.display === true) {
            if (buttonColliDetect(player.x, player.y, e) === e.modeFlag) {
                returnflag = e.modeFlag
            }
        }
    });
    if (returnflag === 0) {//如果Flag有變化就回傳更新後 否則回傳原本的Flag
        return modeFlag
    } else {
        return returnflag
    }
}

function buttonColliDetect(x, y, button) { //線性規劃檢查
    let toplineleftright = ((y - button.t1y) * (button.t1x - button.t2x) - (x - button.t1x) * (button.t1y - button.t2y) > 0 ? 1 : -1);
    let rightlineleftright = ((y - button.t2y) * (button.t2x - button.t3x) - (x - button.t2x) * (button.t2y - button.t3y) > 0 ? 1 : -1);
    let botlineleftright = (-(y - button.t3y) * (button.t3x - button.t4x) + (x - button.t3x) * (button.t3y - button.t4y) > 0 ? 1 : -1);
    let leftlineleftright = (-(y - button.t4y) * (button.t4x - button.t1x) + (x - button.t4x) * (button.t4y - button.t1y) > 0 ? 1 : -1);
    if (toplineleftright * botlineleftright === -1 && rightlineleftright * leftlineleftright === -1) { //如果有碰撞到按鈕回傳Flag
        return button.modeFlag
    }
}