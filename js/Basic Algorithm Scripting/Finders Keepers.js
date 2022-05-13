function findElement(arr, func) {
    //create filtered array
    let filteredArr = arr.filter(func);
    //return first element if filteredArr not empty else undefined
    return filteredArr.length>0 ? filteredArr[0] : undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);