function arrayMostFreq(arr){
    let maxCount =0;
    let maxVAlEle;
    for(let i=0; i<arr.length; i++){
        let count =0;
        for(let j=0; j<arr.length; j++){
            if(arr[i]==arr[j]){
                count++;
            }
            if(count>maxCount){
                maxCount = count;
                maxVAlEle = arr[i];
            }
        }
    }
    return maxVAlEle
}
console.log(arrayMostFreq([1,3,2,3,4,3,6,2,3,8,3,3]));