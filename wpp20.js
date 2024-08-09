function reverse_of_binary(n){
    let bin = n.toString(2).split("");
    let length = bin.length;
    for(let i=0; i<8-length; i++){
        bin.unshift("0");
    }
    return parseInt(bin.reverse().join(""), 2);
}
console.log(reverse_of_binary(14));