function remove_duplicate_char(str) {
   
    var arr_char = str.split("");
    var result = [];
  
    for (var i = 0; i < arr_char.length; i++) {
    
      if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
        result.push(arr_char[i]);
    }
    return result.join("");
  }
  
  console.log(remove_duplicate_char("abcdabc"));