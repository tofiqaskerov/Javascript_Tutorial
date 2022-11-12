

// variable scope - deyisenin el catan olmasini bildirir ---- where a variable is accessible;

//let - block scopelerden kenarda cagirmaq olmur {} ---- variables are limited to block scope;
//var - deyiskenler funksiyalarda mehdudlasir (){} ---- variables are limited to a function;

// global varible - qlobal deyisken istenilen funksiyadan kenarda teyin oluna biler ---- global variable is declared outside any function; 

for (let i = 0; i < 10; i++) { // i deyiskeni for-dan colde cagirila bilmez ----   The i clause cannot be called outside of for 
     console.log(i);
      
}


for (var i = 0; i < 20; i++) { // var qlobal deyiskendir. block scopeler ona tesir etmir
}
console.log(i);      


function something(){
      for (var j = 0; j < 40; j++) { 
            console.log(j);
      }
}


something()

console.log(j); // reference error verecek. sebebi function-dan colde cagirmisiq
