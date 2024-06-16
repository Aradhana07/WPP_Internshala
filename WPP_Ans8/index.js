function start_Java(str){
    if(str.length<4){
        return false;
    }
    front = str.substring(0, 4);
    if(front =='Java'){
        return true;
    }else{
        return false;
    }
}
console.log(start_Java("Javascript"));
console.log(start_Java("java"));