function bigLaserTimeUpFilter(){
    bigLaserList = bigLaserList.filter(e => {
        if (e.transformTime == e.deleteTime){
            return false;
        }else return true;
    })
}