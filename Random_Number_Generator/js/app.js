let x,y,z;

let btn = document.getElementById("change")
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let num3 = document.getElementById("num3")

btn.onclick = () =>{
    x = Math.floor(Math.random() * 5) + 2;
    y = Math.floor(Math.random() * 5) + 6;
    z = Math.floor(Math.random() * 5) + 10;

    num1.innerHTML = x;
    num2.innerHTML = y;
    num3.innerHTML = z;
}





