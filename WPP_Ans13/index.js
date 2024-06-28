const vowels = ["a", "e", "i", "o", "u"];

function countVowels(str){
   let count = 0;

   for(let letter of str.toLowerCase()){
      if(vowels.includes(letter)){
         count++;
      }
   }
   return count;
}

const result = countVowels("Javascript");
console.log(result);