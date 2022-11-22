/* 
   array.reduce() = method funksiyanin tek deyerini qaytarir
*/


/* 
  array.reduce() =  reduces an array to a single value
*/

let prices = [5, 50, 24, 64, 55]

let total = prices.reduce((total, e) => {
   console.log(total);
   return total += e
}, 0)
console.log(total);