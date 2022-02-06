function isAllParamsTrue () {
    let arr = [...arguments];
    
    return arr.every( element => element == true )

}