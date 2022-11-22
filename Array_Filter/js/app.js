

/* 
   array.filter() = funksiyanın teyin etdiyi sertden 
   keçən bütün elementlər olan yeni array yaradır
*/

/* 
   array.filter() = creates a new array with
    all elements that pass the test provided by a function
*/



let ages = [20,50,30,41,15]
let adults = ages.filter(checkAge);
adults.forEach(e => {
   console.log(e);
});
function checkAge(e){
   return e > 30
}

