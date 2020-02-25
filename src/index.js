
exports.min = function min (array) {
    
    if (array === undefined || array.length === 0) {
        return 0;
    }else{
        array=array.sort((a,b)=>a-b);
        return array[0];
    }

}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        array = array.sort((a, b) => a - b);
        return array[array.length - 1];
    }
}

exports.avg = function avg (array) {

    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let avg;
        avg = (array.reduce((sum, current) => sum + current, 0));
        avg=avg/array.length;
        return avg;
    }
  
}
