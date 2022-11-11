

let count = 0;

let increase = document.getElementById("increase")
let decrease = document.getElementById("decrease")
let reset = document.getElementById("reset")
let spanCount = document.getElementById("count");
let btn = document.querySelectorAll(".btn")

for (let i = 0; i < btn.length; i++) {
     btn[i].onclick = (e) =>{
        let button = e.target.id;
        switch (button) {
            case "increase":
                count++;          
                spanCount.innerHTML = count
                break;
            
            case "decrease" :
                count--;            
                spanCount.innerHTML = count
                break
            default:
               count = 0;
               spanCount.innerHTML = count
                break;

            
        }
     }
}