function multiplyBy3Or7(number){
   if(number <= 0){
      console.log("Enter a positive number")
   } else if(number%3==0 || number%7==0){
      console.log("Number is divisible by 3 or 7")
    }
    else{
      console.log("Number is not divisible by 3 or 7")
    }

}

multiplyBy3Or7(-1)