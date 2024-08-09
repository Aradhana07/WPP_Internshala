function alphashift(str){
    let newStr =[];
    for(let i=0; i<str.length; i++){
        newStr.push(String.fromCharCode(str[i].charCodeAt()+1));
    }
    let ans = newStr.join("").replace(/{/g, 'a');
    return ans;
}
console.log(alphashift("aradhana"));