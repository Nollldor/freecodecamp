function getIndexToIns(arr, num) {
    //sorting arr
    arr.sort((a,b)=> a-b);
    //find first index that needed
    for(let i=0; i<arr.length; i++){
        if(arr[i]>=num){

            return i;
        }
    }

    //if all elements of arr < num
    //then num in last position after all arr
    return arr.length;
}

getIndexToIns([40, 60], 50);