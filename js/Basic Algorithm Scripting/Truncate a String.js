function truncateString(str, num) {

    //checking num
    if(str.length>num){
        //get first num symbols from str
        let result = str.split("").slice(0,num).join("");
        return result+"...";
    }else {
        return str;
    }

}

truncateString("A-tisket a-tasket A green and yellow basket", 8);