// const - deyiskenin deyeri sonradan deyisile bilmir ---- const- the value of the variable cannot be changed later;

const pi = 3.14159;
let radius;
let circumference;


radius = window.prompt("Enter the radius of a circle")
radius = Number(radius); // radius deyiskeninin deyeri ilk defe burada teyin olunub. ----  the value of the radius variable is set here for the first time.

pi = 4 // Ilk olaraq type erroru verecek. bunun sebebi yuxarida pi-ni const olaraq teyin elemisik. const tipinde teyin olun deyiskenler sonradan deyisdirile bilmir ----  First, it will give a type error. This is because above we chose to set pi as const. Variables set to const type cannot be changed later;


circumference = 2 * pi * radius;

console.log(circumference);





