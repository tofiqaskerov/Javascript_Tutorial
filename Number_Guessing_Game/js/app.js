
const answer = Math.floor(Math.random() * 50 + 1)
let guesses = 0;

const btn = document.getElementById("submitBtn");
const txt = document.getElementById("txt");
btn.onclick = ()=>{
    let guess = txt.value
    guesses++  
    if(guess == answer){
        alert(`${answer} is the. It took  you ${guesses} guesses`)
    }
    else if( guess < answer){
        alert("small !!")
    }
    else{
        alert("large !!")
    }
        
}
