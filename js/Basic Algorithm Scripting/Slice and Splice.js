function frankenSplice(arr1, arr2, n) {
    //copy arr2 to resultArr
    let resultArr = [...arr2];
    //insert arr1 to arr2 on n-index position
    resultArr.splice(n,0, ...arr1);


    return resultArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
