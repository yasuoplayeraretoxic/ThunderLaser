function laserTouch() {
    //碰撞
    laserList.forEach(e => {
        if (laserColliDetect(player.x, player.y, player.sizeOut, e) === true) { //如果有碰撞則初始化
            init();
        }
    });
}

function laserColliDetect(x, y, r, laser) { //碰撞檢測
    let t1LeftRight = ((y - laser.t1y) * (laser.t1y - laser.t2y) - (x - laser.t1x) * (laser.t2x - laser.t1x) > 0 ? 1 : -1); //偵測t1左右
    let t2LeftRight = ((y - laser.t2y) * (laser.t1y - laser.t2y) - (x - laser.t2x) * (laser.t2x - laser.t1x) > 0 ? 1 : -1); //偵測t2左右
    let lineBetween = t1LeftRight * t2LeftRight === -1; //偵測是否在t1t2之間
    let collision = false;
    if (lineBetween) {
        if (Math.abs((y - laser.t1y) * (laser.t1x - laser.t2x) - (x - laser.t1x) * (laser.t1y - laser.t2y)) / Math.sqrt(Math.pow(laser.t1x - laser.t2x, 2) + Math.pow(laser.t1y - laser.t2y, 2)) <= r) {
            collision = true;
        }
    } else {
        if (Math.sqrt(Math.pow(x - laser.t1x, 2) + Math.pow(y - laser.t1y, 2)) <= r || Math.sqrt(Math.pow(x - laser.t2x, 2) + Math.pow(y - laser.t2y, 2)) <= r) {
            collision = true;
        }
    }
    return collision; //回傳是否碰撞到
}