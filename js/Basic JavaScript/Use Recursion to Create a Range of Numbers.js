function rangeOfNumbers(startNum, endNum) {
    if(startNum>endNum){
        return [];
    }else if(startNum===endNum){
        return [startNum];
    }else{
        let rangeArray = rangeOfNumbers(startNum+1,endNum);
        rangeArray.unshift(startNum);
        return rangeArray;
    }
};
