
// Istifadecinin daxil etdiyi deyeri nece qebul ede bilerik? ---- How can we accept user input value?;
//window prompt vasitesile ---- with window prompt;

let userName = window.prompt("What is your name");
console.log(userName);

// Istifadeci deyeri qeyd etdikden sonra submit buttonuna bassa nece olacaq?: ---- What will happen if the user clicks the submit button after entering the value?:


let surName;

let btn = document.getElementById("btn"); // document vasitesile html kodlarina cata bilirik ---- We can access html codes by means of document;
let txt = document.getElementById("txt");
let result = document.getElementById("result");
btn.onclick  = function(){
    surName = txt.value;
    result.innerHTML = `Hi ${surName}`
    console.log(surName);
}

