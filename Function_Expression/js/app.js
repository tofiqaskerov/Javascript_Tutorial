/* 
   function expression = adsiz funksiyalar adlanir.yeniki bilinmeyen funksiyalar.Deyiskene beraber olunur.
   ve lazim olanda istifade olunur. hemcinin anonim function yaratdiqda deyiskenin adini funksiyadan sonra cagirmaq lazimdir
   Cunki js-de kod sirasina gore oxunur
*/


/* 
   function expression = function without a name (anonymous function) 
   avoid polluting the global scope with names write it, then forget about it
*/

const greeting = function () {
    console.log("Hello world");
}
greeting()

const result = function(){
    console.log(56);
}

result1()
function result1() {
    console.log("result1");
}

var increase = document.getElementById("increase")
var decrease = document.getElementById("decrease")
var txt = document.getElementById("txt");
let count = 0;

increase.onclick = function(){
    count++
    txt.innerHTML = count
}

decrease.onclick = function(){
    count--
    txt.innerHTML = count
}

// function increaseCount(){
//     count++
//     txt.innerHTML = count
// }

// function decreaseCount(){
//     count--
//     txt.innerHTML = count
// }