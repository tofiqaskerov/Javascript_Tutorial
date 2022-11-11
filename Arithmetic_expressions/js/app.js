/* 
   Arixmetik expressionlar...
      operands - values, variables ve.s
      operators - (+ - * / %)
      hansiki deyerleri qiymetlendirmek olur.
      meselen : y = x + 5;
   birlesmesidir.
*/



/* 
   Arithmetic exporessions is a combination of ...
   operands (values, variables, etc.)
   operators (+ - * / %)
   that can be evaluated to a value
   example: y = x + 5
*/




let teachers = 40;
teachers += 1;

//teachers = teachers + 1; 

let students = 2000;
students -= 100;

//students = students - 100;

let security = 5;
security *= 2

// security = security * 2;

let worker = 4;
worker /= 2;

// worker = worker / 2

let extraStudents = students % 3; // --> % qaliqi gosterir

console.log(teachers);
console.log(students);
console.log(security);
console.log(worker);
console.log(extraStudents);



/* 
    operatorun ozellikleri
    1. moterize ()
    2. eksponentlər
    3.vurma & bolme
    4 toplama & cixma
*/

/* 
    operator precedence
    1. parenthesis ()
    2. exponents
    3.multiplication & division
    4 addition & subtraction
*/


let result = 1 + 5 * (10 + 6); // riyazi emmeller ardicilligi yerine yetirilir ---- the mathematical sequence is fulfilled
console.log(result);


