

//nested loop - dovrun icerisinde dovr demekdir ---- a loop inside of another loop



let row = prompt("Enter rows number")
let column = prompt("Enter columns number")
const rectangle = document.getElementById("rectangle")

for (let i = 1; i <=row; i++) {
    for (let j = 0; j <=column; j++) {
        rectangle.innerHTML += j
    }
    rectangle.innerHTML += "<br>" 
}
