function array_max_adj(arr){
    let max = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            let diff = Math.abs(arr[i]-arr[j]);
            max = Math.max(max, diff);
        }
    }
    return max;
}
console.log(array_max_adj([1,2,3,8,9]));
console.log(array_max_adj([1,2,3,18,9]));