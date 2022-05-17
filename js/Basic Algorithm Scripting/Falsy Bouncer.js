function bouncer(arr) {
    //if value not false, null, 0, "", undefined, and NaN.
    return arr.filter(n => {
        if(Boolean(n)){
            return n;
        }
    });
}

bouncer([7, "ate", "", false, 9]);
