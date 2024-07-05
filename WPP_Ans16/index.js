function swapFirstLast(arr){
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]; 
    return arr;

}


// Using JavaScipt method;
let first = arr[0];
arr.splice(0,1,arr[arr.length-1]);
arr.splice(arr.legth-1, 1, first);
return arr;

console.log(swapFirstLast[1,2,3]);
  