function confirmEnding(str, target) {
    let i;
    let result;
    //data input checking
    target.length<=str.length ? i = 1 : result = false;
    //false if str<target
    if(result===false){return result;}

    //checking symbols from end to begin
    while(target.length-i>=0){
        if(str[str.length-i]===target[target.length-i]){
            i++;
        }else{
            return false;
        }
    }
    //if checking success
    return true;
}

confirmEnding("Bastian", "n");
