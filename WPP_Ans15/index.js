function sum_three_element(arr){
   sum = 0;
   if(arr.length !== 3){
      return "Enter the three element only";
   }
      for(let i=0; i<3; i++){
       sum+= arr[i];
      }
      console.log(sum);
   }
   sum_three_element([10,20,30]);

  