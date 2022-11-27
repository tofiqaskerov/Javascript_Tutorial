/* 
   setTimeout() = bir neçə millisaniyəlik asinxron
   funksiyadan sonra funksiyanı ise salir 
*/


/* 
   setTimeout() = invokes a function after a
    number of milliseconds asynchronous function
*/


let userName = window.prompt("Enter your name:")
let age = window.prompt("Enter your age:")

setTimeout(messageDemo, 3000, userName, age)

function messageDemo(value, age) {
   alert(`Welcome: ${value} 
Your age : ${age}  `)
}


let time1 = setTimeout(message, 3000)
let time2 = setTimeout(message1, 6000)
let time3 = setTimeout(message2, 9000)





function message() {
   alert("Hi my name is Tofiq")
   console.log("Tofiq");

}

function message1() {
   alert("Hi my name is Sakina")
   console.log("Sakina");
}

function message2() {
   alert("Hi my name is Ruslan")
   console.log("Ruslan");
}

let btn = document.getElementById("btn")
btn.onclick = _ => {


   clearTimeout(time1)
   clearTimeout(time2)
   clearTimeout(time3)
   alert("Hi")

}