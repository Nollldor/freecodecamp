function repeatStringNumTimes(str, num) {
    //result string
    let result = ""
    //checking num input
    if (typeof num==="number" && num>0){
        for(let i = 0; i<num; i++){
            //adding str to result num times
            result += str;
        }
    }

    return result;
}

repeatStringNumTimes("*", 3);