function buttonTouch() {
    //碰撞
    buttonList.forEach(e => {
        if (e.display === true) {
            e.ColliDetect(player.x, player.y)
        }
    });
}