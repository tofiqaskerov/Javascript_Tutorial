

// Math - Əsas riyaziyyat funksionallığı və sabitləri təmin edən daxili obyektdir ---- An intrinsic object that provides basic mathematics functionality and constants;

let num = 100.6;
let num1 = 4.78;
let num2 = 8.4;
let num3 = 11;
let num4 = 1000;
let num5 = -195;
let max;
let min;
let pi;

max = Math.max(num1, num3, num5) // Max methodu en yuksek ededi tapib geri qaytarir ---- The max method finds the highest value and returns it;
min = Math.min(num1, num3, num5) // Min methodu en kicik ededi tapib geri qaytarir ---- Min method finds the smallest one and returns it;
num = Math.round(num) // Round methodu ededi en yaxin tam hisseye qeder yuvarlaqlasdirir ---- The Round method rounds to the nearest integer;
num1 = Math.floor(num1) // Floor methodu ededi asagi yuvarlaqlasdirir ----  The floor method makes the bottom round
num2 = Math.ceil(num2) // Ceil Methodu ededi yuxari yuvarlaqlasdirir ----  Gail Method rounds up;
num3 = Math.pow(num3, 2) // Pow Methodu ededi quvvete yukseldir. 1-ci parametr deyeri qebul edir, 2 ci parametrde quvvet teyin olunur ----  The power of the Pow Method is high. The 1st parameter accepts the value, the 2nd parameter specifies the power
num4 = Math.sqrt(num4) // Sqrt methodu ededin kvadrat kokunu qaytarir ---- The sqrt method returns the square root of a number;
num5 = Math.abs(num5) // Abs methodu ededin modulunu qaytarir ---- Abs method returns the modulus of a number;
pi = Math.PI; // Pi sayisini teyin edir ---- Determines the number pi;

console.log(num);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(max);
console.log(min);
console.log(pi);

