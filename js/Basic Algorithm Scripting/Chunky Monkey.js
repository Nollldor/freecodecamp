function chunkArrayInGroups(arr, size) {
    let resultArr = [];
    let tempArr = [];
    let counter = 0;


    for(let i = 0; i<arr.length; i++){
        //push every elements to tempArr
        tempArr.push(arr[i]);
        //increment counter
        counter++;
        //if counter = size push tempArr to resultArr
        if (counter===size){
            resultArr.push(tempArr);
            //reset tempArr and counter
            tempArr = [];
            counter = 0;
        }
    }

    //if last sub array not full (counter!=0)
    //pushing rest tempArr to resultArr
    if (counter!==0){
        resultArr.push(tempArr);
    }
    return resultArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);