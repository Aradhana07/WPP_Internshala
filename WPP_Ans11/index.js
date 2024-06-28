function number_order(x, y, z){
   if(y>x && z>y){
      return "strict mode";
   }else if(z>y && z>x){
      return "soft mode";
   }else{
      return "Undefined";
   }
}

console.log(number_order(10, 15, 31));
console.log(number_order(22, 22, 31));
console.log(number_order(50, 21, 15));