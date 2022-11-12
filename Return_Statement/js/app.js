
// return - funksiyani cagirdigimiz yere deyeri geri donderir ---- returns a value back to the place where you invoked a function;


let area, width, height;

width = prompt("Enter width")
height = prompt("Enter height")

function getArea(width, height){
    let result = width * height;
    return result
}

area = getArea(width, height)

console.log(area);