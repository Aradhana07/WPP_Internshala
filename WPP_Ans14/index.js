function evenHalfStr(str){
    if(str.length % 2 == 0 ){
        return str.substring(0, str.length / 2);
    }
    return str;
}
console.log(evenHalfStr("Aradhana"));