function titleCase(str) {
    //string to array
    let arrStr = str.split(" ");
    let resultStr = [];


    arrStr.forEach(word => {
        //word string to array
        let upperWord = word.toLowerCase().split("");
        //every first symbol to uppercase
        upperWord[0] = word[0].toUpperCase();
        //add word to new  result array
        resultStr.push(upperWord.join(""));
        resultStr.push(" ");
    });

    resultStr.pop();
    return resultStr.join("");
}

console.log(titleCase("I'm a little tea pot")==="I'm A Little Tea Pot");
console.log(titleCase("sHoRt AnD sToUt")==="Short And Stout");
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")==="Here Is My Handle Here Is My Spout");
