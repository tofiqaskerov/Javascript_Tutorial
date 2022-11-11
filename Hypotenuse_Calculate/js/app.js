

let a,b,c;

// a = prompt("Enter A Side")
// a = Number(a);
// b = prompt("Enter B Side")
// b = Number(b)
// c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
// console.log(c);

result = document.getElementById("resultc");
let btn = document.getElementById("btn");
btn.onclick = () =>{
    
    a = document.getElementById("txta").value
    b = document.getElementById("txtb").value
    a = Number(a)
    b = Number(b)
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b,2));
    console.log(c);
    result.innerHTML = "C side " + c
}


