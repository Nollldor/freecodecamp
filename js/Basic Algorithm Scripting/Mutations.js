function mutation(arr) {
    //arrays to sorting lowercase strings
    let secondStr = arr[1].toLowerCase().split("").sort().join("");
    let firstStr = arr[0].toLowerCase().split("").sort().join("");

    //checking every element of second string includes first string
    for (let i = 0; i<secondStr.length; i++){
        if(!firstStr.includes(secondStr[i])){
            return false;
        }
    }

    return  true;
}

mutation(["hello", "hey"]);
