function nearValue_100(x, y){
   if(x!=y){
      x1 = Math.abs(x-100);
      y1 = Math.abs(y-100);
      if(x1< y1){
         return x;
      }
      if(y1<x1){
         return y;
      }
      return 0;
   } else {
      return false;
   
   }
}

console.log(nearValue_100(90, 89));
console.log(nearValue_100(70, 70))