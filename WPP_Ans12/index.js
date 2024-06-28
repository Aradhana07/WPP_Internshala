function reverseStr(str, len){
    if(len == str.length){
        return;
    }
    reverseStr(str, len+1);
    console.log(str[len]);
    
}

reverseStr("welcome", 0);