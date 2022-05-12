function findLongestWordLength(str) {
    let strArr = str.split(" ");
    for (let word of strArr){
        if(word.length > strArr[0].length){
            strArr[0] = word;
        }
    }
    return strArr[0].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");