function lowerCase(str){
   if(str.length < 3){
      return str.toUpperCase();
   }

   front_str = (str.substring(0, 3)).toLowerCase();
   back_str = str.substring(3,str.length);
   return front_str +  back_str;
}



console.log(lowerCase('JAvaScript'));
console.log(lowerCase('python'));