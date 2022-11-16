/* 
   Callback = basqa funksiyaya arqument kimi oturulen funksiyani cagirmaqdir ---- callback = callback a function passed as an  argument to another function;
*/

var num1 = Number(prompt("Enter first number"));
var num2 = Number(prompt("Enter second number"));

var result = sum(num1,num2)


function sum(a,b){
    return a+b
}


function displayConsole(output){
    console.log(output)
}

multiplication(num1, num2)

function multiplication(num1,num2){
    var result = num1*num2
    displayHome(result)
    displayConsole(result)
}

function displayHome(output){
    var lbl = document.getElementById("txt");
    lbl.innerHTML = "Result: " + output;
}









