


/* 
   setinterval() = bir neçə millisaniyəlik asinxron funksiyadan 
   sonra funksiyanı təkrar-təkrar çağırır
*/


/* 
   setInterval() = invokes a function repeatedly after a number 
   of  milliseconds asynchronous function
*/


let count = 0
let max = window.prompt("Count up to what #?")
max = Number(max)

let timer = setInterval(countUp,  1000)

function countUp(){
   count++
   console.log(count);
   if(count >= max){
      clearInterval(timer)
   }
}