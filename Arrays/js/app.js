/* 
  array - arraylar ozunde coxlu deyer saxlaya bilen,
     deyiskendir

*/

/* 
   array - think of it as a variable that can store multiple values

*/

let countries = ["Azerbaijan", "Lenkeran :)", "Spain", "England", "France", "USA" ]

countries[0] = "Germany"
console.log(countries);
console.log(countries[0]); // Azerbaijan
console.log(countries[1]); // Lenkeran :)

countries.push("Danimark") // push methodu arrayin sonuna deyer elave edir ---- The push method adds a value to the end of the array;
console.log(countries);

countries.pop() // pop methodu arrayin sonuncu indexinde yerlesen elementi silir ----  pop method deletes the element located at the last index of the array; 
console.log(countries) 

countries.unshift("Turkey") // unsift methodu arrayin ilk indexine deyer elave edir ---- add element to beginning;
console.log(countries)

countries.shift() // shift methodu arrayin ilk indexindeki elementi silir ---- removes element to beginning;
console.log(countries)

let length = countries.length
let index = countries.indexOf("Spain")
console.log(index);