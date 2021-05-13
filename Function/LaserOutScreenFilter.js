function laserOutScreenFilter(){
    laserList = laserList.filter(e =>{
        if (e.t1x < -e.length && e.t2x < -e.length || e.t1y < -e.length && e.t2y < -e.length || e.t1x > ww + e.length && e.t2x > ww + e.length || e.t1y > wh + e.length && e.t2y > wh + e.length) {
            return false;
        } else return true;
    })
}