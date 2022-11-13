/* 
  
    Spread Operator - bu operator ile tekrarlana bilen 
          obyektleri tek-tek hisselere bole bilerik.

*/


/* 

   Spread Operator - allows an iterable such as an
   array or string to be expanded in places where 
   zero or more arguments are expected (unpacks the elements)

*/


let numbers = [1,2,4,8,9,33,46,75,]

let maxNum = Math.max(...numbers)
console.log(maxNum);


let team1 = ["Barcelona", "Real Madrid", "Xezer-Lenkeran ))", "Dortmund"]
let team2 = ["Manchester City", "Tottenham", "Ajax", "Liverpool"]

team1.push(...team2)
console.log(team1);
console.log(...team1);