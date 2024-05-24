function remove_Char(str, pos){
   part1 = str.substring(0, pos);
   part2 = str.substring(pos+1, str.length);
   return (part1 + part2);
}

console.log(remove_Char("java", 2));
Console.log(remove_Char("Rust", 0));